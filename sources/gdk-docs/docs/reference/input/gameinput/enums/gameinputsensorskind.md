---
author: pablo-msft
description: Enumeration of valid GameInput sensor types.
edited: 05/27/2025
kindex: GameInputSensorsKind
ms.author: pablo
ms.date: 05/27/2025
ms.topic: reference
permissioned-type: public
title: GameInputSensorsKind
---

# GameInputSensorsKind

Enumeration of valid GameInput sensor types.

## Syntax

```cpp
enum GameInputSensorsKind
{
    GameInputSensorsNone            = 0x00000000,
    GameInputSensorsAccelerometer   = 0x00000001,
    GameInputSensorsGyrometer       = 0x00000002,
    GameInputSensorsCompass         = 0x00000004,
    GameInputSensorsOrientation     = 0x00000008
};
```

## Constants

| Constant                      | Description                                                                          |
| ---                           | ---                                                                                  |
| GameInputSensorsNone          | Indicates no sensors.                                                                |
| GameInputSensorsAccelerometer | Indicates the presence of accelerometer data, which represents linear acceleration
(including gravity) in g-force with respect to the x, y, and z axes.                                                   |
| GameInputSensorsGyrometer     | Indicates the presence of gyrometer data, which represents angular velocity in radians
per second with respect to the x, y, and z axes.                                                                       |
| GameInputSensorsCompass       | Indicates the presence of compass data, which represents a heading in degrees with
respect to magnetic north.                                                                                             |
| GameInputSensorsOrientation   | Indicates the presence of orientation data, in the form of a quaternion describing the
device's orientation in space.                                                                                         |

## Remarks

These flag values are used in the [GameInputSensorsInfo](../structs/gameinputsensorsinfo.md) structure (to determine
which sensors are present).

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../gameinput_members.md)<br>
[GameInputSensorsInfo](../structs/gameinputsensorsinfo.md)<br>
[GameInputDeviceInfo](../structs/gameinputdeviceinfo.md)<br>
[GameInputSensorsState](../structs/gameinputsensorsstate.md)

## Version History

| Version | Changes |
| --- | --- |
| **v2** | Introduced. |