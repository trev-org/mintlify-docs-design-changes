---
author: AlexYatskov
description: Uses the IGameInputForceFeedbackEffect interface to track the force feedback effect acting upon a motor.
edited: 03/06/2025
kindex: CreateForceFeedbackEffect
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: CreateForceFeedbackEffect
---

# CreateForceFeedbackEffect

Uses the [IGameInputForceFeedbackEffect](../../igameinputforcefeedbackeffect/igameinputforcefeedbackeffect.md) interface to track the force feedback effect acting upon a motor.

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
Type: [GameInputForceFeedbackParams*](../../../structs/gameinputforcefeedbackparams.md)

Parameters that define the nature of the force feedback effect.

*effect* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInputForceFeedbackEffect**

The resulting [IGameInputForceFeedbackEffect](../../igameinputforcefeedbackeffect/igameinputforcefeedbackeffect.md) interface that tracks the life of the effect's resolution.

### Return value

Type: HRESULT

This function returns an error result if there are insufficient hardware resources to create the effect, or if the requested effect is not supported by the hardware.

## Remarks

The `CreateForceFeedbackEffect` method uses the `IGameInputForceFeedbackEffect` interface to track the force feedback effect acting upon a motor. If the tracked device is disconnected before the feedback effect finishes, its lifetime feedback effect is orphaned and will report its state as "stopped" until the resources are released. For more information, see [Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md).

## Requirements

**Header:** GameInput.h

[GameInput](../../../gameinput_members.md)  
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |