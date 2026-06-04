---
description: Sends an I/O control code to a raw HID device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputDevice::ExecuteRawDeviceIoControl (Deprecated)
---

# IGameInputDevice::ExecuteRawDeviceIoControl

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Sends an I/O control code directly to a raw HID device.

## Syntax

```cpp
HRESULT ExecuteRawDeviceIoControl(
    uint32_t controlCode,
    size_t inputBufferSize,
    const void* inputBuffer,
    size_t outputBufferSize,
    void* outputBuffer,
    size_t* outputSizeWritten
);
```

### Parameters

*controlCode* &nbsp;&nbsp;\_In\_\
Type: uint32_t

The I/O control code to send.

*inputBufferSize* &nbsp;&nbsp;\_In\_\
Type: size_t

The size, in bytes, of the `inputBuffer`.

*inputBuffer* &nbsp;&nbsp;\_In\_reads\_bytes\_opt\_(inputBufferSize)\_\
Type: const void*

A pointer to the input data buffer.

*outputBufferSize* &nbsp;&nbsp;\_In\_\
Type: size_t

The size, in bytes, of the `outputBuffer`.

*outputBuffer* &nbsp;&nbsp;\_Out\_writes\_bytes\_opt\_(outputBufferSize)\_\
Type: void*

A pointer to the output data buffer.

*outputSizeWritten* &nbsp;&nbsp;\_Out\_opt\_\
Type: size_t*

The number of bytes written to `outputBuffer`.

### Return value

Type: HRESULT

Returns E_NOTIMPL, as this method was never implemented in v0.

## Remarks

This method was available when exclusive raw device access had been acquired via `AcquireExclusiveRawDeviceAccess`. It was removed in v1 as part of simplification of the raw device access model.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInputDevice::AcquireExclusiveRawDeviceAccess](igameinputdevice_acquireexclusiverawdeviceaccess.md)  
[IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md)  
