---
author: AlexYatskov
description: "Sets the desired intensities of the four rumble motors on the device (v1)."
edited: "03/06/2025"
kindex: "SetRumbleState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "SetRumbleState (v1)"
---

# SetRumbleState (v1)

Sets the desired intensities of the four rumble motors on the device.

## Syntax

```cpp
void SetRumbleState(
    const GameInputRumbleParams* params
);
```

### Parameters

*params* &nbsp;&nbsp;\_In\_opt\_\
Type: [GameInputRumbleParams*](../../../structs/gameinputrumbleparams-v1.md)

Structure containing the desired intensities for each rumble motor. Rumble motor intensity ranges from 0.0 to 1.0.

### Return value

Type: void

## Remarks

The `SetRumbleState` method sets the desired intensities of the four rumble motors on the device. Like other types of feedback, this can be called by an application at any time, but it will only be applied to the device while the application is in focus.

To keep things as simple as possible, applications are not required to check which rumble motors a device supports and might specify an intensity for all four motors. If the device lacks any of the four motors, the GameInput implementation will attempt to adapt by adding additional intensity to the other motor(s), so that some amount of feedback is still felt by the user. For example, trigger vibration values are emulated on 2-motor gamepads by adding a small amount of additional vibration intensity to the high-frequency vibration motor.

On devices that have been disconnected, or devices with no rumble motors, calling the `SetRumbleState` method has no effect. Motor intensity values are in the range of [0.0, 1.0]. Any values supplied outside of this range are clamped to the nearest valid value.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[GameInputRumbleParams](../../../structs/gameinputrumbleparams-v1.md)
[IGameInputDevice](../igameinputdevice-v1.md)
