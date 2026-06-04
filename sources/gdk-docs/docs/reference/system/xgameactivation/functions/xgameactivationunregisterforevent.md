---
author: elroyc
title: "XGameActivationUnregisterForEvent"
description: "Unregisters a callback for activation events."
kindex: XGameActivationUnregisterForEvent
ms.topic: reference
ms.author: elroyc
edited: 03/30/2026
applies-to: pc-gdk
ms.date: '03/30/2026'
permissioned-type: public
---

# XGameActivationUnregisterForEvent

Unregisters a callback for activation events.  

## Syntax  
  
```cpp
bool XGameActivationUnregisterForEvent(  
         XTaskQueueRegistrationToken token,  
         bool wait  
)  
```  
  
### Parameters  
  
*token* &nbsp;&nbsp;\_In\_  
Type: [XTaskQueueRegistrationToken](../../xtaskqueue/structs/xtaskqueueregistrationtoken.md)  

The token that [XGameActivationRegisterForEvent](xgameactivationregisterforevent.md) returns.  

*wait* &nbsp;&nbsp;\_In\_  
Type: bool  

Wait for pending event callbacks to complete.  

### Return value

Type: bool
  
Returns false if *wait* is false and the unregister is pending. Returns true otherwise.  
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
To register a callback for activation events, call [XGameActivationRegisterForEvent](xgameactivationregisterforevent.md). The function uses a pointer to an [XGameActivationCallback](xgameactivationcallback.md) as an argument.

For an example of calling this function, see the remarks section of the [XGameActivationCallback](xgameactivationcallback.md#remarks) topic.  

## Requirements  
  
**Header:** XGameActivation.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameActivation](../xgameactivation_members.md)
  
[XGameActivationRegisterForEvent](xgameactivationregisterforevent.md)

[XGameActivationCallback](xgameactivationcallback.md)
