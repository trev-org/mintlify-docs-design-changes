---
author: AlexYatskov
description: "Defines the parameters for a ramp force-feedback effect (v1)."
edited: "03/06/2025"
kindex: "GameInputForceFeedbackRampParams (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputForceFeedbackRampParams (v1)"
---

# GameInputForceFeedbackRampParams (v1)

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

*envelope*
Type: [GameInputForceFeedbackEnvelope](gameinputforcefeedbackenvelope-v1.md)

The envelope that modifies a force-feedback effect.

*startMagnitude*
Type: [GameInputForceFeedbackMagnitude](gameinputforcefeedbackmagnitude-v1.md)

The starting magnitude of the force-feedback effect.

*endMagnitude*
Type: [GameInputForceFeedbackMagnitude](gameinputforcefeedbackmagnitude-v1.md)

The ending magnitude of the force-feedback effect.

## Remarks

The `GameInputForceFeedbackRampParams` structure is a member of  [GameInputForceFeedbackParams](gameinputforcefeedbackparams-v1.md). Forced-feedback effects are defined by their parameters. These effects are stored in the `GameInputForceFeedbackParams` structure. The actual parameters for each type of force feedback effect vary slightly. The parameters for all kinds of effects define the magnitude of the effect along the motor's supported axes, and most allow for an envelope that affects the strength of the effect over time.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Advanced GameInput topics](../../../../input/advanced/input-advanced-topics.md)
[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInputForceFeedbackParams](gameinputforcefeedbackparams-v1.md)
[GameInput](../gameinput_members-v1.md)
