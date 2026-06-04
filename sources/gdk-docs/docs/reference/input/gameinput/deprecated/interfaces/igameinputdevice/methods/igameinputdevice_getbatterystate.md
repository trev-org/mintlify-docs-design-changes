---
description: Gets the current battery state of the device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputDevice::GetBatteryState (Deprecated)
---

# IGameInputDevice::GetBatteryState

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API.

Gets the current battery state of the device.

## Syntax

```cpp
HRESULT GetBatteryState(
    GameInputBatteryState* state
);
```

### Parameters

*state* &nbsp;&nbsp;\_Out\_\
Type: [GameInputBatteryState](../../../structs/gameinputbatterystate.md)*

A pointer to a [GameInputBatteryState](../../../structs/gameinputbatterystate.md) structure to fill with the current battery state.

### Return value

Type: HRESULT

Returns E_NOTIMPL, as this method was never implemented in v0.

## Remarks

This method was removed in v1. Battery state information was provided via the [GameInputBatteryState](../../../structs/gameinputbatterystate.md) structure, which was also removed. No direct battery state query exists in the current API.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[GameInputBatteryState](../../../structs/gameinputbatterystate.md)  
[IGameInputDevice](../../../../interfaces/igameinputdevice/igameinputdevice.md)  
