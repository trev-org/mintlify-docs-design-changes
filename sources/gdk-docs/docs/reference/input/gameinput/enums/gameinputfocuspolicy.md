---
author: AlexYatskov
description: Enumerates focus policies for an input device.
edited: 03/03/2025
kindex: GameInputFocusPolicy
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputFocusPolicy
---

# GameInputFocusPolicy

Enumerates focus policies for an input device.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputFocusPolicy
{
    GameInputDefaultFocusPolicy             = 0x00000000,
    GameInputExclusiveForegroundInput       = 0x00000002,
    GameInputExclusiveForegroundGuideButton = 0x00000008,
    GameInputExclusiveForegroundShareButton = 0x00000020,
    GameInputEnableBackgroundInput          = 0x00000040,
    GameInputEnableBackgroundGuideButton    = 0x00000080,
    GameInputEnableBackgroundShareButton    = 0x00000100
};
```

<a id="constantsSection"></a>

## Constants

| Constant                                | Description                                                                                                                                                                                |
| ---                                     | ---                                                                                                                                                                                        |
| GameInputDefaultFocusPolicy             | Ensures that input and system buttons is only sent to the process when it is in focus.                                                                                                     |
| GameInputExclusiveForegroundInput       | Prevents other processes using GameInput from seeing the input it receives. This restriction is in effect only when the game is in focus and does not apply to system buttons.             |
| GameInputExclusiveForegroundGuideButton | Prevents other processes using GameInput from seeing Guide button presses it receives. This restriction is in effect only when the game is in focus.                                       |
| GameInputExclusiveForegroundShareButton | Prevents other processes using GameInput from seeing Share button presses it receives. This restriction is in effect only when the game is in focus.                                       |
| GameInputEnableBackgroundInput          | Ensures that input is always sent to the game, even when it is not in focus. This does not include the system buttons, which require using their respective focus policy flags.            |
| GameInputEnableBackgroundGuideButton    | Ensures that Guide button events are sent to the game even when not in focus. Guide button presses will still not be sent to the application when the in focus process exclusive access.   |
| GameInputEnableBackgroundShareButton    | Ensures that Share button events are sent to the game even when not in focus. Share button presses will still not be sent to the application when the in focus process exclusive access.   |

<a id="remarksSection"></a>

## Remarks

This enumeration is used by the [IGameInput::SetFocusPolicy](../interfaces/igameinput/methods/igameinput_setfocuspolicy.md) method. Call `SetFocusPolicy` to specify whether input is sent to a game when it is not in focus. By default, GameInput will not provide background input. Values may be combined.

If the game processes the Guide or Share buttons, setting the `GameInputExclusiveForegroundGuideButton` or `GameInputExclusiveForegroundShareButton` flags respectively can help ensure background overlay applications do not also handle them. For example, this can prevent unwanted overlay menus or screenshots from popping up over a game that intends to use the buttons itself.

> [!NOTE]
> Many users use overlay applications that use the Guide button for menus and the Share button for screenshots. Consider whether your game has a need to override that functionality to avoid user confusion.

Focus policy only applies on Windows. The Guide and Share button values of GameInputFocusPolicy were added in the Windows SDK 10.0.26031 Preview GameInput.h and will be added to a future release of the GDK.

For more information, see [GameInput fundamentals](../../../../features/common/input/overviews/input-fundamentals.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../gameinput_members.md)
## Version History

| Version | Changes |
| --- | --- |
| **v2** | **Removed** `DisableBackgroundInput` (0x1) and `DisableBackgroundShareButton` (0x10). **Added** `EnableBackgroundGuideButton` (0x80) and `EnableBackgroundShareButton` (0x100). |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
enum GameInputFocusPolicy
{
    GameInputDefaultFocusPolicy             = 0x00000000,
    GameInputDisableBackgroundInput         = 0x00000001,
    GameInputExclusiveForegroundInput       = 0x00000002,
    GameInputExclusiveForegroundGuideButton = 0x00000008,
    GameInputDisableBackgroundShareButton   = 0x00000010,
    GameInputExclusiveForegroundShareButton = 0x00000020,
    GameInputEnableBackgroundInput          = 0x00000040,
};
```

Note the DisableBackgroundInput (0x1) and DisableBackgroundShareButton (0x10) flags which were removed in v2. GameInput applications default no background input, so these flags were redundant. The EnableBackgroundGuideButton (0x80) and EnableBackgroundShareButton (0x100) flags were added in v2 to allow applications to register their intent to receive input in the background.