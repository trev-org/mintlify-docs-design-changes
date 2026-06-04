---
description: Retrieves an IGameInputDevice interface based on a matching platform COM object (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInput::FindDeviceFromObject (Deprecated)
---

# IGameInput::FindDeviceFromObject

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Retrieves an [IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md) interface based on a matching platform COM object reference.

## Syntax

```cpp
HRESULT FindDeviceFromObject(
    IUnknown* value,
    IGameInputDevice** device
);
```

### Parameters

*value* &nbsp;&nbsp;\_In\_\
Type: IUnknown*

A platform COM object (such as an IDirectInputDevice8 instance) to match against.

*device* &nbsp;&nbsp;\_COM\_Outptr\_\
Type: IGameInputDevice**

The returned [IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md) interface.

### Return value

Type: HRESULT

Returns E_NOTIMPL, as this method was never implemented in v0.

## Remarks

This method allowed applications to retrieve a GameInput device interface from an existing platform object such as a DirectInput device. It was removed in v1. The active alternatives are [FindDeviceFromId](../../../../interfaces/igameinput/methods/igameinput_finddevicefromid.md) and [FindDeviceFromPlatformString](../../../../interfaces/igameinput/methods/igameinput_finddevicefromplatformstring.md).

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
