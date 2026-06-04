---
author: AlexYatskov
description: "Describes the state of UI navigation input (v1)."
edited: "03/06/2025"
kindex: "GameInputUiNavigationState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputUiNavigationState (v1)"
---

# GameInputUiNavigationState (v1)

Describes the state of UI navigation input.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputUiNavigationState
{
    GameInputUiNavigationButtons buttons;
};
```

<a id="membersSection"></a>

### Members

*buttons*
Type: [GameInputUiNavigationButtons](../enums/gameinputuinavigationbuttons-v1.md)

States of the UI navigation buttons.

<a id="remarksSection"></a>

## Remarks

This structure is used by the [IGameInputReading::GetUiNavigationState](../interfaces/igameinputreading/methods/igameinputreading_getuinavigationstate-v1.md) method.

For more information, see the [Getting data from readings](../../../../input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../input/overviews/input-readings.md). For a related code example, see [A simple gamepad input loop](../../../../input/overviews/input-readings.md#sampleSection).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Input API Overview](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
