---
author: AlexYatskov
description: "Sets the gain on a force feedback effect (v1)."
edited: "03/06/2025"
kindex: "IGameInputForceFeedbackEffect::SetGain (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInputForceFeedbackEffect::SetGain (v1)"
---

# IGameInputForceFeedbackEffect::SetGain (v1)

Sets the gain on a force-feedback effect.

## Syntax

```cpp
void SetGain(
    float gain
);
```

### Parameters

*gain* &nbsp;&nbsp;\_In\_\
Type: float

The new gain applied to a force feedback effect.

### Return value

None

## Remarks

The gain on a force feedback motor can have a value between 0.0 and 1.0.

Two types of gain can affect the intensity of the force feedback effect. There is the gain that is set on a  motor by [IGameInputDevice::SetForceFeedbackMotorGain](../../igameinputdevice/methods/igameinputdevice_setforcefeedbackmotorgain-v1.md) and the gain on the effect itself set by this function.

The effect of the two gains is multiplied. If the effect gain is set to 0.5 and the master gain of the motor is set to 0.5, then the effect will be played at 0.25 intensity. For more information, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInputForceFeedbackEffect::GetGain](igameinputforcefeedbackeffect_getgain-v1.md)
[IGameInputDevice::SetForceFeedbackMotorGain](../../igameinputdevice/methods/igameinputdevice_setforcefeedbackmotorgain-v1.md)
[IGameInputForceFeedbackEffect](../igameinputforcefeedbackeffect-v1.md)
