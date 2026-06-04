---
author: AlexYatskov
description: "Sets new parameters on a force feedback effect (v1)."
edited: "03/06/2025"
kindex: "IGameInputForceFeedbackEffect::SetParams (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInputForceFeedbackEffect::SetParams (v1)"
---

# IGameInputForceFeedbackEffect::SetParams (v1)

Sets new parameters on a force-feedback effect.

## Syntax

```cpp
bool SetParams(
    const GameInputForceFeedbackParams* params
);
```

### Parameters

*params* &nbsp;&nbsp;\_In\_\
Type: [GameInputForceFeedbackParams*](../../../structs/gameinputforcefeedbackparams-v1.md)

The new force-feedback parameters to be set.

### Return value

Type: bool

The results of setting the new parameters. If the function succeeds, it returns true.

## Remarks

When setting new parameters for a force feedback effect, the motor will attempt to continue the effect uninterrupted. You may only set new parameters on a force feedback effect if the new parameters and the old parameters share the same [GameInputForceFeedbackEffectKind](../../../enums/gameinputforcefeedbackeffectkind-v1.md) enumeration. For more information, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

Note that the duration timer is **not** refreshed if the duration value does not change.  It will only be refreshed if a different duration value is provided, or the effect is stopped and restarted.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[GameInputForceFeedbackParams](../../../structs/gameinputforcefeedbackparams-v1.md)
[IGameInputForceFeedbackEffect](../igameinputforcefeedbackeffect-v1.md)
