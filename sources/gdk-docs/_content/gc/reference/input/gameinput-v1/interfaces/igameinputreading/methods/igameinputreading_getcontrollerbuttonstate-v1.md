---
author: AlexYatskov
description: "IGameInputReading GetControllerButtonState API reference (v1)."
edited: "03/06/2025"
kindex: "GetControllerButtonState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetControllerButtonState (v1)"
---

# IGameInputReading::GetControllerButtonState (v1)

Retrieves button state information from a game controller.

## Syntax

```cpp
uint32_t GetControllerButtonState(
    uint32_t stateArrayCount,
    bool* stateArray
);
```

### Parameters

*stateArrayCount* &nbsp;&nbsp;\_In\_\
Type: uint32_t

Expected count of buttons on a game controller.
This number can be retrieved by calling [IGameInputReading::GetControllerButtonCount](igameinputreading_getcontrollerbuttoncount-v1.md)

*stateArray* &nbsp;&nbsp;\_Out\_writes\_(stateArrayCount)
Type: bool*

Pointer to the array of button states.

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
