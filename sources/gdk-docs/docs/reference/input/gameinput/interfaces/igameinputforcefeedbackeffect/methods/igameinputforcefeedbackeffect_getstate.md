---
author: AlexYatskov
description: Retrieves the current state for a force feedback effect.
edited: 03/06/2025
kindex: IGameInputForceFeedbackEffect::GetState
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInputForceFeedbackEffect::GetState
---

# IGameInputForceFeedbackEffect::GetState

Retrieves the current state for a force feedback effect.

## Syntax

```cpp
GameInputFeedbackEffectState GetState();
```

### Parameters

This method has no parameters.

### Return value

Type: [GameInputFeedbackEffectState](../../../enums/gameinputfeedbackeffectstate.md)

The state of the force feedback effect.

## Remarks

The `GetState` method retrieves the current state of a force feedback effect. The current state may be running, stopped, or paused. For more information, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |