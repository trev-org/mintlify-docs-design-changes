---
author: AlexYatskov
description: Sets the focus policy for a game's input devices.
edited: 03/06/2025
kindex: IGameInput::SetFocusPolicy
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInput::SetFocusPolicy
---

# IGameInput::SetFocusPolicy

Sets the focus policy for a game's input devices.

## Syntax

```cpp
void SetFocusPolicy(
    GameInputFocusPolicy policy
);
```

### Parameters

*policy* &nbsp;&nbsp;\_In\_\
Type: [GameInputFocusPolicy](../../../enums/gameinputfocuspolicy.md)

The focus policy to be set.

### Return value

Type: void

No return.

## Remarks

The `IGameInput::SetFocusPolicy` method sets the focus policy for a game's input devices. The focus policy determines whether the input devices provide input based on the focus of the game. Focus refers to whether the game is selected as the main focus or if it is currently running in the background while another application has focus. For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

Focus policy only applies on Windows.

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)  
[GameInputFocusPolicy](../../../enums/gameinputfocuspolicy.md)  
[IGameInput](../igameinput.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |