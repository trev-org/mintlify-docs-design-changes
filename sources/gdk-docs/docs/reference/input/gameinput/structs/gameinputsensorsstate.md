---
author: pablo-msft
description: Describes the state of sensors.
edited: 09/03/2025
kindex: GameInputSensorsState
ms.author: pablo
ms.date: 09/03/2025
ms.topic: reference
permissioned-type: public
title: GameInputSensorsState
---

# GameInputSensorsState

Describes the state of sensors.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputSensorsState
{
    // GameInputSensorsAccelerometer
    float accelerationInGX;
    float accelerationInGY;
    float accelerationInGZ;

    // GameInputSensorsGyrometer
    float angularVelocityInRadPerSecX;
    float angularVelocityInRadPerSecY;
    float angularVelocityInRadPerSecZ;

    // GameInputSensorsCompass
    float headingInDegreesFromMagneticNorth;
    GameInputSensorAccuracy headingAccuracy;

    // GameInputSensorsOrientation
    float orientationW;
    float orientationX;
    float orientationY;
    float orientationZ;
};
```

<a id="membersSection"></a>

### Members

*accelerationInGX*<br>
Type: float

Linear acceleration, in g-force, with respect to the x axis. Valid if `GameInputSensorsInfo` reports `GameInputSensorsKindAccelerometer`.

*accelerationInGY*<br>
Type: float

Linear acceleration, in g-force, with respect to the y axis. Valid if `GameInputSensorsInfo` reports `GameInputSensorsKindAccelerometer`.

*accelerationInGZ*<br>
Type: float

Linear acceleration, in g-force, with respect to the z axis. Valid if `GameInputSensorsInfo` reports `GameInputSensorsKindAccelerometer`.

*angularVelocityInRadPerSecX*<br>
Type: float

Angular velocity, in radians per second, with respect to the x axis. Valid if `GameInputSensorsInfo` reports
`GameInputSensorsKindGyrometer`.

*angularVelocityInRadPerSecY*<br>
Type: float

Angular velocity, in radians per second, with respect to the y axis. Valid if `GameInputSensorsInfo` reports
`GameInputSensorsKindGyrometer`.

*angularVelocityInRadPerSecZ*<br>
Type: float

Angular velocity, in radians per second, with respect to the z axis. Valid if `GameInputSensorsInfo` reports
`GameInputSensorsKindGyrometer`.

*headingInDegreesFromMagneticNorth*<br>
Type: float

Heading, in degrees, from magnetic north. Range: \[0, 360). Valid if `GameInputSensorsInfo` reports
`GameInputSensorsKindCompass`.

*headingAccuracy*<br>
Type: [GameInputSensorAccuracy](../enums/gameinputsensoraccuracy.md)

Accuracy of the heading. Valid if `GameInputSensorsInfo` reports `GameInputSensorsKindCompass`.

*orientationW*<br>
Type: float

The w-component of a quaternion representing the device's orientation. Valid if `GameInputSensorsInfo` reports
`GameInputSensorsKindOrientation`.

*orientationX*<br>
Type: float

The x-component of a quaternion representing the device's orientation. Valid if `GameInputSensorsInfo` reports
`GameInputSensorsKindOrientation`.

*orientationY*<br>
Type: float

The y-component of a quaternion representing the device's orientation. Valid if `GameInputSensorsInfo` reports
`GameInputSensorsKindOrientation`.

*orientationZ*<br>
Type: float

The z-component of a quaternion representing the device's orientation. Valid if `GameInputSensorsInfo` reports
`GameInputSensorsKindOrientation`.

<a id="remarksSection"></a>

## Remarks

This structure is used by the [IGameInputReading::GetSensorsState](../interfaces/igameinputreading/methods/igameinputreading_getsensorsstate.md) method.

For more information, see [GameInput readings](../../../../features/common/input/overviews/input-readings.md).

The presence of valid data is indicated by [GameInputKindSensors](../enums/gameinputkind.md) in
[GameInputDeviceInfo](../structs/gameinputdeviceinfo.md). Data that is not reported as being present will be filled
with default at-rest values.

### Coordinate system

Devices are expected to report device acceleration as a Y-up right-handed system. Angular velocity follows the right-hand
rule about these axes.

| Gamepad coordinate system | Handheld coordinate system |
| ------------------------- | -------------------------- |
| <img src="../../../../../media/public-images/input/input-sensors-coordinates-gamepad.png" alt="Sensors coordinate system shown on a gamepad" height="300" /> | <img src="../../../../../media/public-images/input/input-sensors-coordinates-handheld.png" alt="Sensors coordinate system shown on a handheld" height="300" /> |

The X axis goes from the center of the device towards the right. The Y axis goes from the center of the device towards
the user’s face. The Z axis goes from the center of the device out the bottom.

Sample acceleration output, in g:
- Device laying flat on table: {0, 1, 0}
    - Angular velocity at rest, in radians per second, is {0, 0, 0}
- From there, lift device upwards: increases {0, 2, 0}
- From there, drop device: decreases {0, 0, 0}
- Rotate device so top edge is in air and bottom edge is on surface: {0, 0, -1}
    - While in motion, angular velocity X becomes positive: {2, 0, 0}
- Go back to flat.
- Rotate device so left edge is in air and right edge is on surface: {-1, 0, 0}
    - While in motion, angular velocity Z becomes negative: {0, 0, -2}
- Go back to flat.
- Rotate device clockwise (opposite to right-hand rule)
    - While in motion, angular velocity Y becomes negative: {0, -2, 0}


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
| **v2** | **New struct** introduced in v2 with sensor state fields for accelerometer, gyrometer, compass, and orientation. |
| **v1** | Not present. |
| **v0** | Not present. |