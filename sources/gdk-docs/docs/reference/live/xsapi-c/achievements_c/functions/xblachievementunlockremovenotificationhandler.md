---
author: joannaleecy
title: "XblAchievementUnlockRemoveNotificationHandler"
description: "Unregisters an event handler for achievement unlock notifications."
kindex: XblAchievementUnlockRemoveNotificationHandler
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementUnlockRemoveNotificationHandler  

Unregisters an event handler for achievement unlock notifications.  

## Syntax  
  
```cpp
void XblAchievementUnlockRemoveNotificationHandler(  
         XblContextHandle xblContextHandle,  
         XblFunctionContext functionContext  
)  
```  
  
### Parameters  
  
*xblContextHandle* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*functionContext* &nbsp;&nbsp;\_In\_  
Type: XblFunctionContext  
  
The XblFunctionContext that was returned when the event handler was registered.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** achievements_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[achievements_c](../achievements_c_members.md)  
  
  
