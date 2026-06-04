---
author: A-Radu
title: "XStoreQueryPackageUpdatesResult"
description: "Gets the result for a call to XStoreQueryPackageUpdatesAsync."
kindex: XStoreQueryPackageUpdatesResult
ms.author: alvieru
ms.topic: reference
edited: '09/14/2023'
quality: good
applies-to: pc-gdk
ms.date: '09/14/2023'
permissioned-type: public
---

# XStoreQueryPackageUpdatesResult  
  
Gets the result for a call to [XStoreQueryPackageUpdatesAsync](xstorequerypackageupdatesasync.md).

## Syntax  
  
```cpp
HRESULT XStoreQueryPackageUpdatesResult(  
         XAsyncBlock* async,  
         uint32_t count,  
         XStorePackageUpdate* packageUpdates  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
The XAsyncBlock passed to [XStoreQueryGameAndDlcPackageUpdatesAsync](xstorequerygameanddlcpackageupdatesasync.md). The [XAsyncBlock](../../xasync/structs/xasyncblock.md) can be used to poll for the call's status and retrieve call results. See [XAsyncBlock](../../xasync/structs/xasyncblock.md) for more information.   
  
*count* &nbsp;&nbsp;\_In\_  
Type: uint32_t  
  
The number of elements in the array passed into **packageUpdates**.  
  
*packageUpdates* &nbsp;&nbsp;\_Out\_writes\_(count)  
Type: [XStorePackageUpdate*](../structs/xstorepackageupdate.md)  
  
On success contains the retrieved package updates.  
  
### Return value
Type: HRESULT
  
HRESULT success or error code.    
  
## Remarks  
  
This result function allows you to retrieve the execution results of [XStoreQueryPackageUpdatesAsync](xstorequerypackageupdatesasync.md), as well as the list of available updates called for if the execution was successful. As such, this function should be called after [XStoreQueryPackageUpdatesAsync](xstorequerypackageupdatesasync.md) has been called, usually in the context of a callback function.  
  
See [XStoreQueryPackageUpdatesAsync](xstorequerypackageupdatesasync.md) for a usage example.  
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)  
[XStoreQueryPackageUpdatesAsync](xstorequerypackageupdatesasync.md)  
[XStoreQueryPackageUpdatesResultCount](xstorequerypackageupdatesresultcount.md)  