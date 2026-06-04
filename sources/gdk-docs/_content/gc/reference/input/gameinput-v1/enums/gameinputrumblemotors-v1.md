---
author: AlexYatskov
description: "Enumerates the API supported rumble motors for an input device (v1)."
edited: "03/03/2025"
kindex: "GameInputRumbleMotors (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputRumbleMotors (v1)"
---

# GameInputRumbleMotors (v1)

Enumerates the API supported rumble motors for an input device.

## Syntax

```cpp
enum GameInputRumbleMotors
{
    GameInputRumbleNone          = 0x00000000,
    GameInputRumbleLowFrequency  = 0x00000001,
    GameInputRumbleHighFrequency = 0x00000002,
    GameInputRumbleLeftTrigger   = 0x00000004,
    GameInputRumbleRightTrigger  = 0x00000008
};
```

## Constants

| Constant                     | Description                        |
| ---                          | ---                                |
| GameInputRumbleNone          | No rumble motor.                   |
| GameInputRumbleLowFrequency  | Rumble motor with low frequency.   |
| GameInputRumbleHighFrequency | Rumble motor with high frequency.  |
| GameInputRumbleLeftTrigger   | Rumble motor in the left trigger.  |
| GameInputRumbleRightTrigger  | Rumble motor in the right trigger. |

## Remarks

Rumble enumeration is based on the Xbox game pad but other devices are supported. Member of [GameInputDeviceInfo](../structs/gameinputdeviceinfo-v1.md).

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
[GameInputDeviceInfo](../structs/gameinputdeviceinfo-v1.md).
