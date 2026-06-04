---
author: tadswift
title: "IDStorageQueueX2 (Interface contents)"
description: "Represents a DirectStorage queue."
kindex: IDStorageQueueX2
ms.topic: reference
edited: 06/11/2025
ms.date: '06/11/2025'
permissioned-type: public
---

# IDStorageQueueX2  

Represents a DirectStorage queue.
Extends the [IDStorageQueueX1](../IDStorageQueueX1/idstoragequeuex1.md) interface.
  
## Syntax  
  
```cpp  
class IDStorageQueueX2 : public IDStorageQueueX1  
```  
  
  
## Methods  
  
| Method | Description |  
| --- | --- |  
| [Query1](methods/idstoragequeuex_query1.md) | Obtains information about the queue. |  


## Remarks

A DirectStorage queue holds entries until the title calls
[Submit](../IDStorageQueueX/methods/idstoragequeuex_submit.md) on the queue, or one of the Enqueue methods
fills more than half of the queue's capacity since last submission and triggers
an automatic submission, if it is enabled for this queue. All entries in a DirectStorage queue complete in the
order they are enqueued. 

`IDStorageQueueX2` extends `IDStorageQueueX1` with
[Query1](methods/idstoragequeuex_query1.md) method to query the information about the queue, including the ability to disable the auto-submit feature of a DirectStorage Queue.

For more information, see the "IDStorageQueueX", "IDStorageQueueX1" and "IDStorageQueueX2" section in
[DirectStorage Overview](../../../../../features/console/storage/directstorage/directstorage-overview.md). 

## Requirements  
  
**Header:** dstorage_xs.h  
  
**Library:** dstorage.lib  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageFactoryX::CreateQueue](../IDStorageFactoryX/methods/idstoragefactoryx_createqueue.md)  
[IDStorageFactoryX2::CreateQueue1](../IDStorageFactoryX2/methods/idstoragefactoryx_createqueue1.md)  
[DStorage](../../dstorage_members.md)  
  
