---
author: joannaleecy
title: "XblContextGetUser"
description: "Get the XblContextHandle associated with this context."
kindex: XblContextGetUser
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblContextGetUser  

Get the XblContextHandle associated with this context.  

## Syntax  
  
```cpp
HRESULT XblContextGetUser(  
         XblContextHandle context,  
         XblUserHandle* user  
)  
```  
  
### Parameters  
  
*context* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
The Xbox Live context handle.  
  
*user* &nbsp;&nbsp;\_Out\_  
Type: XblUserHandle*  
  
Passes back the Xbox Live user handle. XSAPI will call XalUserDuplicateHandle before returning the handle, so it is the responsibility of the caller to later call XalUserCloseHandle.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** xbox_live_context_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[xbox_live_context_c](../xbox_live_context_c_members.md)  
  
  
