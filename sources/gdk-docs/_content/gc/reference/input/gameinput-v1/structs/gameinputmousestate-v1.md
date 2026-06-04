---
author: AlexYatskov
description: "Describes the state of a mouse (v1)."
edited: "03/06/2025"
kindex: "GameInputMouseState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputMouseState (v1)"
---

# GameInputMouseState (v1)

Describes the state of a mouse.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputMouseState
{
    GameInputMouseButtons   buttons;
    GameInputMousePositions positions;
    int64_t                 positionX;
    int64_t                 positionY;
    int64_t                 absolutePositionX;
    int64_t                 absolutePositionY;
    int64_t                 wheelX;
    int64_t                 wheelY;
};
```

<a id="membersSection"></a>

### Members

*buttons*
Type: [GameInputMouseButtons](../enums/gameinputmousebuttons-v1.md)

State of the mouse buttons.

*positionFlags*
Type: [GameInputMousePosition](../enums/gameinputmousepositions-v1.md)

State of the mouse positions.

*positionX*
Type: int64_t

Cumulative x-axis change in the position of the mouse.

*positionY*
Type: int64_t

Cumulative y-axis change in the position of the mouse.

*absolutePositionX*
Type: int64_t

Absolute x-axis position of the mouse.

*absolutePositionY*
Type: int64_t

Absolute y-axis position of the mouse.

*wheelX*
Type: int64_t

Cumulative change in the x-axis scroll wheel.

*wheelY*
Type: int64_t

Cumulative change in the y-axis scroll wheel.

<a id="remarksSection"></a>

## Remarks

This structure is used by the [IGameInputReading::GetMouseState](../interfaces/igameinputreading/methods/igameinputreading_getmousestate-v1.md) method.

Mouse and scroll-wheel movements are not reported as absolute positions. Calculate deltas by subtracting the values in the current reading from the values in the previous reading.

GameInput will present any available trackpad devices as a single virtual mouse device.

For more information, see [GameInput readings](../../../../input/overviews/input-readings.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
