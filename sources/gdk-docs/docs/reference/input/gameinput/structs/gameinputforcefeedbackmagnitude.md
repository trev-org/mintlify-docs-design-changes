---
author: AlexYatskov
description: Defines the magnitude of the force exhibited by a force-feedback effect.
edited: 03/06/2025
kindex: GameInputForceFeedbackMagnitude
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputForceFeedbackMagnitude
---

# GameInputForceFeedbackMagnitude

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

*linearX*<br>
Type: float

Magnitude of the force-feedback effect in the linear-X direction.

*linearY*<br>
Type: float

Magnitude of the force-feedback effect in the linear-Y direction.

*linearZ*<br>
Type: float

Magnitude of the force-feedback effect in the linear-Z direction.

*angularX*<br>
Type: float

Magnitude of the force-feedback effect in the angular-X direction.

*angularY*<br>
Type: float

Magnitude of the force-feedback effect in the angular-Y direction.

*angularZ*<br>
Type: float

Magnitude of the force-feedback effect in the angular-Z direction.

*normal*<br>
Type: float

Magnitude for the force-feedback effect of a directionless force-feedback effect.

## Remarks

`GameInputForceFeedbackMagnitude` defines the magnitude of force exhibited by a force-feedback effect. It is a member of the `GameInputForceFeedbackConditionParams`, `GameInputForceFeedbackConstantParams`, `GameInputForceFeedbackPeriodicParams`, and `GameInputForceFeedbackRampParams` structures. For more information, see [Advanced GameInput topics](../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInputForceFeedbackConditionParams](gameinputforcefeedbackconditionparams.md)  
[GameInputForceFeedbackConstantParams](gameinputforcefeedbackconstantparams.md)    
[GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams.md)    
[GameInputForceFeedbackRampParams](gameinputforcefeedbackrampparams.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |