---
author: AlexYatskov
description: Describes the state of a mouse.
edited: 03/06/2025
kindex: GameInputMouseState
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputMouseState
---

# GameInputMouseState

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

*buttons*<br>
Type: [GameInputMouseButtons](../enums/gameinputmousebuttons.md)

State of the mouse buttons.

*positionFlags*<br>
Type: [GameInputMousePosition](../enums/gameInputmousepositions.md)

State of the mouse positions.

*positionX*<br>
Type: int64_t

Cumulative x-axis change in the position of the mouse.

*positionY*<br>
Type: int64_t

Cumulative y-axis change in the position of the mouse.

*absolutePositionX*<br>
Type: int64_t

Absolute x-axis position of the mouse.

*absolutePositionY*<br>
Type: int64_t

Absolute y-axis position of the mouse.

*wheelX*<br>
Type: int64_t

Cumulative change in the x-axis scroll wheel.

*wheelY*<br>
Type: int64_t

Cumulative change in the y-axis scroll wheel.

<a id="remarksSection"></a>

## Remarks

This structure is used by the [IGameInputReading::GetMouseState](../interfaces/igameinputreading/methods/igameinputreading_getmousestate.md) method.

Mouse and scroll-wheel movements are not reported as absolute positions. Calculate deltas by subtracting the values in the current reading from the values in the previous reading.

GameInput will present any available trackpad devices as a single virtual mouse device.

For more information, see [GameInput readings](../../../../features/common/input/overviews/input-readings.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v1** | **Added** `positions` (GameInputMousePositions bitmask) and `absolutePositionX`/`absolutePositionY` fields. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
struct GameInputMouseState
{
    GameInputMouseButtons buttons;
    int64_t               positionX;
    int64_t               positionY;
    int64_t               wheelX;
    int64_t               wheelY;
};
```