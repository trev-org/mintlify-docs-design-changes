---
author: AlexYatskov
description: IGameInput::UnregisterCallback API reference.
edited: 03/06/2025
kindex: IGameInput::UnregisterCallback
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: IGameInput::UnregisterCallback
---

# IGameInput::UnregisterCallback

Removes a callback method. The method will no longer be called, and you may remove resources from the callback function after UnregisterCallback completes.

## Syntax

```cpp
bool UnregisterCallback(
    GameInputCallbackToken callbackToken
);
```

### Parameters

*callbackToken* &nbsp;&nbsp;\_In\_\
Type: GameInputCallbackToken

Token for the callback function to be unregistered. Generated when the function was initially registered with [IGameInput::RegisterDeviceCallback](igameinput_registerdevicecallback.md).

### Return value

Type: bool

True if callback was unregistered successfully.

## Remarks

The [IGameInput::StopCallback](igameinput_stopcallback.md) method and **IGameInput::UnregisterCallback** methods differ slightly. Calling either method ensures that the associated callback will not be dispatched again. However, it is not safe to free any resources associated with the callback (for example, unloading the DLL that hosts the callback function) until the UnregisterCallback function successfully returns. Therefore, it is not possible to unregister a callback from within its registered callback function, and attempting to do so will trigger a fatal assert. However, it is safe to cancel a callback from within the callback function.

The following C++ sample demonstrates how to get notified when a gamepad or keyboard is disconnected.

[Input API Overview](../../../../../../features/common/input/overviews/input-overview.md)  
[IGameInput](../igameinput.md)  
[IGameInput::RegisterDeviceCallback](igameinput_registerdevicecallback.md)  
[IGameInput::RegisterReadingCallback](igameinput_registerreadingcallback.md)  
[IGameInput::RegistersystemButtonCallback](igameinput_registersystembuttoncallback.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |
