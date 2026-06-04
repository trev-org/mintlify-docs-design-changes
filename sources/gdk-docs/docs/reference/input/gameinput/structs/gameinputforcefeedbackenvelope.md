---
author: AlexYatskov
description: Defines an envelope that modifies a force-feedback effect.
edited: 03/06/2025
kindex: GameInputForceFeedbackEnvelope
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputForceFeedbackEnvelope
---

# GameInputForceFeedbackEnvelope

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

*attackDuration*<br>
Type: uint64_t

Time in microseconds to reach the sustain level of a force-feedback effect envelope.

*sustainDuration*<br>
Type: uint64_t

Time in microseconds from the start of the sustain duration until the release component of a force-feedback effect envelope.  If the effect is intended to run forever, use `UINT64_MAX` for the this value.

*releaseDuration*<br>
Type: uint64_t

Time in microseconds from the sustain duration to the release of a force-feedback effect envelope.

*attackGain*<br>
Type: float

Modifier on the attack of force-feedback effect envelope.

*sustainGain*<br>
Type: float

Modifier on the sustain gain of a force-feedback effect envelope.

*releaseGain*<br>
Type: float

Modifier on the release gain of a force-feedback effect envelope.

*playCount*<br>
Type: uint32_t

Number of iterations that the envelope will be applied to the force-feedback event.

*repeatDelay*<br>
Type: uint64_t

Interval of time between applications of the force-feedback envelope.

## Remarks

`GameInputForceFeedbackEnvelope` is a member of the [GameInputForceFeedbackConstantParams](gameinputforcefeedbackconstantparams.md), [GameInputForceFeedbackPeriodicParams](gameinputforcefeedbackperiodicparams.md), and [GameInputForceFeedbackRampParams](gameinputforcefeedbackrampparams.md) structures. Force-feedback envelopes are modifiers on force feedback effects that modify their output through the device. For more information, see [Advanced GameInput topics](../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |