---
author: AlexYatskov
description: Describes the state of a racing wheel.
edited: 03/06/2025
kindex: GameInputRacingWheelState
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputRacingWheelState
---

# GameInputRacingWheelState

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

*buttons*<br>
Type: [GameInputRacingWheelButtons](../enums/gameinputracingwheelbuttons.md)

State of the buttons on a racing wheel.

*patternShifterGear*<br>
Type: int32_t

Current gear selected on the pattern shifter.

*wheel*<br>
Type: float

Position of the wheel, normalized as a value in the range [-1.0, 1.0].

*throttle*<br>
Type: float

Position of the throttle, normalized as a value in the range [0.0, 1.0].

*brake*<br>
Type: float

Position of the brake, normalized as a value in the range [0.0, 1.0].

*clutch*<br>
Type: float

Position of the clutch, normalized as a value in the range [0.0, 1.0].

*handbrake*<br>
Type: float

Position of the handbrake, normalized as a value in the range [0.0, 1.0].

<a id="remarksSection"></a>

## Remarks

This structure is used by the [IGameInputReading::GetRacingWheelState](../interfaces/igameinputreading/methods/igameinputreading_getracingwheelstate.md) method.

To determine whether a racing wheel has a clutch, handbrake, or pattern shifter, examine the [GameInputRacingWheelInfo](gameinputracingwheelinfo.md) structure.

For more information, see [GameInput readings](../../../../features/common/input/overviews/input-readings.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |