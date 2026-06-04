---
author: M-Stahl
title: "EnqueueSetEvent"
description: "Enqueues a set event operation."
kindex: EnqueueSetEvent
ms.topic: reference
edited: 07/07/2022
ms.date: '08/01/2022'
permissioned-type: public
---

# IDStorageQueueX1::EnqueueSetEvent  

Enqueues a **SetEvent** operation. 

## Syntax  
  
```cpp
void EnqueueSetEvent(  
         HANDLE handle  
)  
```  
  
### Parameters  
  
*handle*  
Type: HANDLE 
  
An event handle.  
  
### Return value  
Type: void
  
## Remarks

The specified event is signaled when all enqueued requests before it complete.
The event can be either auto-reset or manual-reset. 

After calling this method, a title thread can wait on the event as needed. If
the event is already in signaled state when the set event operation happens, a
warning message will be printed in the debugger if DSTORAGE_DEBUG_SHOW_ERRORS is
on. 

If the `EnqueueSetEvent` method fills half of the queue's capacity since the
last submission, it triggers an automatic submission as part of the
`EnqueueSetEvent` call. 

In most cases, this method simply does a memory write to the queue, thus takes
very little CPU time to complete. However, if automatic submission is triggered,
it takes significantly more CPU time, including a kernel mode transition and
processing all of the previously submitted requests in the caller thread. 

If automatic submission is not desirable, games are recommended to use a queue
with large enough capacity and call [Submit](../../IDStorageQueueX/methods/idstoragequeuex_submit.md) manually
when appropriate.

For more information, see the "Notification" and
"EnqueueStatus/EnqueueSignal/EnqueueSetEvent" sections in [DirectStorage
overview](../../../../../../features/console/storage/directstorage/directstorage-overview.md). 

  
## Requirements  
  
**Header:** dstorage_xs.h  
  
**Library:** dstorage_xs.lib  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageQueueX::EnqueueStatus](../../IDStorageQueueX/methods/idstoragequeuex_enqueuestatus.md)  
[IDStorageQueueX::EnqueueSignal](../../IDStorageQueueX/methods/idstoragequeuex_enqueuesignal.md)  
[IDStorageQueueX](../../IDStorageQueueX/idstoragequeuex.md)  
[DStorage](../../../dstorage_members.md)  
  
