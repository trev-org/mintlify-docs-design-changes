---
description: Gets the motion/sensor state from an input reading (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputReading::GetMotionState (Deprecated)
---

# IGameInputReading::GetMotionState

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Gets the motion (accelerometer and gyroscope) state from the reading.

## Syntax

```cpp
bool GetMotionState(
    GameInputMotionState* state
);
```

### Parameters

*state* &nbsp;&nbsp;\_Out\_\
Type: [GameInputMotionState](../../../structs/gameinputmotionstate.md)*

A pointer to a [GameInputMotionState](../../../structs/gameinputmotionstate.md) structure to fill with motion data.

### Return value

Type: bool

Returns `true` if the reading contains motion state; `false` otherwise.

## Remarks

This method and the associated [GameInputMotionState](../../../structs/gameinputmotionstate.md) struct were removed in v1. Motion state was available on devices that exposed accelerometer and gyroscope axes.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[GameInputMotionState](../../../structs/gameinputmotionstate.md)  
[IGameInputReading](../../../../interfaces/igameinputreading/igameinputreading.md)  
