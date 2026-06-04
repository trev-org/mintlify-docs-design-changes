---
description: Acquires exclusive access to a raw device's HID input/output pipes (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputDevice::AcquireExclusiveRawDeviceAccess (Deprecated)
---

# IGameInputDevice::AcquireExclusiveRawDeviceAccess

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Acquires exclusive access to the raw device interface, preventing other applications from reading raw device reports.

## Syntax

```cpp
HRESULT AcquireExclusiveRawDeviceAccess(
    uint64_t timeoutInMicroseconds
);
```

### Parameters

*timeoutInMicroseconds* &nbsp;&nbsp;\_In\_\
Type: uint64_t

The amount of time in microseconds to wait for exclusive access to be granted.

### Return value

Type: HRESULT

Returns E_NOTIMPL, as this method was never implemented in v0.

## Remarks

This method was removed in v1 as part of simplification of the raw device access model. Raw device report access in the current API is handled through the [IGameInputRawDeviceReport](../../../../interfaces/igameinputrawdevicereport/igameinputrawdevicereport.md) interface.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInputDevice::ReleaseExclusiveRawDeviceAccess](igameinputdevice_releaseexclusiverawdeviceaccess.md)  
[IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md)  
