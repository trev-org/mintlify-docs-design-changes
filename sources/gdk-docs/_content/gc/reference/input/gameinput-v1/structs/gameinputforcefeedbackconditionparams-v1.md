---
author: AlexYatskov
description: "Defines some physical aspect of a force-feedback effect (v1)."
edited: "03/06/2025"
kindex: "GameInputForceFeedbackConditionParams (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputForceFeedbackConditionParams (v1)"
---

# GameInputForceFeedbackConditionParams (v1)

Defines some physical aspect of a force-feedback effect.

## Syntax

```cpp
struct GameInputForceFeedbackConditionParams
{
    GameInputForceFeedbackMagnitude magnitude;
    float                           positiveCoefficient;
    float                           negativeCoefficient;
    float                           maxPositiveMagnitude;
    float                           maxNegativeMagnitude;
    float                           deadZone;
    float                           bias;
};
```

### Members

*magnitude*
Type: [GameInputForceFeedbackMagnitude](gameinputforcefeedbackmagnitude-v1.md)

Magnitude of the force-feedback effect.

*positiveCoefficient*
Type: float

Positive multiplier on the force-feedback effect.

*negativeCoefficient*
Type: float

Negative multiplier on the force-feedback effect.

*maxPositiveMagnitude*
Type: float

The maximum amount of force the effect can produce in a positive direction.

*maxNegativeMagnitude*
Type: float

The maximum amount of force the effect can produce in a negative direction.

*deadZone*
Type: float

The area the force-feedback effects do not respond.

*bias*
Type: float

The offset applied to the force-feedback effect.

## Remarks

`GameInputForceFeedbackConditionParams` is a member of the [GameInputForceFeedbackParams](gameinputforcefeedbackparams-v1.md) structure.

The semantics of the `GameInputForceFeedbackConditionParams` structure vary depending on the specific type of conditional effect, but it can be helpful to think of how they apply to the commonly used spring effect, `GameInputForceFeedbackSpring`. In the general use case, this effect attempts to recenter the wheel when the player displaces the wheel to the left or right. Let's examine how the `GameInputForceFeedbackConditionParams` parameters drive this behavior.

The logical center position of the wheel is determined by the `bias`. A value of `0.0` corresponds to the naturally centered position (equidistant from left and right extents), a value of `1.0` will put the wheel's center all the way to the right, while a value of `-1.0` will put the wheel's center all the way to the left.

The `deadZone` determines how much the wheel can move left or right off logical center before feedback begins to be applied. A value of `0.0` will trigger immediate feedback upon the wheel leaving center position, a value of `0.5` will allow the wheel to move half-way before feedback engages, and a value of `1.0` will entirely disable feedback.

The `positiveCoefficient` and `negativeCoefficient` are used in combination with the wheel's distance from its logical center to determine the direction and force of the feedback for the right and left directions respectively. For the spring effect, we want the wheel to counter the player's steering, so values of `-1.0` are appropriate for both. Note that if positive values are given, the wheel will actually accelerate in the direction it is being steered as opposed to resisting the motion.

The `maxPositiveMagnitude` and `maxNegativeMagnitude` cap the maximum amount of force to ever be applied for this particular effect in the positive and negative directions, respectively.

The `CreateForceFeedbackEffect` method allocates hardware resources in the motor for a new force-feedback effect with a specified set of parameters. It returns an `IGameInputForceFeedbackEffect` instance to track these resources. A `HRESULT` error is returned if there are insufficient hardware resources to create the effect or if the requested effect is not supported by the hardware. Force-feedback effects are defined by their parameters and are stored in the `GameInputForceFeedbackParams` structure.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Advanced GameInput topics](../../../../input/advanced/input-advanced-topics.md)
[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
