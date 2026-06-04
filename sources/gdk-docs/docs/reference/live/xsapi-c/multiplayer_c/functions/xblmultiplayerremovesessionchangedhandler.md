---
author: joannaleecy
title: "XblMultiplayerRemoveSessionChangedHandler"
description: "Unregisters an event handler for multiplayer session change notifications."
kindex: XblMultiplayerRemoveSessionChangedHandler
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerRemoveSessionChangedHandler  

Unregisters an event handler for multiplayer session change notifications.  

## Syntax  
  
```cpp
void XblMultiplayerRemoveSessionChangedHandler(  
         XblContextHandle xblContext,  
         XblFunctionContext token  
)  
```  
  
### Parameters  
  
*xblContext* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*token* &nbsp;&nbsp;\_In\_  
Type: XblFunctionContext  
  
The XblFunctionContext object that was returned when the event handler was registered.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
