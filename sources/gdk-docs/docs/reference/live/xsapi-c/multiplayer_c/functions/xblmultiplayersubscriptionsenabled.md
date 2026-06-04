---
author: joannaleecy
title: "XblMultiplayerSubscriptionsEnabled"
description: "Indicates whether multiplayer subscriptions are currently enabled. Note that subscriptions can be enabled/disabled explicitly using XblMultiplayerSetSubscriptionsEnabled, but they will also be enabled automatically if a session changed handler is added."
kindex: XblMultiplayerSubscriptionsEnabled
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSubscriptionsEnabled  

Indicates whether multiplayer subscriptions are currently enabled. Note that subscriptions can be enabled/disabled explicitly using [XblMultiplayerSetSubscriptionsEnabled](xblmultiplayersetsubscriptionsenabled.md), but they will also be enabled automatically if a session changed handler is added.  

## Syntax  
  
```cpp
bool XblMultiplayerSubscriptionsEnabled(  
         XblContextHandle xblHandle  
)  
```  
  
### Parameters  
  
*xblHandle* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
  
### Return value  
Type: bool
  
Returns true if enabled, false if not enabled.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
