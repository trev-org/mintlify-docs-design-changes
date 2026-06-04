---
author: M-Stahl
description: DisableAggregateDevice API reference
edited: 09/19/2025
kindex: DisableAggregateDevice
ms.date: 09/19/2025
ms.topic: reference
permissioned-type: public
title: IGameInput::DisableAggregateDevice
---

# IGameInput::DisableAggregateDevice

Disables an aggregate device that matches the specified device ID.

## Syntax

```cpp
HRESULT DisableAggregateDevice(
         const APP_LOCAL_DEVICE_ID* deviceId
)
```

### Parameters

*deviceId* &nbsp;&nbsp;\_In\_\
Type: const APP_LOCAL_DEVICE_ID*

The device identifier of the aggregate device to disable.

### Return value

Type: HRESULT

Function result.

## Remarks

This method disables an aggregate device that matches the specified device ID. Once disabled, the aggregate device stops sending aggregated readings and tracking status changes until it's re-enabled again using [CreateAggregateDevice](igameinput_createaggregatedevice.md) with the same [GameInputKind](../../../enums/gameinputkind.md) value that was used to create it.

> [!NOTE]
> To re-enable a disabled aggregate device, call [CreateAggregateDevice](igameinput_createaggregatedevice.md) with the same input kind that was originally used to create the device. This will re-enable the existing device rather than creating a new instance.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)<br>
[IGameInput](../igameinput.md)<br>
[CreateAggregateDevice](igameinput_createaggregatedevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |