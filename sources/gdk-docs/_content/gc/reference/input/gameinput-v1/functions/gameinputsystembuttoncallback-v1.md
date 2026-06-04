---
author: AlexYatskov
description: "Title-defined callback for system button (pressed or released) events (v1)."
edited: "03/06/2025"
kindex: "GameInputSystemButtonCallback (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputSystemButtonCallback (v1)"
---

# GameInputSystemButtonCallback (v1)

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

The callback token returned by [IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback-v1.md).

*context* &nbsp;&nbsp;\_In\_\
Type: void*

The title defined context passed to [IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback-v1.md).

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

The `GameInputSystemButtonCallback` function is the title-defined callback for the Guide or Share button (pressed or released) events. It is registered with the [IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback-v1.md) method. This function is triggered by the conditions set from the registration method. For more information, see [IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback-v1.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
