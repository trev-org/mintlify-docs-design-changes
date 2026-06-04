---
author: AlexYatskov
description: Title defined callback for the new reading arrived event.
edited: 03/06/2025
kindex: GameInputReadingCallback
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputReadingCallback
---

# GameInputReadingCallback

Title defined callback for the new reading arrived event.

## Syntax

```cpp
void GameInputReadingCallback(
    GameInputCallbackToken callbackToken,
    void* context,
    IGameInputReading* reading
);
```

### Parameters

*callbackToken* &nbsp;&nbsp;\_In\_\
Type: GameInputCallbackToken

The callback token identifying the callback.
Token returned by [IGameInput::RegisterReadingCallback](../interfaces/igameinput/methods/igameinput_registerreadingcallback.md).

*context* &nbsp;&nbsp;\_In\_\
Type: void*

Title defined context.

*reading* &nbsp;&nbsp;\_In\_\
Type: IGameInputReading*

The new reading.

### Return value

Type: void

## Remarks

This function's definition is determined by the developer, but the parameters of that function must match in order for the callback to occur. This function is used to define the GameInput reading callback registered with [IGameInput::RegisterReadingCallback](../interfaces/igameinput/methods/igameinput_registerreadingcallback.md). It will define the function that is called whenever a desired reading is received from an input device.

## Requirements

**Header:** GameInput.h

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)  
[IGameInput::RegisterReadingCallback](../interfaces/igameinput/methods/igameinput_registerreadingcallback.md)

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed `hasOverrunOccurred` parameter. |
| **v0** | Introduced. |