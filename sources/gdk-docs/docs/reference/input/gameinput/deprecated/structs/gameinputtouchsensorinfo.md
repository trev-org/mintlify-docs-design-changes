---
description: Describes the properties of a touch sensor on an input device (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputTouchSensorInfo (Deprecated)
---

# GameInputTouchSensorInfo

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v1 and is not available in the current API.

Describes the physical properties and capabilities of a touch sensor on an input device.

## Syntax

```cpp
typedef struct GameInputTouchSensorInfo {
    GameInputLocation location;
    uint32_t locationId;
    GameInputUsage usage;
    GameInputTouchShape shape;
    float aspectRatio;
    float orientation;
    float physicalWidth;
    float physicalHeight;
    float maxPressure;
    float maxProximity;
    uint32_t maxTouchPoints;
} GameInputTouchSensorInfo;
```

## Members

**location**\
Type: [GameInputLocation](../enums/gameinputlocation.md)

The physical location of the touch sensor on the device.

**locationId**\
Type: uint32_t

An identifier distinguishing touch sensors at the same location.

**usage**\
Type: GameInputUsage

The HID usage identifying this touch sensor.

**shape**\
Type: [GameInputTouchShape](../enums/gameinputtouchshape.md)

The shape of the touch sensor surface.

**aspectRatio**\
Type: float

The width-to-height aspect ratio of the touch surface.

**orientation**\
Type: float

The orientation of the touch surface in degrees.

**physicalWidth**\
Type: float

The physical width of the touch surface in meters.

**physicalHeight**\
Type: float

The physical height of the touch surface in meters.

**maxPressure**\
Type: float

The maximum pressure value the sensor can report.

**maxProximity**\
Type: float

The maximum proximity distance the sensor can detect.

**maxTouchPoints**\
Type: uint32_t

The maximum number of simultaneous touch contacts.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputTouchState](gameinputtouchstate.md)
[GameInputTouchShape](../enums/gameinputtouchshape.md)
