---
author: AlexYatskov
description: "Retrieves the parameters that define the force feedback effect (v1)."
edited: "03/06/2025"
kindex: "GetParams (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetParams (v1)"
---

# IGameInputForceFeedbackEffect::GetParams (v1)

Retrieves the parameters that define the force feedback effect.

## Syntax

```cpp
void GetParams(
    GameInputForceFeedbackParams* params
);
```

### Parameters

*params* &nbsp;&nbsp;\_Out\_\
Type: [GameInputForceFeedbackParams*](../../../structs/gameinputforcefeedbackparams-v1.md)

The parameters that define the force feedback effect.

### Return value

Type: void

No return.

## Remarks

Every `IGameInputForceFeedbackEffect` instance retrieves a common set of information about the effect. The assigned parameters for the effect is done with the `GetParams` method. For more information, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInputForceFeedbackEffect](../igameinputforcefeedbackeffect-v1.md)
