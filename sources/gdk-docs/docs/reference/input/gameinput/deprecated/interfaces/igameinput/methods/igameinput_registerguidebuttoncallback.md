---
description: Registers a callback for Guide button press and release events (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInput::RegisterGuideButtonCallback (Deprecated)
---

# IGameInput::RegisterGuideButtonCallback

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API. Use [RegisterSystemButtonCallback](../../../../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md) instead.

Registers a callback function to be called when the Guide button is pressed or released.

## Syntax

```cpp
HRESULT RegisterGuideButtonCallback(
    IGameInputDevice* device,
    void* context,
    GameInputGuidButtonCallback* callbackFunc,
    GameInputCallbackToken* callbackToken
);
```

### Parameters

*device* &nbsp;&nbsp;\_In\_opt\_\
Type: IGameInputDevice*

Limits the registered callback to a specific device.

*context* &nbsp;&nbsp;\_In\_opt\_\
Type: void*

Title-defined context passed to the callback function.

*callbackFunc* &nbsp;&nbsp;\_In\_\
Type: [GameInputGuidButtonCallback](../../../functions/gameinputguidebuttoncallback.md)*

The title-defined callback function to register.

*callbackToken* &nbsp;&nbsp;\_Result\_zeroonfailure\_\
Type: GameInputCallbackToken*

Token identifying the registered callback.

### Return value

Type: HRESULT

Function result.

## Remarks

This method was replaced by [RegisterSystemButtonCallback](../../../../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md), which handles both Guide and Share button events through the [GameInputSystemButtonCallback](../../../../functions/gameinputsystembuttoncallback.md) callback type.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. Replaced by [RegisterSystemButtonCallback](../../../../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md). |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInput::RegisterSystemButtonCallback](../../../../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md)  
[GameInputGuidButtonCallback](../../../functions/gameinputguidebuttoncallback.md)  
[IGameInput](../../../../interfaces/igameinput/igameinput.md)  
