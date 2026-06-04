---
author: AlexYatskov
description: "Retrieves the current status of an input device (v1)."
edited: "03/06/2025"
kindex: "GetDeviceStatus (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GetDeviceStatus (v1)"
---

# GetDeviceStatus (v1)

Retrieves the current status of an input device.

## Syntax

```cpp
GameInputDeviceStatus GetDeviceStatus();
```

### Parameters

This method has no parameters.

### Return value

Type: [GameInputDeviceStatus](../../../enums/gameinputdevicestatus-v1.md)

The value returned is the enumeration type `GameInputDeviceStatus`. The value returned may be a combination of the enumerated flag values from [GameInputDeviceStatus](../../../enums/gameinputdevicestatus-v1.md).

## Remarks

The returned [GameInputDeviceStatus](../../../enums/gameinputdevicestatus-v1.md) enumeration defines whether the device is connected, and the types of input and output that may be transmitted between the game and the device. If the `GetDeviceStatus` method is called when the device has been disconnected from the system, the `GameInputDeviceNoStatus` value is returned. You can use the `GameInputDeviceStatus` enumeration as a filter for the [RegisterDeviceCallback](../../igameinput/methods/igameinput_registerdevicecallback-v1.md) method to react to specific changes in a device's state.

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows

## See also

[Overview of GameInput](../../../../../../input/overviews/input-overview.md)
[GameInputDeviceStatus](../../../enums/gameinputdevicestatus-v1.md)
[RegisterDeviceCallback](../../igameinput/methods/igameinput_registerdevicecallback-v1.md)
[IGameInputDevice](../igameinputdevice-v1.md)
