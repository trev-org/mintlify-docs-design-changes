---
author: joannaleecy
title: "XblContextGetXboxUserId"
description: "Get the Xbox user ID of the user associated with the context."
kindex: XblContextGetXboxUserId
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblContextGetXboxUserId  

Get the Xbox user ID of the user associated with the context.  

## Syntax  
  
```cpp
HRESULT XblContextGetXboxUserId(  
         XblContextHandle context,  
         uint64_t* xboxUserId  
)  
```  
  
### Parameters  
  
*context* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
The Xbox Live context handle.  
  
*xboxUserId* &nbsp;&nbsp;\_Out\_  
Type: uint64_t*  
  
Passes back the xbox user ID.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** xbox_live_context_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[xbox_live_context_c](../xbox_live_context_c_members.md)  
  
  
