---
author: AlexYatskov
description: Provides dynamic information about the complete haptic properties and capabilities of an input device.
edited: 05/27/2025
kindex: GetHapticInfo
ms.author: alyatsko
ms.date: 05/27/2025
ms.topic: reference
permissioned-type: public
title: GetHapticInfo
---

# GetHapticInfo

Provides dynamic information about the complete haptic properties and capabilities of an input device.

<a id="syntaxSection"></a>

## Syntax

```cpp
HRESULT GetHapticInfo(
    GameInputHapticInfo* info);
```

### Parameters

*info* &nbsp;&nbsp;\_Out\_\
Type: [GameInputHapticInfo](../../../structs/gameinputhapticinfo.md)*

Structure containing haptic metadata for the current device.

### Return value

Type: HRESULT

Returns `GAMEINPUT_E_HAPTIC_NOT_FOUND` if haptic capabilities are not ready (or otherwise available) for the current device.

<a id="remarksSection"></a>

## Remarks

The `GetHapticInfo` method queries the haptic metadata of the current device. As haptics rely on the Windows audio stack, it is possible that this information is not yet available at the time of device arrival. Rather than calling the `GetHapticInfo` method at device connection time, it is strongly recommended to [register for device callbacks](../../igameinput/methods/igameinput_registerdevicecallback.md) and wait for the `GameInputDeviceHapticInfoReady` [device status](../../../enums/gameinputdevicestatus.md) notification. Doing this will ensure that haptics-capable devices receive the time required to initialize necessary resources before being polled for metadata.

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Library:** gameinput.lib

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../../../features/common/input/overviews/input-overview.md)<br>
[GameInputHapticInfo](../../../structs/gameinputhapticinfo.md)<br>
[RegisterDeviceCallback](../../igameinput/methods/igameinput_registerdevicecallback.md)<br>
[GameInputDeviceStatus](../../../enums/gameinputdevicestatus.md)<br>
[IGameInputDevice](../igameinputdevice.md)

## Version History

| Version | Changes |
| --- | --- |
| **v2** | Introduced. |