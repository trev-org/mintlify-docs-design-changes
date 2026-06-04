---
author: AlexYatskov
description: "Defines the magnitude of the force exhibited by a force-feedback effect (v1)."
edited: "03/06/2025"
kindex: "GameInputForceFeedbackMagnitude (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputForceFeedbackMagnitude (v1)"
---

# GameInputForceFeedbackMagnitude (v1)

Defines the magnitude of the force exhibited by a force-feedback effect.

## Syntax

```cpp
struct GameInputForceFeedbackMagnitude
{
    float linearX;
    float linearY;
    float linearZ;
    float angularX;
    float angularY;
    float angularZ;
    float normal;
};
```

### Members

*linearX*
Type: float

Magnitude of the force-feedback effect in the linear-X direction.

*linearY*
Type: float

Magnitude of the force-feedback effect in the linear-Y direction.

*linearZ*
Type: float

Magnitude of the force-feedback effect in the linear-Z direction.

*angularX*
Type: float

Magnitude of the force-feedback effect in the angular-X direction.

*angularY*
Type: float

Magnitude of the force-feedback effect in the angular-Y direction.

*angularZ*
Type: float

Magnitude of the force-feedback effect in the angular-Z direction.

*normal*
Type: float

Magnitude for the force-feedback effect of a directionless force-feedback effect.

## Remarks

`GameInputForceFeedbackMagnitude` defines the magnitude of force exhibited by a force-feedback effect. It is a member of the `GameInputForceFeedbackConditionParams`, `GameInputForceFeedbackConstantParams`, `GameInputForceFeedbackPeriodicParams`, and `GameInputForceFeedbackRampParams` structures. For more information, see [Advanced GameInput topics](../../../../input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInputForceFeedbackConditionParams](gameinputforcefeedbackconditionparams-v1.md)
[GameInputForceFeedbackConstantParams](gameinputforcefeedbackconstantparams-v1.md)
[GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams-v1.md)
[GameInputForceFeedbackRampParams](gameinputforcefeedbackrampparams-v1.md)
[GameInput](../gameinput_members-v1.md)
