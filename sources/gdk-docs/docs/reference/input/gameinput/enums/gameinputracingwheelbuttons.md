---
author: AlexYatskov
description: Enumerates buttons on a racing wheel.
edited: 03/03/2025
kindex: GameInputRacingWheelButtons
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputRacingWheelButtons
---

# GameInputRacingWheelButtons

Enumerates buttons on a racing wheel.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputRacingWheelButtons
{
    GameInputRacingWheelNone            = 0x00000000,
    GameInputRacingWheelMenu            = 0x00000001,
    GameInputRacingWheelView            = 0x00000002,
    GameInputRacingWheelPreviousGear    = 0x00000004,
    GameInputRacingWheelNextGear        = 0x00000008,
    GameInputRacingWheelA               = 0x00000100,
    GameInputRacingWheelB               = 0x00000200,
    GameInputRacingWheelX               = 0x00000400,
    GameInputRacingWheelY               = 0x00000800,
    GameInputRacingWheelDpadUp          = 0x00000010,
    GameInputRacingWheelDpadDown        = 0x00000020,
    GameInputRacingWheelDpadLeft        = 0x00000040,
    GameInputRacingWheelDpadRight       = 0x00000080,
    GameInputRacingWheelLeftShoulder    = 0x00001000,
    GameInputRacingWheelRightShoulder   = 0x00002000,
    GameInputRacingWheelLeftThumbstick  = 0x00004000,
    GameInputRacingWheelRightThumbstick = 0x00008000,
};
```

<a id="constantsSection"></a>

## Constants

| Constant                            | Description                                                    |
| ---                                 | ---                                                            |
| GameInputRacingWheelNone            | Indicates that no button is pressed.                           |
| GameInputRacingWheelMenu            | Indicates that the menu button is pressed.                     |
| GameInputRacingWheelView            | Indicates that the view button is pressed.                     |
| GameInputRacingWheelPreviousGear    | Indicates that the previous gear is selected.                  |
| GameInputRacingWheelNextGear        | Indicates that the next gear is selected.                      |
| GameInputRacingWheelA               | Indicates that the gamepad A button is pressed.                |
| GameInputRacingWheelB               | Indicates that the gamepad B button is pressed.                |
| GameInputRacingWheelX               | Indicates that the gamepad X button is pressed.                |
| GameInputRacingWheelY               | Indicates that the gamepad Y button is pressed.                |
| GameInputRacingWheelDpadUp          | Indicates that the top portion of the D-pad is pressed.        |
| GameInputRacingWheelDpadDown        | Indicates that the bottom portion of the D-pad is pressed.     |
| GameInputRacingWheelDpadLeft        | Indicates that the left portion of the D-pad is pressed.       |
| GameInputRacingWheelDpadRight       | Indicates that the right portion of the D-pad is pressed.      |
| GameInputRacingWheelLeftShoulder    | Indicates that the gamepad left shoulder button is pressed.    |
| GameInputRacingWheelRightShoulder   | Indicates that the gamepad right shoulder button is pressed.   |
| GameInputRacingWheelLeftThumbstick  | Indicates that the gamepad left thumbstick button is pressed.  |
| GameInputRacingWheelRightThumbstick | Indicates that the gamepad right thumbstick button is pressed. |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputRacingWheelState](../structs/gameinputracingwheelstate.md) structure. You can combine values to read multiple buttons simultaneously.

`GameInputRacingWheelA`, `GameInputRacingWheelB`, `GameInputRacingWheelX`, `GameInputRacingWheelY`, `GameInputRacingWheelLeftShoulder`, `GameInputRacingWheelRightShoulder`, `GameInputRacingWheelLeftThumbstick`, and `GameInputRacingWheelRightThumbstick` are not part of the racing wheel mappings. These are instead values copied from the gamepad button report. If there is no gamepad mapped to the device, these values will always be 0.

For more information, see the [Getting data from readings](../../../../features/common/input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../features/common/input/overviews/input-readings.md).

This enumeration can additionally be used with the [IGameInputMapper::GetRacingWheelButtonMappingInfo](../interfaces/igameinputmapper/methods/igameinputmapper_getracingwheelbuttonmappinginfo.md) method to retrieve mapping information for a specific racing wheel button.

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
| **v3** | **Added 8 constants**: `A`, `B`, `X`, `Y`, `LeftShoulder`, `RightShoulder`, `LeftThumbstick`, `RightThumbstick` for gamepad-like buttons. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
enum GameInputRacingWheelButtons
{
    GameInputRacingWheelNone         = 0x00000000,
    GameInputRacingWheelMenu         = 0x00000001,
    GameInputRacingWheelView         = 0x00000002,
    GameInputRacingWheelPreviousGear = 0x00000004,
    GameInputRacingWheelNextGear     = 0x00000008,
    GameInputRacingWheelDpadUp       = 0x00000010,
    GameInputRacingWheelDpadDown     = 0x00000020,
    GameInputRacingWheelDpadLeft     = 0x00000040,
    GameInputRacingWheelDpadRight    = 0x00000080,
};
```