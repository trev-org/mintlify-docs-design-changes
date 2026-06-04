---
author: joannaleecy
title: "XblPrivacyBatchCheckPermissionResultSize"
description: "Get the result size for an XblPrivacyBatchCheckPermissionAsync call."
kindex: XblPrivacyBatchCheckPermissionResultSize
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPrivacyBatchCheckPermissionResultSize  

Get the result size for an XblPrivacyBatchCheckPermissionAsync call.  

## Syntax  
  
```cpp
HRESULT XblPrivacyBatchCheckPermissionResultSize(  
         XAsyncBlock* async,  
         size_t* resultSizeInBytes  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
*resultSizeInBytes* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
Passes back the size in bytes required to store the permission check results.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** privacy_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[privacy_c](../privacy_c_members.md)  
  
  
