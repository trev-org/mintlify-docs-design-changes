---
author: AlexYatskov
description: "IGameInput::StopCallback API (v1)."
edited: "03/06/2025"
kindex: "StopCallback (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInput::StopCallback (v1)"
---

# IGameInput::StopCallback (v1)

Stops a callback function from being triggered.

## Syntax

```cpp
void StopCallback(
    GameInputCallbackToken callbackToken
);
```

### Parameters

*callbackToken* &nbsp;&nbsp;\_In\_\
Type: GameInputCallbackToken

Token for the callback function to be stopped. Generated when the function was initially registered with [IGameInput::RegisterDeviceCallback](igameinput_registerdevicecallback-v1.md).

### Return value

Type: void

No return value.

## Remarks

This function differs from the [IGameInput::UnregisterCallback](igameinput_unregistercallback-v1.md) function in that it does not make it safe for you to remove resources from the callback function, it can however be called from the callback function.

The **StopCallback** method and [IGameInput::UnregisterCallback](igameinput_unregistercallback-v1.md) methods differ slightly. Calling either method ensures that the associated callback will not be dispatched again. However, it is not safe to free any resources associated with the callback (for example, unloading the DLL that hosts the callback function) until the [IGameInput::UnregisterCallback](igameinput_unregistercallback-v1.md) function successfully returns. Therefore, it is not possible to unregister a callback from within its registered callback function, and attempting to do so will trigger a fatal assert. However, it is safe to cancel a callback from within the callback function.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../../input/overviews/input-overview.md)
[IGameInput](../igameinput-v1.md)
[IGameInput::RegisterDeviceCallback](igameinput_registerdevicecallback-v1.md)
[IGameInput::RegisterReadingCallback](igameinput_registerreadingcallback-v1.md)
[IGameInput::RegisterSystemButtonCallback](igameinput_registersystembuttoncallback-v1.md)
