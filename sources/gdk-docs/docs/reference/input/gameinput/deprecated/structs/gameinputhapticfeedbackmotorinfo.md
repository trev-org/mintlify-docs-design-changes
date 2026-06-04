---
description: Describes a haptic feedback motor on a device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputHapticFeedbackMotorInfo (Deprecated)
---

# GameInputHapticFeedbackMotorInfo

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v1 and is not available in the current API. Use [GameInputHapticInfo](../../structs/gameinputhapticinfo.md) instead.

Describes a haptic feedback motor on an input device.

## Syntax

```cpp
typedef struct GameInputHapticFeedbackMotorInfo {
    GameInputRumbleMotors mappedRumbleMotors;
    GameInputLocation location;
    uint32_t locationId;
    uint32_t waveformCount;
    const GameInputHapticWaveformInfo* waveformInfo;
} GameInputHapticFeedbackMotorInfo;
```

## Members

**mappedRumbleMotors**\
Type: [GameInputRumbleMotors](../../enums/gameinputrumblemotors.md)

Which rumble motors (if any) this haptic motor is mapped to.

**location**\
Type: [GameInputLocation](../enums/gameinputlocation.md)

The physical location of the motor on the device.

**locationId**\
Type: uint32_t

An identifier distinguishing motors at the same location.

**waveformCount**\
Type: uint32_t

Number of haptic waveforms supported by this motor.

**waveformInfo**\
Type: const [GameInputHapticWaveformInfo](gameinputhapticwaveforminfo.md)*

Pointer to an array of `waveformCount` waveform descriptors.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. Replaced by [GameInputHapticInfo](../../structs/gameinputhapticinfo.md). |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputHapticInfo](../../structs/gameinputhapticinfo.md)
[GameInputHapticWaveformInfo](gameinputhapticwaveforminfo.md)
[GameInputHapticFeedbackParams](gameinputhapticfeedbackparams.md)
