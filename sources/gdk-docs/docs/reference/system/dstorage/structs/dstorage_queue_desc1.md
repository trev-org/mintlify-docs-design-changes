---
author: tadswift
title: "DSTORAGE_QUEUE_DESC1"
description: "Properties of a DirectStorage queue."
kindex: DSTORAGE_QUEUE_DESC1
ms.topic: reference
edited: 05/02/2020
ms.date: '06/11/2025'
permissioned-type: public
---

# DSTORAGE_QUEUE_DESC1  

Properties of a DirectStorage queue.  

## Syntax  
  
```cpp
typedef struct DSTORAGE_QUEUE_DESC1 {  
    DSTORAGE_REQUEST_SOURCE_TYPE SourceType;  
    UINT16 Capacity;  
    DSTORAGE_PRIORITY Priority;  
    const CHAR *Name;
    DSTORAGE_QUEUE_OPTIONS Options;  
} DSTORAGE_QUEUE_DESC1  
```
  
### Members  
*SourceType*  
Type: [DSTORAGE_REQUEST_SOURCE_TYPE](../enums/dstorage_request_source_type.md)  

The source type of requests the queue can accept. 
  
*Capacity*  
Type: UINT16  
  
The maximum number of requests this queue can hold. This value must be between the values of `DSTORAGE_MIN_QUEUE_CAPACITY` and `DSTORAGE_MAX_QUEUE_CAPACITY`.  
  
*Priority*  
Type: [DSTORAGE_PRIORITY](../enums/dstorage_priority.md)  
  
The priority of the requests in this queue. 
  
*Name*  
Type: const CHAR \*  
  
The name of the queue. 
  
*Options*
Type: [DSTORAGE_QUEUE_OPTIONS](../structs/dstorage_queue_options.md)

The options associated with this queue.

## Remarks 

This structure is used by the [IDStorageFactoryX::CreateQueue1](../interfaces/IDStorageFactoryX2/methods/idstoragefactoryx_createqueue1.md) method and appears in the [DSTORAGE_QUEUE_INFO1](dstorage_queue_info1.md) structure. 

The *Name* member is optional and intended for debugging.

The options struct has the ability to disable the auto-submit feature of the DirectStorage Queue.

For more information, see the "IDStorageQueueX" section in [DirectStorage Overview](../../../../features/console/storage/directstorage/directstorage-overview.md). 
  
## Requirements  
  
**Header:** dstorage_xs.h  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[DStorage](../dstorage_members.md)  
  
