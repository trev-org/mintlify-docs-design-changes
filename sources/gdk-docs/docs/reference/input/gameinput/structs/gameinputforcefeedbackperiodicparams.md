---
author: AlexYatskov
description: The parameters that define periodic force-feedback effect.
edited: 03/06/2025
kindex: GameInputForceFeedbackPeriodicParams
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputForceFeedbackPeriodicParams
---

# GameInputForceFeedbackPeriodicParams

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

*envelope*<br>
Type: [GameInputForceFeedbackEnvelope](gameinputforcefeedbackenvelope.md)

The modifiers on a force-feedback effect, such as attack, sustain, or release.

*magnitude*<br>
Type: [GameInputForceFeedbackMagnitude](gameinputforcefeedbackmagnitude.md)

The amount of force applied by the force-feedback effect.

*frequency*<br>
Type: float

Frequency of the force-feedback period measured in hertz.

*phase*<br>
Type: float

The time in the cycle of the periodic effect at which the playback begins.

*bias*<br>
Type: float

Offset of the force-feedback period.

## Remarks

The `GameInputForceFeedbackPeriodicParams` structure is a member of  [GameInputForceFeedbackParams](gameinputforcefeedbackparams.md). Forced-feedback effects are defined by their parameters. These effects are stored in the `GameInputForceFeedbackParams` structure. The actual parameters for each type of force feedback effect vary slightly. The parameters for all kinds of effects define the magnitude of the effect along the motor's supported axes, and most allow for an envelope that affects the strength of the effect over time.

## Requirements

**Header:** GameInput.h

[Advanced GameInput topics](../../../../features/common/input/advanced/input-advanced-topics.md)  
[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInputForceFeedbackParams](gameinputforcefeedbackparams.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |