---
description: Releases exclusive access to the raw device interface (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputDevice::ReleaseExclusiveRawDeviceAccess (Deprecated)
---

# IGameInputDevice::ReleaseExclusiveRawDeviceAccess

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Releases exclusive access to the raw device interface previously acquired with `AcquireExclusiveRawDeviceAccess`.

## Syntax

```cpp
void ReleaseExclusiveRawDeviceAccess();
```

## Remarks

This method was removed in v1 as part of simplification of the raw device access model. This method was unimplemented in v0.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInputDevice::AcquireExclusiveRawDeviceAccess](igameinputdevice_acquireexclusiverawdeviceaccess.md)  
[IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md)  
