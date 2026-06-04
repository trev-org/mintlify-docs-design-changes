---
author: AlexYatskov
description: "Describes and tracks a force feedback effect on a supporting input device (v1)."
edited: "03/06/2025"
kindex: "IGameInputForceFeedbackEffect (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: article
permissioned-type: public
title: "IGameInputForceFeedbackEffect (Interface contents) (v1)"
---

# IGameInputForceFeedbackEffect (v1)

Describes and tracks a force feedback effect on a supporting input device.

## Syntax

```cpp
class IGameInputForceFeedbackEffect : public IUnknown
```

## Methods

| Method                                                                     | Description                                                |
| ---                                                                        | ---                                                        |
| [GetDevice](methods/igameinputforcefeedbackeffect_getdevice-v1.md)         | Gets the device linked to the force feedback effect.       |
| [GetGain](methods/igameinputforcefeedbackeffect_getgain-v1.md)             | Gets the gain value for a force feedback effect.           |
| [GetMotorIndex](methods/igameinputforcefeedbackeffect_getmotorindex-v1.md) | Gets the motor index linked to the force feedback effect.  |
| [GetParams](methods/igameinputforcefeedbackeffect_getparams-v1.md)         | Gets the parameters that define the force feedback effect. |
| [GetState](methods/igameinputforcefeedbackeffect_getstate-v1.md)           | Gets the current state of a force feedback effect.         |
| [SetGain](methods/igameinputforcefeedbackeffect_setgain-v1.md)             | Sets the gain value for a force feedback effect.           |
| [SetParams](methods/igameinputforcefeedbackeffect_setparams-v1.md)         | Sets new parameters for a force feedback effect.           |
| [SetState](methods/igameinputforcefeedbackeffect_setstate-v1.md)           | Sets the state of a force feedback effect.                 |

## Remarks

If the tracked device is disconnected before the feedback effect finishes it's lifetime the feedback effect is orphaned and will always report its state as "stopped" until the resources are released.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../input/overviews/input-overview.md)
[GameInput](../../gameinput_members-v1.md)
