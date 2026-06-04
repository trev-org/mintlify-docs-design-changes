---
author: M-Stahl
title: "EnqueueStatus"
description: "Enqueues a status write."
kindex: EnqueueStatus
ms.topic: reference
edited: 04/24/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# IDStorageQueueX::EnqueueStatus  

Enqueues a status write. 

## Syntax  
  
```cpp
void EnqueueStatus(  
         IDStorageStatusArrayX *statusArray,  
         UINT32 index  
)  
```  
  
### Parameters  
  
*statusArray*  
Type: IDStorageStatusArrayX 
  
An [IDStorageStatusArrayX](../../IDStorageStatusArrayX/idstoragestatusarrayx.md) object.  
  
*index*  
Type: UINT32  
  
Index of the status entry in the `IDStorageStatusArrayX` object to receive the status.  
  
### Return value  
Type: void
  
## Remarks

The status array is signaled when all requests enqueued before it complete.

After calling this method, a title thread can poll the `IDStorageStatusArrayX`
object as needed. (The state of the status is undefined until this method is
called.) If any failures occurred since the previous status entry, the *HResult*
of the enqueued status entry stores the failure code of the first failed
request. 

If the `EnqueueStatus` method fills half of the queue's capacity since the last
submission, it triggers an automatic submission as part of the `EnqueueStatus`
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
[IDStorageFactoryX::CreateStatusArray](../../IDStorageFactoryX/methods/idstoragefactoryx_createstatusarray.md)  
[IDStorageQueueX::EnqueueSignal](idstoragequeuex_enqueuesignal.md)  
[IDStorageQueueX](../idstoragequeuex.md)  
[DStorage](../../../dstorage_members.md)  
  
