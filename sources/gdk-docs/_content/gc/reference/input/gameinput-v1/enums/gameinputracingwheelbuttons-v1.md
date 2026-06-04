---
author: AlexYatskov
description: "Enumerates buttons on a racing wheel (v1)."
edited: "03/03/2025"
kindex: "GameInputRacingWheelButtons (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputRacingWheelButtons (v1)"
---

# GameInputRacingWheelButtons (v1)

Enumerates buttons on a racing wheel.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputRacingWheelButtons
{
    GameInputRacingWheelNone         = 0x00000000,
    GameInputRacingWheelMenu         = 0x00000001,
    GameInputRacingWheelView         = 0x00000002,
    GameInputRacingWheelPreviousGear = 0x00000004,
    GameInputRacingWheelNextGear     = 0x00000008,
    GameInputRacingWheelDpadUp       = 0x00000010,
    GameInputRacingWheelDpadDown     = 0x00000020,
    GameInputRacingWheelDpadLeft     = 0x00000040,
    GameInputRacingWheelDpadRight    = 0x00000080
};
```

<a id="constantsSection"></a>

## Constants

| Constant                         | Description                                                |
| ---                              | ---                                                        |
| GameInputRacingWheelNone         | Indicates that no button is pressed.                       |
| GameInputRacingWheelMenu         | Indicates that the menu button is pressed.                 |
| GameInputRacingWheelView         | Indicates that the view button is pressed.                 |
| GameInputRacingWheelPreviousGear | Indicates that the previous gear is selected.              |
| GameInputRacingWheelNextGear     | Indicates that the next gear is selected.                  |
| GameInputRacingWheelDpadUp       | Indicates that the top portion of the D-pad is pressed.    |
| GameInputRacingWheelDpadDown     | Indicates that the bottom portion of the D-pad is pressed. |
| GameInputRacingWheelDpadLeft     | Indicates that the left portion of the D-pad is pressed.   |
| GameInputRacingWheelDpadRight    | Indicates that the right portion of the D-pad is pressed.  |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputRacingWheelState](../structs/gameinputracingwheelstate-v1.md) structure. You can combine values to read multiple buttons simultaneously.

For more information, see the [Getting data from readings](../../../../input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../input/overviews/input-readings.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
