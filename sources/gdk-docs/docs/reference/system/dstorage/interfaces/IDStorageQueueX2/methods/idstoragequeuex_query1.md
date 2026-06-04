---
author: tadswift
title: "Query1"
description: "Obtains information about the queue."
kindex: Query1
ms.topic: reference
edited: 06/11/2025
ms.date: '06/11/2025'
permissioned-type: public
---

# IDStorageQueueX2::Query1

Obtains information about the queue. 

## Syntax  
  
```cpp
void Query1(
    DSTORAGE_QUEUE_INFO1 *info
)
```  
  
### Parameters  
  
*info* &nbsp;&nbsp;\_Out\_  
Type: [DSTORAGE_QUEUE_INFO1](../../../structs/dstorage_queue_info1.md) \*  
  
Receives the information about the queue.
  
### Return value  
Type: void
  
## Remarks

Use this method to obtain the [DSTORAGE_QUEUE_DESC1](../../../structs/dstorage_queue_desc1.md) structure that was used for creation of the queue. [DSTORAGE_QUEUE_INFO1](../../../structs/dstorage_queue_info1.md) also provides the number of empty slots and the number of entries that need to be enqueued to trigger automatic submission, if it is enabled on this queue.
  
## Requirements  
  
**Header:** dstorage_xs.h  
  
**Library:** dstorage_xs.lib  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageQueueX2](../idstoragequeuex2.md)  
[DStorage](../../../dstorage_members.md)  
  
