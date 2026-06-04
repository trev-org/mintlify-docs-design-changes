---
author: XBL
title: "XblPrivacyRemoveBlockListChangedHandler"
description: "Removes a block list change handler."
kindex: XblPrivacyRemoveBlockListChangedHandler
ms.author: migreen
ms.topic: reference
security: public
edited: 00/00/0000
applies-to: pc-gdk
---

# XblPrivacyRemoveBlockListChangedHandler  

Removes a block list change handler.  

## Syntax  
  
```cpp
HRESULT XblPrivacyRemoveBlockListChangedHandler(  
         XblContextHandle xboxLiveContext,  
         XblFunctionContext handlerFunctionContext  
)  
```  
  
### Parameters  
  
*xboxLiveContext* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
An xbox services context handle created with XblContextCreateHandle.  
  
*handlerFunctionContext* &nbsp;&nbsp;\_In\_  
Type: XblFunctionContext  
  
Context for the handler to remove.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
Call this API only if [XblPrivacyAddBlockListChangedHandler](xblprivacyaddblocklistchangedhandler.md) was used to register an event handler.
  
## Requirements  
  
**Header:** privacy_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[privacy_c](../privacy_c_members.md)  
  
  
