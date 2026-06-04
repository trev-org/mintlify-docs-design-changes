---
author: AlexYatskov
description: Enumerates positions of a switch on an input device.
edited: 03/03/2025
kindex: GameInputSwitchPosition
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputSwitchPosition
---

# GameInputSwitchPosition

Enumerates positions of a switch on an input device.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputSwitchPosition
{
    GameInputSwitchCenter    = 0,
    GameInputSwitchUp        = 1,
    GameInputSwitchUpRight   = 2,
    GameInputSwitchRight     = 3,
    GameInputSwitchDownRight = 4,
    GameInputSwitchDown      = 5,
    GameInputSwitchDownLeft  = 6,
    GameInputSwitchLeft      = 7,
    GameInputSwitchUpLeft    = 8
};
```

<a id="constantsSection"></a>

## Constants

| Constant                 | Description                        |
| ---                      | ---                                |
| GameInputSwitchCenter    | Switch in the center position.     |
| GameInputSwitchUp        | Switch in the up position.         |
| GameInputSwitchUpRight   | Switch in the up-right position.   |
| GameInputSwitchRight     | Switch in the right position.      |
| GameInputSwitchDownRight | Switch in the down-right position. |
| GameInputSwitchDown      | Switch in the down position.       |
| GameInputSwitchDownLeft  | Switch in the down-left position.  |
| GameInputSwitchLeft      | Switch in the left position.       |
| GameInputSwitchUpLeft    | Switch in the up-left position.    |

<a id="remarksSection"></a>

## Remarks

Not every switch supports each value.

This enumeration is used in the [GameInputFlightStickState](../structs/gameinputflightstickstate.md) structure and the [IGameInputReading::GetControllerSwitchState](../interfaces/igameinputreading/methods/igameinputreading_getcontrollerswitchstate.md) method.

For intermediate and advanced use cases of the GameInput API, see [Advanced GameInput](../../../../features/common/input/advanced/input-advanced-topics.md) topics.

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
| **v0** | Introduced. |