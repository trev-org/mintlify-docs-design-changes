---
author: AlexYatskov
description: "The parameters that define periodic force-feedback effect (v1)."
edited: "03/06/2025"
kindex: "GameInputForceFeedbackPeriodicParams (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputForceFeedbackPeriodicParams (v1)"
---

# GameInputForceFeedbackPeriodicParams (v1)

The parameters that define periodic force-feedback effects.

## Syntax

```cpp
struct GameInputForceFeedbackPeriodicParams
{
    GameInputForceFeedbackEnvelope  envelope;
    GameInputForceFeedbackMagnitude magnitude;
    float                           frequency;
    float                           phase;
    float                           bias;
};
```

### Members

*envelope*
Type: [GameInputForceFeedbackEnvelope](gameinputforcefeedbackenvelope-v1.md)

The modifiers on a force-feedback effect, such as attack, sustain, or release.

*magnitude*
Type: [GameInputForceFeedbackMagnitude](gameinputforcefeedbackmagnitude-v1.md)

The amount of force applied by the force-feedback effect.

*frequency*
Type: float

Frequency of the force-feedback period measured in hertz.

*phase*
Type: float

The time in the cycle of the periodic effect at which the playback begins.

*bias*
Type: float

Offset of the force-feedback period.

## Remarks

The `GameInputForceFeedbackPeriodicParams` structure is a member of  [GameInputForceFeedbackParams](gameinputforcefeedbackparams-v1.md). Forced-feedback effects are defined by their parameters. These effects are stored in the `GameInputForceFeedbackParams` structure. The actual parameters for each type of force feedback effect vary slightly. The parameters for all kinds of effects define the magnitude of the effect along the motor's supported axes, and most allow for an envelope that affects the strength of the effect over time.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Advanced GameInput topics](../../../../input/advanced/input-advanced-topics.md)
[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInputForceFeedbackParams](gameinputforcefeedbackparams-v1.md)
[GameInput](../gameinput_members-v1.md)
