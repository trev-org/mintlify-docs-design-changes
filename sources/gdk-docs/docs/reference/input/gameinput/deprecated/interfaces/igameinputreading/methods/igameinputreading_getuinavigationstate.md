---
description: Gets the UI navigation state from a reading (removed in v3).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputReading::GetUiNavigationState (Deprecated)
---

# IGameInputReading::GetUiNavigationState

> [!WARNING]
> **Deprecated.** This method was removed in GameInput v3 and is not available in the current API.

Gets the UI navigation input state from the reading.

## Syntax

```cpp
bool GetUiNavigationState(
    GameInputUiNavigationState* state
);
```

### Parameters

*state* &nbsp;&nbsp;\_Out\_\
Type: [GameInputUiNavigationState](../../../structs/gameinputuinavigationstate.md)*

A pointer to a [GameInputUiNavigationState](../../../structs/gameinputuinavigationstate.md) structure to fill with navigation data.

### Return value

Type: bool

Returns `true` if the reading contains UI navigation state; `false` otherwise.

## Remarks

This method was available in v1 and v2 but was removed in v3. UI navigation state was provided via the [GameInputUiNavigationState](../../../structs/gameinputuinavigationstate.md) struct, mapping gamepad and keyboard input to navigation actions for menu interaction. It was removed in v3 as part of the consolidation of the reading kind model.

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Removed. |
| **v2** | No changes. |
| **v1** | No changes. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../../../gameinput_deprecated_members.md)  
[GameInputUiNavigationState](../../../structs/gameinputuinavigationstate.md)  
[IGameInputReading](../../../../interfaces/igameinputreading/igameinputreading.md)  
