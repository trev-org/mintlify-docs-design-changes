---
author: AlexYatskov
description: Enumerates types of switches supported by an input device.
edited: 03/03/2025
kindex: GameInputSwitchKind
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputSwitchKind
---

# GameInputSwitchKind

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

This enumeration is used in the [GameInputControllerSwitchInfo](../structs/gameinputcontrollerswitchinfo.md) structure.

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