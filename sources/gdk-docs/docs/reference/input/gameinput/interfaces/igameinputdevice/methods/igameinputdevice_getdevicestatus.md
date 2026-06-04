---
author: AlexYatskov
description: Retrieves the current status of an input device.
edited: 03/06/2025
kindex: GetDeviceStatus
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GetDeviceStatus
---

# GetDeviceStatus

Retrieves the current status of an input device.

## Syntax

```cpp
GameInputDeviceStatus GetDeviceStatus();
```

### Parameters

This method has no parameters.

### Return value

Type: [GameInputDeviceStatus](../../../enums/gameinputdevicestatus.md)

The value returned is the enumeration type `GameInputDeviceStatus`. The value returned may be a combination of the enumerated flag values from [GameInputDeviceStatus](../../../enums/gameinputdevicestatus.md).

## Remarks

The returned [GameInputDeviceStatus](../../../enums/gameinputdevicestatus.md) enumeration defines whether the device is connected, and the types of input and output that may be transmitted between the game and the device. If the `GetDeviceStatus` method is called when the device has been disconnected from the system, the `GameInputDeviceNoStatus` value is returned. You can use the `GameInputDeviceStatus` enumeration as a filter for the [RegisterDeviceCallback](../../igameinput/methods/igameinput_registerdevicecallback.md) method to react to specific changes in a device's state.

## Requirements

**Header:** GameInput.h

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)    
[GameInputDeviceStatus](../../../enums/gameinputdevicestatus.md)  
[RegisterDeviceCallback](../../igameinput/methods/igameinput_registerdevicecallback.md)    
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |