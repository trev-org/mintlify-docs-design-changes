---
description: Retrieves an IGameInputDevice interface based on a platform window or file handle (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInput::FindDeviceFromPlatformHandle (Deprecated)
---

# IGameInput::FindDeviceFromPlatformHandle

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Retrieves an [IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md) interface based on a matching platform window or file handle.

## Syntax

```cpp
HRESULT FindDeviceFromPlatformHandle(
    HANDLE value,
    IGameInputDevice** device
);
```

### Parameters

*value* &nbsp;&nbsp;\_In\_\
Type: HANDLE

A platform HANDLE (such as a window handle or device file handle) to match against.

*device* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInputDevice**

The returned [IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md) interface.

### Return value

Type: HRESULT

Returns E_NOTIMPL, as this method was never implemented in v0.

## Remarks

This method allowed applications to find a GameInput device using a Win32 handle associated with that device. It was removed in v1. Use [FindDeviceFromId](../../../../interfaces/igameinput/methods/igameinput_finddevicefromid.md) or [FindDeviceFromPlatformString](../../../../interfaces/igameinput/methods/igameinput_finddevicefromplatformstring.md) instead.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInput::FindDeviceFromId](../../../../interfaces/igameinput/methods/igameinput_finddevicefromid.md)  
[IGameInput::FindDeviceFromPlatformString](../../../../interfaces/igameinput/methods/igameinput_finddevicefromplatformstring.md)  
[IGameInput](../../../../interfaces/igameinput/igameinput.md)
