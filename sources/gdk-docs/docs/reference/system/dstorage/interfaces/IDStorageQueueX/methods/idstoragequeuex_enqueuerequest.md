---
author: M-Stahl
title: "EnqueueRequest"
description: "Enqueues a read request."
kindex: EnqueueRequest
ms.topic: reference
edited: 04/24/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# IDStorageQueueX::EnqueueRequest  

Enqueues a read request.    

## Syntax  
  
```cpp
void EnqueueRequest(  
         const DSTORAGE_REQUEST *request  
)  
```  
  
### Parameters  
  
*request*  
Type: [DSTORAGE_REQUEST](../../../structs/dstorage_request.md) 
  
The read request to be queued.  
  
### Return value  
Type: void
  
## Remarks

This method enqueues data from *request*. The
[DSTORAGE_REQUEST](../../../structs/dstorage_request.md) structure can be reused as soon as the
method returns. 

If the `EnqueueRequest` method fills half of the queue's capacity since the last
submission, it triggers an automatic submission as part of the `EnqueueRequest`
call. 

In most cases, this method simply does a memory write to the queue, thus takes
very little CPU time to complete. However, if automatic submission is triggered,
it takes significantly more CPU time, including a kernel mode transition and
processing all of the previously submitted requests in the caller thread. 

If automatic submission is not desirable, games are recommended to use a queue
with large enough capacity and call [Submit](idstoragequeuex_submit.md) manually
when appropriate.

For more information, see the "EnqueueRequest" section of [DirectStorage
overview](../../../../../../features/console/storage/directstorage/directstorage-overview.md).

## Requirements  
  
**Header:** dstorage_xs.h  
  
**Library:** dstorage_xs.lib  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageQueueX](../idstoragequeuex.md)  
[DStorage](../../../dstorage_members.md)  
  
