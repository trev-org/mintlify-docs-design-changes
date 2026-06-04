---
author: AlexYatskov
description: "Enumerates types of switches supported by an input device (v1)."
edited: "03/03/2025"
kindex: "GameInputSwitchKind (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputSwitchKind (v1)"
---

# GameInputSwitchKind (v1)

Enumerates types of switches supported by an input device.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputSwitchKind
{
    GameInputUnknownSwitchKind = -1,
    GameInput2WaySwitch        =  0,
    GameInput4WaySwitch        =  1,
    GameInput8WaySwitch        =  2
};
```

<a id="constantsSection"></a>

## Constants

| Constant                   | Description                  |
| ---                        | ---                          |
| GameInputUnknownSwitchKind | Unidentified switch type.    |
| GameInput2WaySwitch        | Switch with two positions.   |
| GameInput4WaySwitch        | Switch with four positions.  |
| GameInput8WaySwitch        | Switch with eight positions. |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputControllerSwitchInfo](../structs/gameinputcontrollerswitchinfo-v1.md) and [GameInputFlightStickInfo](../structs/gameinputflightstickinfo-v1.md) structures. For a flight stick, the values usually apply to the hat switch.

For intermediate and advanced use cases of the GameInput API, see [Advanced GameInput](../../../../input/advanced/input-advanced-topics.md) topics.

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
