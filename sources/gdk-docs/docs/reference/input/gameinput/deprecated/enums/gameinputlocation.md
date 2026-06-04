---
description: Defines physical location constants for controls on an input device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputLocation (Deprecated)
---

# GameInputLocation

> [!WARNING]
> **Deprecated.** This enumeration was removed in GameInput v1 and is not available in the current API.

Defines constants identifying the physical location of a control on an input device.

## Syntax

```cpp
enum GameInputLocation
{
    GameInputLocationUnknown        = -1,
    GameInputLocationChassis        = 0,
    GameInputLocationDisplay        = 1,
    GameInputLocationLeftHand       = 2,
    GameInputLocationRightHand      = 3,
    GameInputLocationLeftJoystick   = 4,
    GameInputLocationRightJoystick  = 5,
    GameInputLocationFrontFace      = 6,
    GameInputLocationBackFace       = 7,
};
```

## Constants

| Constant | Value | Description |
| --- | --- | --- |
| GameInputLocationUnknown | -1 | Location is unknown. |
| GameInputLocationChassis | 0 | Located on the device chassis. |
| GameInputLocationDisplay | 1 | Located on or near the display. |
| GameInputLocationLeftHand | 2 | Located on the left-hand grip. |
| GameInputLocationRightHand | 3 | Located on the right-hand grip. |
| GameInputLocationLeftJoystick | 4 | Located on the left thumbstick. |
| GameInputLocationRightJoystick | 5 | Located on the right thumbstick. |
| GameInputLocationFrontFace | 6 | Located on the front face of the device. |
| GameInputLocationBackFace | 7 | Located on the back face of the device. |

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputControllerAxisInfo](../structs/gameinputcontrolleraxisinfo.md)
[GameInputControllerButtonInfo](../structs/gameinputcontrollerbuttoninfo.md)
