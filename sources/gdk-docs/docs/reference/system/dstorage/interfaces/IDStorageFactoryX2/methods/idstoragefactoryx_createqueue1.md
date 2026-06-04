---
author: tadswift
title: "CreateQueue1"
description: "Creates a DirectStorage queue object."
kindex: CreateQueue1
ms.topic: reference
edited: 04/28/2020
ms.date: '06/11/2025'
permissioned-type: public
---

# IDStorageFactoryX2::CreateQueue1  

Creates a DirectStorage queue object.  

## Syntax  
  
```cpp
HRESULT CreateQueue1(  
         const DSTORAGE_QUEUE_DESC1 *desc,  
         REFIID riid,  
         void **ppv  
)  
```  
  
### Parameters  
  
*desc*  
Type: [DSTORAGE_QUEUE_DESC1](../../../structs/dstorage_queue_desc1.md) \*  
  
Descriptor that specifies the properties of the queue, including the ability to disable the auto-submit feature of a created queue.
  
*riid*  
Type: REFIID  
  
Specifies the DirectStorage queue interface, such as `__uuidof(IDStorageQueueX2)`.  
  
*ppv* &nbsp;&nbsp;\_COM\_Outptr\_  
Type: void \*\*  
  
Returns a pointer to the created object. 
  
### Return value  
Type: HRESULT
  
Standard HRESULT error code.
  
## Remarks

A DirectStorage queue holds read requests until the title calls [Submit](../../IDStorageQueueX/methods/idstoragequeuex_submit.md) on the queue. All entries in a DirectStorage queue complete in the order they are enqueued. 

For more information, see the "IDStorageQueueX2" section in [DirectStorage Overview](../../../../../../features/console/storage/directstorage/directstorage-overview.md). 
  
## Requirements  
  
**Header:** dstorage_xs.h  
  
**Library:** dstorage_xs.lib  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageFactoryX2](../idstoragefactoryx2.md)  
[DStorage](../../../dstorage_members.md)  
  
