---
author: AlexYatskov
description: "Retrieves the current state for a force feedback effect (v1)."
edited: "03/06/2025"
kindex: "IGameInputForceFeedbackEffect::GetState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInputForceFeedbackEffect::GetState (v1)"
---

# IGameInputForceFeedbackEffect::GetState (v1)

Retrieves the current state for a force feedback effect.

## Syntax

```cpp
GameInputFeedbackEffectState GetState();
```

### Parameters

This method has no parameters.

### Return value

Type: [GameInputFeedbackEffectState](../../../enums/gameinputfeedbackeffectstate-v1.md)

The state of the force feedback effect.

## Remarks

The `GetState` method retrieves the current state of a force feedback effect. The current state may be running, stopped, or paused. For more information, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInputForceFeedbackEffect::SetState](igameinputforcefeedbackeffect_setstate-v1.md)
[IGameInputForceFeedbackEffect](../igameinputforcefeedbackeffect-v1.md)
