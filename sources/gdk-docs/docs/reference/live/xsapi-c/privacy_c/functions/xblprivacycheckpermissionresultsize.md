---
author: joannaleecy
title: "XblPrivacyCheckPermissionResultSize"
description: "Get the result size for an XblPrivacyCheckPermissionAsync call."
kindex: XblPrivacyCheckPermissionResultSize
ms.topic: reference
edited: 03/24/2023
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPrivacyCheckPermissionResultSize  

Get the result size for an XblPrivacyCheckPermissionAsync call.  

## Syntax  
  
```cpp
HRESULT XblPrivacyCheckPermissionResultSize(  
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
  
Passes bakc the size in bytes required to store the permission check result.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** privacy_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[privacy_c](../privacy_c_members.md)  
  
  
