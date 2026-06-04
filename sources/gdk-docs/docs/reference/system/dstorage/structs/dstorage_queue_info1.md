---
author: tadswift
title: "DSTORAGE_QUEUE_INFO1"
description: "Properties and current state of a DirectStorage queue."
kindex: DSTORAGE_QUEUE_INFO1
ms.topic: reference
edited: 06/11/2025
ms.date: '06/11/2025'
permissioned-type: public
---

# DSTORAGE_QUEUE_INFO1  

Properties and current state of a DirectStorage queue. 

## Syntax  
  
```cpp
struct DSTORAGE_QUEUE_INFO1 {  
    DSTORAGE_QUEUE_DESC1 Desc;
    UINT16 EmptySlotCount;
    UINT16 RequestCountUntilAutoSubmit;
}  
```
  
### Members  

*Desc*  
Type: DSTORAGE_QUEUE_DESC1

The [DSTORAGE_QUEUE_DESC1](dstorage_queue_desc1.md) structure used for creation of the queue.

*EmptySlotCount*  
Type: UINT16

The number of available empty slots. If a queue is empty, the number of empty slots equals capacity - 1. The reserved slot distinguishes between empty and full cases.

*RequestCountUntilAutoSubmit*  
Type: UINT16

The number of entries that need to be enqueued to trigger automatic submission. 

## Remarks 

This structure is used by the [IDStorageQueueX2::Query1](../interfaces/IDStorageQueueX2/methods/idstoragequeuex_query1.md) method.

If a queue is empty, *EmptySlotCount* equals capacity - 1. The reserved slot distinguishes between empty and full cases.
  
## Requirements  
  
**Header:** dstorage_xs.h  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageQueueX2::Query1](../interfaces/IDStorageQueueX2/methods/idstoragequeuex_query1.md)  
[DStorage](../dstorage_members.md)  
  
