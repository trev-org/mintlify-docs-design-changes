---
author: M-Stahl
description: CreateAggregateDevice API reference
edited: 09/19/2025
kindex: CreateAggregateDevice
ms.date: 08/01/2022
ms.topic: reference
permissioned-type: public
title: IGameInput::CreateAggregateDevice
---

# IGameInput::CreateAggregateDevice

Creates a virtual [IGameInputDevice](../../igameinputdevice/igameinputdevice.md) instance which aggregates all input of the specified [GameInputKind](../../../enums/gameinputkind.md).

## Syntax

```cpp
HRESULT CreateAggregateDevice(
         GameInputKind inputKind,
         APP_LOCAL_DEVICE_ID* deviceId
)
```

### Parameters

*inputKind* &nbsp;&nbsp;\_In\_\
Type: [GameInputKind](../../../enums/gameinputkind.md)

The type of input which the returned virtual [IGameInputDevice](../../igameinputdevice/igameinputdevice.md) will aggregate readings for.

*deviceId* &nbsp;&nbsp;\_Out\_\
Type: APP_LOCAL_DEVICE_ID*

The resulting device identifier for the aggregate device.


### Return value

Type: HRESULT

Function result. Failure returned when an unsupported [GameInputKind](../../../enums/gameinputkind.md) is used or when attempting to combine [GameInputKind](../../../enums/gameinputkind.md) flags.

## Remarks

The input kind used for CreateAggregateDevice must be a single value from the [GameInputKind](../../../enums/gameinputkind.md) enumeration. Combining [GameInputKind](../../../enums/gameinputkind.md) flags is not supported. If an application needs aggregated input for multiple input kinds, it must create a virtual [IGameInputDevice](../../igameinputdevice/igameinputdevice.md) instance for each one.

> [!NOTE]
> This function is used to re-enable an aggregate device that may have been disabled by calling [DisableAggregateDevice](igameinput_disableaggregatedevice.md). It results in the device re-enabled rather than the creation of another instance.

The aggregate device will also emit status notification through callback registered by calling [RegisterDeviceCallback](igameinput_registerdevicecallback.md).

Aggregation is supported only for the following input kinds:

* GameInputKindKeyboard
* GameInputKindMouse
* GameInputKindArcadeStick
* GameInputKindFlightStick
* GameInputKindGamepad
* GameInputKindRacingWheel

## Requirements

**Header:** GameInput.h

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInput](../igameinput.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Implemented (previously E_NOTIMPL in v0) and reintroduced. Signature changed: `IGameInputDevice**` replaced with `APP_LOCAL_DEVICE_ID*`. |
| **v1** | Removed. |
| **v0** | Introduced but unimplemented. |