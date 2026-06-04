---
author: AlexYatskov
description: "IGameInputReading GetControllerAxisState API reference (v1)."
edited: "03/06/2025"
kindex: "GetControllerAxisState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetControllerAxisState (v1)"
---

# IGameInputReading::GetControllerAxisState (v1)

Retrieve axis state information from a game controller.

## Syntax

```cpp
uint32_t GetControllerAxisState(
    uint32_t stateArrayCount,
    float* stateArray
);
```

### Parameters

*stateArrayCount* &nbsp;&nbsp;\_In\_\
Type: uint32_t

The expected number of state arrays to capture the axes on a game controller.
This number can be retrieved from [IGameInputReading::GetControllerAxisCount](igameinputreading_getcontrolleraxiscount-v1.md)

*stateArray* &nbsp;&nbsp;\_Out\_writes\_(stateArrayCount)
Type: float*

Pointer to the arrays which contain the axis state data.

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
