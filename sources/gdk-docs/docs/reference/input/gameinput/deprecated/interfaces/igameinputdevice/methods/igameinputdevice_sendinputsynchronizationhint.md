---
description: Sends an input synchronization hint to the device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputDevice::SendInputSynchronizationHint (Deprecated)
---

# IGameInputDevice::SendInputSynchronizationHint

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API. This method was never implemented in PC.

Sends a hint to the device to synchronize its input with the application's update loop.

## Syntax

```cpp
void SendInputSynchronizationHint();
```

## Remarks

This method was used in conjunction with `SetInputSynchronizationState` to control when the device posted input reports. Both methods were removed in v1 as part of simplification of the device synchronization model.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInputDevice::SetInputSynchronizationState](igameinputdevice_setinputsynchronizationstate.md)  
[IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md)  
