---
author: AlexYatskov
description: "Enumerates mouse positions (v1)."
edited: "03/03/2025"
kindex: "GameInputMousePositions (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputMousePositions (v1)"
---

# GameInputMousePositions (v1)

Enumerates mouse buttons.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputMousePositions
{
    GameInputMouseNoPosition       = 0x00000000,
    GameInputMouseAbsolutePosition = 0x00000001,
    GameInputMouseRelativePosition = 0x00000002
};
```

<a id="constantsSection"></a>

## Constants

| Constant                       | Description                                     |
| ---                            | ---                                             |
| GameInputMouseNoPosition       | Indicates the mouse position is unknown.        |
| GameInputMouseAbsolutePosition | Indicates the absolute mouse position is known. |
| GameInputMouseRelativePosition | Indicates the relative mouse position is known. |

<a id="remarksSection"></a>

## Remarks

These flag values are used in the [GameInputMouseState](../structs/gameinputmousestate-v1.md) structure (to get device readings).

For more information about accessing device properties, see [GameInput devices](../../../../input/overviews/input-devices.md). For more information about getting device readings, see [GameInput readings](../../../../input/overviews/input-readings.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
