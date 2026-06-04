---
author: AlexYatskov
description: "Defines the API-supported attributes of a force-feedback effect (v1)."
edited: "03/06/2025"
kindex: "GameInputForceFeedbackParams (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputForceFeedbackParams (v1)"
---

# GameInputForceFeedbackParams (v1)

Defines the API-supported attributes of a force-feedback effect.

## Syntax

```cpp
struct GameInputForceFeedbackParams
{
    GameInputForceFeedbackEffectKind kind;
    union
    {
        GameInputForceFeedbackConstantParams  constant;
        GameInputForceFeedbackRampParams      ramp;
        GameInputForceFeedbackPeriodicParams  sineWave;
        GameInputForceFeedbackPeriodicParams  squareWave;
        GameInputForceFeedbackPeriodicParams  triangleWave;
        GameInputForceFeedbackPeriodicParams  sawtoothUpWave;
        GameInputForceFeedbackPeriodicParams  sawtoothDownWave;
        GameInputForceFeedbackConditionParams spring;
        GameInputForceFeedbackConditionParams friction;
        GameInputForceFeedbackConditionParams damper;
        GameInputForceFeedbackConditionParams inertia;
    } data;
};
```

### Members

*kind*
Type: [GameInputForceFeedbackEffectKind](../enums/gameinputforcefeedbackeffectkind-v1.md)

Defines the kind of a force-feedback effect.

*constant*
Type: [GameInputForceFeedbackConstantParams](gameinputforcefeedbackconstantparams-v1.md)

Constant force-feedback effect. Force is applied at a constant level for the duration of the effect.

*ramp*
Type: [GameInputForceFeedbackRampParams](gameinputforcefeedbackrampparams-v1.md)

Ramp force-feedback effect. Force is applied gradually by being increased or decreased over the duration of the effect.

*sineWave*
Type: [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams-v1.md)

Sine-wave force-feedback effect. Force is applied in a sine-wave pattern.

*squareWave*
Type: [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams-v1.md)

Square-wave force-feedback effect. Force is applied in a square-wave pattern.

*triangleWave*
Type: [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams-v1.md)

Triangle-wave force-feedback effect. Force is applied in a triangle-wave pattern.

*sawtoothUpWave*
Type: [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams-v1.md)

Upward-sawtooth-wave force-feedback effect. Force is applied in an upward-sawtooth-wave pattern.

*sawtoothDownWave*
Type: [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams-v1.md)

Downward-sawtooth-wave force-feedback effect. Force is applied in a downward-sawtooth-wave pattern.

*spring*
Type: [GameInputForceFeedbackConditionParams](gameinputforcefeedbackconditionparams-v1.md)

Spring force-feedback effect. Force is applied in opposition to a set state.

*friction*
Type: [GameInputForceFeedbackConditionParams](gameinputforcefeedbackconditionparams-v1.md)

Friction force-feedback effect. Force is applied to mimic friction.

*damper*
Type: [GameInputForceFeedbackConditionParams](gameinputforcefeedbackconditionparams-v1.md)

Damper force-feedback effect. Force is applied to mimic a damper effect.

*inertia*
Type: [GameInputForceFeedbackConditionParams](gameinputforcefeedbackconditionparams-v1.md)

Inertia force-feedback effect. Force is applied to mimic an inertia effect.

## Remarks

Forced-feedback effects are defined by their parameters. These effects are stored in the `GameInputForceFeedbackParams` structure. The actual parameters for each type of force-feedback effect vary slightly. The parameters for all kinds of effects define the magnitude of the effect along the motor's supported axes, and most allow for an envelope that affects the strength of the effect over time.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Advanced GameInput topics](../../../../input/advanced/input-advanced-topics.md)
[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInputForceFeedbackEffectKind](../enums/gameinputforcefeedbackeffectkind-v1.md)
[GameInput](../gameinput_members-v1.md)
