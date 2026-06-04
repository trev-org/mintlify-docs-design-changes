---
description: Describes the current UI navigation input state from a reading (removed in v3).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputUiNavigationState (Deprecated)
---

# GameInputUiNavigationState

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v3 and is not available in the current API.

Describes the current state of UI navigation buttons in an input reading.

## Syntax

```cpp
typedef struct GameInputUiNavigationState {
    GameInputUiNavigationButtons buttons;
} GameInputUiNavigationState;
```

## Members

**buttons**\
Type: [GameInputUiNavigationButtons](../enums/gameinputuinavigationbuttons.md)

Bitmask of the currently pressed UI navigation buttons.

## Remarks

This structure was read via the deprecated [IGameInputReading::GetUiNavigationState](../interfaces/igameinputreading/methods/igameinputreading_getuinavigationstate.md) method. Both were removed in v3.

UI navigation state abstracted physical gamepad buttons into logical actions (accept, cancel, menu, etc.) for use in title menus and user interface elements.

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Removed. |
| **v2** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[IGameInputReading::GetUiNavigationState](../interfaces/igameinputreading/methods/igameinputreading_getuinavigationstate.md)
[GameInputUiNavigationInfo](gameinputuinavigationinfo.md)
[GameInputUiNavigationButtons](../enums/gameinputuinavigationbuttons.md)
