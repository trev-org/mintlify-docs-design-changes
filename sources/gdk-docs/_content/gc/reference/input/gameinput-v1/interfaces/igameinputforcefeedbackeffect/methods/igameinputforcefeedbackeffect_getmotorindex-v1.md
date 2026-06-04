---
author: AlexYatskov
description: "Retrieves the motor index associated with the force feedback effect (v1)."
edited: "03/06/2025"
kindex: "GetMotorIndex (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetMotorIndex (v1)"
---

# IGameInputForceFeedbackEffect::GetMotorIndex (v1)

Retrieves the motor index associated with the force feedback effect.

## Syntax

```cpp
uint32_t GetMotorIndex();
```

### Parameters

This method has no parameters.

### Return value

Type: uint32_t

Returns the index of the associated motor.

## Remarks

Every `IGameInputForceFeedbackEffect` instance retrieves a common set of information about the effect. The specific motor where the effect is loaded on the devices is done with the `GetMotorIndex` method. For more information, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInputForceFeedbackEffect](../igameinputforcefeedbackeffect-v1.md)
