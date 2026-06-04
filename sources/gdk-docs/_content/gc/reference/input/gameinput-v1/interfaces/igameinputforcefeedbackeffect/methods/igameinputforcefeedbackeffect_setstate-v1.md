---
author: AlexYatskov
description: "Sets the state for a force feedback effect (v1)."
edited: "03/06/2025"
kindex: "IGameInputForceFeedbackEffect::SetState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInputForceFeedbackEffect::SetState (v1)"
---

# IGameInputForceFeedbackEffect::SetState (v1)

Sets the state for a force-feedback effect.

## Syntax

```cpp
void SetState(
    GameInputFeedbackEffectState state
);
```

### Parameters

*state* &nbsp;&nbsp;\_In\_\
Type: [GameInputFeedbackEffectState](../../../enums/gameinputfeedbackeffectstate-v1.md)

The new state set for a force feedback effect.

### Return value

Type: void

No return.

## Remarks

The `IGameInputForceFeedbackEffect::SetState` method sets the state for a force feedback effect. The set state of the force feedback effect may be running, stopped, or paused. For more information, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInputForceFeedbackEffect::GetState](igameinputforcefeedbackeffect_getstate-v1.md)
[GameInputFeedbackEffectState](../../../enums/gameinputfeedbackeffectstate-v1.md)
[IGameInputForceFeedbackEffect](../igameinputforcefeedbackeffect-v1.md)
