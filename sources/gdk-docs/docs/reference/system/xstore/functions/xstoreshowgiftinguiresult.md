---
author: arader
title: "XStoreShowGiftingUIResult"
description: "Gets the results of a call to XStoreShowGiftingUIAsync."
kindex: XStoreShowGiftingUIResult
ms.author: arader
ms.topic: reference
edited: 09/18/2024
quality: good
applies-to: pc-gdk
ms.date: '09/18/2024'
permissioned-type: public
---

# XStoreShowGiftingUIResult  

Gets the results of a call to [XStoreShowGiftingUIAsync](xstoreshowgiftinguiasync.md).  

## Syntax  
  
```cpp
HRESULT XStoreShowGiftingUIResult(  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  
  
The XAsyncBlock that was passed to [XStoreShowGiftingUIAsync](xstoreshowgiftinguiasync.md). The [XAsyncBlock](../../xasync/structs/xasyncblock.md) can be used to poll for the call's status and retrieve call results. See [XAsyncBlock](../../xasync/structs/xasyncblock.md) for more information.  
  
### Return value
Type: HRESULT
  
HRESULT success or error code.  

S_OK indicates that the gifting was completed.

E_ABORT indicates that the user canceled the gifting flow.
## Remarks  
  
This result function allows you to retrieve the execution results of [XStoreShowGiftingUIAsync](xstoreshowgiftinguiasync.md). As such, this function should be called after [XStoreShowGiftingUIAsync](xstoreshowgiftinguiasync.md) has been called, usually in the context of a callback function. This function can be particularly useful in figuring out why UI wasn't shown in cases of failure.  
  
See [XStoreShowGiftingUIAsync](xstoreshowgiftinguiasync.md) for a usage example.  
  
## Requirements  
  
**Header:** XStore.h (included in XGameRuntime.h)
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XStore](../xstore_members.md)  
[XStoreShowGiftingUIAsync](xstoreshowgiftinguiasync.md)  
  