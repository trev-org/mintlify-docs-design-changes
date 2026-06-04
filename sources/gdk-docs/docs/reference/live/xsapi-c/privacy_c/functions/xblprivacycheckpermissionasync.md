---
author: joannaleecy
title: "XblPrivacyCheckPermissionAsync"
description: "Check a single permission with a single target user."
kindex: XblPrivacyCheckPermissionAsync
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPrivacyCheckPermissionAsync  

Check a single permission with a single target user.  

## Syntax  
  
```cpp
HRESULT XblPrivacyCheckPermissionAsync(  
         XblContextHandle xblContextHandle,  
         XblPermission permissionToCheck,  
         uint64_t targetXuid,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*xblContextHandle* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*permissionToCheck* &nbsp;&nbsp;\_In\_  
Type: [XblPermission](../enums/xblpermission.md)  
  
The permission to check.  
  
*targetXuid* &nbsp;&nbsp;\_In\_  
Type: uint64_t  
  
The target user's Xuid for validation.  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
If multiple permissions and/or target users are needed, use the batch API instead: [XblPrivacyBatchCheckPermissionAsync](xblprivacybatchcheckpermissionasync.md) Call [XblPrivacyCheckPermissionResultSize](xblprivacycheckpermissionresultsize.md) and [XblPrivacyCheckPermissionResult](xblprivacycheckpermissionresult.md) upon completion to get the result.
  
## Requirements  
  
**Header:** privacy_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[privacy_c](../privacy_c_members.md)  
  
  
