---
author: AlexYatskov
description: Enumeration of the states that an input device can be in.
edited: 03/03/2025
kindex: GameInputDeviceStatus
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputDeviceStatus
---

# GameInputDeviceStatus

Enumeration of the states that an input device can be in.

## Syntax

```cpp
enum GameInputDeviceStatus
{
    GameInputDeviceNoStatus        = 0x00000000,
    GameInputDeviceConnected       = 0x00000001,
    GameInputDeviceHapticInfoReady = 0x00200000,
    GameInputDeviceAnyStatus       = 0xFFFFFFFF
};
```

## Constants

| Constant                       | Description                                             |
| ---                            | ---                                                     |
| GameInputDeviceNoStatus        | Indicates that the device has no status.                |
| GameInputDeviceConnected       | Indicates that the device is connected.                 |
| GameInputDeviceHapticInfoReady | Indicates that the device haptics information is ready. |
| GameInputDeviceAnyStatus       | Will return true for any device status.                 |

## Remarks

These flag values may be combined as the user sees fit to filter on more than one device at a time. Returned by [iGameInputDevice_GetDeviceStatus](../interfaces/igameinputdevice/methods/igameinputdevice_getdevicestatus.md).

Applications can register to receive a callback when any of these states change, via the [IGameInput::RegisterDeviceCallback](../interfaces/igameinput/methods/igameinput_registerdevicecallback.md) method on the [IGameInput interface](../interfaces/igameinput/igameinput.md).

## Requirements

**Header:** GameInput.h

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)  
[IGameInput::RegisterDeviceCallback](../interfaces/igameinput/methods/igameinput_registerdevicecallback.md)

## Version History

| Version | Changes |
| --- | --- |
| **v2** | **Added** `GameInputDeviceHapticInfoReady` (0x00200000). |
| **v1** | **Breaking change** — removed eight unused flags: `GameInputDeviceInputEnabled`, `GameInputDeviceOutputEnabled`, `GameInputDeviceRawIoEnabled`, `GameInputDeviceAudioCapture`, `GameInputDeviceAudioRender`, `GameInputDeviceSynchronized`, `GameInputDeviceWireless`, and `GameInputDeviceUserIdle`. `GameInputDeviceAnyStatus` value changed from `0x00FFFFFF` to `0xFFFFFFFF`. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
enum GameInputDeviceStatus
{
    GameInputDeviceNoStatus       = 0x00000000,
    GameInputDeviceConnected      = 0x00000001,
    GameInputDeviceInputEnabled   = 0x00000002,
    GameInputDeviceOutputEnabled  = 0x00000004,
    GameInputDeviceRawIoEnabled   = 0x00000008,
    GameInputDeviceAudioCapture   = 0x00000010,
    GameInputDeviceAudioRender    = 0x00000020,
    GameInputDeviceSynchronized   = 0x00000040,
    GameInputDeviceWireless       = 0x00000080,
    GameInputDeviceUserIdle       = 0x00100000,
    GameInputDeviceAnyStatus      = 0x00FFFFFF
};
```

### v1

```cpp
enum GameInputDeviceStatus
{
    GameInputDeviceNoStatus   = 0x00000000,
    GameInputDeviceConnected  = 0x00000001,
    GameInputDeviceAnyStatus  = 0xFFFFFFFF
};
```
