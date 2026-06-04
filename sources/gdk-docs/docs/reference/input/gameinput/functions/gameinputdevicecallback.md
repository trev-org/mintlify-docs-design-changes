---
author: AlexYatskov
description: Title defined call back for device connected and disconnected events.
edited: 03/06/2025
kindex: GameInputDeviceCallback
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputDeviceCallback
---

# GameInputDeviceCallback

Title-defined callback for device connected and disconnected events. This function is registered with [IGameInput::RegisterDeviceCallback](../interfaces/igameinput/methods/igameinput_registerdevicecallback.md). This function is triggered by the conditions set from the registration function.


## Syntax

```cpp
void GameInputDeviceCallback(
    GameInputCallbackToken callbackToken,
    void* context,
    IGameInputDevice* device,
    uint64_t timestamp,
    GameInputDeviceStatus currentStatus,
    GameInputDeviceStatus previousStatus
);
```

### Parameters

*callbackToken* &nbsp;&nbsp;\_In\_\
Type: GameInputCallbackToken

Callback token for the registered function. Token returned by [IGameInput::RegisterDeviceCallback](../interfaces/igameinput/methods/igameinput_registerdevicecallback.md).

*context* &nbsp;&nbsp;\_In\_\
Type: void*

The context passed to [IGameInput::RegisterDeviceCallback](../interfaces/igameinput/methods/igameinput_registerdevicecallback.md).

*device* &nbsp;&nbsp;\_In\_\
Type: IGameInputDevice*

Device which triggered the callback.

*timestamp* &nbsp;&nbsp;\_In\_\
Type: uint64_t

Microsecond timestamp denoting when the status change occurred.

*currentStatus* &nbsp;&nbsp;\_In\_\
Type: [GameInputDeviceStatus](../enums/gameinputdevicestatus.md)

Current connection and input status of the device.

*previousStatus* &nbsp;&nbsp;\_In\_\
Type: [GameInputDeviceStatus](../enums/gameinputdevicestatus.md)

Previous connection and input status of the device.

### Return value

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)  
[IGameInput::RegisterDeviceCallback](../interfaces/igameinput/methods/igameinput_registerdevicecallback.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |