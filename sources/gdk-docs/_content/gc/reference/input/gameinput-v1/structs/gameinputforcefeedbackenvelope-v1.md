---
author: AlexYatskov
description: "Defines an envelope that modifies a force-feedback effect (v1)."
edited: "03/06/2025"
kindex: "GameInputForceFeedbackEnvelope (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputForceFeedbackEnvelope (v1)"
---

# GameInputForceFeedbackEnvelope (v1)

Defines an envelope that modifies a force-feedback effect.

## Syntax

```cpp
struct GameInputForceFeedbackEnvelope
{
    uint64_t attackDuration;
    uint64_t sustainDuration;
    uint64_t releaseDuration;
    float    attackGain;
    float    sustainGain;
    float    releaseGain;
    uint32_t playCount;
    uint64_t repeatDelay;
};
```

### Members

*attackDuration*
Type: uint64_t

Time in microseconds to reach the sustain level of a force-feedback effect envelope.

*sustainDuration*
Type: uint64_t

Time in microseconds from the start of the sustain duration until the release component of a force-feedback effect envelope.  If the effect is intended to run forever, use `UINT64_MAX` for the this value.

*releaseDuration*
Type: uint64_t

Time in microseconds from the sustain duration to the release of a force-feedback effect envelope.

*attackGain*
Type: float

Modifier on the attack of force-feedback effect envelope.

*sustainGain*
Type: float

Modifier on the sustain gain of a force-feedback effect envelope.

*releaseGain*
Type: float

Modifier on the release gain of a force-feedback effect envelope.

*playCount*
Type: uint32_t

Number of iterations that the envelope will be applied to the force-feedback event.

*repeatDelay*
Type: uint64_t

Interval of time between applications of the force-feedback envelope.

## Remarks

`GameInputForceFeedbackEnvelope` is a member of the [GameInputForceFeedbackConstantParams](gameinputforcefeedbackconstantparams-v1.md), [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams-v1.md), and [GameInputForceFeedbackRampParams](gameinputforcefeedbackrampparams-v1.md) structures. Force-feedback envelopes are modifiers on force feedback effects that modify their output through the device. For more information, see [Advanced GameInput topics](../../../../input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
