---
author: AlexYatskov
description: "Enumerates flight stick buttons (v1)."
edited: "03/03/2025"
kindex: "GameInputFlightStickButtons (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputFlightStickButtons (v1)"
---

# GameInputFlightStickButtons (v1)

Enumerates flight stick buttons.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputFlightStickButtons
{
    GameInputFlightStickNone          = 0x00000000,
    GameInputFlightStickMenu          = 0x00000001,
    GameInputFlightStickView          = 0x00000002,
    GameInputFlightStickFirePrimary   = 0x00000004,
    GameInputFlightStickFireSecondary = 0x00000008
};
```

<a id="constantsSection"></a>

## Constants

| Constant                          | Description                                          |
| ---                               | ---                                                  |
| GameInputFlightStickNone          | Indicates that no button is pressed.                 |
| GameInputFlightStickMenu          | Indicates that the menu button is pressed.           |
| GameInputFlightStickView          | Indicates that the view button is pressed.           |
| GameInputFlightStickFirePrimary   | Indicates that the primary fire button is pressed.   |
| GameInputFlightStickFireSecondary | Indicates that the secondary fire button is pressed. |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputFlightStickState](../structs/gameinputflightstickstate-v1.md) structure. You can combine values to read multiple buttons simultaneously.

For more information, see the [Getting data from readings](../../../../input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../input/overviews/input-readings.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
