---
author: AlexYatskov
description: "Registers a callback function when a keyboard layout is changed (v1)."
edited: "03/06/2025"
kindex: "IGameInput::RegisterKeyboardLayoutCallback (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInput::RegisterKeyboardLayoutCallback (v1)"
---

# IGameInput::RegisterKeyboardLayoutCallback (v1)

Registers a callback function when a keyboard layout is changed.


## Syntax

```cpp
HRESULT RegisterKeyboardLayoutCallback(
    IGameInputDevice* device,
    void* context,
    GameInputKeyboardLayoutCallback callbackFunc,
    GameInputCallbackToken* callbackToken
);
```

### Parameters

*device* &nbsp;&nbsp;\_In\_opt\_\
Type: IGameInputDevice*

Optionally limits registered callback to trigger a specific device.

*context* &nbsp;&nbsp;\_In\_opt\_\
Type: void*

An object that provides relevant information for the callback function. Typically, it is the calling object.

*callbackFunc* &nbsp;&nbsp;\_In\_\
Type: [GameInputKeyboardLayoutCallback](../../../functions/gameinputkeyboardlayoutcallback-v1.md)

Title-defined callback function that is called when the keyboard layout is changed.

*callbackToken* &nbsp;&nbsp;\_Result\_zeroonfailure\_\
Type: GameInputCallbackToken*

Token identifying the registered callback function. This token is used to identify the registered function if you need to cancel or unregister the callback function.

### Return value

Type: HRESULT

Function result.

## Remarks

The `RegisterKeyboardLayoutCallback` method registers a callback function when a keyboard layout is changed. For related information, see the [IGameInput::UnregisterCallback](igameinput_unregistercallback-v1.md) and [IGameInput::StopCallback](igameinput_stopcallback-v1.md) methods. For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

## Requirements

The `RegisterKeyboardLayoutCallback` method registers a callback function when a keyboard layout is changed. For related information, see the [IGameInput::UnregisterCallback](igameinput_unregistercallback-v1.md) and [IGameInput::StopCallback](igameinput_stopcallback-v1.md) methods. For intermediate and advanced use-cases of the GameInput API, see [Advanced GameInput topics](../../../../../../input/advanced/input-advanced-topics.md).

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[IGameInput](../igameinput-v1.md)
