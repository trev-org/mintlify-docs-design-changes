---
description: Defines accuracy levels for motion sensor data (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputMotionAccuracy (Deprecated)
---

# GameInputMotionAccuracy

> [!WARNING]
> **Deprecated.** This enumeration was removed in GameInput v1 and is not available in the current API.

Defines constants describing the accuracy of a motion sensor reading.

## Syntax

```cpp
enum GameInputMotionAccuracy
{
    GameInputMotionAccuracyUnknown      = -1,
    GameInputMotionAccuracyUnavailable  = 0,
    GameInputMotionAccuracyUnreliable   = 1,
    GameInputMotionAccuracyLow          = 2,
    GameInputMotionAccuracyMedium       = 3,
    GameInputMotionAccuracyHigh         = 4,
};
```

## Constants

| Constant | Value | Description |
| --- | --- | --- |
| GameInputMotionAccuracyUnknown | -1 | Accuracy is unknown. |
| GameInputMotionAccuracyUnavailable | 0 | Sensor data is not available. |
| GameInputMotionAccuracyUnreliable | 1 | Sensor data is unreliable. |
| GameInputMotionAccuracyLow | 2 | Low accuracy. |
| GameInputMotionAccuracyMedium | 3 | Medium accuracy. |
| GameInputMotionAccuracyHigh | 4 | High accuracy. |

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputMotionState](../structs/gameinputmotionstate.md)
