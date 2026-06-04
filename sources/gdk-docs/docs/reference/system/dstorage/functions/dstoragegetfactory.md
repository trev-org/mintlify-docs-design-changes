---
author: M-Stahl
title: "DStorageGetFactory"
description: "Returns the static DirectStorage factory object."
kindex: DStorageGetFactory
ms.topic: reference
edited: 04/28/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# DStorageGetFactory  

Returns the static DirectStorage factory object.  

## Syntax  
  
```cpp
HRESULT DStorageGetFactory(  
         REFIID riid,  
         void **ppv  
)  
```  
  
### Parameters  
  
*riid* &nbsp;&nbsp;  
Type: REFIID  
  
Specifies the DirectStorage factory interface, such as `__uuidof(IDStorageFactoryX2)`.  
  
*ppv* &nbsp;&nbsp;  
Type: void \*\* 
  
Pointer that receives a reference to the static DirectStorage factory object.    
  
### Return value
Type: HRESULT
  
Standard HRESULT error code.

## Remarks

This function returns the static DirectStorage factory object ([IDStorageFactoryX2](../interfaces/IDStorageFactoryX2/idstoragefactoryx2.md)). Use the object to create DirectStorage queues, open files for DirectStorage access, and perform global operations. 

For more information, see the "IDStorageFactoryX", "IDStorageFactoryX1" and "IDStorageFactoryX2" sections
of [DirectStorage Overview](../../../../features/console/storage/directstorage/directstorage-overview.md). 

## Requirements  
  
**Header:** dstorage_xs.h  
  
**Library:** dstorage_xs.lib  
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[IDStorageFactoryX](../interfaces/IDStorageFactoryX/idstoragefactoryx.md)  
[IDStorageFactoryX1](../interfaces/IDStorageFactoryX1/idstoragefactoryx1.md)  
[IDStorageFactoryX2](../interfaces/IDStorageFactoryX2/idstoragefactoryx2.md)  
[DStorage](../dstorage_members.md)  
  
