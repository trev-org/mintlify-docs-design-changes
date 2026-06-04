---
description: Retrieves an input feature report from a raw HID device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputDevice::GetRawDeviceFeature (Deprecated)
---

# IGameInputDevice::GetRawDeviceFeature

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Retrieves a feature report from the raw HID device.

## Syntax

```cpp
HRESULT GetRawDeviceFeature(
    uint32_t reportId,
    IGameInputRawDeviceReport** report
);
```

### Parameters

*reportId* &nbsp;&nbsp;\_In\_\
Type: uint32_t

The HID report ID of the feature report to retrieve.

*report* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInputRawDeviceReport**

The returned [IGameInputRawDeviceReport](../../../../interfaces/igameinputrawdevicereport/igameinputrawdevicereport.md) interface.

### Return value

Type: HRESULT

Function result.

## Remarks

This method was removed in v1 and re-introduced in v3 as [IGameInputDevice::GetRawDeviceFeature](../../../interfaces/igameinputdevice/methods/igameinputdevice_getrawdevicefeature.md).

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Re-introduced with updated signature. See [IGameInputDevice::GetRawDeviceFeature](../../../interfaces/igameinputdevice/methods/igameinputdevice_getrawdevicefeature.md). |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInputRawDeviceReport](../../../../interfaces/igameinputrawdevicereport/igameinputrawdevicereport.md)  
[IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md)  
