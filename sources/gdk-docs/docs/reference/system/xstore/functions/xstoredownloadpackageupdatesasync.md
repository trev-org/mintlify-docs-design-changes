---
author: M-Stahl
title: "XStoreDownloadPackageUpdatesAsync"
description: "Downloads updates for the specified packages."
kindex: XStoreDownloadPackageUpdatesAsync
ms.author: shanede
ms.topic: reference
edited: '09/14/2023'
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XStoreDownloadPackageUpdatesAsync  

Downloads updates for the specified packages without installing them. This allows your game to control when the install of the updates happen to prevent the game from shutting down while the user is playing.

## Syntax  
  
```cpp
HRESULT XStoreDownloadPackageUpdatesAsync(  
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
  
List of package identifiers.
A package identifier is a unique id string for a Microsoft store package. For more information about package identifiers, see [Manage and license downloadable content (DLC)](../../../../store/commerce/fundamentals/xstore-manage-and-license-optional-packages.md).  
  
*packageIdentifiersCount* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The number of Identifiers in **packageIdentifiers**.  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) defining the asynchronous work being done. The [XAsyncBlock](../../xasync/structs/xasyncblock.md) can be used to poll for the call's status and retrieve call results. See [XAsyncBlock](../../xasync/structs/xasyncblock.md) for more information.  
  
### Return value
Type: [HRESULT](/openspecs/windows_protocols/ms-erref/0642cb2f-2075-4469-918c-4441e69c548a)  

Returns **S_OK** if successful; otherwise, returns an error code.

  
## Remarks  

This function only downloads and update but does not install it. In order to download and install an update in one call use the [XStoreDownloadAndInstallPackageUpdatesAsync](xstoredownloadandinstallpackageupdatesasync.md) function. To retrieve the result of this function call [XStoreDownloadPackageUpdatesResult](xstoredownloadpackageupdatesresult.md) after calling this function. See [XStoreQueryGameAndDlcPackageUpdatesAsync](xstorequerygameanddlcpackageupdatesasync.md) for a usage example.  

When this API is called from a running game, then the downloads will be considered high priority and they will go at the beginning of the queue in the order in which they are specified in the storeIds parameter of this API. 
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)  
[XStoreDownloadPackageUpdatesResult](xstoredownloadpackageupdatesresult.md)  
[XStoreDownloadAndInstallPackageUpdatesAsync](xstoredownloadandinstallpackageupdatesasync.md)  
  