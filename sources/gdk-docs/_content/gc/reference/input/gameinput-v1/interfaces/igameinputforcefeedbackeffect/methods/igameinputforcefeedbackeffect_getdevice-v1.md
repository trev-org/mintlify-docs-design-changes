---
author: AlexYatskov
description: "Retrieves the device associated with the force feedback effect (v1)."
edited: "03/06/2025"
kindex: "GetDevice (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInputForceFeedbackEffect::GetDevice (v1)"
---

# IGameInputForceFeedbackEffect::GetDevice (v1)

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

The `IGameInputForceFeedbackEffect::GetDevice` method retrieves the device associated with the force feedback effect. The [IGameInputDevice](../../igameinputdevice/igameinputdevice-v1.md) object represents an input device. The methods in the `IGameInputDevice` interface allow you to identify and interact with a game input device. You can query information about the device such as its type and abilities. You can also activate device specific hardware like haptic and force feedback. For more information, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInputForceFeedbackEffect](../igameinputforcefeedbackeffect-v1.md)
