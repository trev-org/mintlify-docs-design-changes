---
author: AlexYatskov
description: Retrieves the motor index associated with the force feedback effect.
edited: 03/06/2025
kindex: GetMotorIndex
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetMotorIndex
---

# IGameInputForceFeedbackEffect::GetMotorIndex

Retrieves the motor index associated with the force feedback effect.

## Syntax

```cpp
uint32_t GetMotorIndex();
```

### Parameters

This method has no parameters.

### Return value

Type: uint32_t

Returns the index of the associated motor.

## Remarks

Every `IGameInputForceFeedbackEffect` instance retrieves a common set of information about the effect. The specific motor where the effect is loaded on the devices is done with the `GetMotorIndex` method. For more information, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

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