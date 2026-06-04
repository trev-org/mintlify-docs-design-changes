---
author: tadswift
title: "IDStorageFactoryX2 (Interface contents)"
description: "Represents the static DirectStorage factory object."
kindex: IDStorageFactoryX2
ms.topic: reference
edited: 00/00/0000
ms.date: '06/11/2025'
permissioned-type: public
---

# IDStorageFactoryX2  

Represents the static DirectStorage factory object.
Extends the [IDStorageFactoryX1](../IDStorageFactoryX1/idstoragefactoryx1.md) interface.


## Syntax  
  
```cpp  
class IDStorageFactoryX2 : public IDStorageFactoryX1  
```  
  
  
## Methods  
  
| Method | Description |  
| --- | --- |  
| [CreateQueue1](methods/idstoragefactoryx_createqueue1.md) | Creates a DirectStorage queue object. |  


## Remarks  

Use the DirectStorage factory object to create DirectStorage queues, open files for DirectStorage access, and perform global operations. 
  
To obtain a pointer to the `IDStorageFactoryX2` singleton, use [DStorageGetFactory](../../functions/dstoragegetfactory.md).  

For more information, see the "IDStorageFactoryX", "IDStorageFactoryX1" and "IDStorageFactoryX2"
sections of [DirectStorage Overview](../../../../../features/console/storage/directstorage/directstorage-overview.md). 
  
## Requirements  
  
**Header:** dstorage_xs.h  
  
**Library:** dstorage.lib  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageFactoryX](../IDStorageFactoryX/idstoragefactoryx.md)  
[IDStorageFactoryX1](../IDStorageFactoryX1/idstoragefactoryx1.md)  
[DStorageGetFactory](../../functions/dstoragegetfactory.md)  
[DStorage](../../dstorage_members.md)  
  
  
  
