---
author: AlexYatskov
description: "Describes the state of an arcade stick (v1)."
edited: "03/06/2025"
kindex: "GameInputArcadeStickState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputArcadeStickState (v1)"
---

# GameInputArcadeStickState (v1)

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

*buttons*
Type: [GameInputArcadeStickButtons](../enums/gameinputarcadestickbuttons-v1.md)

The inputs from an arcade stick.

<a id="remarksSection"></a>

## Remarks

This structure is used by the [IGameInputReading::GetArcadeStickState](../interfaces/igameinputreading/methods/igameinputreading_getarcadestickstate-v1.md) method.

For more information, see the [Getting data from readings](../../../../input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../input/overviews/input-readings.md). For a related code example, see [A simple gamepad input loop](../../../../input/overviews/input-readings.md#sampleSection).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
