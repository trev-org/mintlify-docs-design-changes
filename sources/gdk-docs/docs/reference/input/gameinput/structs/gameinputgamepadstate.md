---
author: AlexYatskov
description: Describes the state of a gamepad input device.
edited: 03/06/2025
kindex: GameInputGamepadState
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputGamepadState
---

# GameInputGamepadState

Describes the state of a gamepad input device.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputGamepadState
{
    GameInputGamepadButtons buttons;
    float                   leftTrigger;
    float                   rightTrigger;
    float                   leftThumbstickX;
    float                   leftThumbstickY;
    float                   rightThumbstickX;
    float                   rightThumbstickY;
};
```

<a id="membersSection"></a>

### Members

*buttons*<br>
Type: [GameInputGamepadButtons](../enums/gameinputgamepadbuttons.md)

The gamepad buttons that are pressed.

*leftTrigger*<br>
Type: float

Position of left trigger, normalized as a value in the range [0.0, 1.0].

*rightTrigger*<br>
Type: float

Position of right trigger, normalized as a value in the range [0.0, 1.0].

*leftThumbstickX*<br>
Type: float

Horizontal position of the left thumbstick, normalized as a value in the range [-1.0, 1.0].

*leftThumbstickY*<br>
Type: float

Vertical position of the left thumbstick, normalized as a value in the range [-1.0, 1.0].

*rightThumbstickX*<br>
Type: float

Horizontal position of the right thumbstick, normalized as a value in the range [-1.0, 1.0].

*rightThumbstickY*<br>
Type: float

Vertical position of the right thumbstick, normalized as a value in the range [-1.0, 1.0].

<a id="remarksSection"></a>

## Remarks

Used by the [IGameInputReading:GetGamePadState](../interfaces/igameinputreading/methods/igameinputreading_getgamepadstate.md) method.

For more information, see the [Getting data from readings](../../../../features/common/input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../features/common/input/overviews/input-readings.md). For a code example, see [A simple gamepad input loop](../../../../features/common/input/overviews/input-readings.md#sampleSection).

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