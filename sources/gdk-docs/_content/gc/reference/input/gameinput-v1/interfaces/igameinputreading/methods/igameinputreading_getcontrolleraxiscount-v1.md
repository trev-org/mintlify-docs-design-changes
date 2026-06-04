---
author: AlexYatskov
description: "Retrieves the number of axes on a game controller (v1)."
edited: "03/06/2025"
kindex: "GetControllerAxisCount (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetControllerAxisCount (v1)"
---

# IGameInputReading::GetControllerAxisCount (v1)

Retrieves the number of axes on a game controller.

## Syntax

```cpp
uint32_t GetControllerAxisCount();
```

### Return value
Type: uint32_t

Returns the number of axes on the game controller.

## Remarks

The `IGameInputReading::GetControllerAxisCount` method determines the buffers needed for the [IGameInputReading::GetControllerAxisState](igameinputreading_getcontrolleraxisstate-v1.md) method. `GetControllerAxisCount` retrieves axis, button, and switch state from a game controller. Each state is returned as a separate variable-length array into buffers provided by the caller. The number of valid buffer entries upon return is indicated by the return value.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md)
[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInputReading](../igameinputreading-v1.md)
