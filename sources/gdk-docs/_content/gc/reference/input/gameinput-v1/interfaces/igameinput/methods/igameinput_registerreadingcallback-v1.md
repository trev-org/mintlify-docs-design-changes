---
author: AlexYatskov
description: "RegisterReadingCallback API reference (v1)."
edited: "03/06/2025"
kindex: "RegisterReadingCallback (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInput::RegisterReadingCallback (v1)"
---

# IGameInput::RegisterReadingCallback (v1)

Registers a function to be called when a new reading arrives in the input stream.

## Syntax

```cpp
HRESULT RegisterReadingCallback(
    IGameInputDevice* device,
    GameInputKind inputKind,
    void* context,
    GameInputReadingCallback callbackFunc,
    GameInputCallbackToken* callbackToken
);
```

### Parameters

*device* &nbsp;&nbsp;\_In\_opt\_\
Type: IGameInputDevice*

Limits registered callback to only trigger for a specific device.

*inputKind* &nbsp;&nbsp;\_In\_\
Type: [GameInputKind](../../../enums/gameinputkind-v1.md)

Limits registered callback to only trigger for devices that support at least one of the specified types of input.

*context* &nbsp;&nbsp;\_In\_opt\_\
Type: void*

Some object which provides relevant information for the callback function. Typically the calling object.

*callbackFunc* &nbsp;&nbsp;\_In\_\
Type: GameInputReadingCallback

Title defined callback function.

*callbackToken* &nbsp;&nbsp;\_Result\_zeroonfailure\_\
Type: GameInputCallbackToken*

Token identifying the registered callback function. This token will be used to identify the registered function in the event that you would like to cancel or unregister the callback function.

### Return value

Type: HRESULT

Function result.

## Remarks

Registering a callback does not cause an initial callback to be dispatched with the most current reading that matches the supplied input filter. It only causes callbacks to be dispatched for subsequent state changes.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInput](../igameinput-v1.md)
[IGameInput::UnregisterCallback](igameinput_unregistercallback-v1.md)
[IGameInput::StopCallback](igameinput_stopcallback-v1.md)
