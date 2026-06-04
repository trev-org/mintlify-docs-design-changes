---
author: AlexYatskov
description: Retrieves the device associated with the force feedback effect.
edited: 03/06/2025
kindex: GetDevice
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputForceFeedbackEffect::GetDevice
---

# IGameInputForceFeedbackEffect::GetDevice

Retrieves the device associated with the force feedback effect.

## Syntax

```cpp
void GetDevice(
    IGameInputDevice** device
);
```

### Parameters

*device* &nbsp;&nbsp;\_Outptr\_\
Type: IGameInputDevice**

This method returns the device associated with the force feedback effect.

### Return value

Type: void

No return.

## Remarks

The `IGameInputForceFeedbackEffect::GetDevice` method retrieves the device associated with the force feedback effect. The [IGameInputDevice](../../igameinputdevice/igameinputdevice.md) object represents an input device. The methods in the `IGameInputDevice` interface allow you to identify and interact with a game input device. You can query information about the device such as its type and abilities. You can also activate device specific hardware like haptic and force feedback. For more information, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

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