---
author: AlexYatskov
description: Describes the state of an arcade stick.
edited: 03/06/2025
kindex: GameInputArcadeStickState
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputArcadeStickState
---

# GameInputArcadeStickState

Describes the state of an arcade stick.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputArcadeStickState
{
    GameInputArcadeStickButtons buttons;
};
```

<a id="membersSection"></a>

### Members

*buttons*<br>
Type: [GameInputArcadeStickButtons](../enums/gameinputarcadestickbuttons.md)

The inputs from an arcade stick.

<a id="remarksSection"></a>

## Remarks

This structure is used by the [IGameInputReading::GetArcadeStickState](../interfaces/igameinputreading/methods/igameinputreading_getarcadestickstate.md) method.

For more information, see the [Getting data from readings](../../../../features/common/input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../features/common/input/overviews/input-readings.md). For a related code example, see [A simple gamepad input loop](../../../../features/common/input/overviews/input-readings.md#sampleSection).

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