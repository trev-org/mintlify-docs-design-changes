---
author: M-Stahl
title: "IDStorageQueueX1 (Interface contents)"
description: "Represents a DirectStorage queue."
kindex: IDStorageQueueX1
ms.topic: reference
edited: 07/07/2022
ms.date: '08/01/2022'
permissioned-type: public
---

# IDStorageQueueX1  

Represents a DirectStorage queue.
Extends the [IDStorageQueueX](../IDStorageQueueX/idstoragequeuex.md) interface.
  
## Syntax  
  
```cpp  
class IDStorageQueueX1 : public IDStorageQueueX  
```  
  
  
## Methods  
  
| Method | Description |  
| --- | --- |  
| [EnqueueSetEvent](methods/idstoragequeuex_enqueuesetevent.md) | Enqueues a set event operation. |  


## Remarks

A DirectStorage queue holds entries until the title calls
[Submit](../IDStorageQueueX/methods/idstoragequeuex_submit.md) on the queue, or one of the Enqueue methods
fills more than half of the queue's capacity since last submission and triggers
an automatic submission. All entries in a DirectStorage queue complete in the
order they are enqueued. 

`IDStorageQueueX1` extends `IDStorageQueueX` with
[EnqueueSetEvent](methods/idstoragequeuex_enqueuesetevent.md) method to provide the
ability to enqueue a **SetEvent** operation. 

For more information, see the "IDStorageQueueX" "IDStorageQueueX1" section in
[DirectStorage Overview](../../../../../features/console/storage/directstorage/directstorage-overview.md). 

## Requirements  
  
**Header:** dstorage_xs.h  
  
**Library:** dstorage.lib  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageFactoryX::CreateQueue](../IDStorageFactoryX/methods/idstoragefactoryx_createqueue.md)  
[DStorage](../../dstorage_members.md)  
  
