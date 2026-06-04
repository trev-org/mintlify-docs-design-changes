---
description: Describes a haptic waveform supported by a haptic motor (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputHapticWaveformInfo (Deprecated)
---

# GameInputHapticWaveformInfo

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v1 and is not available in the current API.

Describes a haptic waveform that can be played on a haptic feedback motor.

## Syntax

```cpp
typedef struct GameInputHapticWaveformInfo {
    GameInputUsage usage;
    bool isDurationSupported;
    bool isIntensitySupported;
    bool isRepeatSupported;
    bool isRepeatDelaySupported;
    uint64_t defaultDuration;
} GameInputHapticWaveformInfo;
```

## Members

**usage**\
Type: GameInputUsage

The HID usage identifying this waveform.

**isDurationSupported**\
Type: bool

Whether the `duration` field in [GameInputHapticFeedbackParams](gameinputhapticfeedbackparams.md) is supported for this waveform.

**isIntensitySupported**\
Type: bool

Whether the `intensity` field in [GameInputHapticFeedbackParams](gameinputhapticfeedbackparams.md) is supported.

**isRepeatSupported**\
Type: bool

Whether the `playCount` field is supported.

**isRepeatDelaySupported**\
Type: bool

Whether the `repeatDelay` field is supported.

**defaultDuration**\
Type: uint64_t

The default playback duration of the waveform in microseconds.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputHapticFeedbackMotorInfo](gameinputhapticfeedbackmotorinfo.md)
[GameInputHapticFeedbackParams](gameinputhapticfeedbackparams.md)
