---
author: M-Stahl
title: "EnqueueSignal"
description: "Enqueues a fence write."
kindex: EnqueueSignal
ms.topic: reference
edited: 04/24/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# IDStorageQueueX::EnqueueSignal  

Enqueues a fence write.  

## Syntax  
  
```cpp
void EnqueueSignal(  
         ID3D12Fence *fence,  
         UINT64 value  
)  
```  
  
### Parameters  
  
*fence*  
Type: ID3D12Fence 
  
An `ID3D12Fence` to enqueue. 
  
*value*  
Type: UINT64  
  
The value to write to the fence.  
  
### Return value  
Type: void
  
## Remarks

The fence is signaled when all requests enqueued before the fence complete.

A title thread can wait for the fence or poll the fence. The GPU can also poll
the fence. 

If the `EnqueueSignal` method fills half of the queue's capacity since the last
submission, it triggers an automatic submission as part of the `EnqueueSignal`
call. 

In most cases, this method simply does a memory write to the queue, thus takes
very little CPU time to complete. However, if automatic submission is triggered,
it takes significantly more CPU time, including a kernel mode transition and
processing all of the previously submitted requests in the caller thread. 

If automatic submission is not desirable, games are recommended to use a queue
with large enough capacity and call [Submit](idstoragequeuex_submit.md) manually
when appropriate.

For more information, see the "Notification" and
"EnqueueStatus/EnqueueSignal/EnqueueSetEvent" sections in [DirectStorage
overview](../../../../../../features/console/storage/directstorage/directstorage-overview.md). 

  
## Requirements  
  
**Header:** dstorage_xs.h  
  
**Library:** dstorage_xs.lib  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageQueueX::EnqueueStatus](idstoragequeuex_enqueuestatus.md)  
[IDStorageQueueX](../idstoragequeuex.md)  
[DStorage](../../../dstorage_members.md)  
  
