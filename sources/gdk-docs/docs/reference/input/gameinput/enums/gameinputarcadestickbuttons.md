---
author: AlexYatskov
description: Enumerates inputs from an arcade stick.
edited: 03/03/2025
kindex: GameInputArcadeStickButtons
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputArcadeStickButtons
---

# GameInputArcadeStickButtons

Enumerates inputs from an arcade stick.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputArcadeStickButtons
{
    GameInputArcadeStickNone     = 0x00000000,
    GameInputArcadeStickMenu     = 0x00000001,
    GameInputArcadeStickView     = 0x00000002,
    GameInputArcadeStickUp       = 0x00000004,
    GameInputArcadeStickDown     = 0x00000008,
    GameInputArcadeStickLeft     = 0x00000010,
    GameInputArcadeStickRight    = 0x00000020,
    GameInputArcadeStickAction1  = 0x00000040,
    GameInputArcadeStickAction2  = 0x00000080,
    GameInputArcadeStickAction3  = 0x00000100,
    GameInputArcadeStickAction4  = 0x00000200,
    GameInputArcadeStickAction5  = 0x00000400,
    GameInputArcadeStickAction6  = 0x00000800,
    GameInputArcadeStickSpecial1 = 0x00001000,
    GameInputArcadeStickSpecial2 = 0x00002000
};
```

<a id="constantsSection"></a>

## Constants

| Constant                     | Description                                      |
| ---                          | ---                                              |
| GameInputArcadeStickNone     | The arcade stick is in a neutral state.          |
| GameInputArcadeStickMenu     | The menu button on the arcade stick is pressed.  |
| GameInputArcadeStickView     | The view button on the arcade stick is pressed.  |
| GameInputArcadeStickUp       | The arcade stick is pushed up.                   |
| GameInputArcadeStickDown     | The arcade stick is pushed down.                 |
| GameInputArcadeStickLeft     | The arcade stick is pushed to the left.          |
| GameInputArcadeStickRight    | The arcade stick is pushed to the right.         |
| GameInputArcadeStickAction1  | Action button 1 on the arcade stick is pressed.  |
| GameInputArcadeStickAction2  | Action button 2 on the arcade stick is pressed.  |
| GameInputArcadeStickAction3  | Action button 3 on the arcade stick is pressed.  |
| GameInputArcadeStickAction4  | Action button 4 on the arcade stick is pressed.  |
| GameInputArcadeStickAction5  | Action button 5 on the arcade stick is pressed.  |
| GameInputArcadeStickAction6  | Action button 6 on the arcade stick is pressed.  |
| GameInputArcadeStickSpecial1 | Special button 1 on the arcade stick is pressed. |
| GameInputArcadeStickSpecial2 | Special button 2 on the arcade stick is pressed. |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputArcadeStickState](../structs/gameinputarcadestickstate.md) structure. You can combine values to read multiple buttons simultaneously.

For more information, see the [Getting data from readings](../../../../features/common/input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../features/common/input/overviews/input-readings.md).

This enumeration can additionally be used with the [IGameInputMapper::GetArcadeStickButtonMappingInfo](../interfaces/igameinputmapper/methods/igameinputmapper_getarcadestickbuttonmappinginfo.md) method to retrieve mapping information for a specific arcade stick button.


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