---
description: Describes the UI navigation labels for a controller device (removed in v3).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputUiNavigationInfo (Deprecated)
---

# GameInputUiNavigationInfo

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v3 and is not available in the current API.

Describes the UI navigation button mapping for an input device.

## Syntax

```cpp
typedef struct GameInputUiNavigationInfo {
    GameInputUiNavigationButtons supportedButtons;
    GameInputLabel menuLabel;
    GameInputLabel viewLabel;
    GameInputLabel acceptLabel;
    GameInputLabel cancelLabel;
    GameInputLabel upLabel;
    GameInputLabel downLabel;
    GameInputLabel leftLabel;
    GameInputLabel rightLabel;
    GameInputLabel context1Label;
    GameInputLabel context2Label;
    GameInputLabel context3Label;
    GameInputLabel context4Label;
    GameInputLabel pageUpLabel;
    GameInputLabel pageDownLabel;
    GameInputLabel pageLeftLabel;
    GameInputLabel pageRightLabel;
    GameInputLabel scrollUpLabel;
    GameInputLabel scrollDownLabel;
    GameInputLabel scrollLeftLabel;
    GameInputLabel scrollRightLabel;
} GameInputUiNavigationInfo;
```

## Members

**supportedButtons**\
Type: [GameInputUiNavigationButtons](../enums/gameinputuinavigationbuttons.md)

Bitmask of supported navigation buttons.

**menuLabel, viewLabel, acceptLabel, cancelLabel, ...**\
Type: [GameInputLabel](../../enums/gameinputlabel.md)

Labels identifying which physical inputs map to each navigation action.

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Removed. |
| **v2** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputUiNavigationState](gameinputuinavigationstate.md)
[GameInputUiNavigationButtons](../enums/gameinputuinavigationbuttons.md)
