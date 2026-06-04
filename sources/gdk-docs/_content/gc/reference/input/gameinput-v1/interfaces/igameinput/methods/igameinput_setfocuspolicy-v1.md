---
author: AlexYatskov
description: "Sets the focus policy for a game's input devices (v1)."
edited: "03/06/2025"
kindex: "IGameInput::SetFocusPolicy (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInput::SetFocusPolicy (v1)"
---

# IGameInput::SetFocusPolicy (v1)

Sets the focus policy for a game's input devices.

## Syntax

```cpp
void SetFocusPolicy(
    GameInputFocusPolicy policy
);
```

### Parameters

*policy* &nbsp;&nbsp;\_In\_\
Type: [GameInputFocusPolicy](../../../enums/gameinputfocuspolicy-v1.md)

The focus policy to be set.

### Return value

Type: void

No return.

## Remarks

The `IGameInput::SetFocusPolicy` method sets the focus policy for a game's input devices. The focus policy determines whether the input devices provide input based on the focus of the game. Focus refers to whether the game is selected as the main focus or if it is currently running in the background while another application has focus. For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

Focus policy only applies on Windows.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[GameInputFocusPolicy](../../../enums/gameinputfocuspolicy-v1.md)
[IGameInput](../igameinput-v1.md)
