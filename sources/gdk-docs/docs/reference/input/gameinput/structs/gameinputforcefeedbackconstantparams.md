---
author: AlexYatskov
description: Defines a constant physical aspect of a force-feedback effect.
edited: 03/06/2025
kindex: GameInputForceFeedbackConstantParams
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputForceFeedbackConstantParams
---

# GameInputForceFeedbackConstantParams

Defines a constant physical aspect of a force-feedback effect.

## Syntax

```cpp
struct GameInputForceFeedbackConstantParams
{
    GameInputForceFeedbackEnvelope  envelope;
    GameInputForceFeedbackMagnitude magnitude;
};
```

### Members

*envelope*<br>
Type: [GameInputForceFeedbackEnvelope](gameinputforcefeedbackenvelope.md)

The modifying envelope on a force-feedback effect.

*magnitude*<br>
Type: [GameInputForceFeedbackMagnitude](gameinputforcefeedbackmagnitude.md)

The amount of force being applied by a force-feedback effect.

## Remarks

`GameInputForceFeedbackConstantParams` is a member of the [GameInputForceFeedbackParams](gameinputforcefeedbackparams.md) structure.

The `CreateForceFeedbackEffect` method allocates hardware resources in the motor for a new force feedback-effect with a specified set of parameters and returns an `IGameInputForceFeedbackEffect` instance to track those resources.  A `HRESULT` error is returned if there are insufficient hardware resources to create the effect or if the requested effect is not supported by the hardware. Force-feedback effects are defined by their parameters and are stored in the `GameInputForceFeedbackParams` structure.

## Requirements

**Header:** GameInput.h

[Advanced GameInput topics](../../../../features/common/input/advanced/input-advanced-topics.md)  
[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |