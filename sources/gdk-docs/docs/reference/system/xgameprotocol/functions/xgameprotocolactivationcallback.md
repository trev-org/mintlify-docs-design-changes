---
author: gup
title: "XGameProtocolActivationCallbackXGameProtocol (deprecated)"
description: "A callback an application defines for protocol activation events."
kindex: XGameProtocolActivationCallback
ms.author: jgup
ms.topic: reference
edited: 03/30/2026
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XGameProtocolActivationCallbackXGameProtocol (deprecated)

> [!IMPORTANT]
> This API is now deprecated. Use [XGameActivationCallback](../../xgameactivation/functions/xgameactivationcallback.md) instead.

A callback an application defines for protocol activation events.  

## Syntax  
  
```cpp
typedef void CALLBACK XGameProtocolActivationCallback(
    _In_opt_ void* context,
    _In_ const char* protocolUri
    );
```  
  
### Parameters  
  
*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  

The context we pass to [XGameProtocolRegisterForActivation](xgameprotocolregisterforactivation.md).  

*protocolUri* &nbsp;&nbsp;\_In\_  
Type: char*  

The URI used to invoke the protocol activation. Games may parse this to determine parameters passed to the game.  

### Return value

Type: void
  
## Remarks  
  
To register a callback for a game invite event, call 
[XGameProtocolRegisterForActivation](xgameprotocolregisterforactivation.md). To unregister a callback for a protocol
activation, call [XGameProtocolUnregisterForEvent](xgameprotocolunregisterforactivation.md).

## Requirements  
  
**Header:** XGameProtocol.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameProtocol members](../xgameprotocol_members.md)