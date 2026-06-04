---
author: JosephValverde
description: Enumerates input element kinds.
edited: 9/17/2025
kindex: GameInputElementKind
ms.author: josephva
ms.date: 9/17/2025
ms.topic: reference
permissioned-type: public
title: GameInputElementKind
---

# GameInputElementKind

Enumerates the element kind of a given input.

## Syntax

```cpp
enum GameInputElementKind
{
    GameInputElementKindNone   = 0,
    GameInputElementKindAxis   = 1,
    GameInputElementKindButton = 2,
    GameInputElementKindSwitch = 3
};
```

## Constants

| Constant                  | Description                                                        |
| ---                       | ---                                                                |
| GameInputElementKindNone  | Indicates that the element kind is not known or there is no input. |
| GameInputElementKindAxis  | Indicates that the element is an axis.                             |
| GameInputElementKindButton| Indicates that the element is a button.                            |
| GameInputElementKindSwitch| Indicates that the element is a switch.                            |

## Remarks

Member of [GameInputAxisMapping](../structs/gameinputaxismapping.md).

Member of [GameInputButtonMapping](../structs/gameinputbuttonmapping.md).

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Introduced. |