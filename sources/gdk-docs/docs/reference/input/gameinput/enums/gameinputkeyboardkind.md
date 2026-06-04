---
author: AlexYatskov
description: Enumerates keyboard types by key layout.
edited: 03/03/2025
kindex: GameInputKeyboardKind
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputKeyboardKind
---

# GameInputKeyboardKind

Enumerates keyboard types by key layout.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputKeyboardKind
{
    GameInputUnknownKeyboard = -1,
    GameInputAnsiKeyboard    =  0,
    GameInputIsoKeyboard     =  1,
    GameInputKsKeyboard      =  2,
    GameInputAbntKeyboard    =  3,
    GameInputJisKeyboard     =  4
};
```

<a id="constantsSection"></a>

## Constants

| Constant                 | Description                                         |
| ---                      | ---                                                 |
| GameInputUnknownKeyboard | Indicates that the keyboard type is unknown.        |
| GameInputAnsiKeyboard    | Indicates that the keyboard type is ANSI (104-key). |
| GameInputIsoKeyboard     | Indicates that the keyboard type is ISO (105-key).  |
| GameInputKsKeyboard      | Indicates that the keyboard type is KS (106-key).   |
| GameInputAbntKeyboard    | Indicates that the keyboard type is ABNT (107-key). |
| GameInputJisKeyboard     | Indicates that the keyboard type is JIS (109-key).  |

<a id="remarksSection"></a>

## Remarks

The keyboard types in this enumeration refer to the layouts of keys on various types of keyboards.

This enumeration is used in the [GameInputKeyboardInfo](../structs/gameinputkeyboardinfo.md) structure.

For more information, see [GameInput devices](../../../../features/common/input/overviews/input-devices.md).

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