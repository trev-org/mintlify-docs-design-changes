---
author: AlexYatskov
description: "Retrieves the number of buttons on a game controller (v1)."
edited: "03/06/2025"
kindex: "GetControllerButtonCount (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetControllerButtonCount (v1)"
---

# IGameInputReading::GetControllerButtonCount (v1)

Retrieves the number of buttons on a game controller.

## Syntax

```cpp
uint32_t GetControllerButtonCount();
```

### Parameters

This method has no parameters.

### Return value

Type: uint32_t

Returns the number of buttons on the game controller.

## Remarks

The `IGameInputReading::GetControllerButtonCount` method retrieves the number of buttons for a game controller. It also determines the buffers required by the [IGameInputReading::GetControllerButtonState](igameinputreading_getcontrollerbuttonstate-v1.md) method.

For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInputReading](../igameinputreading-v1.md)
