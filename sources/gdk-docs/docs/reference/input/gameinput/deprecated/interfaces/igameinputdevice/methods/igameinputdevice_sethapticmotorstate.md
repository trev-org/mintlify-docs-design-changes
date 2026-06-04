---
description: Sets the haptic motor state on a device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputDevice::SetHapticMotorState (Deprecated)
---

# IGameInputDevice::SetHapticMotorState

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Sets the haptic motor state for the specified motor on the device.

## Syntax

```cpp
HRESULT SetHapticMotorState(
    uint32_t motorIndex,
    const GameInputHapticFeedbackParams* params
);
```

### Parameters

*motorIndex* &nbsp;&nbsp;\_In\_\
Type: uint32_t

The zero-based index of the haptic motor to set.

*params* &nbsp;&nbsp;\_In\_\
Type: const [GameInputHapticFeedbackParams](../../../structs/gameinputhapticfeedbackparams.md)*

A pointer to a [GameInputHapticFeedbackParams](../../../structs/gameinputhapticfeedbackparams.md) structure describing the haptic effect to play.

### Return value

Type: HRESULT

Returns E_NOTIMPL, as this method was never implemented in v0.

## Remarks

This method was removed in v1 along with the [GameInputHapticFeedbackParams](../../../structs/gameinputhapticfeedbackparams.md) struct. Haptic feedback in the current API is controlled through [IGameInputDevice::SetForceFeedbackMotorGain](../../../../interfaces/igameinputdevice/methods/igameinputdevice_setforcefeedbackmotorgain.md) and [IGameInputForceFeedbackEffect](../../../../interfaces/igameinputforcefeedbackeffect/igameinputforcefeedbackeffect.md).

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[GameInputHapticFeedbackParams](../../../structs/gameinputhapticfeedbackparams.md)  
[IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md)  
