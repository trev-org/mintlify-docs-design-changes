---
author: AlexYatskov
description: "Enumerates mouse buttons (v1)."
edited: "03/03/2025"
kindex: "GameInputMouseButtons (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputMouseButtons (v1)"
---

# GameInputMouseButtons (v1)

Enumerates mouse buttons.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputMouseButtons
{
    GameInputMouseNone           = 0x00000000,
    GameInputMouseLeftButton     = 0x00000001,
    GameInputMouseRightButton    = 0x00000002,
    GameInputMouseMiddleButton   = 0x00000004,
    GameInputMouseButton4        = 0x00000008,
    GameInputMouseButton5        = 0x00000010,
    GameInputMouseWheelTiltLeft  = 0x00000020,
    GameInputMouseWheelTiltRight = 0x00000040
};
```

<a id="constantsSection"></a>

## Constants

| Constant                     | Description                                   |
| ---                          | ---                                           |
| GameInputMouseNone           | Indicates no mouse buttons are pressed.       |
| GameInputMouseLeftButton     | Indicates the left mouse button.              |
| GameInputMouseRightButton    | Indicates the right mouse button.             |
| GameInputMouseMiddleButton   | Indicates the middle mouse button.            |
| GameInputMouseButton4        | Indicates the fourth mouse button.            |
| GameInputMouseButton5        | Indicates the fifth mouse button.             |
| GameInputMouseWheelTiltLeft  | Indicates the left tilt of the scroll wheel.  |
| GameInputMouseWheelTiltRight | Indicates the right tilt of the scroll wheel. |

<a id="remarksSection"></a>

## Remarks

These flag values are used in the [GameInputMouseInfo](../structs/gameinputmouseinfo-v1.md) structure (to determine which mouse buttons are available) and in the [GameInputMouseState](../structs/gameinputmousestate-v1.md) structure (to get device readings).

For more information about accessing device properties, see [GameInput devices](../../../../input/overviews/input-devices.md). For more information about getting device readings, see [GameInput readings](../../../../input/overviews/input-readings.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
