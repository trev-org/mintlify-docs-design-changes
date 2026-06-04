---
author: joannaleecy
title: "XblLocalStorageReadComplete"
description: "Completes a local storage read operation. XblLocalStorageReadHandler"
kindex: XblLocalStorageReadComplete
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblLocalStorageReadComplete  

Completes a local storage read operation. [XblLocalStorageReadHandler](xbllocalstoragereadhandler.md)  

## Syntax  
  
```cpp
HRESULT XblLocalStorageReadComplete(  
         XblClientOperationHandle operation,  
         XblClientOperationResult result,  
         size_t dataSize,  
         void data  
)  
```  
  
### Parameters  
  
*operation* &nbsp;&nbsp;\_In\_  
Type: [XblClientOperationHandle](../handles/xblclientoperationhandle.md)  
  
The handle for this operation.  
  
*result* &nbsp;&nbsp;\_In\_  
Type: [XblClientOperationResult](../enums/xblclientoperationresult.md)  
  
The result of the operation.  
  
*dataSize* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The size (in bytes) of the data.  
  
*data* &nbsp;&nbsp;\_In\_reads\_bytes\_opt\_(dataSize)  
Type: void  
  
The data read.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
Should only be called by clients after completing (or failing to complete) a requested read operation. If the requested key cannot be found, the operation should be completed with XblClientOperationResult::Success and dataSize of 0.
  
## Requirements  
  
**Header:** platform_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[platform_c](../platform_c_members.md)  
  
  
