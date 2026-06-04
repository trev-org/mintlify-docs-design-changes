---
author: AlexYatskov
description: Title-defined callback for system button (pressed or released) events.
edited: 03/06/2025
kindex: GameInputSystemButtonCallback
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputSystemButtonCallback
---

# GameInputSystemButtonCallback

Title-defined callback called when the Guide or Share button is pressed or released.

## Syntax

```cpp
void GameInputSystemButtonCallback(
    GameInputCallbackToken callbackToken,
    void* context,
    IGameInputDevice* device,
    uint64_t timestamp,
    GameInputSystemButtons currentButtons,
    GameInputSystemButtons previousButtons
);
```

### Parameters

*callbackToken* &nbsp;&nbsp;\_In\_\
Type: GameInputCallbackToken

The callback token returned by [IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md).

*context* &nbsp;&nbsp;\_In\_\
Type: void*

The title defined context passed to [IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md).

*device* &nbsp;&nbsp;\_In\_\
Type: IGameInputDevice*

The device that triggered the event.

*timestamp* &nbsp;&nbsp;\_In\_\
Type: uint64_t

The microsecond timestamp associated with the event.

*currentButtons* &nbsp;&nbsp;\_In\_\
Type: GameInputSystemButtons

The set of system buttons that are currently pressed.

*previousButtons* &nbsp;&nbsp;\_In\_\
Type: GameInputSystemButtons

The set of system buttons that were previously pressed before this change.

### Return value

Type: void

## Remarks

The `GameInputSystemButtonCallback` function is the title-defined callback for the Guide or Share button (pressed or released) events. It is registered with the [IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md) method. This function is triggered by the conditions set from the registration method. For more information, see [IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md).

## Requirements

**Header:** GameInput.h

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Renamed `currentState` and `previousState` parameters to `currentButtons` and `previousButtons`. |
| **v0** | Introduced. |