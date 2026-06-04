---
description: Describes the state of a single touch contact from an input reading (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputTouchState (Deprecated)
---

# GameInputTouchState

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v1 and is not available in the current API.

Describes the state of a single touch contact point in an input reading.

## Syntax

```cpp
typedef struct GameInputTouchState {
    uint64_t touchId;
    uint32_t sensorIndex;
    float positionX;
    float positionY;
    float pressure;
    float proximity;
    float contactRectTop;
    float contactRectLeft;
    float contactRectRight;
    float contactRectBottom;
} GameInputTouchState;
```

## Members

**touchId**\
Type: uint64_t

A unique identifier for this touch contact, tracked across readings.

**sensorIndex**\
Type: uint32_t

The index of the touch sensor that produced this contact.

**positionX, positionY**\
Type: float

The normalized position of the contact on the sensor surface, in the range [0.0, 1.0].

**pressure**\
Type: float

The normalized pressure of the contact, in the range [0.0, 1.0].

**proximity**\
Type: float

The normalized proximity of the contact, in the range [0.0, 1.0].

**contactRectTop, contactRectLeft, contactRectRight, contactRectBottom**\
Type: float

The bounding rectangle of the contact area on the sensor surface, in normalized coordinates.

## Remarks

This structure was read via the deprecated [IGameInputReading::GetTouchState](../interfaces/igameinputreading/methods/igameinputreading_gettouchstate.md) method. Both were removed in v1.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[IGameInputReading::GetTouchState](../interfaces/igameinputreading/methods/igameinputreading_gettouchstate.md)
[IGameInputReading::GetTouchCount](../interfaces/igameinputreading/methods/igameinputreading_gettouchcount.md)
[GameInputTouchSensorInfo](gameinputtouchsensorinfo.md)
