---
title: "Checking for updates"
description: "Describes how titles should check for updates."
kindex: Checking for updates
author: joannaleecy
ms.author: timch
ms.topic: article
edited: '03/23/2026'
ms.date: '08/01/2022'
permissioned-type: public
---

# Checking for updates

The title can check for and apply updates if it's critical for the game to be up to date.
This condition is often important when the game involves multiplayer features where it's crucial for all players running the game to have the same functionality.

The title can check for updates by using [XStoreQueryGameAndDlcPackageUpdatesAsync](../../../reference/system/xstore/functions/xstorequerygameanddlcpackageupdatesasync.md), as shown in the following example code:

```cpp
void CALLBACK QueryGameAndDlcPackageUpdatesCallback(XAsyncBlock* async)
{
    unsigned int numUpdates = 0;

    HRESULT hr = XStoreQueryGameAndDlcPackageUpdatesResultCount(async, &numUpdates);

    if (SUCCEEDED(hr))
    {
        if (numUpdates > 0)
        {
            std::vector<XStorePackageUpdate> packages(numUpdates);

            hr = XStoreQueryGameAndDlcPackageUpdatesResult(async, numUpdates, packages.data());

            if (SUCCEEDED(hr))
            {
                for (auto &package : packages)
                {
                    printf("Update available %s\n", package.packageIdentifier);
                }
            }
        }
        else
        {
            printf("No updates are available\n");
        }
    }

    delete async;
}

void CheckForUpdates()
{
    auto asyncBlock = new XAsyncBlock{};
    asyncBlock->queue = m_asyncQueue;
    asyncBlock->callback = QueryGameAndDlcPackageUpdatesCallback;

    if (FAILED(XStoreQueryGameAndDlcPackageUpdatesAsync(m_xStoreContext, asyncBlock)))
    {
        delete asyncBlock;
    }
}
```

If a title includes many DLC items that don’t require update checks—for example, empty DLC packages used only for licensing—the preceding code can introduce unnecessary overhead by checking each one.

Instead, use [XStoreQueryPackageUpdatesAsync](../../../reference/system/xstore/functions/xstorequerypackageupdatesasync.md), filtering on the current game's package ID obtained by using [XPackageGetCurrentProcessPackageIdentifier](../../../reference/system/xpackage/functions/xpackagegetcurrentprocesspackageidentifier.md) or filtering the package IDs returned from [XPackageEnumeratePackages](../../../reference/system/xpackage/functions/xpackageenumeratepackages.md):

```cpp
void CALLBACK QueryPackageUpdatesCallback(XAsyncBlock* async)
{
    unsigned int numUpdates = 0;

    HRESULT hr = XStoreQueryPackageUpdatesResultCount(async, &numUpdates);

    if (FAILED(hr))
    {
        printf("XStoreQueryPackageUpdatesResultCount failed : 0x%x\n", hr);
        return;
    }

    printf("Number of updates: %d", numUpdates);

    if (count > 0)
    {
        std::vector<XStorePackageUpdate> packages(numUpdates);

        hr = XStoreQueryPackageUpdatesResult(async, numUpdates, packages.data());
        
        if (SUCCEEDED(hr))
        {
            for (auto &package : packages)
            {
                printf("Update available %s\n", package.packageIdentifier);
            }
        }
    }
}

void QueryPackageUpdates()
{
    std::vector<std::string> packageIds;

    HRESULT hr = XPackageEnumeratePackages(
        XPackageKind::Game,
        XPackageEnumerationScope::ThisOnly, // this will return for the base game only
        &packageIds, [](void* context, const XPackageDetails* details) -> bool
        {
            auto packageIds = reinterpret_cast<std::vector<std::string>*>(context);

            printf("Identifier: %s name: %s\n", details->packageIdentifier, details->displayName);

            packageIds->push_back(details->packageIdentifier);
        });

    // packageIds now populated with just the base game package Id

    auto asyncBlock = new XAsyncBlock();
    asyncBlock->queue = m_asyncQueue;
    asyncBlock->context = m_storeContext;
    asyncBlock->callback = QueryPackageUpdatesCallback;

    hr = XStoreQueryPackageUpdatesAsync(
        m_storeContext,
        packageIds.data(),
        packageIds.size(),
        asyncBlock);

    if (FAILED(hr))
    {
        printf("XStoreQueryPackageUpdatesAsync failed: 0x%x\n", hr);
        return;
    }
}

```

## Download and install updates

After you identify the set of updates, use [XStoreDownloadAndInstallPackageUpdatesAsync](../../../reference/system/xstore/functions/xstoredownloadandinstallpackageupdatesasync.md) to queue and download all the updates.

> [!NOTE]
At this point, the game terminates to apply the update.
This process occurs without warning, so provide ample user notice or confirmation before calling this function.

```cpp
void DownloadUpdates()
{
    std::vector<const char*> packageIds;

    for (XStorePackageUpdate package : m_updates)
    {
        // m_updates populated from the update check
        packageIds.push_back(package.packageIdentifier);
    }

    if (!packageIds.empty())
    {
        auto asyncBlock = new XAsyncBlock{};
        asyncBlock->context = this;
        asyncBlock->queue = m_asyncQueue;
        asyncBlock->callback = [](XAsyncBlock* asyncBlockInner)
        {
            // Called when update is complete
            auto pThis = reinterpret_cast<Sample*>(asyncBlockInner->context);
            HRESULT hr = XStoreDownloadAndInstallPackageUpdatesResult(asyncBlockInner);

            delete asyncBlockInner;
        };

        HRESULT hr = XStoreDownloadAndInstallPackageUpdatesAsync(m_xStoreContext, packageIds.data(), packageIds.size(), asyncBlock);
    }
}
```

## Monitoring download progress

When a download is in progress, use [XPackageCreateInstallationMonitor](../../../reference/system/xpackage/functions/xpackagecreateinstallationmonitor.md) to monitor the progress of the download:

```cpp
void CreateInstallationMonitor(const char* packageId)
{
    XPackageInstallationMonitorHandle pimHandle;

    HRESULT hr = XPackageCreateInstallationMonitor(packageId, 0, nullptr, 1000, m_asyncQueue, &pimHandle);

    if(SUCCEEDED(hr))
    {
        XTaskQueueRegistrationToken callbackToken;

        XPackageRegisterInstallationProgressChanged(
            m_pimHandle,
            this,
            [](void* context, XPackageInstallationMonitorHandle pimHandle)
            {
                XPackageInstallationProgress progress;
                XPackageGetInstallationProgress(pimHandle, &progress);

                if(!progress.completed)
                {
                    printf("%llu%% installed\n", static_cast<double>(progress.installedBytes) / static_cast<double>(progress.totalBytes);
                }
                else
                {
                    XPackageCloseInstallationMonitorHandle(pimHandle);
                }
            }, &callbackToken);
    }
}
```

## Testing updates

During development, you can test availability updates only by using local packages.

1. Create V1 package with the update check and download code.
1. Create V2 package with the same identity but incremented version number.
1. Run `xbapp/wdapp install` V1.
1. Run `xbapp/wdapp update` V2 `/a`.
1. Launch V1.

Make sure the content ID matches between packages.

The result of this process is that V1's `XStoreQueryGameAndDlcPackageUpdatesAsync` or `XStoreQueryPackageUpdatesAsync` call finds any available updates, and `XStoreDownloadAndInstallPackageUpdatesAsync` updates V1 by using the advertised V2 package.
When the "download" of V2 is in progress, this status shows in the Xbox download queue, Xbox app, or Microsoft Store app as an item in the queue.
When the installation finishes, V2 is installed. You can verify the installation by using `xbapp/wdapp list[dlc]`.

Using `/m` instead of `/a` makes the update "mandatory", which simply affects the [XStorePackageUpdate](../../../reference/system/xstore/structs/xstorepackageupdate.md)`.isMandatory` field.

You can't update from a development build to the package that downloads from the Store due to signing differences.

For more information about how to create efficient updates and different ways to test, see the content update pages referenced in the following section.

## See also

[Commerce Overview](../commerce-nav.md)

[Enabling XStore development and testing](../getting-started/xstore-product-testing-setup.md)

[Content update best practices](../../../features/common/packaging/packaging-updates.md)

[Creating, examining, and testing content updates](../../../features/common/packaging/packaging-testing-updates.md)

[XStore API reference](../../../reference/system/xstore/xstore_members.md)
