---
author: AlexYatskov
description: "Enumerates gamepad buttons, including the directional pad (D-pad) (v1)."
edited: "03/03/2025"
kindex: "GameInputGamepadButtons (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputGamepadButtons (v1)"
---

# GameInputGamepadButtons (v1)

Enumerates gamepad buttons, including the directional pad (D-pad).

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputGamepadButtons
{
    GameInputGamepadNone            = 0x00000000,
    GameInputGamepadMenu            = 0x00000001,
    GameInputGamepadView            = 0x00000002,
    GameInputGamepadA               = 0x00000004,
    GameInputGamepadB               = 0x00000008,
    GameInputGamepadX               = 0x00000010,
    GameInputGamepadY               = 0x00000020,
    GameInputGamepadDPadUp          = 0x00000040,
    GameInputGamepadDPadDown        = 0x00000080,
    GameInputGamepadDPadLeft        = 0x00000100,
    GameInputGamepadDPadRight       = 0x00000200,
    GameInputGamepadLeftShoulder    = 0x00000400,
    GameInputGamepadRightShoulder   = 0x00000800,
    GameInputGamepadLeftThumbstick  = 0x00001000,
    GameInputGamepadRightThumbstick = 0x00002000
};
```

<a id="constantsSection"></a>

## Constants

| Constant                        | Description                                                |
| ---                             | ---                                                        |
| GameInputGamepadNone            | Indicates that no button is pressed.                       |
| GameInputGamepadMenu            | Indicates that the menu button is pressed.                 |
| GameInputGamepadView            | Indicates that the view button is pressed.                 |
| GameInputGamepadA               | Indicates that the A button is pressed.                    |
| GameInputGamepadB               | Indicates that the B button is pressed.                    |
| GameInputGamepadX               | Indicates that the X button is pressed.                    |
| GameInputGamepadY               | Indicates that the Y button is pressed.                    |
| GameInputGamepadDPadUp          | Indicates that the top portion of the D-pad is pressed.    |
| GameInputGamepadDPadDown        | Indicates that the bottom portion of the D-pad is pressed. |
| GameInputGamepadDPadLeft        | Indicates that the left portion of the D-pad is pressed.   |
| GameInputGamepadDPadRight       | Indicates that the right portion of the D-pad is pressed.  |
| GameInputGamepadLeftShoulder    | Indicates that the left shoulder button is pressed.        |
| GameInputGamepadRightShoulder   | Indicates that the right shoulder button is pressed.       |
| GameInputGamepadLeftThumbstick  | Indicates that the left thumbstick is pressed.             |
| GameInputGamepadRightThumbstick | Indicates that the right thumbstick is pressed.            |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputGamePadState](../structs/gameinputgamepadstate-v1.md) structure. You can combine values to read multiple buttons simultaneously.

For more information, see the [Getting data from readings](../../../../input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../input/overviews/input-readings.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
