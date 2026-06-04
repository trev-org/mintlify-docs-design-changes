---
description: Enables support for a specific OEM input device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInput::EnableOemDeviceSupport (Deprecated)
---

# IGameInput::EnableOemDeviceSupport

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Enables support for a specific OEM input device identified by its device GUID.

## Syntax

```cpp
HRESULT EnableOemDeviceSupport(
    REFGUID oemDeviceId
);
```

### Parameters

*oemDeviceId* &nbsp;&nbsp;\_In\_\
Type: REFGUID

The GUID identifying the OEM device type to enable.

### Return value

Type: HRESULT

Returns E_NOTIMPL, as this method was never implemented in v0.

## Remarks

This method was used to opt-in to input from OEM devices that used custom protocols not covered by the standard GameInput device families. It was removed in v1 as part of a simplification of the device enumeration model.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInput](../../../../interfaces/igameinput/igameinput.md)  
