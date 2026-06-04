---
author: jgup
title: "XGameProtocolUnregisterForActivation (deprecated)"
description: "Unregisters a callback for protocol activation."
kindex: XGameProtocolUnregisterForActivation
ms.author: jgup
ms.topic: reference
edited: 03/30/2026
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameProtocolUnregisterForActivation (deprecated)

> [!IMPORTANT]
> This API is now deprecated. Use [XGameActivationUnregisterForEvent](../../xgameactivation/functions/xgameactivationunregisterforevent.md) instead.

Unregisters a callback for protocol activation.

## Syntax  
  
```cpp
STDAPI_(bool) XGameProtocolUnregisterForActivation(
    _In_ XTaskQueueRegistrationToken token,
    _In_ bool wait
    ) noexcept;
```  
  
### Parameters  
  
*token* &nbsp;&nbsp;\_In\_  
Type: [XTaskQueueRegistrationToken](../../xtaskqueue/structs/xtaskqueueregistrationtoken.md)  

The token that [XGameInviteRegisterForEvent](../../xgameinvite/functions/xgameinviteregisterforevent.md) returns.  

*wait* &nbsp;&nbsp;\_In\_  
Type: bool  

Wait for pending event callbacks to complete.  

### Return value

Type: bool
  
Returns false if *wait* is false and the unregister is pending. Returns true otherwise.  
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more 
information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  

## Requirements  
  
**Header:** XGameProtocol.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameProtocol members](../xgameprotocol_members.md)