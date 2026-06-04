---
description: Gets the number of touch contacts in a reading (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputReading::GetTouchCount (Deprecated)
---

# IGameInputReading::GetTouchCount

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v1 and is not available in the current API. This method was never implemented on PC.

Gets the number of active touch contacts in the reading.

## Syntax

```cpp
uint32_t GetTouchCount();
```

### Return value

Type: uint32_t

The number of active touch contacts in this reading.

## Remarks

This method and the associated `GetTouchState` method were removed in v1. Touch input was provided via the [GameInputTouchState](../../../structs/gameinputtouchstate.md) struct.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[IGameInputReading::GetTouchState](igameinputreading_gettouchstate.md)  
[GameInputTouchState](../../../structs/gameinputtouchstate.md)  
[IGameInputReading](../../../../interfaces/igameinputreading/igameinputreading.md)  
