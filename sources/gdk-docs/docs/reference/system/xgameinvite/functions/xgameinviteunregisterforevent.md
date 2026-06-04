---
author: M-Stahl
title: "XGameInviteUnregisterForEvent (deprecated)"
description: "Unregisters a callback for a game invite event."
kindex: XGameInviteUnregisterForEvent
ms.topic: reference
edited: 03/30/2026
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameInviteUnregisterForEvent (deprecated)

> [!IMPORTANT]
> This API is now deprecated. Use [XGameActivationUnregisterForEvent](../../xgameactivation/functions/xgameactivationunregisterforevent.md) instead.

Unregisters a callback for a game invite event.  

## Syntax  
  
```cpp
bool XGameInviteUnregisterForEvent(  
         XTaskQueueRegistrationToken token,  
         bool wait  
)  
```  
  
### Parameters  
  
*token* &nbsp;&nbsp;\_In\_  
Type: [XTaskQueueRegistrationToken](../../xtaskqueue/structs/xtaskqueueregistrationtoken.md)  

The token that [XGameInviteRegisterForEvent](xgameinviteregisterforevent.md) returns.  

*wait* &nbsp;&nbsp;\_In\_  
Type: bool  

Wait for pending event callbacks to complete.  

### Return value

Type: bool
  
Returns false if *wait* is false and the unregister is pending. Returns true otherwise.  
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
To register a callback for a game invite event, call [XGameInviteRegisterForEvent](xgameinviteregisterforevent.md). The function uses a pointer to an [XGameInviteEventCallback](xgameinviteeventcallback.md) as an argument.

For an example of calling this function, see the remarks section of the [XGameInviteEventCallback](xgameinviteeventcallback.md#ID_XGameInviteEventCallback_Remarks) topic.  

## Requirements  
  
**Header:** XGameInvite.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameInvite](../xgameinvite_members.md)
  
[XGameInviteRegisterForEvent](xgameinviteregisterforevent.md)

[XGameInviteEventCallback](xgameinviteeventcallback.md)
