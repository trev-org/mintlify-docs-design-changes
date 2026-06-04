---
author: M-Stahl
title: "IDStorageFactoryX1 (Interface contents)"
description: "Represents the static DirectStorage factory object."
kindex: IDStorageFactoryX1
ms.topic: reference
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# IDStorageFactoryX1  

Represents the static DirectStorage factory object.
Extends the [IDStorageFactoryX](../IDStorageFactoryX/idstoragefactoryx.md) interface.


## Syntax  
  
```cpp  
class IDStorageFactoryX1 : public IDStorageFactoryX  
```  
  
  
## Methods  
  
| Method | Description |  
| --- | --- |  
| [GetStats](methods/idstoragefactoryx1_getstats.md) | Gets DirectStorage statistics. |  


## Remarks  

Use the DirectStorage factory object to create DirectStorage queues, open files for DirectStorage access, and perform global operations. 
  
To obtain a pointer to the `IDStorageFactoryX1` singleton, use [DStorageGetFactory](../../functions/dstoragegetfactory.md).  

For more information, see the "IDStorageFactoryX" and "IDStorageFactoryX1"
sections of [DirectStorage Overview](../../../../../features/console/storage/directstorage/directstorage-overview.md). 
  
## Requirements  
  
**Header:** dstorage_xs.h  
  
**Library:** dstorage.lib  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageFactoryX](../IDStorageFactoryX/idstoragefactoryx.md)  
[DStorageGetFactory](../../functions/dstoragegetfactory.md)  
[DStorage](../../dstorage_members.md)  
  
  
  
