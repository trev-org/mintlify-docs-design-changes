---
author: AlexYatskov
description: "Describes the state of a racing wheel (v1)."
edited: "03/06/2025"
kindex: "GameInputRacingWheelState (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputRacingWheelState (v1)"
---

# GameInputRacingWheelState (v1)

Describes the state of a racing wheel.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputRacingWheelState
{
    GameInputRacingWheelButtons buttons;
    int32_t                     patternShifterGear;
    float                       wheel;
    float                       throttle;
    float                       brake;
    float                       clutch;
    float                       handbrake;
};
```

<a id="membersSection"></a>

### Members

*buttons*
Type: [GameInputRacingWheelButtons](../enums/gameinputracingwheelbuttons-v1.md)

State of the buttons on a racing wheel.

*patternShifterGear*
Type: int32_t

Current gear selected on the pattern shifter.

*wheel*
Type: float

Position of the wheel, normalized as a value in the range [-1.0, 1.0].

*throttle*
Type: float

Position of the throttle, normalized as a value in the range [0.0, 1.0].

*brake*
Type: float

Position of the brake, normalized as a value in the range [0.0, 1.0].

*clutch*
Type: float

Position of the clutch, normalized as a value in the range [0.0, 1.0].

*handbrake*
Type: float

Position of the handbrake, normalized as a value in the range [0.0, 1.0].

<a id="remarksSection"></a>

## Remarks

This structure is used by the [IGameInputReading::GetRacingWheelState](../interfaces/igameinputreading/methods/igameinputreading_getracingwheelstate-v1.md) method.

To determine whether a racing wheel has a clutch, handbrake, or pattern shifter, examine the [GameInputRacingWheelInfo](gameinputracingwheelinfo-v1.md) structure.

For more information, see [GameInput readings](../../../../input/overviews/input-readings.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
