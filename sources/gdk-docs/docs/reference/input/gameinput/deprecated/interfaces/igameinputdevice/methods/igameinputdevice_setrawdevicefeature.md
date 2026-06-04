---
description: Sends an output feature report to a raw HID device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputDevice::SetRawDeviceFeature (Deprecated)
---

# IGameInputDevice::SetRawDeviceFeature

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Sends a feature report to the raw HID device.

## Syntax

```cpp
HRESULT SetRawDeviceFeature(
    IGameInputRawDeviceReport* report
);
```

### Parameters

*report* &nbsp;&nbsp;\_In\_\
Type: IGameInputRawDeviceReport*

The [IGameInputRawDeviceReport](../../../../interfaces/igameinputrawdevicereport/igameinputrawdevicereport.md) to send.

### Return value

Type: HRESULT

Function result.

## Remarks

This method was removed in v1 and re-introduced in v3 as [IGameInputDevice::SetRawDeviceFeature](../../../interfaces/igameinputdevice/methods/igameinputdevice_setrawdevicefeature.md).

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced with updated signature. See [IGameInputDevice::SetRawDeviceFeature](../../../interfaces/igameinputdevice/methods/igameinputdevice_setrawdevicefeature.md). |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInputDevice::SetRawDeviceFeature](../../../interfaces/igameinputdevice/methods/igameinputdevice_setrawdevicefeature.md)  
[IGameInputRawDeviceReport](../../../../interfaces/igameinputrawdevicereport/igameinputrawdevicereport.md)  
[IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md)  
