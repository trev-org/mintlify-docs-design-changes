---
author: joannaleecy
title: "XblSocialRemoveSocialRelationshipChangedHandler"
description: "Removes a social relationship change handler."
kindex: XblSocialRemoveSocialRelationshipChangedHandler
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblSocialRemoveSocialRelationshipChangedHandler  

Removes a social relationship change handler.  

## Syntax  
  
```cpp
HRESULT XblSocialRemoveSocialRelationshipChangedHandler(  
         XblContextHandle xboxLiveContext,  
         XblFunctionContext handlerFunctionContext  
)  
```  
  
### Parameters  
  
*xboxLiveContext* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
An xbox live context handle created with XblContextCreateHandle.  
  
*handlerFunctionContext* &nbsp;&nbsp;\_In\_  
Type: XblFunctionContext  
  
Context for the handler to remove.  
  
  
### Return value  
Type: HRESULT
  

  
## Remarks  
  
&lt;prereq /&gt; Call this API only if [XblSocialAddSocialRelationshipChangedHandler](xblsocialaddsocialrelationshipchangedhandler.md) was used to register an event handler.
  
## Requirements  
  
**Header:** social_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[social_c](../social_c_members.md)  
  
  
