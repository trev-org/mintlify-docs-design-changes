---
author: AlexYatskov
description: "IGameInputReading GetControllerSwitchState API reference (v1)."
edited: "03/06/2025"
kindex: "GetControllerSwitchState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetControllerSwitchState (v1)"
---

# IGameInputReading::GetControllerSwitchState (v1)

Retrieves the switch state from a game controller.

## Syntax

```cpp
uint32_t GetControllerSwitchState(
    uint32_t stateArrayCount,
    GameInputSwitchPosition* stateArray
);
```

### Parameters

*stateArrayCount* &nbsp;&nbsp;\_In\_\
Type: uint32_t

The expected number of switches on the game controller.
This value can be retrieved by calling [IGameInputReading::GetControllerSwitchCount](igameinputreading_getcontrollerswitchcount-v1.md).

*stateArray* &nbsp;&nbsp;\_Out\_writes\_(stateArrayCount)
Type: [GameInputSwitchPosition*](../../../enums/gameinputswitchposition-v1.md)

Pointer to the array of switch states.

### Return value

Type: uint32_t

Returns the number of valid buffer entries.

## Remarks

Most analog controls on a game controller (joysticks, triggers, sliders, dials, etc.) are surfaced as axes, which are floating-point values linearly normalized to the range [0.0, 1.0]. Most digital inputs are surfaced as buttons, which are simple Boolean values. Hat switches are surfaced as switch values, and their position is represented by one of the [GameInputSwitchPosition](../../../enums/gameinputswitchposition-v1.md) enumeration values.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInputReading](../igameinputreading-v1.md)
