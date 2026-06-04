---
author: elroyc
title: "XGameActivationRegisterForEvent"
description: "Registers a callback for activation events."
kindex: XGameActivationRegisterForEvent
ms.topic: reference
ms.author: elroyc
edited: 03/30/2026
applies-to: pc-gdk
ms.date: '03/30/2026'
permissioned-type: public
---

# XGameActivationRegisterForEvent

Registers a callback for activation events.  

## Syntax  
  
```cpp
HRESULT XGameActivationRegisterForEvent(  
         XTaskQueueHandle queue,  
         void* context,  
         XGameActivationCallback* callback,  
         XTaskQueueRegistrationToken* token  
)  
```  
  
### Parameters  
  
*queue* &nbsp;&nbsp;\_In\_opt\_  
Type: XTaskQueueHandle  

The task queue that dispatches the event callback.  

*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  

The context passed to the event callback.  

*callback* &nbsp;&nbsp;\_In\_  
Type: [XGameActivationCallback](xgameactivationcallback.md)\*  

The event callback function.  

*token* &nbsp;&nbsp;\_Out\_  
Type: [XTaskQueueRegistrationToken*](../../xtaskqueue/structs/xtaskqueueregistrationtoken.md)  

A token from the task queue that represents the registration. Use the token to unregister the callback for activation events.  

### Return value

Type: HRESULT
  
HRESULT success or error code.  
For a list of error codes, see [Error Codes](../../../errorcodes.md).  
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
The **XGameActivationRegisterForEvent** function uses an [XGameActivationCallback](xgameactivationcallback.md) as an argument. The callback receives an [XGameActivationInfo](../structs/xgameactivationinfo.md) structure that contains the activation type and corresponding data.

This API handles all activation types including protocol activation, file activation, and game invites. It replaces the deprecated `XGameProtocolRegisterForActivation` and `XGameInviteRegisterForEvent` APIs.

To unregister a callback for activation events, call [XGameActivationUnregisterForEvent](xgameactivationunregisterforevent.md).

For an example of calling this function, see the remarks section of the [XGameActivationCallback](xgameactivationcallback.md#remarks) topic.  

## Requirements  
  
**Header:** XGameActivation.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameActivation](../xgameactivation_members.md)
  
[XGameActivationCallback](xgameactivationcallback.md)

[XGameActivationUnregisterForEvent](xgameactivationunregisterforevent.md)
