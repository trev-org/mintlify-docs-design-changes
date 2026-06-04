---
description: Parameters for a haptic feedback effect (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputHapticFeedbackParams (Deprecated)
---

# GameInputHapticFeedbackParams

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v1 and is not available in the current API.

Describes the parameters of a haptic feedback effect to play on a device motor.

## Syntax

```cpp
typedef struct GameInputHapticFeedbackParams {
    uint32_t waveformIndex;
    uint64_t duration;
    float intensity;
    uint32_t playCount;
    uint64_t repeatDelay;
} GameInputHapticFeedbackParams;
```

## Members

**waveformIndex**\
Type: uint32_t

Index into the motor's waveform array (from `GameInputHapticFeedbackMotorInfo.waveformInfo`) identifying the waveform to play.

**duration**\
Type: uint64_t

Duration of the effect in microseconds. Set to 0 to use the waveform's default duration.

**intensity**\
Type: float

Intensity of the effect in the range [0.0, 1.0].

**playCount**\
Type: uint32_t

Number of times to repeat the waveform. Set to 0 for indefinite repetition.

**repeatDelay**\
Type: uint64_t

Delay in microseconds between repetitions.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[IGameInputDevice::SetHapticMotorState](../interfaces/igameinputdevice/methods/igameinputdevice_sethapticmotorstate.md)
[GameInputHapticFeedbackMotorInfo](gameinputhapticfeedbackmotorinfo.md)
