---
author: A-Radu
title: "XStoreQueryPackageUpdatesAsync"
description: "Retrieves the available updates for the packages specified."
kindex: XStoreQueryPackageUpdatesAsync
ms.author: alvieru
ms.topic: reference
edited: '03/23/2026'
quality: good
applies-to: pc-gdk
ms.date: '09/14/2023'
permissioned-type: public
---

# XStoreQueryPackageUpdatesAsync  
  
Retrieves a list of available updates for the packages specified in the argument. Use this list to download and install the updates.

## Syntax  
  
```cpp
HRESULT XStoreQueryPackageUpdatesAsync (   
         const XStoreContextHandle storeContextHandle,    
         const char** packageIdentifiers,   
         size_t packageIdentifiersCount,   
         XAsyncBlock* async   

)   
```  
  
### Parameters  
  
*storeContextHandle* &nbsp;&nbsp;\_In\_  
Type: XStoreContextHandle  
  
The store context handle for the user returned by [XStoreCreateContext](xstorecreatecontext.md).    
  
*packageIdentifiers* &nbsp;&nbsp;\_In\_z\_count\_(packageIdentifiersCount)  
Type: char**  
  
List of package identifier strings.
A package identifier uniquely identifies a package from the Microsoft Store. For more information about package identifiers, see [Manage and license downloadable content (DLC)](../../../../store/commerce/fundamentals/xstore-manage-and-license-optional-packages.md).  

*packageIdentifiersCount* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The number of identifiers in `packageIdentifiers`.  

*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) that defines the asynchronous work. Use the [XAsyncBlock](../../xasync/structs/xasyncblock.md) to poll for the call's status and retrieve call results. For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).  
  
### Return value
Type: HRESULT
  
HRESULT success or error code.    
  
## Remarks  
To get the package identifier of the currently running game, use [XPackageGetCurrentProcessPackageIdentifier](../../xpackage/functions/xpackagegetcurrentprocesspackageidentifier.md) or use [XPackageEnumeratePackages](../../xpackage/functions/xpackageenumeratepackages.md) to get the package identifiers of DLC and related games.
  
To retrieve the list of available updates and the execution result of this function, call [XStoreQueryPackageUpdatesResult](xstorequerypackageupdatesresult.md) after calling this function. To get the number of updates to retrieve, call [XStoreQueryPackageUpdatesResultCount](xstorequerypackageupdatesresultcount.md) after calling this function. The result count function is important as it allows you to determine the appropriate size of array to pass to the result function.

The following code snippet shows an example of retrieving game and optional updates for the packages specified.  
  
```cpp
void CALLBACK QueryPackageUpdatesCallback(XAsyncBlock* asyncBlock)
{
    uint32_t count;

    HRESULT hr = XStoreQueryPackageUpdatesResultCount(
        asyncBlock,
        &count);

    if (FAILED(hr))
    {
        printf("XStoreQueryPackageUpdatesResultCount failed : 0x%x\n", hr);
        return;
    }

    printf("Number of updates: %d", count);

    if (count > 0)
    {
        XStorePackageUpdate* updates = new XStorePackageUpdate[count];
        hr = XStoreQueryPackageUpdatesResult(
            asyncBlock,
            count,
            updates);

        if (FAILED(hr))
        {
            delete[] updates;
            printf("XStoreQueryPackageUpdatesResult failed: 0x%x\n", hr);
            return;
        }

        for (uint32_t index = 0; index < count; index++)
        {
            printf("Update found for packageIdentifier: %s\n", updates[index].packageIdentifier);

            // Proceed to XStoreDownloadAndInstallPackageUpdates flow
        }

        delete[] updates;
    }
}

void QueryPackageUpdates(XStoreContextHandle storeContextHandle, XTaskQueueHandle taskQueueHandle)
{
    std::vector<std::string> packageIds;

    HRESULT hr = XPackageEnumeratePackages(
        XPackageKind::Game,
        XPackageEnumerationScope::ThisAndRelated,
        &packageIds, [](void* context, const XPackageDetails* details) -> bool
        {
            auto packageIds = reinterpret_cast<std::vector<std::string>*>(context);

            printf("Identifier: %s name: %s\n", details->packageIdentifier, details->displayName);
            packageIds->push_back(details->packageIdentifier);
        });

    // packageIds now populated with ids for all installed packages

    auto asyncBlock = new XAsyncBlock();
    asyncBlock->queue = m_asyncQueue;
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
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles, and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)  
[XStoreQueryPackageUpdatesResult](xstorequerypackageupdatesresult.md)  
[XStoreQueryPackageUpdatesResultCount](xstorequerygameanddlcpackageupdatesresultcount.md)  
