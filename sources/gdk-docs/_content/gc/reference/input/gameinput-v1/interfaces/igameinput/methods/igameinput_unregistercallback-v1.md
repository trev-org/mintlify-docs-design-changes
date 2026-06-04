---
author: AlexYatskov
description: "IGameInput::UnregisterCallback API reference (v1)."
edited: "03/06/2025"
kindex: "IGameInput::UnregisterCallback (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "IGameInput::UnregisterCallback (v1)"
---

# IGameInput::UnregisterCallback (v1)

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

Token for the callback function to be unregistered. Generated when the function was initially registered with [IGameInput::RegisterDeviceCallback](igameinput_registerdevicecallback-v1.md).

### Return value

Type: bool

True if callback was unregistered successfully.

## Remarks

The [IGameInput::StopCallback](igameinput_stopcallback-v1.md) method and **IGameInput::UnregisterCallback** methods differ slightly. Calling either method ensures that the associated callback will not be dispatched again. However, it is not safe to free any resources associated with the callback (for example, unloading the DLL that hosts the callback function) until the UnregisterCallback function successfully returns. Therefore, it is not possible to unregister a callback from within its registered callback function, and attempting to do so will trigger a fatal assert. However, it is safe to cancel a callback from within the callback function.

The following C++ sample demonstrates how to get notified when a gamepad or keyboard is disconnected.

```cpp
Microsoft::WRL::ComPtr<IGameInput> gameInput;

void CALLBACK OnDeviceDisconnected(
    _In_ GameInputCallbackToken callbackToken,
    _In_ void * context,
    _In_ IGameInputDevice * device,
    _In_ uint64_t timestamp,
    _In_ GameInputDeviceStatus currentStatus,
    _In_ GameInputDeviceStatus previousStatus,
    )
{
    if (!(currentStatus & GameInputDeviceConnected))
    {
        // Application-specific code to handle the device disconnection
    }
}

void WaitForDisconnectWorker(
    _In_ IGameInputDevice * device,
    _In_ volatile bool & cancelWait) noexcept
{
    GameInputCallbackToken token;
    if (SUCCEEDED(gameInput->RegisterDeviceCallback(
        device,                                       // Watch for the specific input device
        GameInputKindGamepad | GameInputKindKeyboard, // Listen for changes with gamepads and keyboards
        GameInputDeviceConnected,                     // Notify on changes to GameInputDeviceConnected status
        GameInputNoEnumeration,                       // No initial enumeration needed
        nullptr,                                      // No callback context parameter
        OnDeviceDisconnected,                         // Callback function
        &token)))                                     // Generated token
    {
        while (!cancelWait)
        {
            Sleep(100);
        }

        gameInput->UnregisterCallback(token);
    }
}
```

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
