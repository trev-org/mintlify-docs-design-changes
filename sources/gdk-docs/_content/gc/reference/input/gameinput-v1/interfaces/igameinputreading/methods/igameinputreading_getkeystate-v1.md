---
author: AlexYatskov
description: "Retrieves the state of active keys on a game controller input (v1)."
edited: "03/06/2025"
kindex: "GetKeyState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetKeyState (v1)"
---

# IGameInputReading::GetKeyState (v1)

Retrieves the state of active keys on a keyboard input.

## Syntax

```cpp
uint32_t GetKeyState(
    uint32_t stateArrayCount,
    GameInputKeyState* stateArray
);
```

### Parameters

*stateArrayCount* &nbsp;&nbsp;\_In\_\
Type: uint32_t

Returns the number of keys active on a keyboard. This is acquired by calling the [IGameInputReading::GetKeyCount](igameinputreading_getkeycount-v1.md) method.

*stateArray* &nbsp;&nbsp;\_Out\_writes\_(stateArrayCount)
Type: [GameInputKeyState*](../../../structs/gameinputkeystate-v1.md)

Pointer to the [GameInputKeyState*](../../../structs/gameinputkeystate-v1.md) structure.

### Return value

Type: uint32_t

Number of valid buffer entries.

## Remarks

The `IGameInputReading::GetKeyState` method retrieves the state of active keys on a game controller input. Rudimentary keyboard state is meant solely for mapping keyboard input to game actions, like movement or firing a weapon. It is not meant for regular text input. A game needs a significant amount of code on top of this state to implement something as simple as a text box (to say nothing of complex features like IMEs). Other APIs should be used where that functionality is desired.

The state for each key is not stored at a fixed index within the array. Rather, the number of valid elements in the array grows as keys are pressed and shrinks as keys are released. New keys are added at the end of the array, and when a key is released everything shifts down to fill the gap. The first array element where the `scancode` and `vkey` values are both zero. This indicates the end of valid data in the array. Standard keyboards are only able to report four to six key presses at a time, and even high-end gaming keyboards rarely support more than 12-16 keys at once. As such, this approach typically keeps the maximum size of the array small (the maximum size can be queried via the `IGameInputDevice` interface). This is much more efficient than having applications iterate over an array of 256 values every time they check the keyboard state.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md)
[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInputReading](../igameinputreading-v1.md)
