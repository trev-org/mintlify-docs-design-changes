---
author: AlexYatskov
description: "Enumeration of direction types of force feedback motors available on an input device (v1)."
edited: "03/03/2025"
kindex: "GameInputFeedbackAxes (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputFeedbackAxes (v1)"
---

# GameInputFeedbackAxes (v1)

Enumeration of direction types of force feedback motors available on an input device.

## Syntax

```cpp
enum GameInputFeedbackAxes
{
    GameInputFeedbackAxisNone     = 0x00000000,
    GameInputFeedbackAxisLinearX  = 0x00000001,
    GameInputFeedbackAxisLinearY  = 0x00000002,
    GameInputFeedbackAxisLinearZ  = 0x00000004,
    GameInputFeedbackAxisAngularX = 0x00000008,
    GameInputFeedbackAxisAngularY = 0x00000010,
    GameInputFeedbackAxisAngularZ = 0x00000020,
    GameInputFeedbackAxisNormal   = 0x00000040
};
```

## Constants

| Constant                      | Description                                                     |
| ---                           | ---                                                             |
| GameInputFeedbackAxisNone     | Indicates the absence of a feedback axis.                       |
| GameInputFeedbackAxisLinearX  | Indicates a linear feedback motor moving in the X direction.    |
| GameInputFeedbackAxisLinearY  | Indicates a linear feedback motor moving in the Y direction.    |
| GameInputFeedbackAxisLinearZ  | Indicates a linear feedback motor moving in the Z direction.    |
| GameInputFeedbackAxisAngularX | Indicates an angular feedback motor rotating around the X axis. |
| GameInputFeedbackAxisAngularY | Indicates an angular feedback motor rotating around the Y axis. |
| GameInputFeedbackAxisAngularZ | Indicates an angular feedback motor rotating around the Z axis. |
| GameInputFeedbackAxisNormal   | Indicates a dimensionless feedback motor.                       |

## Remarks

Force feedback is typically only found on racing wheels, with one single-axis motor connected to the steering wheel itself. However, the GameInput API supports devices with any number of force feedback motors, and assigns a unique index number to each motor on a device. The "normal" axis is used for special cases where the applied force is dimensionless, such as a pressure suit for a flight simulator. Member of [GameInputForceFeedbackMotorInfo](../structs/gameinputforcefeedbackmotorinfo-v1.md).

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
[GameInputForceFeedbackMotorInfo](../structs/gameinputforcefeedbackmotorinfo-v1.md)
