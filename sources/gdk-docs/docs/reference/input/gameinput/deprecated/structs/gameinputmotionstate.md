---
description: Describes the current motion sensor state from an input reading (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputMotionState (Deprecated)
---

# GameInputMotionState

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v1 and is not available in the current API.

Describes the current accelerometer, gyroscope, and magnetometer state from an input reading.

## Syntax

```cpp
typedef struct GameInputMotionState {
    float accelerationX;
    float accelerationY;
    float accelerationZ;
    float angularVelocityX;
    float angularVelocityY;
    float angularVelocityZ;
    float magneticFieldX;
    float magneticFieldY;
    float magneticFieldZ;
} GameInputMotionState;
```

## Members

**accelerationX, accelerationY, accelerationZ**\
Type: float

The measured linear acceleration in m/s² along each axis.

**angularVelocityX, angularVelocityY, angularVelocityZ**\
Type: float

The measured angular velocity in degrees/s around each axis.

**magneticFieldX, magneticFieldY, magneticFieldZ**\
Type: float

The measured magnetic field strength in gauss along each axis.

## Remarks

This structure was returned by the deprecated [IGameInputReading::GetMotionState](../interfaces/igameinputreading/methods/igameinputreading_getmotionstate.md) method. Both were removed in v1.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[IGameInputReading::GetMotionState](../interfaces/igameinputreading/methods/igameinputreading_getmotionstate.md)
[GameInputMotionInfo](gameinputmotioninfo.md)
