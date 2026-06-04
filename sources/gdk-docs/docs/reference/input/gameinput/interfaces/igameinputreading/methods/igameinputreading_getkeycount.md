---
author: AlexYatskov
description: Retrieves the number of keys active on a game controller.
edited: 03/06/2025
kindex: GetKeyCount
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetKeyCount
---

# IGameInputReading::GetKeyCount

Retrieves the number of keys active on a keyboard.

## Syntax

```cpp
uint32_t GetKeyCount();
```

### Parameters

This method has no parameters.

### Return value

Type: uint32_t

This returns the number of keys active on a game controller.

## Remarks

The `IGameInputReading::GetKeyCount` method retrieves the number of keys active on a game controller. It is used to determine the number of arrays needed for [IGameInputReading::GetKeyState](igameinputreading_getkeystate.md) method. For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md).

## Requirements

**Header:** GameInput.h

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputReading](../igameinputreading.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |