---
author: AlexYatskov
description: Enumerates mouse positions.
edited: 03/03/2025
kindex: GameInputMousePositions
ms.author: alyatsko
ms.date: 03/03/2025
ms.topic: reference
permissioned-type: public
title: GameInputMousePositions
---

# GameInputMousePositions

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

These flag values are used in the [GameInputMouseState](../structs/gameinputmousestate.md) structure (to get device readings).

For more information about accessing device properties, see [GameInput devices](../../../../features/common/input/overviews/input-devices.md). For more information about getting device readings, see [GameInput readings](../../../../features/common/input/overviews/input-readings.md).

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
| **v1** | **New enum** introduced in v1 with 3 constants: `NoPosition`, `AbsolutePosition`, `RelativePosition`. |
| **v0** | Not present. |