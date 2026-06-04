---
author: AlexYatskov
description: Defines the parameters for a ramp force-feedback effect.
edited: 03/06/2025
kindex: GameInputForceFeedbackRampParams
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputForceFeedbackRampParams
---

# GameInputForceFeedbackRampParams

Defines the parameters for a ramp force-feedback effect.

## Syntax

```cpp
struct GameInputForceFeedbackRampParams
{
    GameInputForceFeedbackEnvelope  envelope;
    GameInputForceFeedbackMagnitude startMagnitude;
    GameInputForceFeedbackMagnitude endMagnitude;
};
```

### Members

*envelope*<br>
Type: [GameInputForceFeedbackEnvelope](gameinputforcefeedbackenvelope.md)

The envelope that modifies a force-feedback effect.

*startMagnitude*<br>
Type: [GameInputForceFeedbackMagnitude](gameinputforcefeedbackmagnitude.md)

The starting magnitude of the force-feedback effect.

*endMagnitude*<br>
Type: [GameInputForceFeedbackMagnitude](gameinputforcefeedbackmagnitude.md)

The ending magnitude of the force-feedback effect.

## Remarks

The `GameInputForceFeedbackRampParams` structure is a member of  [GameInputForceFeedbackParams](gameinputforcefeedbackparams.md). Forced-feedback effects are defined by their parameters. These effects are stored in the `GameInputForceFeedbackParams` structure. The actual parameters for each type of force feedback effect vary slightly. The parameters for all kinds of effects define the magnitude of the effect along the motor's supported axes, and most allow for an envelope that affects the strength of the effect over time.

[Advanced GameInput topics](../../../../features/common/input/advanced/input-advanced-topics.md)  
[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInputForceFeedbackParams](gameinputforcefeedbackparams.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |