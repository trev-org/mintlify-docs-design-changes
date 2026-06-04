---
title: "Manage and license downloadable content (DLC)"
description: "Describes scenarios for using durable products as downloadable content within your title and how to implement them."
kindex: Manage and license downloadable content (DLC)
author: joannaleecy
ms.author: timch
ms.topic: article
edited: '09/26/2023'
ms.date: '08/01/2022'
permissioned-type: public
---


# Manage and license downloadable content (DLC)

Downloadable content (DLC) consists of a product that, when purchased, gives the user a downloadable package.
DLC's need to be independently licensed and mounted before their contents can be accessed.

DLC packages are licensable according to the content sharing behavior for each device, as outlined in the [Product sharing model for games](xstore-product-sharing-model-for-games.md).

Partner Center also supports Durable products that don't have packages.
A durable without a package is suitable for license-only products, enabling content already installed with the base game.
These types of license only products save the steps of creating empty packages that users would otherwise need to download.
For more information, see [How to use a durable without a package](xstore-dwobs.md).

## Development workflow for DLC

Refer to [Downloadable content (DLC) packages](../../../features/common/packaging/packaging-downloadable-content-dlc.md) to find out more about how to configure DLC content, including how to make the association with the base game through the MicrosoftGame.config.

There are three ways to install DLC:

