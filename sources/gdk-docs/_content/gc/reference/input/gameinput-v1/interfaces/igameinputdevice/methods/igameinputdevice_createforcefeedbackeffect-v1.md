---
author: AlexYatskov
description: "Uses the IGameInputForceFeedbackEffect interface to track the force feedback effect acting upon a motor (v1)."
edited: "03/06/2025"
kindex: "CreateForceFeedbackEffect (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "CreateForceFeedbackEffect (v1)"
---

# CreateForceFeedbackEffect (v1)

Uses the [IGameInputForceFeedbackEffect](../../igameinputforcefeedbackeffect/igameinputforcefeedbackeffect-v1.md) interface to track the force feedback effect acting upon a motor.

## Syntax

```cpp
HRESULT CreateForceFeedbackEffect(
    uint32_t motorIndex,
    const GameInputForceFeedbackParams* params,
    IGameInputForceFeedbackEffect** effect
);
```

### Parameters

*motorIndex* &nbsp;&nbsp;\_In\_\
Type: uint32_t

Index of the motor affected by the force feedback effect.

*params* &nbsp;&nbsp;\_In\_\
Type: [GameInputForceFeedbackParams*](../../../structs/gameinputforcefeedbackparams-v1.md)

Parameters that define the nature of the force feedback effect.

*effect* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInputForceFeedbackEffect**

The resulting [IGameInputForceFeedbackEffect](../../igameinputforcefeedbackeffect/igameinputforcefeedbackeffect-v1.md) interface that tracks the life of the effect's resolution.

### Return value

Type: HRESULT

This function returns an error result if there are insufficient hardware resources to create the effect, or if the requested effect is not supported by the hardware.

## Remarks

The `CreateForceFeedbackEffect` method uses the `IGameInputForceFeedbackEffect` interface to track the force feedback effect acting upon a motor. If the tracked device is disconnected before the feedback effect finishes, its lifetime feedback effect is orphaned and will report its state as "stopped" until the resources are released. For more information, see [Overview of GameInput](../../../../../../input/overviews/input-overview.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[GameInput](../../../gameinput_members-v1.md)
[IGameInputDevice](../igameinputdevice-v1.md)
