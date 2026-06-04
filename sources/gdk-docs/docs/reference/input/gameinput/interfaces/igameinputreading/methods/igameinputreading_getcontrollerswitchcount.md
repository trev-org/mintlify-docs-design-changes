---
author: AlexYatskov
description: Retrieves the number of switches on a game controller.
edited: 03/06/2025
kindex: GetControllerSwitchCount
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetControllerSwitchCount
---

# IGameInputReading::GetControllerSwitchCount

Retrieves the number of switches on a game controller.

## Syntax

```cpp
uint32_t GetControllerSwitchCount();
```

### Parameters

This method has no parameters.

### Return value

Type: uint32_t

Returns the number of switches on a game controller.

## Remarks

The `IGameInputReading::GetControllerSwitchCount` method retrieves the number of switches for a game controller. It also determines the buffers required by the [IGameInputReading::GetControllerSwitchState](igameinputreading_getcontrollerswitchstate.md) method. For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputReading](../igameinputreading.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |