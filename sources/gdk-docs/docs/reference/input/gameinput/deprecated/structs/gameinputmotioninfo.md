---
description: Describes measurable motion properties of a motion-enabled device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputMotionInfo (Deprecated)
---

# GameInputMotionInfo

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v1 and is not available in the current API.

Describes the measurable motion properties of a motion-capable input device.

## Syntax

```cpp
typedef struct GameInputMotionInfo {
    float maxAcceleration;
    float maxAngularVelocity;
    float maxMagneticFieldStrength;
} GameInputMotionInfo;
```

## Members

**maxAcceleration**\
Type: float

The maximum measurable linear acceleration in m/s².

**maxAngularVelocity**\
Type: float

The maximum measurable angular velocity in degrees/s.

**maxMagneticFieldStrength**\
Type: float

The maximum measurable magnetic field strength in gauss.

## Remarks

This structure appeared in the `motionInfo` field of the v0 `GameInputDeviceInfo`. It was removed in v1 along with all motion-related members. The current [GameInputDeviceInfo](../../structs/gameinputdeviceinfo.md) does not have a corresponding field.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputMotionState](gameinputmotionstate.md)
