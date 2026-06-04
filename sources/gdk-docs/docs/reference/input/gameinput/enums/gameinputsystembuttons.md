---
author: AlexYatskov
description: Enumerates buttons used for controlling the system.
edited: 03/03/2025
kindex: GameInputSystemButtons
ms.author: alyatsko
ms.date: 03/03/2025
ms.topic: reference
permissioned-type: public
title: GameInputSystemButtons
---

# GameInputSystemButtons

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

For more information, see [IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../gameinput_members.md)<br>
[IGameInput::RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md)
## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |