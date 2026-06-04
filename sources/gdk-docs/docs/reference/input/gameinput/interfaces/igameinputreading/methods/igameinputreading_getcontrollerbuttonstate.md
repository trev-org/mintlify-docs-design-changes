---
author: AlexYatskov
description: IGameInputReading GetControllerButtonState API reference.
edited: 03/06/2025
kindex: GetControllerButtonState
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetControllerButtonState
---

# IGameInputReading::GetControllerButtonState

Retrieves button state information from a game controller.

## Syntax

```cpp
uint32_t GetControllerButtonState(
    uint32_t stateArrayCount,
    bool* stateArray
);
```

### Parameters

*stateArrayCount* &nbsp;&nbsp;\_In\_\
Type: uint32_t

Expected count of buttons on a game controller.
This number can be retrieved by calling [IGameInputReading::GetControllerButtonCount](igameinputreading_getcontrollerbuttoncount.md)

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputReading](../igameinputreading.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |