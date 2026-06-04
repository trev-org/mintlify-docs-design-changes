---
author: M-Stahl
title: "XStoreDownloadAndInstallPackageUpdatesAsync"
description: "Downloads and installs updates for the specified store packages."
kindex: XStoreDownloadAndInstallPackageUpdatesAsync
ms.author: shanede
ms.topic: reference
edited: '03/23/2026'
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XStoreDownloadAndInstallPackageUpdatesAsync  

Downloads and installs updates for the specified store packages.

## Syntax  
  
```cpp
HRESULT XStoreDownloadAndInstallPackageUpdatesAsync(  
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
  
An [XAsyncBlock](../../xasync/structs/xasyncblock.md) defining the asynchronous work being done. The [XAsyncBlock](../../xasync/structs/xasyncblock.md) can be used to poll for the call's status and retrieve call results. For more information, see [XAsyncBlock](../../xasync/structs/xasyncblock.md).  
  
### Return value
Type: [HRESULT](/openspecs/windows_protocols/ms-erref/0642cb2f-2075-4469-918c-4441e69c548a)  

HRESULT success or error code.    

## Remarks  

This function downloads and installs updates for the specified store packages.

> [!NOTE]
> When you call this function and it finds updates for the game, the game terminates immediately to allow the install to occur.

To retrieve the results of the download and install update, call [XStoreDownloadAndInstallPackageUpdatesResult](xstoredownloadandinstallpackageupdatesresult.md) after calling this function.
For a usage example, see [XStoreQueryGameAndDlcPackageUpdatesAsync](xstorequerygameanddlcpackageupdatesasync.md).  

When you call this API from a running game, the downloads are high priority and go at the beginning of the queue in the order specified in the `storeIds` parameter. 
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles, and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)  
[XStoreDownloadAndInstallPackageUpdatesResult](xstoredownloadandinstallpackageupdatesresult.md)  
