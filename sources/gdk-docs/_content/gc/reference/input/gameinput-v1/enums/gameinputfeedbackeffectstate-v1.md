---
author: AlexYatskov
description: "Enumerates states of a force feedback effect (v1)."
edited: "03/03/2025"
kindex: "GameInputFeedbackEffectState (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputFeedbackEffectState (v1)"
---

# GameInputFeedbackEffectState (v1)

Enumerates states of a force feedback effect.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputFeedbackEffectState
{
    GameInputFeedbackStopped = 0,
    GameInputFeedbackRunning = 1,
    GameInputFeedbackPaused  = 2
};
```

<a id="constantsSection"></a>

## Constants

| Constant                 | Description                                   |
| ---                      | ---                                           |
| GameInputFeedbackStopped | Indicates that feedback is currently stopped. |
| GameInputFeedbackRunning | Indicates that feedback is currently running. |
| GameInputFeedbackPaused  | Indicates that feedback is currently paused.  |

<a id="remarksSection"></a>

## Remarks

This enumeration is used by the [IGameInputForceFeedbackEffect::SetState](../interfaces/igameinputforcefeedbackeffect/methods/igameinputforcefeedbackeffect_setstate-v1.md) and [IGameInputForceFeedbackEffect::GetState](../interfaces/igameinputforcefeedbackeffect/methods/igameinputforcefeedbackeffect_getstate-v1.md) methods. If a device is disconnected, `GetState` always returns `GameInputFeedbackStopped`.

For more information, see the "Applying and updating force feedback effects" section of [Force feedback on GameInput](../../../../input/advanced/input-forcefeedback.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
