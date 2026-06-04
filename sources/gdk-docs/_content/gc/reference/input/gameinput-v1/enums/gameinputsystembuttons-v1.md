---
author: AlexYatskov
description: "Enumerates buttons used for controlling the system (v1)."
edited: "03/03/2025"
kindex: "GameInputSystemButtons (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputSystemButtons (v1)"
---

# GameInputSystemButtons (v1)

Enumerates buttons used for controlling the system, often outside of a game.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputSystemButtons
{
    GameInputSystemButtonNone  = 0x00000000,
    GameInputSystemButtonGuide = 0x00000001,
    GameInputSystemButtonShare = 0x00000002
};
```

<a id="constantsSection"></a>

## Constants

| Constant                   | Description        |
| ---                        | ---                |
| GameInputSystemButtonNone  | No system buttons. |
| GameInputSystemButtonGuide | Guide button.      |
| GameInputSystemButtonShare | Share button.      |

<a id="remarksSection"></a>

## Remarks

This enumeration is used to identify system buttons. Values may be combined.

For more information, see [IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback-v1.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
[IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback-v1.md)
