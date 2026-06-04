---
author: tadswift
title: "DSTORAGE_QUEUE_OPTIONS"
description: "Properties of a DirectStorage queue."
kindex: DSTORAGE_QUEUE_OPTIONS
ms.topic: reference
edited: 06/11/2025
ms.date: '06/11/2025'
permissioned-type: public
---

# DSTORAGE_QUEUE_OPTIONS

Options of a DirectStorage queue.  

## Syntax  
  
```cpp
union DSTORAGE_QUEUE_OPTIONS {
    struct {
        UINT64 AutoSubmitDisabled : 1;
        UINT64 Reserved : 63;  
    };
    UINT64 AsUINT64;
};
```
  
### Members  
*AutoSubmitDisabled*  

Setting this value to 1 will disable the auto-submit feature of the DirectStorage Queue.

*Reserved*  
  
Reserved. Must be zero. 
    
## Remarks 

This structure is used by the [IDStorageFactoryX2::CreateQueue1](../interfaces/IDStorageFactoryX2/methods/idstoragefactoryx_createqueue1.md) method and appears in the [DSTORAGE_QUEUE_INFO1](dstorage_queue_info1.md) structure. 

*WARNING:* If you **disable** the auto-submit feature for a queue then its behaviour will change if the queue is at capacity. When attempting to Enqueue() a request to a full queue, the thread calling Enqueue() will ***STALL*** and become unresponsive until Submit() is called on the queue to free up more capacity. The Submit() call must be performed from a different thread to the Enqueue().

If this situation occurs, an error message will be displayed when the [DSTORAGE_DEBUG_SHOW_ERRORS](../enums/dstorage_debug.md) flag is enabled.

For more information, see the "IDStorageQueueX2" section in [DirectStorage Overview](../../../../features/console/storage/directstorage/directstorage-overview.md). 
  
## Requirements  
  
**Header:** dstorage_xs.h  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[DStorage](../dstorage_members.md)  
  
