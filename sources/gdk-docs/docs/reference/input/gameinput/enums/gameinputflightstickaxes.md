---
author: JosephValverde
description: Enumerates flight stick Axes.
edited: 9/17/2025
kindex: GameInputFlightStickAxes
ms.author: josephva
ms.date: 9/17/2025
ms.topic: reference
permissioned-type: public
title: GameInputFlightStickAxes
---

# GameInputFlightStickAxes

Enumerates flight stick axes. These values represent axes commonly found on flight stick peripherals. Unlike buttons, which can also represent state, these only represent an axis element in the flight stick.

## Syntax

```cpp
enum GameInputFlightStickAxes
{
    GameInputFlightStickAxesNone = 0x00000000,
    GameInputFlightStickRoll     = 0x00000010,
    GameInputFlightStickPitch    = 0x00000020,
    GameInputFlightStickYaw      = 0x00000040,
    GameInputFlightStickThrottle = 0x00000080,
};
```

## Constants

| Constant                     | Description                      |
| ---                          | ---                              |
| GameInputFlightStickAxesNone | Indicates the absence of an axis |
| GameInputFlightStickRoll     | Indicates the roll axis          |
| GameInputFlightStickPitch    | Indicates the pitch axis         |
| GameInputFlightStickYaw      | Indicates the yaw axis           |
| GameInputFlightStickThrottle | Indicates the throttle axis      |

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## Remarks

This enumeration is used with the [IGameInputMapper::GetFlightStickAxisMappingInfo](../interfaces/igameinputmapper/methods/igameinputmapper_getflightstickaxismappinginfo.md) method to retrieve mapping information for a specific flight stick axis.

## See also

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../gameinput_members.md)
## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |