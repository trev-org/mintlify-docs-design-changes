---
author: TBD
title: "XSystemHandleCallback"
description: "Callback that is invoked when a GRTS handle is created or destroyed."
kindex: XSystemHandleCallback
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XSystemHandleCallback  

Callback that is invoked when a GRTS handle is created or destroyed.

## Syntax  

```cpp
typedef void (CALLBACK *XSystemHandleCallback)(
    _In_ XSystemHandle handle,
    _In_ XSystemHandleType type,
    _In_ XSystemHandleCallbackReason reason,
    _In_ void* context
    );
```

### Parameters  

*handle* &nbsp;&nbsp; \_In\_  
Type: XSystemHandle  

The XSystemHandle whose state is changing. Callers will need to statically cast this to the correct
GRTS handle type based on what is passed in the *type* parameter.

*type* &nbsp;&nbsp; \_In\_  
Type: [XSystemHandleType](../enums/xsystemhandletype.md)

The GRTS type of the handle getting created or destroyed.

*reason* &nbsp;&nbsp; \_In\_  
Type: [XSystemHandleCallbackReason](../enums/xsystemhandlecallbackreason.md)

Indicates if the handle is getting created or destroyed.

*context* &nbsp;&nbsp; \_In\_  
Type: void *  

User define context to be passed to the callback.  

## Remarks  

This callback is set when the game calls [XSystemHandleTrack](xsystemhandletrack.md).

## Requirements  
  
**Header:** XSystem.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

## See also  

[XSystem members](../xsystem_members.md)  

[XSystemHandleTrack](xsystemhandletrack.md)