1. [Loose DLC deployment](#1-loose-dlc-deployment)
2. [Locally install DLC package](#2-locally-install-dlc-package)
3. [Install DLC package from Store](#3-install-dlc-package-from-store)

### 1. Loose DLC deployment

Install the directory pointing to your loose DLC MicrosoftGame.config and asset files:

**Xbox:**

```cmd
> xbapp deploy <DLC directory>

Package Full Name: 41336MicrosoftATG.DLC1_2020.10.14.0_neutral__dspnxghe87tn0
The operation completed successfully.
```

**PC:**

```cmd
> wdapp register <DLC directory>  

Registered 41336MicrosoftATG.DLC1_2020.10.14.0_x64__dspnxghe87tn0
Copied temporary generated AppXManifest.xml file to C:\Users\<ntuser>\AppData\Local\Temp\41336MicrosoftATG.DLC1_2020.10.14.0_x64__dspnxghe87tn0_AppXManifest.xml
The operation completed successfully.
```

### 2. Locally install DLC package

Install the .xvc/.msixvc created by makepkg:

**Xbox:**

```cmd
> xbapp install <xvc package>  

12:16:21.800 Registered for streaming: 41336MicrosoftATG.DLC1_2020.10.14.0_neutral__dspnxghe87tn0_xs.xvc
12:16:22.645 Launch   0.00% Package   0.00%
12:16:32.650 Launch 100.00% Package 100.00%
12:16:32.651 Streaming install finished

The operation completed successfully.
```

**PC:**

```cmd
> wdapp install <.msixvc package>  

Starting installation. See the Microsoft Store app for further details.
Launch   100% Package   100%
Installed 100%.
Installed 41336MicrosoftATG.DLC1_2020.10.14.0_x64__dspnxghe87tn0
```

### 3. Install DLC package from Store

With a [test account](../../../services/develop/test-accounts/live-setup-testaccounts.md) signed into the dev sandbox, search for or direct link to the DLC product page in the Store app and install.

## Validate DLC installation

**Xbox:**

```cmd
> xbapp listdlc

Registered DLC by Package Full Name:

   41336MicrosoftATG.DLC1_2020.10.14.0_neutral__dspnxghe87tn0

The operation completed successfully.
```

**PC:**

```cmd
> wdapp listdlc

Registered DLC packages by Package Full Name:

41336MicrosoftATG.DLC1_2020.10.14.0_x64__dspnxghe87tn0

The operation completed successfully.
```

On PC, it's also possible to see the DLC installed for a particular title using `get-appxpackage` in PowerShell, note the **Dependencies** section:

```cmd
> get-appxpackage 41336MicrosoftATG.DownloadableContent

Name              : 41336MicrosoftATG.DownloadableContent
Publisher         : CN=A4954634-DF4B-47C7-AB70-D3215D246AF1
Architecture      : X64
ResourceId        :
Version           : 2020.10.14.0
PackageFullName   : 41336MicrosoftATG.DownloadableContent_2020.10.14.0_x64__dspnxghe87tn0
InstallLocation   : E:\Repos\ATG\gx_dev\Samples\Live\DownloadableContent\Gaming.Desktop.x64\Debug
IsFramework       : False
PackageFamilyName : 41336MicrosoftATG.DownloadableContent_dspnxghe87tn0
PublisherId       : dspnxghe87tn0
IsResourcePackage : False
IsBundle          : False
IsDevelopmentMode : True
NonRemovable      : False
Dependencies      : {41336MicrosoftATG.DLC1_2020.10.14.0_x64__dspnxghe87tn0}
IsPartiallyStaged : False
SignatureKind     : None
Status            : Ok
```

**SignatureKind** denotes what kind of package is installed, *None* for a locally built and installed package, *Store* for a package installed from the Store.

## Purchasing and installing DLC

Refer to the [Basic store operations](xstore-basic-store-operations.md) article to understand how to enumerate the catalog and offer the ability to purchase add-ons.
Add-on products can be determined to be DLC by examining [`XStoreProduct`](../../../reference/system/xstore/structs/xstoreproduct.md)`.hasDigitalDownload`.

If a DLC is purchased from the Store, the DLC is queued to be downloaded.

If a DLC is purchased using [XStoreShowPurchaseUiAsync](../../../reference/system/xstore/functions/xstoreshowpurchaseuiasync.md), the DLC doesn't queue for downloaded.
Instead, the game should request a download manually following the code.
Optionally a monitor can be created to track progress.

The **package identifier** is an opaque string that identifies a specific package.
The identifier is unique per package, but different with each launched instance of the game.
So, don't store or reuse the identifier beyond the current session.

You can use the following methods to obtain the package identifier for a package, depending on the scenario:

* After calling [XStoreDownloadAndInstallPackagesAsync](../../../reference/system/xstore/functions/xstoredownloadandinstallpackagesasync.md) to download and install packages, you can obtain package identifiers for those packages by calling [XStoreDownloadAndInstallPackagesResult](../../../reference/system/xstore/functions/xstoredownloadandinstallpackagesresult.md).
* You can obtain the package identifiers for packages already downloaded and installed by calling [XPackageEnumeratePackages](../../../reference/system/xpackage/functions/xpackageenumeratepackages.md), then retrieving the package identifier from the [XPackageDetails](../../../reference/system/xpackage/structs/xpackagedetails.md) structure passed back to your [XPackageEnumerationCallback](../../../reference/system/xpackage/functions/xpackageenumerationcallback.md) callback function for each enumerated package.
* You can obtain the package identifier for the current game by calling [XPackageGetCurrentProcessPackageIdentifier](../../../reference/system/xpackage/functions/xpackagegetcurrentprocesspackageidentifier.md).

```cpp
void StartDownload()
{
    auto async = new XAsyncBlock{};
    async->queue = m_asyncQueue;
    async->context = this;
    async->callback = [](XAsyncBlock* asyncBlockInner)
    {
        uint32_t count = 0;
        HRESULT hr = XStoreDownloadAndInstallPackagesResultCount(asyncBlockInner, &count);

        std::vector<char[XPACKAGE_IDENTIFIER_MAX_LENGTH]> packageIds(count);

        XStoreDownloadAndInstallPackagesResult(asyncBlockInner, count, packageIds.data());

        for(auto packageId : packageIds)
        {
            hr = XPackageCreateInstallationMonitor(
                packageId,  
                0,  
                nullptr,  
                1000,  
                m_asyncQueue,
                &m_pimHandle);

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

                // Persist callbackToken to unregister upon completion
            }
        }

        delete asyncBlockInner;
    }

    const char* storeIds[] =  
    {
        "9PLNMXRKNM4C",  
        "9PLNMXRKNM5D"
    };

    HRESULT hr = XStoreDownloadAndInstallPackagesAsync(storeContext, storeIds, ARRAYSIZE(storeIds), async);

    if (FAILED(hr))
    {
        delete async;
        return;
    }
}
```

## Enumerating DLC packages

Regardless of how DLCs are installed, the game needs to enumerate the installed DLC before use.
Enumerating the installed DLCs is where the package identifier is obtained.

```cpp
bool CALLBACK DlcCallback(void* context, const XPackageDetails* details)
{
    printf("DLC found: name: %s packageId: %s\n", details->displayName, details->packageIdentifier);

    return true;
}

void RefreshInstalledPackages()
{
    HRESULT hr = XPackageEnumeratePackages(
        XPackageKind::Content,  
        XPackageEnumerationScope::ThisAndRelated,  
        this,  
        DlcCallback);
}
```

## Detecting that a DLC package is installed

```cpp
void RegisterPackageInstalledEvent()
{
    XPackageRegisterPackageInstalled(
        m_asyncQueue,
        this,  
        [](void *context, const XPackageDetails *package)
        {
            printf("Package Installed event received: %s\n", package->displayName);
        },  
        &m_packageInstallToken);
}
```

See the [Troubleshooting](../getting-started/xstore-troubleshooting.md) section if the code example isn't being reached.
The event should be triggered regardless of which method the DLC package is installed from.

## Acquiring license for DLC

In development, see notes in [Testing DLC licensing in development](#testing-dlc-licensing-in-development).

The base game needs to acquire the license for DLC to determine whether it should give the user access to its contents.

Games typically use Restrictive Licensing where after the game acquires the license for a package, access to the package is locked to that device and instance of the product.
The game must release the license before another instance or device can acquire the access rights and license.
Talk to your Microsoft Account Representative to ensure your game is configured to use Restrictive Licensing (not configured in Partner Center).
For more information, see [Open and restrictive licensing](../pc-specific-considerations/xstore-open-and-restrictive-licensing.md).

Because the game must release the license, the game is responsible for tracking all DLC licenses it acquires and releasing them when they're no longer needed or on termination.
If the game fails to release a license, the license is released automatically after a timeout period.

```cpp
void CALLBACK AcquireLicenseForPackageCallback(XAsyncBlock* async)
{
    XStoreLicenseHandle licenseHandle = nullptr;

    HRESULT hr = XStoreAcquireLicenseForPackageResult(
        async,
        &licenseHandle);

    if (FAILED(hr))
    {
        printf("Failed retrieve the license handle: 0x%x\n", hr);
        return;
    }

    bool isValid = XStoreIsLicenseValid(licenseHandle);

    printf("isValid: %s\n", isValid ? "true" : "false");

    hr = XStoreRegisterPackageLicenseLost(licenseHandle, m_asyncQueue, context,
       [](void *context)  
       {
           // Check if the license lost corresponded to any mounted DLC
           // If so, it is up to the game to determine an appropriate time
           // to unmount the DLC, e.g. after the current match is completed
       });

    delete async;
}

void AcquireLicenseForPackage(const char* packageIdentifier)
{
    auto async = new XAsyncBlock{};
    async->context = this;
    async->queue = m_asyncQueue;
    async->callback = AcquireLicenseForPackageCallback;

    HRESULT hr = XStoreAcquireLicenseForPackageAsync(
        m_storeContext,
        packageIdentifier,
        async);

    if (FAILED(hr))
    {
        delete async;
        return;
    }
}
```

## Determining license source of DLC

Using [XStoreCanAcquireLicenseForPackageAsync](../../../reference/system/xstore/functions/xstorecanacquirelicenseforpackageasync.md) or [XStoreCanAcquireLicenseForStoreIdAsync](../../../reference/system/xstore/functions/xstorecanacquirelicenseforstoreidasync.md) (depending on the identifier type), it's possible to determine if the DLC is

1. Licensable, so you can present purchase options if not
2. Licensable by disc or by digital license

```cpp
void PreviewLicense(const char* storeId)
{
    auto async = new XAsyncBlock{};
    async->queue = m_asyncQueue;
    async->callback = [](XAsyncBlock* async)
    {
        XStoreCanAcquireLicenseResult result;

        HRESULT hr = XStoreCanAcquireLicenseForStoreIdResult(
            async,
            &result);

        if (FAILED(hr))
        {
            printf("Error calling XStoreCanAcquireLicenseForStoreIdResult: 0x%x\n", hr);
        }
        else
        {
            // Status = 1 Licensable and
            // a. licensableSku = "DISC" if disc licensed
            // b. licensableSku = "0010" or similar if digital licensed
            printf("Status: %u LicensableSku: %s\n", result.status, result.licensableSku);
        }

        delete async;
    };

    HRESULT hr = XStoreCanAcquireLicenseForStoreIdAsync(
        m_xStoreContext,
        storeId,
        async);

    if (FAILED(hr))
    {
        delete async;

        printf("Error calling XStoreCanAcquireLicenseForStoreIdAsync: 0x%x", hr);
        return;
    }
}
```

## Mounting and unmounting DLC

Once the DLC license is successfully acquired, the DLC content can be mounted and accessed.

```cpp

void CALLBACK MountPackageCallback(XAsyncBlock* async)
{
    XPackageMountHandle mountHandle = {};

    HRESULT hr = XPackageMountWithUiResult(async, &mountHandle);

    if (SUCCEEDED(hr))
    {
        // Access DLC goodness
    }
    else
    {
        XStoreCloseLicenseHandle(license);
        printf("Error mounting package: 0x%x\n", hr);
    }

    delete async;
};

void MountPackage(const char* packageIdentifier)
{
    auto async = new XAsyncBlock{};
    async->queue = m_asyncQueue;
    async->context = context;
    async->callback = MountPackageCallback;

    HRESULT hr = XPackageMountWithUiAsync(packageIdentifier, async);

    if (FAILED(hr))
    {
        printf("XPackageMountWithUiAsync failed : 0x%x\n", hr);
        delete async;
    }
}
```

When unmounting, release all tokens and handles:

```cpp
void UnmountPackage(XPackageMountHandle mountHandle, XStoreLicenseHandle license, XTaskQueueRegistrationToken licenseLostToken)
{
    XStoreUnregisterPackageLicenseLost(license, licenseLostToken, false);

    XPackageCloseMountHandle(mountHandle);

    XStoreCloseLicenseHandle(license);
}
```

## Uninstalling DLC

Use [XPackageUninstallPackage](../../../reference/system/xpackage/functions/xpackageuninstallpackage.md) to uninstall a DLC package.
The package must be unmounted first.

## Smart Delivery and DLC

It's possible for Xbox Series X/S titles to license and mount DLC created for the Xbox One title.
Typically, this scenario occurs when the DLC package doesn't contain data used by the game.
The only way to check is if the ERA DLC's `AllowedProduct` ID in its package.appxmanifest, which is a GUID, matches the Legacy Xbox Product ID assigned to the product in Partner Center.  

If not, the title was possibly migrated from the decommissioned Xbox Developer Portal (XDP), and only works with packages downloaded from Store, as the Xbox Series X/S version is assigned to the Xbox One's product ID.
For development purposes, see the note in the [Troubleshooting](../getting-started/xstore-troubleshooting.md) section.

## DLC from different products

It's possible to enumerate and use DLC from a different product.
For the title that wishes to use a DLC from a different product, assign a "Can sell and use" relationship to the DLC product in the **Product relationship setup** section in Partner Center.
The selection of available products is limited to the publisher account.

## Testing DLC licensing in development

For more information, see [Enabling license testing](../getting-started/xstore-licensing-setup.md).

Local DLC packages must be made with a /contentid parameter.

Each DLC package must have its EKBID overridden from the default values.

## See also

[Commerce Overview](../commerce-nav.md)

[Enabling license testing](../getting-started/xstore-licensing-setup.md)

[How to use a durable without a package](xstore-dwobs.md)

[XStore API reference](../../../reference/system/xstore/xstore_members.md)
