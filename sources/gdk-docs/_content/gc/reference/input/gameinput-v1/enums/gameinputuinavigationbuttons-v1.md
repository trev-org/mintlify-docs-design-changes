---
author: AlexYatskov
description: "Enumerates UI navigation buttons (v1)."
edited: "03/03/2025"
kindex: "GameInputUiNavigationButtons (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputUiNavigationButtons (v1)"
---

# GameInputUiNavigationButtons (v1)

Enumerates UI navigation buttons.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputUiNavigationButtons
{
    GameInputUiNavigationNone        = 0x00000000,
    GameInputUiNavigationMenu        = 0x00000001,
    GameInputUiNavigationView        = 0x00000002,
    GameInputUiNavigationAccept      = 0x00000004,
    GameInputUiNavigationCancel      = 0x00000008,
    GameInputUiNavigationUp          = 0x00000010,
    GameInputUiNavigationDown        = 0x00000020,
    GameInputUiNavigationLeft        = 0x00000040,
    GameInputUiNavigationRight       = 0x00000080,
    GameInputUiNavigationContext1    = 0x00000100,
    GameInputUiNavigationContext2    = 0x00000200,
    GameInputUiNavigationContext3    = 0x00000400,
    GameInputUiNavigationContext4    = 0x00000800,
    GameInputUiNavigationPageUp      = 0x00001000,
    GameInputUiNavigationPageDown    = 0x00002000,
    GameInputUiNavigationPageLeft    = 0x00004000,
    GameInputUiNavigationPageRight   = 0x00008000,
    GameInputUiNavigationScrollUp    = 0x00010000,
    GameInputUiNavigationScrollDown  = 0x00020000,
    GameInputUiNavigationScrollLeft  = 0x00040000,
    GameInputUiNavigationScrollRight = 0x00080000
};
```

<a id="constantsSection"></a>

## Constants

| Constant                         | Description                    |
| ---                              | ---                            |
| GameInputUiNavigationNone        | No navigation input.           |
| GameInputUiNavigationMenu        | Menu button.                   |
| GameInputUiNavigationView        | View button.                   |
| GameInputUiNavigationAccept      | Accept button.                 |
| GameInputUiNavigationCancel      | Cancel button.                 |
| GameInputUiNavigationUp          | Up navigation input.           |
| GameInputUiNavigationDown        | Down navigation input.         |
| GameInputUiNavigationLeft        | Left navigation input.         |
| GameInputUiNavigationRight       | Right navigation input.        |
| GameInputUiNavigationContext1    | Context 1 navigation input.    |
| GameInputUiNavigationContext2    | Context 2 navigation input.    |
| GameInputUiNavigationContext3    | Context 3 navigation input.    |
| GameInputUiNavigationContext4    | Context 4 navigation input.    |
| GameInputUiNavigationPageUp      | Page up navigation input.      |
| GameInputUiNavigationPageDown    | Page down navigation input.    |
| GameInputUiNavigationPageLeft    | Page left navigation input.    |
| GameInputUiNavigationPageRight   | Page right navigation input.   |
| GameInputUiNavigationScrollUp    | Scroll up navigation input.    |
| GameInputUiNavigationScrollDown  | Scroll down navigation input.  |
| GameInputUiNavigationScrollLeft  | Scroll left navigation input.  |
| GameInputUiNavigationScrollRight | Scroll right navigation input. |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputUiNavigationState](../structs/gameinputuinavigationstate-v1.md) structure. `GameInputUiNavigationState` is used by the [IGameInputReading::GetUiNavigationState](../interfaces/igameinputreading/methods/igameinputreading_getuinavigationstate-v1.md) method.

By using a UI navigation controller, which is a virtual device, a title needs to process only one kind of input for UI navigation instead of processing input from each kind of device that the title supports.

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
