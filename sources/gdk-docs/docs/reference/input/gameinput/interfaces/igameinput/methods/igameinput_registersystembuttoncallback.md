---
author: AlexYatskov
description: Registers a callback for Guide and Share buttons.
edited: 03/06/2025
kindex: RegisterSystemButtonCallback
ms.author: alyatsko
ms.date: 03/06/2025
ms.topic: reference
permissioned-type: public
title: RegisterSystemButtonCallback
---

# IGameInput::RegisterSystemButtonCallback

Registers a callback function that is called when the Guide or Share button is pressed or released.

## Syntax

```cpp
HRESULT RegisterSystemButtonCallback(
    IGameInputDevice* device,
    GameInputSystemButtons buttonFilter,
    void* context,
    GameInputSystemButtonCallback callbackFunc,
    GameInputCallbackToken* callbackToken
);
```

### Parameters

*device* &nbsp;&nbsp;\_In\_opt\_\
Type: IGameInputDevice*

Optionally limits registered callback to trigger a specific device.

*buttonFilter* &nbsp;&nbsp;\_In\_\
Type: GameInputSystemButtons

The set of buttons to receive callbacks for, logical ORed together.

*context* &nbsp;&nbsp;\_In\_opt\_\
Type: void*

An object that provides relevant information for the callback function. Typically, it is the calling object.

*callbackFunc* &nbsp;&nbsp;\_In\_\
Type: GameInputSystemButtonCallback

Title-defined callback function that is called when the system buttons are pressed or released.

*callbackToken* &nbsp;&nbsp;\_Out\_opt\_\
Type: GameInputCallbackToken*

Token identifying the registered callback function. This token is used to identify the registered function if you need to cancel or unregister the callback function.

### Return value

Type: HRESULT

Function result.

## Remarks

This method registers a callback function call when the Guide or System button is pressed or released. Whether callbacks are dispensed depends on the [GameInputFocusPolicy](../../../enums/gameinputfocuspolicy.md) set by [IGameInput::SetFocusPolicy](igameinput_setfocuspolicy.md) in your process and other processes. See [GameInputFocusPolicy](../../../enums/gameinputfocuspolicy.md) for details. On the Xbox, the shell always consumes the guide button, so these callbacks are never dispatched on Xbox.

To stop receiving callbacks, see the [IGameInput::UnregisterCallback](igameinput_unregistercallback.md) and [IGameInput::StopCallback](igameinput_stopcallback.md) methods.

This was added in the Windows SDK 10.0.26031 preview GameInput.h and will be added to a future release of the GDK.

The following code example demonstrates how to listen for presses of the Guide button.

```cpp
Microsoft::WRL::ComPtr<IGameInput> gameInput;

void CALLBACK OnGuideButton(
    _In_ GameInputCallbackToken callbackToken,
    _In_ void * context,
    _In_ IGameInputDevice * device,
    _In_ uint64_t timestamp,
    _In_ GameInputSystemButtons currentButtons,
    _In_ GameInputSystemButtons previousButtons)
{
    bool guidePressed = currentButtons & GameInputSystemButtons::GameInputSystemButtonGuide;
    bool guidePreviouslyPressed = previousButtons & GameInputSystemButtons::GameInputSystemButtonGuide;
    if (guidePressed && !guidePreviouslyPressed)
    {
        // Handle new Guide button press
    }
    else if (!guidePressed && guidePreviouslyPressed)
    {
        // Handle new Guide button release
    }
}

void RegisterForGuideButton() noexcept
{
    GameInputCallbackToken token;
    if (SUCCEEDED(gameInput->RegisterSystemButtonCallback(
        nullptr, // All devices
        GameInputSystemButtons::GameInputSystemButtonGuide, // Filter to the Guide button
        nullptr, // No context
        OnGuideButton, // Callback
        &token))) // token
    {
        // Success!
    }
}
```

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Advanced GameInput topics](../../../../../../features/common/input/advanced/input-advanced-topics.md)<br>
[Overview GameInput](../../../../../../features/common/input/overviews/input-overview.md)<br>
[IGameInput](../igameinput.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |