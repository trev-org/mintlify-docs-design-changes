---
author: JosephValverde
description: Enumerates gamepad Axes.
edited: 9/17/2025
kindex: GameInputGamepadAxes
ms.author: josephva
ms.date: 9/17/2025
ms.topic: reference
permissioned-type: public
title: GameInputGamepadAxes
---

# GameInputGamepadAxes

Enumerates gamepad axes. These values represent axes commonly found on gamepad peripherals. Unlike buttons, which can also represent state, these only represent an axis element on the gamepad.

## Syntax

```cpp
enum GameInputGamepadAxes
{
    GameInputGamepadAxesNone         = 0x00000000,
    GameInputGamepadLeftTrigger      = 0x00000001,
    GameInputGamepadRightTrigger     = 0x00000002,
    GameInputGamepadLeftThumbstickX  = 0x00000004,
    GameInputGamepadLeftThumbstickY  = 0x00000008,
    GameInputGamepadRightThumbstickX = 0x00000010,
    GameInputGamepadRightThumbstickY = 0x00000020,
};
```

## Constants

| Constant                          | Description                                  |
| ---                               | ---                                          |
| GameInputGamepadAxesNone          | Indicates the absence of an axis             |
| GameInputGamepadLeftTrigger       | Indicates the analog left trigger axis       |
| GameInputGamepadRightTrigger      | Indicates the analog right trigger axis      |
| GameInputGamepadLeftThumbstickX   | Indicates the X axis of the left thumbstick  |
| GameInputGamepadLeftThumbstickY   | Indicates the Y axis of the left thumbstick  |
| GameInputGamepadRightThumbstickX  | Indicates the X axis of the right thumbstick |
| GameInputGamepadRightThumbstickY  | Indicates the Y axis of the right thumbstick |

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## Remarks

This enumeration is used with the [IGameInputMapper::GetGamepadAxisMappingInfo](../interfaces/igameinputmapper/methods/igameinputmapper_getgamepadaxismappinginfo.md) method to retrieve mapping information for a specific gamepad axis.

## See also

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../gameinput_members.md)
## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |