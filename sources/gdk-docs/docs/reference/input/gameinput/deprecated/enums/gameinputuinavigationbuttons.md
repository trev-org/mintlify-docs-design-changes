---
description: Defines flags for UI navigation buttons on an input device (removed in v3).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputUiNavigationButtons (Deprecated)
---

# GameInputUiNavigationButtons

> [!WARNING]
> **Deprecated.** This enumeration was removed in GameInput v3 and is not available in the current API.

Defines bitmask flags for UI navigation buttons reported by an input device.

## Syntax

```cpp
enum GameInputUiNavigationButtons : uint32_t
{
    GameInputUiNavigationNone       = 0x00000000,
    GameInputUiNavigationMenu       = 0x00000001,
    GameInputUiNavigationView       = 0x00000002,
    GameInputUiNavigationAccept     = 0x00000004,
    GameInputUiNavigationCancel     = 0x00000008,
    GameInputUiNavigationUp         = 0x00000010,
    GameInputUiNavigationDown       = 0x00000020,
    GameInputUiNavigationLeft       = 0x00000040,
    GameInputUiNavigationRight      = 0x00000080,
    GameInputUiNavigationContext1   = 0x00000100,
    GameInputUiNavigationContext2   = 0x00000200,
    GameInputUiNavigationContext3   = 0x00000400,
    GameInputUiNavigationContext4   = 0x00000800,
    GameInputUiNavigationPageUp     = 0x00001000,
    GameInputUiNavigationPageDown   = 0x00002000,
    GameInputUiNavigationPageLeft   = 0x00004000,
    GameInputUiNavigationPageRight  = 0x00008000,
    GameInputUiNavigationScrollUp   = 0x00010000,
    GameInputUiNavigationScrollDown = 0x00020000,
    GameInputUiNavigationScrollLeft = 0x00040000,
    GameInputUiNavigationScrollRight = 0x00080000,
};
```

## Constants

| Constant | Value | Description |
| --- | --- | --- |
| GameInputUiNavigationNone | 0x00000000 | No buttons pressed. |
| GameInputUiNavigationMenu | 0x00000001 | Menu button. |
| GameInputUiNavigationView | 0x00000002 | View button. |
| GameInputUiNavigationAccept | 0x00000004 | Accept (confirm) button. |
| GameInputUiNavigationCancel | 0x00000008 | Cancel (back) button. |
| GameInputUiNavigationUp | 0x00000010 | Up directional input. |
| GameInputUiNavigationDown | 0x00000020 | Down directional input. |
| GameInputUiNavigationLeft | 0x00000040 | Left directional input. |
| GameInputUiNavigationRight | 0x00000080 | Right directional input. |
| GameInputUiNavigationContext1 | 0x00000100 | Context action 1 button. |
| GameInputUiNavigationContext2 | 0x00000200 | Context action 2 button. |
| GameInputUiNavigationContext3 | 0x00000400 | Context action 3 button. |
| GameInputUiNavigationContext4 | 0x00000800 | Context action 4 button. |
| GameInputUiNavigationPageUp | 0x00001000 | Page up. |
| GameInputUiNavigationPageDown | 0x00002000 | Page down. |
| GameInputUiNavigationPageLeft | 0x00004000 | Page left. |
| GameInputUiNavigationPageRight | 0x00008000 | Page right. |
| GameInputUiNavigationScrollUp | 0x00010000 | Scroll up. |
| GameInputUiNavigationScrollDown | 0x00020000 | Scroll down. |
| GameInputUiNavigationScrollLeft | 0x00040000 | Scroll left. |
| GameInputUiNavigationScrollRight | 0x00080000 | Scroll right. |

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Removed. |
| **v2** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputUiNavigationState](../structs/gameinputuinavigationstate.md)
[GameInputUiNavigationInfo](../structs/gameinputuinavigationinfo.md)
