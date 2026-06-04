---
author: A-Radu
title: "XStoreQueryPackageUpdatesResultCount"
description: "Gets the number of updates retrieved by XStoreQueryPackageUpdatesAsync."
kindex: XStoreQueryPackageUpdatesResultCount
ms.author: alvieru
ms.topic: reference
edited: '09/14/2023'
quality: good
applies-to: pc-gdk
ms.date: '09/14/2023'
permissioned-type: public
---

# XStoreQueryPackageUpdatesResultCount  
  
Gets the number of updates retrieved by [XStoreQueryPackageUpdatesAsync](xstorequerypackageupdatesasync.md).

## Syntax  
  
```cpp
HRESULT XStoreQueryPackageUpdatesResultCount(  
         XAsyncBlock* async,  
         uint32_t* count  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
The XAsyncBlock passed to [XStoreQueryPackageUpdatesAsync](xstorequerypackageupdatesasync.md). The [XAsyncBlock](../../xasync/structs/xasyncblock.md) can be used to poll for the call's status and retrieve call results. See [XAsyncBlock](../../xasync/structs/xasyncblock.md) for more information.  
  
*count* &nbsp;&nbsp;\_Out\_  
Type: uint32_t*  
  
On success contains the number of updates retrieved.  
  
### Return value
Type: HRESULT
  
HRESULT success or error code.    
  
## Remarks  
  
This result function allows you to retrieve the number of add-on licenses acquired when [XStoreQueryPackageUpdatesAsync](xstorequerypackageupdatesasync.md) was called. As such, this function should be called after [XStoreQueryPackageUpdatesAsync](xstorequerypackageupdatesasync.md) has been called, usually in the context of a callback function.  
  
See [XStoreQueryPackageUpdatesAsync](xstorequerypackageupdatesasync.md) for a usage example.  
  
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)  
[XStoreQueryPackageUpdatesAsync](xstorequerypackageupdatesasync.md)  
[XStoreQueryPackageUpdatesResult](xstorequerypackageupdatesresult.md)  