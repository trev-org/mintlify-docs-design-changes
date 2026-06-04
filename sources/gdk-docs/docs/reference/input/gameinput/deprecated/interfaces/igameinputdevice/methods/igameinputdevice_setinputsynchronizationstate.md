---
description: Enables or disables input synchronization mode for the device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputDevice::SetInputSynchronizationState (Deprecated)
---

# IGameInputDevice::SetInputSynchronizationState

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Enables or disables input synchronization mode for the device.

## Syntax

```cpp
void SetInputSynchronizationState(
    bool enabled
);
```

### Parameters

*enabled* &nbsp;&nbsp;\_In\_\
Type: bool

Pass `true` to enable input synchronization mode; `false` to disable it.

## Remarks

When enabled, the device would hold input reports until the title called `SendInputSynchronizationHint`, allowing the title to precisely align input polling with its render loop. Both this method and `SendInputSynchronizationHint` were removed in v1 as part of simplification of the device update model.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInputDevice::SendInputSynchronizationHint](igameinputdevice_sendinputsynchronizationhint.md)  
[IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md)  
