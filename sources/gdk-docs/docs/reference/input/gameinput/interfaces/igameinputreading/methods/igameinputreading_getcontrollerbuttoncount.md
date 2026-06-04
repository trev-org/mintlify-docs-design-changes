---
author: AlexYatskov
description: Retrieves the number of buttons on a game controller.
edited: 03/06/2025
kindex: GetControllerButtonCount
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetControllerButtonCount
---

# IGameInputReading::GetControllerButtonCount

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

The `IGameInputReading::GetControllerButtonCount` method retrieves the number of buttons for a game controller. It also determines the buffers required by the [IGameInputReading::GetControllerButtonState](igameinputreading_getcontrollerbuttonstate.md) method.

For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputReading](../igameinputreading.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |