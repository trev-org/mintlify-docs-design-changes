---
author: JosephValverde
description: Enumerates racing wheel Axes.
edited: 9/17/2025
kindex: GameInputRacingWheelAxes
ms.author: josephva
ms.date: 9/17/2025
ms.topic: reference
permissioned-type: public
title: GameInputRacingWheelAxes
---

# GameInputRacingWheelAxes

Enumerates racing wheel axes. These values represent axes commonly found on racing wheel peripherals. Unlike buttons, which can also represent state, these only represent an axis element on the racing wheel.

## Syntax

```cpp
enum GameInputRacingWheelAxes
{
    GameInputRacingWheelAxesNone       = 0x00000000,
    GameInputRacingWheelSteering       = 0x00000100,
    GameInputRacingWheelThrottle       = 0x00000200,
    GameInputRacingWheelBrake          = 0x00000400,
    GameInputRacingWheelClutch         = 0x00000800,
    GameInputRacingWheelHandbrake      = 0x00001000,
    GameInputRacingWheelPatternShifter = 0x00002000,
};
```

## Constants

| Constant                             | Description                        |
| ---                                  | ---                                |
| GameInputRacingWheelAxesNone         | Indicates the absence of an axis   |
| GameInputRacingWheelSteering         | Indicates the steering wheel axis  |
| GameInputRacingWheelThrottle         | Indicates the throttle axis        |
| GameInputRacingWheelBrake            | Indicates the brake axis           |
| GameInputRacingWheelClutch           | Indicates the clutch axis          |
| GameInputRacingWheelHandbrake        | Indicates the handbrake axis       |
| GameInputRacingWheelPatternShifter   | Indicates the pattern shifter axis |

## Remarks

This enumeration is used with the [IGameInputMapper::GetRacingWheelAxisMappingInfo](../interfaces/igameinputmapper/methods/igameinputmapper_getracingwheelaxismappinginfo.md) method to retrieve mapping information for a specific racing wheel axis.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../gameinput_members.md)
## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |