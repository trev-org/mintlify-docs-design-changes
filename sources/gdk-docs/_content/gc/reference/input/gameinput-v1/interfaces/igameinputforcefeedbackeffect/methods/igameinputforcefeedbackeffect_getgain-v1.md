---
author: AlexYatskov
description: "Retrieves the gain set on a force feedback effect (v1)."
edited: "03/06/2025"
kindex: "IGameInputForceFeedbackEffect::GetGain (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInputForceFeedbackEffect::GetGain (v1)"
---

# IGameInputForceFeedbackEffect::GetGain (v1)

Retrieves the gain set on a force feedback effect.

## Syntax

```cpp
float GetGain();
```

### Parameters

This method has no parameters.

### Return value

Type: float

The gain set on a force-feedback motor device.

## Remarks

The `IGameInputForceFeedbackEffect::GetGain` method retrieves the gain on a force feedback motor. The gain can have a value between 0.0 and 1.0. For more information, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInputForceFeedbackEffect::SetGain](igameinputforcefeedbackeffect_setgain-v1.md)
[IGameInputDevice::SetForceFeedbackMotorGain](../../igameinputdevice/methods/igameinputdevice_setforcefeedbackmotorgain-v1.md)
[IGameInputForceFeedbackEffect](../igameinputforcefeedbackeffect-v1.md)
