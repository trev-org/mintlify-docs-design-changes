---
author: AlexYatskov
description: Describes the state of a flight stick.
edited: 03/06/2025
kindex: GameInputFlightStickState
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputFlightStickState
---

# GameInputFlightStickState

Describes the state of a flight stick.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputFlightStickState {
    GameInputFlightStickButtons buttons;
    GameInputSwitchPosition     hatSwitch;
    float                       roll;
    float                       pitch;
    float                       yaw;
    float                       throttle;
};
```

<a id="membersSection"></a>

### Members

*buttons*<br>
Type: [GameInputFlightStickButtons](../enums/gameinputflightstickbuttons.md)

The flight stick buttons that are pressed.

*hatSwitch*<br>
Type: [GameInputSwitchPosition](../enums/gameinputswitchposition.md)

Position of the hat switch.

*roll*<br>
Type: float

Normalized roll value in the range [-1.0, 1.0].

*pitch*<br>
Type: float

Normalized pitch value in the range [-1.0, 1.0].

*yaw*<br>
Type: float

Normalized yaw value in the range [-1.0, 1.0].

*throttle*<br>
Type: float

Normalized throttle value in the range [-1.0, 1.0].

<a id="remarksSection"></a>

## Remarks

This structure is used by the [IGameInputReading::GetFlightStickState](../interfaces/igameinputreading/methods/igameinputreading_getflightstickstate.md) method.

For more information, see the [Getting data from readings](../../../../features/common/input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../features/common/input/overviews/input-readings.md). For a related code example, see [A simple gamepad input loop](../../../../features/common/input/overviews/input-readings.md#sampleSection).

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