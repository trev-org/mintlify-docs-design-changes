---
author: AlexYatskov
description: "Enumeration of the states that an input device can be in (v1)."
edited: "03/03/2025"
kindex: "GameInputDeviceStatus (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputDeviceStatus (v1)"
---

# GameInputDeviceStatus (v1)

Enumeration of the states that an input device can be in.

## Syntax

```cpp
enum GameInputDeviceStatus
{
    GameInputDeviceNoStatus  = 0x00000000,
    GameInputDeviceConnected = 0x00000001,
    GameInputDeviceAnyStatus = 0xFFFFFFFF
};
```

## Constants

| Constant                 | Description                              |
| ---                      | ---                                      |
| GameInputDeviceNoStatus  | Indicates that the device has no status. |
| GameInputDeviceConnected | Indicates that the device is connected.  |
| GameInputDeviceAnyStatus | Will return true for any device status.  |

## Remarks

These flag values may be combined as the user sees fit to filter on more than one device at a time. Returned by [iGameInputDevice_GetDeviceStatus](../interfaces/igameinputdevice/methods/igameinputdevice_getdevicestatus-v1.md).

Applications can register to receive a callback when any of these states change, via the [IGameInput::RegisterDeviceCallback](../interfaces/igameinput/methods/igameinput_registerdevicecallback-v1.md) method on the [IGameInput interface](../interfaces/igameinput/igameinput-v1.md).

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
[IGameInput::RegisterDeviceCallback](../interfaces/igameinput/methods/igameinput_registerdevicecallback-v1.md)
