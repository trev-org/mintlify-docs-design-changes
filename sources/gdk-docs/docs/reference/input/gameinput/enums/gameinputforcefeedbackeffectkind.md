---
author: AlexYatskov
description: Enumeration of the types of magnitude over time effects that can be applied to a force feedback effect.
edited: 03/03/2025
kindex: GameInputForceFeedbackEffectKind
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputForceFeedbackEffectKind
---

# GameInputForceFeedbackEffectKind

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

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)  
[GameInputForceFeedbackParams](../structs/gameinputforcefeedbackparams.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |