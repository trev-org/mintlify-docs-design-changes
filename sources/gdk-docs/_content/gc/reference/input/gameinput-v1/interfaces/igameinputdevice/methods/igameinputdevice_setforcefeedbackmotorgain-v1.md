---
author: AlexYatskov
description: "Applies a global attenuation factor to all loaded effects on a motor (v1)."
edited: "03/06/2025"
kindex: "SetForceFeedbackMotorGain (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "SetForceFeedbackMotorGain (v1)"
---

# IGameInputDevice::SetForceFeedbackMotorGain (v1)

Applies a global attenuation factor to all loaded effects on a motor.

## Syntax

```cpp
void SetForceFeedbackMotorGain(
    uint32_t motorIndex,
    float masterGain
);
```

### Parameters

*motorIndex* &nbsp;&nbsp;\_In\_\
Type: uint32_t

Index of the motor to be changed.

*masterGain* &nbsp;&nbsp;\_In\_\
Type: float

Global attenuation factor to all loaded effects on the motor between 0.0 and 1.0.

### Return value

None.

## Remarks

This method applies a global attenuation factor to all loaded effects on the motor. The `masterGain` pointer accepts values between 0.0 and 1.0. This is used by the application's forced feedback strength settings. For more information, see [Overview of GameInput](../../../../../../input/overviews/input-overview.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[GameInput](../../../gameinput_members-v1.md)
[IGameInputDevice](../igameinputdevice-v1.md)
