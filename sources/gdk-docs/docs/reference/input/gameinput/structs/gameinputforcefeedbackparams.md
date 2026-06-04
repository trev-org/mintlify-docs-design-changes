---
author: AlexYatskov
description: Defines the API-supported attributes of a force-feedback effect.
edited: 03/06/2025
kindex: GameInputForceFeedbackParams
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputForceFeedbackParams
---

# GameInputForceFeedbackParams

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

*kind*<br>
Type: [GameInputForceFeedbackEffectKind](../enums/gameinputforcefeedbackeffectkind.md)

Defines the kind of a force-feedback effect.

*constant*<br>
Type: [GameInputForceFeedbackConstantParams](gameinputforcefeedbackconstantparams.md)

Constant force-feedback effect. Force is applied at a constant level for the duration of the effect.

*ramp*<br>
Type: [GameInputForceFeedbackRampParams](gameinputforcefeedbackrampparams.md)

Ramp force-feedback effect. Force is applied gradually by being increased or decreased over the duration of the effect.

*sineWave*<br>
Type: [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams.md)

Sine-wave force-feedback effect. Force is applied in a sine-wave pattern.

*squareWave*<br>
Type: [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams.md)

Square-wave force-feedback effect. Force is applied in a square-wave pattern.

*triangleWave*<br>
Type: [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams.md)

Triangle-wave force-feedback effect. Force is applied in a triangle-wave pattern.

*sawtoothUpWave*<br>
Type: [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams.md)

Upward-sawtooth-wave force-feedback effect. Force is applied in an upward-sawtooth-wave pattern.

*sawtoothDownWave*<br>
Type: [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams.md)

Downward-sawtooth-wave force-feedback effect. Force is applied in a downward-sawtooth-wave pattern.

*spring*<br>
Type: [GameInputForceFeedbackConditionParams](gameinputforcefeedbackconditionparams.md)

Spring force-feedback effect. Force is applied in opposition to a set state.

*friction*<br>
Type: [GameInputForceFeedbackConditionParams](gameinputforcefeedbackconditionparams.md)

Friction force-feedback effect. Force is applied to mimic friction.

*damper*<br>
Type: [GameInputForceFeedbackConditionParams](gameinputforcefeedbackconditionparams.md)

Damper force-feedback effect. Force is applied to mimic a damper effect.

*inertia*<br>
Type: [GameInputForceFeedbackConditionParams](gameinputforcefeedbackconditionparams.md)

Inertia force-feedback effect. Force is applied to mimic an inertia effect.

## Remarks

Forced-feedback effects are defined by their parameters. These effects are stored in the `GameInputForceFeedbackParams` structure. The actual parameters for each type of force-feedback effect vary slightly. The parameters for all kinds of effects define the magnitude of the effect along the motor's supported axes, and most allow for an envelope that affects the strength of the effect over time.

## Requirements

**Header:** GameInput.h

[Advanced GameInput topics](../../../../features/common/input/advanced/input-advanced-topics.md)  
[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInputForceFeedbackEffectKind](../enums/gameinputforcefeedbackeffectkind.md)    
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |