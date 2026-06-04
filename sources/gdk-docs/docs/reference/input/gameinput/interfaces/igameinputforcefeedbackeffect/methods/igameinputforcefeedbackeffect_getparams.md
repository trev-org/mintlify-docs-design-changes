---
author: AlexYatskov
description: Retrieves the parameters that define the force feedback effect.
edited: 03/06/2025
kindex: GetParams
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetParams
---

# IGameInputForceFeedbackEffect::GetParams

Retrieves the parameters that define the force feedback effect.

## Syntax

```cpp
void GetParams(
    GameInputForceFeedbackParams* params
);
```

### Parameters

*params* &nbsp;&nbsp;\_Out\_\
Type: [GameInputForceFeedbackParams*](../../../structs/gameinputforcefeedbackparams.md)

The parameters that define the force feedback effect.

### Return value

Type: void

No return.

## Remarks

Every `IGameInputForceFeedbackEffect` instance retrieves a common set of information about the effect. The assigned parameters for the effect is done with the `GetParams` method. For more information, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
 
[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputForceFeedbackEffect](../igameinputforcefeedbackeffect.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |