---
author: joannaleecy
title: "XblPrivacyCheckPermissionForAnonymousUserResult"
description: "Get the result for an XblPrivacyCheckPermissionForAnonymousUserAsync call."
kindex: XblPrivacyCheckPermissionForAnonymousUserResult
ms.topic: reference
edited: 03/24/2023
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPrivacyCheckPermissionForAnonymousUserResult  

Get the result for an XblPrivacyCheckPermissionForAnonymousUserAsync call.  

## Syntax  
  
```cpp
HRESULT XblPrivacyCheckPermissionForAnonymousUserResult(  
         XAsyncBlock* async,  
         size_t bufferSize,  
         void* buffer,  
         XblPermissionCheckResult** ptrToBuffer,  
         size_t* bufferUsed  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
*bufferSize* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The size of the provided buffer. Use [XblPrivacyCheckPermissionForAnonymousUserResultSize](xblprivacycheckpermissionforanonymoususerresultsize.md) to get the size required.  
  
*buffer* &nbsp;&nbsp;\_Out\_writes\_bytes\_to\_(bufferSize,*bufferUsed)  
Type: void*  
  
A caller allocated byte buffer that passes back the permission results.  
  
*ptrToBuffer* &nbsp;&nbsp;\_Outptr\_  
Type: [XblPermissionCheckResult**](../structs/xblpermissioncheckresult.md)  
  
Passes back a strongly typed pointer that points into buffer. Do not free this as its lifecycle is tied to buffer.  
  
*bufferUsed* &nbsp;&nbsp;\_Out\_opt\_  
Type: size_t*  
  
Passes back the number of bytes written to the buffer.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** privacy_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[privacy_c](../privacy_c_members.md)  
  
  
