---
author: AlexYatskov
description: IGameInputReading GetControllerSwitchState API reference.
edited: 03/06/2025
kindex: GetControllerSwitchState
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetControllerSwitchState
---

# IGameInputReading::GetControllerSwitchState

Retrieves the switch state from a game controller.

## Syntax

```cpp
uint32_t GetControllerSwitchState(
    uint32_t stateArrayCount,
    GameInputSwitchPosition* stateArray
);
```

### Parameters

*stateArrayCount* &nbsp;&nbsp;\_In\_\
Type: uint32_t

The expected number of switches on the game controller.
This value can be retrieved by calling [IGameInputReading::GetControllerSwitchCount](igameinputreading_getcontrollerswitchcount.md).

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInputReading](../igameinputreading.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |