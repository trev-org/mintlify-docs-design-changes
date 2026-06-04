---
author: AlexYatskov
description: "Enumeration of the types of magnitude over time effects that can be applied to a force feedback effect (v1)."
edited: "03/03/2025"
kindex: "GameInputForceFeedbackEffectKind (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputForceFeedbackEffectKind (v1)"
---

# GameInputForceFeedbackEffectKind (v1)

Enumeration of the types of magnitude over time effects that can be applied to a force feedback effect.

## Syntax

```cpp
enum GameInputForceFeedbackEffectKind
{
    GameInputForceFeedbackConstant         = 0,
    GameInputForceFeedbackRamp             = 1,
    GameInputForceFeedbackSineWave         = 2,
    GameInputForceFeedbackSquareWave       = 3,
    GameInputForceFeedbackTriangleWave     = 4,
    GameInputForceFeedbackSawtoothUpWave   = 5,
    GameInputForceFeedbackSawtoothDownWave = 6,
    GameInputForceFeedbackSpring           = 7,
    GameInputForceFeedbackFriction         = 8,
    GameInputForceFeedbackDamper           = 9,
    GameInputForceFeedbackInertia          = 10
};
```

## Constants

| Constant                               | Description                                               |
| ---                                    | ---                                                       |
| GameInputForceFeedbackConstant         | Indicates a constant force feedback.                      |
| GameInputForceFeedbackRamp             | Indicates a ramping force feedback effect.                |
| GameInputForceFeedbackSineWave         | Indicates a sine wave force feedback effect.              |
| GameInputForceFeedbackSquareWave       | Indicates a square wave force feedback effect.            |
| GameInputForceFeedbackTriangleWave     | Indicates a triangle wave force feedback effect.          |
| GameInputForceFeedbackSawtoothUpWave   | Indicates an upward sawtooth wave force feedback effect.  |
| GameInputForceFeedbackSawtoothDownWave | Indicates a downward sawtooth wave force feedback effect. |
| GameInputForceFeedbackSpring           | Indicates a spring-like force feedback effect.            |
| GameInputForceFeedbackFriction         | Indicates a friction force feedback effect.               |
| GameInputForceFeedbackDamper           | Indicates a damper force feedback effect.                 |
| GameInputForceFeedbackInertia          | Indicates an inertia force feedback effect.               |

## Remarks

Not all feedback kinds are supported by every device. Using an unsupported feedback kind on an unsupported device will cause a return error when calling `CreateForceFeedbackEffect`. Member of [GameInputForceFeedbackParams](../structs/gameinputforcefeedbackparams-v1.md).

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
[GameInputForceFeedbackParams](../structs/gameinputforcefeedbackparams-v1.md)
