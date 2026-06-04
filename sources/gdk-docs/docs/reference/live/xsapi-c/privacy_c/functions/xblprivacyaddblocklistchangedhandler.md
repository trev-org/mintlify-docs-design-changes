---
author: XBL
title: "XblPrivacyAddBlockListChangedHandler"
description: "Registers an event handler for notifications when the user's block list changes."
kindex: XblPrivacyAddBlockListChangedHandler
ms.author: migreen
ms.topic: reference
security: public
edited: 00/00/0000
applies-to: pc-gdk
---

# XblPrivacyAddBlockListChangedHandler  

Registers an event handler for notifications when the user's block list changes.  

## Syntax  
  
```cpp
XblFunctionContext XblPrivacyAddBlockListChangedHandler(  
         XblContextHandle xboxLiveContext,  
         XblPrivacyBlockListChangedHandler handler,  
         void* handlerContext  
)  
```  
  
### Parameters  
  
*xboxLiveContext* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
An xbox services context handle created with XblContextCreateHandle.  
  
*handler* &nbsp;&nbsp;\_In\_  
Type: XblPrivacyBlockListChangedHandler  
  
The callback function that receives notifications.  
  
*handlerContext* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  
  
Client context pointer to be passed back to the handler.  
  
  
### Return value  
Type: XblFunctionContext
  
A XblFunctionContext used to remove the handler.
  
## Remarks  
  
Call [XblPrivacyRemoveBlockListChangedHandler](xblprivacyremoveblocklistchangedhandler.md) to un-register the event handler.
  
## Requirements  
  
**Header:** privacy_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[privacy_c](../privacy_c_members.md)  
  
  
