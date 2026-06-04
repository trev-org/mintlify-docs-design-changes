---
description: Gets the touch input state from a reading (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputReading::GetTouchState (Deprecated)
---

# IGameInputReading::GetTouchState

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API. This method was never implemented on PC.

Gets the touch input state for all active contacts in the reading.

## Syntax

```cpp
uint32_t GetTouchState(
    uint32_t stateArrayCount,
    GameInputTouchState* stateArray
);
```

### Parameters

*stateArrayCount* &nbsp;&nbsp;\_In\_\
Type: uint32_t

The number of elements in the `stateArray`.

*stateArray* &nbsp;&nbsp;\_Out\_writes\_(stateArrayCount)\_\
Type: [GameInputTouchState](../../../structs/gameinputtouchstate.md)*

An array of [GameInputTouchState](../../../structs/gameinputtouchstate.md) structures to fill with touch contact data.

### Return value

Type: uint32_t

The number of [GameInputTouchState](../../../structs/gameinputtouchstate.md) entries written to `stateArray`.

## Remarks

This method was removed in v1. Call [GetTouchCount](igameinputreading_gettouchcount.md) first to determine the required array size, then call `GetTouchState` with an appropriately sized array.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInputReading::GetTouchCount](igameinputreading_gettouchcount.md)  
[GameInputTouchState](../../../structs/gameinputtouchstate.md)  
[IGameInputReading](../../../../interfaces/igameinputreading/igameinputreading.md)  
