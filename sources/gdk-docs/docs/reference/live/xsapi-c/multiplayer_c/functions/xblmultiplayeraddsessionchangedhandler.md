---
author: joannaleecy
title: "XblMultiplayerAddSessionChangedHandler"
description: "Registers an event handler for notifications when a multiplayer session changes. If the RTA subscription has not been explicitly enabled with XblMultiplayerSetSubscriptionsEnabled, adding session changed handlers will enable it automatically. Use the returned XblFunctionContext to unregister the handler."
kindex: XblMultiplayerAddSessionChangedHandler
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerAddSessionChangedHandler  

Registers an event handler for notifications when a multiplayer session changes. If the RTA subscription has not been explicitly enabled with [XblMultiplayerSetSubscriptionsEnabled](xblmultiplayersetsubscriptionsenabled.md), adding session changed handlers will enable it automatically. Use the returned XblFunctionContext to unregister the handler.  

## Syntax  
  
```cpp
XblFunctionContext XblMultiplayerAddSessionChangedHandler(  
         XblContextHandle xblContext,  
         XblMultiplayerSessionChangedHandler* handler,  
         void* context  
)  
```  
  
### Parameters  
  
*xblContext* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*handler* &nbsp;&nbsp;\_In\_  
Type: XblMultiplayerSessionChangedHandler*  
  
The callback function that receives notifications.  
  
*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  
  
Caller context to be passed the handler.  
  
  
### Return value  
Type: XblFunctionContext
  
The function context token that was registered for the event.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
