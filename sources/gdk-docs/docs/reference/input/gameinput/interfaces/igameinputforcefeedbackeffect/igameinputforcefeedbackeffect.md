---
author: AlexYatskov
description: Describes and tracks a force feedback effect on a supporting input device.
edited: 03/06/2025
kindex: IGameInputForceFeedbackEffect
ms.date: 10/21/2025
ms.topic: article
permissioned-type: public
title: IGameInputForceFeedbackEffect (Interface contents)
---

# IGameInputForceFeedbackEffect

Describes and tracks a force feedback effect on a supporting input device.

## Syntax

```cpp
class IGameInputForceFeedbackEffect : public IUnknown
```

## Methods

| Method                                                                     | Description                                                |
| ---                                                                        | ---                                                        |
| [GetDevice](methods/igameinputforcefeedbackeffect_getdevice.md)         | Gets the device linked to the force feedback effect.       |
| [GetGain](methods/igameinputforcefeedbackeffect_getgain.md)             | Gets the gain value for a force feedback effect.           |
| [GetMotorIndex](methods/igameinputforcefeedbackeffect_getmotorindex.md) | Gets the motor index linked to the force feedback effect.  |
| [GetParams](methods/igameinputforcefeedbackeffect_getparams.md)         | Gets the parameters that define the force feedback effect. |
| [GetState](methods/igameinputforcefeedbackeffect_getstate.md)           | Gets the current state of a force feedback effect.         |
| [SetGain](methods/igameinputforcefeedbackeffect_setgain.md)             | Sets the gain value for a force feedback effect.           |
| [SetParams](methods/igameinputforcefeedbackeffect_setparams.md)         | Sets new parameters for a force feedback effect.           |
| [SetState](methods/igameinputforcefeedbackeffect_setstate.md)           | Sets the state of a force feedback effect.                 |

## Remarks

If the tracked device is disconnected before the feedback effect finishes it's lifetime the feedback effect is orphaned and will always report its state as "stopped" until the resources are released.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Input API Overview](../../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |