---
author: AlexYatskov
description: Sets the gain on a force feedback effect.
edited: 03/06/2025
kindex: IGameInputForceFeedbackEffect::SetGain
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputForceFeedbackEffect::SetGain
---

# IGameInputForceFeedbackEffect::SetGain

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

Two types of gain can affect the intensity of the force feedback effect. There is the gain that is set on a  motor by [IGameInputDevice::SetForceFeedbackMotorGain](../../igameinputdevice/methods/igameinputdevice_setforcefeedbackmotorgain.md) and the gain on the effect itself set by this function.

The effect of the two gains is multiplied. If the effect gain is set to 0.5 and the master gain of the motor is set to 0.5, then the effect will be played at 0.25 intensity. For more information, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)   
[IGameInputForceFeedbackEffect::GetGain](igameinputforcefeedbackeffect_getgain.md)  
[IGameInputDevice::SetForceFeedbackMotorGain](../../igameinputdevice/methods/igameinputdevice_setforcefeedbackmotorgain.md)  
[IGameInputForceFeedbackEffect](../igameinputforcefeedbackeffect.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |