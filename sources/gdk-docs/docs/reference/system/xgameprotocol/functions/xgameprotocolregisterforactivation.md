---
author: jgup
title: "XGameProtocolRegisterForActivation (deprecated)"
description: "Registers a callback for protocol activation."
kindex: XGameProtocolRegisterForActivation
ms.author: jgup
ms.topic: reference
edited: 03/30/2026
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameProtocolRegisterForActivation (deprecated)

> [!IMPORTANT]
> This API is now deprecated. Use [XGameActivationRegisterForEvent](../../xgameactivation/functions/xgameactivationregisterforevent.md) instead.

Registers a callback for protocol activation.

## Syntax  
  
```cpp
STDAPI XGameProtocolRegisterForActivation(
    _In_opt_ XTaskQueueHandle queue,
    _In_opt_ void* context,
    _In_ XGameProtocolActivationCallback * callback,
    _Out_ XTaskQueueRegistrationToken* token
    ) noexcept;
```  
  
### Parameters  
  
*queue* &nbsp;&nbsp;\_In\_opt\_  
Type: XTaskQueueHandle  

The task queue that dispatches the event callback.  

*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  

The context we pass to the event callback.  

*callback* &nbsp;&nbsp;\_In\_  
Type: XGameProtocolActivationCallback*  

The event callback function.  

*token* &nbsp;&nbsp;\_Out\_  
Type: [XTaskQueueRegistrationToken*](../../xtaskqueue/structs/xtaskqueueregistrationtoken.md)  

A token from the task queue that represents the registration. Use the token to unregister the callback 
for protocol activation.  

### Return value

Type: HRESULT
  
HRESULT success or error code.  
For a list of error codes, see [Error Codes](../../../errorcodes.md).  
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more 
information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
The **XGameProtocolRegisterForActivation** function uses an 
[XGameProtocolActivationCallback](xgameprotocolactivationcallback.md) as an argument.

To unregister a callback for a game 
invite event, call [XGameProtocolUnregisterForEvent](xgameprotocolunregisterforactivation.md).

## Requirements  
  
**Header:** XGameProtocol.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameProtocol members](../xgameprotocol_members.md)