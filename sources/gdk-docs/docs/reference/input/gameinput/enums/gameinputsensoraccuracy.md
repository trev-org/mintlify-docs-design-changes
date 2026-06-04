---
author: pablo-msft
description: Enumerates levels of accuracy for sensors.
edited: 05/27/2025
kindex: GameInputSensorAccuracy
ms.author: pablo
ms.date: 05/27/2025
ms.topic: reference
permissioned-type: public
title: GameInputSensorAccuracy
---

# GameInputSensorAccuracy

Enumerates levels of accuracy for sensors.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputSensorAccuracy
{
    GameInputSensorAccuracyUnknown      = 0x00000000,
    GameInputSensorAccuracyUnreliable   = 0x00000001,
    GameInputSensorAccuracyApproximate  = 0x00000002,
    GameInputSensorAccuracyHigh         = 0x00000003
};
```

<a id="constantsSection"></a>

## Constants

| Constant                           | Description                                                                     |
| ---                                | ---                                                                             |
| GameInputSensorAccuracyUnknown     | The accuracy is currently not available.                                        |
| GameInputSensorAccuracyUnreliable  | The actual and reported values have a high degree of inaccuracy.                |
| GameInputSensorAccuracyApproximate | The actual and reported values differ but may be accurate enough for some
application.                                                                                                           |
| GameInputSensorAccuracyHigh        | The actual and reported values are accurate.                                    |


<a id="remarksSection"></a>

## Remarks

Determine the degree of accuracy that is required for your application's needs. To improve accuracy, ask the user to
calibrate their compass by moving the device in a figure-8 pattern. We suggest doing this no more than every 10 minutes.

These values are used in the [GameInputSensorsState](../structs/gameinputsensorsstate.md) structure as part of the
[GameInputSensorsCompass](gameinputsensorskind.md) group.

For more information about getting device readings, see [GameInput readings](../../../../features/common/input/overviews/input-readings.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../gameinput_members.md)<br>
[Windows.Devices.Sensors MagnetometerAccuracy](/uwp/api/windows.devices.sensors.magnetometeraccuracy)

## Version History

| Version | Changes |
| --- | --- |
| **v2** | Introduced. |