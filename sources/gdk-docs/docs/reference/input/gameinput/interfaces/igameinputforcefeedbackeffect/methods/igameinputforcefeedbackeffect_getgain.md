---
author: AlexYatskov
description: Retrieves the gain set on a force feedback effect.
edited: 03/06/2025
kindex: IGameInputForceFeedbackEffect::GetGain
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputForceFeedbackEffect::GetGain
---

# IGameInputForceFeedbackEffect::GetGain

Retrieves the gain set on a force feedback effect.

## Syntax

```cpp
float GetGain();
```

### Parameters

This method has no parameters.

### Return value

Type: float

The gain set on a force-feedback motor device.

## Remarks

The `IGameInputForceFeedbackEffect::GetGain` method retrieves the gain on a force feedback motor. The gain can have a value between 0.0 and 1.0. For more information, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
 
[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputForceFeedbackEffect::SetGain](igameinputforcefeedbackeffect_setgain.md)    
[IGameInputDevice::SetForceFeedbackMotorGain](../../igameinputdevice/methods/igameinputdevice_setforcefeedbackmotorgain.md)    
[IGameInputForceFeedbackEffect](../igameinputforcefeedbackeffect.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |