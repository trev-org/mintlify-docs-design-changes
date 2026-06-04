---
description: Callback function type for Guide button events (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputGuidButtonCallback (Deprecated)
---

# GameInputGuidButtonCallback

> [!WARNING]
> **Deprecated.** This callback type was removed in GameInput v1 and is not available in the current API. Use [GameInputSystemButtonCallback](../../functions/gameinputsystembuttoncallback.md) instead.

Callback function type for Guide (Xbox) button press and release notifications.

## Syntax

```cpp
typedef void GameInputGuidButtonCallback(
    GameInputCallbackToken callbackToken,
    void* context,
    IGameInputDevice* sender,
    uint64_t timestamp,
    bool isPressed
);
```

### Parameters

*callbackToken*\
Type: GameInputCallbackToken

The token identifying the registered callback.

*context*\
Type: void*

The title-defined context value that was supplied when registering the callback.

*sender*\
Type: IGameInputDevice*

The device that triggered the callback. Can be `nullptr` if not device-specific.

*timestamp*\
Type: uint64_t

The time (in microseconds) at which the Guide button event occurred.

*isPressed*\
Type: bool

`true` if the Guide button was pressed; `false` if released.

## Remarks

This callback type was registered via [IGameInput::RegisterGuideButtonCallback](../interfaces/igameinput/methods/igameinput_registerguidebuttoncallback.md). Both were removed in v1 and replaced by [GameInputSystemButtonCallback](../../functions/gameinputsystembuttoncallback.md) registered via [IGameInput::RegisterSystemButtonCallback](../../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md), which also covers the Share button.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. Replaced by [GameInputSystemButtonCallback](../../functions/gameinputsystembuttoncallback.md). |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[IGameInput::RegisterGuideButtonCallback](../interfaces/igameinput/methods/igameinput_registerguidebuttoncallback.md)
[GameInputSystemButtonCallback](../../functions/gameinputsystembuttoncallback.md)
