---
author: AlexYatskov
description: "Enumerates focus policies for an input device (v1)."
edited: "03/03/2025"
kindex: "GameInputFocusPolicy (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputFocusPolicy (v1)"
---

# GameInputFocusPolicy (v1)

Enumerates focus policies for an input device.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputFocusPolicy
{
    GameInputDefaultFocusPolicy             = 0x00000000,
    GameInputDisableBackgroundInput         = 0x00000001,
    GameInputExclusiveForegroundInput       = 0x00000002,
    GameInputDisableBackgroundGuideButton   = 0x00000004,
    GameInputExclusiveForegroundGuideButton = 0x00000008,
    GameInputDisableBackgroundShareButton   = 0x00000010,
    GameInputExclusiveForegroundShareButton = 0x00000020
};
```

<a id="constantsSection"></a>

## Constants

| Constant                                | Description                                                                                                                                                                                                                                                              |
| ---                                     | ---                                                                                                                                                                                                                                                                      |
| GameInputDefaultFocusPolicy             | Ensures that input is always sent to the game, even when it is not in focus. This is the default focus policy for input devices.                                                                                                                                         |
| GameInputDisableBackgroundInput         | Ensures that input is sent to the game only when it is in focus. When the game is not in focus, it receives a neutral or "rest" state report from the input device, as though the user is not interacting with the device. This policy does not apply to system buttons. |
| GameInputExclusiveForegroundInput       | Prevents other processes using GameInput from seeing the input it receives. This restriction is in effect only when the game is in focus and does not apply to system buttons.                                                                                           |
| GameInputDisableBackgroundGuideButton   | Ensures that Guide button events are sent to the game only when it is in focus. The Guide button is reported as not pressed when the game is not in focus.                                                                                                               |
| GameInputExclusiveForegroundGuideButton | Prevents other processes using GameInput from seeing Guide button presses it receives. This restriction is in effect only when the game is in focus.                                                                                                                     |
| GameInputDisableBackgroundShareButton   | Ensures that Share button events are sent to the game only when it is in focus. The Share button is reported as not pressed when the game is not in focus.                                                                                                               |
| GameInputExclusiveForegroundShareButton | Prevents other processes using GameInput from seeing Share button presses it receives. This restriction is in effect only when the game is in focus.                                                                                                                     |

<a id="remarksSection"></a>

## Remarks

This enumeration is used by the [IGameInput::SetFocusPolicy](../interfaces/igameinput/methods/igameinput_setfocuspolicy-v1.md) method. Call `SetFocusPolicy` to specify whether input is sent to a game when it is not in focus. By default, input is broadcast to all processes regardless of whether they are in focus. Values may be combined.

If the game processes the Guide or Share buttons, setting the `GameInputExclusiveForegroundGuideButton` or `GameInputExclusiveForegroundShareButton` flags respectively can help ensure background overlay applications do not also handle them. For example, this can prevent unwanted overlay menus or screenshots from popping up over a game that intends to use the buttons itself.

> [!NOTE]
> Many users use overlay applications that use the Guide button for menus and the Share button for screenshots. Consider whether your game has a need to override that functionality to avoid user confusion.

Focus policy only applies on Windows. The Guide and Share button values of GameInputFocusPolicy were added in the Windows SDK 10.0.26031 Preview GameInput.h and will be added to a future release of the GDK.

For more information, see [GameInput fundamentals](../../../../input/overviews/input-fundamentals.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
