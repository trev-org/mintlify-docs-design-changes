---
author: pablo-msft
description: Describes the properties of sensors.
edited: 05/27/2025
kindex: GameInputSensorsInfo
ms.author: pablo
ms.date: 05/27/2025
ms.topic: reference
permissioned-type: public
title: GameInputSensorsInfo
---

# GameInputSensorsInfo

Describes the properties of sensors.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputSensorsInfo
{
    GameInputSensorsKind supportedSensors;
};
```

<a id="membersSection"></a>

### Members

*supportedSensors*<br>
Type: [GameInputSensorsKind](../enums/gameinputsensorskind.md)

Sensors supported by the device.

<a id="remarksSection"></a>

## Remarks

This structure is used in the [GameInputDeviceInfo](gameinputdeviceinfo.md) structure. `GameInputDeviceInfo` is used
by the [IGameInputDevice::GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo.md)
method.

For more information, see [GameInput devices](../../../../features/common/input/overviews/input-devices.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../gameinput_members.md)
## Version History

| Version | Changes |
| --- | --- |
| **v2** | **New struct** introduced in v2 with `supportedSensors` (GameInputSensorsKind). |
| **v1** | Not present. |
| **v0** | Not present. |