---
author: AlexYatskov
description: Enumerates gamepad buttons, including the directional pad (D-pad).
edited: 03/03/2025
kindex: GameInputGamepadButtons
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputGamepadButtons
---

# GameInputGamepadButtons

Enumerates gamepad buttons, including the directional pad (D-pad) and axis to button translations.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputGamepadButtons
{
    GameInputGamepadNone                 = 0x00000000,
    GameInputGamepadMenu                 = 0x00000001,
    GameInputGamepadView                 = 0x00000002,
    GameInputGamepadA                    = 0x00000004,
    GameInputGamepadB                    = 0x00000008,
    GameInputGamepadC                    = 0x00004000,
    GameInputGamepadX                    = 0x00000010,
    GameInputGamepadY                    = 0x00000020,
    GameInputGamepadZ                    = 0x00008000,
    GameInputGamepadDPadUp               = 0x00000040,
    GameInputGamepadDPadDown             = 0x00000080,
    GameInputGamepadDPadLeft             = 0x00000100,
    GameInputGamepadDPadRight            = 0x00000200,
    GameInputGamepadLeftShoulder         = 0x00000400,
    GameInputGamepadRightShoulder        = 0x00000800,
    GameInputGamepadLeftTriggerButton    = 0x00010000,
    GameInputGamepadRightTriggerButton   = 0x00020000,
    GameInputGamepadLeftThumbstick       = 0x00001000,
    GameInputGamepadLeftThumbstickUp     = 0x00040000,
    GameInputGamepadLeftThumbstickDown   = 0x00080000,
    GameInputGamepadLeftThumbstickLeft   = 0x00100000,
    GameInputGamepadLeftThumbstickRight  = 0x00200000,
    GameInputGamepadRightThumbstick      = 0x00002000,
    GameInputGamepadRightThumbstickUp    = 0x00400000,
    GameInputGamepadRightThumbstickDown  = 0x00800000,
    GameInputGamepadRightThumbstickLeft  = 0x01000000,
    GameInputGamepadRightThumbstickRight = 0x02000000,
    GameInputGamepadPaddleLeft1          = 0x04000000,
    GameInputGamepadPaddleLeft2          = 0x08000000,
    GameInputGamepadPaddleRight1         = 0x10000000,
    GameInputGamepadPaddleRight2         = 0x20000000,
};

// Gamepad modules (Groupings of gamepad elements commonly found together)
const GameInputGamepadButtons GameInputGamepadModuleSystemDuo =
    GameInputGamepadMenu |
    GameInputGamepadView;

const GameInputGamepadButtons GameInputGamepadModuleDpad =
    GameInputGamepadDPadUp |
    GameInputGamepadDPadDown |
    GameInputGamepadDPadLeft |
    GameInputGamepadDPadRight;

const GameInputGamepadButtons GameInputGamepadModuleShoulders =
    GameInputGamepadLeftShoulder |
    GameInputGamepadRightShoulder;

const GameInputGamepadButtons GameInputGamepadModuleTriggers =
    GameInputGamepadLeftTriggerButton |
    GameInputGamepadRightTriggerButton;

const GameInputGamepadButtons GameInputGamepadModuleThumbsticks =
    GameInputGamepadLeftThumbstickUp |
    GameInputGamepadLeftThumbstickDown |
    GameInputGamepadLeftThumbstickLeft |
    GameInputGamepadLeftThumbstickRight |
    GameInputGamepadRightThumbstickUp |
    GameInputGamepadRightThumbstickDown |
    GameInputGamepadRightThumbstickLeft |
    GameInputGamepadRightThumbstickRight;

const GameInputGamepadButtons GameInputGamepadModulePaddles2 =
    GameInputGamepadPaddleLeft1 |
    GameInputGamepadPaddleRight1;

const GameInputGamepadButtons GameInputGamepadModulePaddles4 =
    GameInputGamepadPaddleLeft1 |
    GameInputGamepadPaddleLeft2 |
    GameInputGamepadPaddleRight1 |
    GameInputGamepadPaddleRight2;

// Commonly found gamepad layouts. Custom layouts are possible and encouraged.
const GameInputGamepadButtons GameInputGamepadLayoutBasic =
    GameInputGamepadModuleSystemDuo |
    GameInputGamepadModuleDpad |
    GameInputGamepadA |
    GameInputGamepadB;

const GameInputGamepadButtons GameInputGamepadLayoutButtons =
    GameInputGamepadLayoutBasic |
    GameInputGamepadX |
    GameInputGamepadY |
    GameInputGamepadModuleShoulders;

const GameInputGamepadButtons GameInputGamepadLayoutStandard =
    GameInputGamepadLayoutButtons |
    GameInputGamepadModuleTriggers |
    GameInputGamepadModuleThumbsticks |
    GameInputGamepadLeftThumbstick |
    GameInputGamepadRightThumbstick;

const GameInputGamepadButtons GameInputGamepadLayoutElite =
    GameInputGamepadLayoutStandard |
    GameInputGamepadModulePaddles4;
```

<a id="constantsSection"></a>

## Constants

| Constant                             | Description                                                   |
| ---                                  | ---                                                           |
| GameInputGamepadNone                 | Indicates that no button is pressed.                          |
| GameInputGamepadMenu                 | Indicates that the menu button is pressed.                    |
| GameInputGamepadView                 | Indicates that the view button is pressed.                    |
| GameInputGamepadA                    | Indicates that the A button is pressed.                       |
| GameInputGamepadB                    | Indicates that the B button is pressed.                       |
| GameInputGamepadC                    | Indicates that the C button is pressed.                       |
| GameInputGamepadX                    | Indicates that the X button is pressed.                       |
| GameInputGamepadY                    | Indicates that the Y button is pressed.                       |
| GameInputGamepadZ                    | Indicates that the Z button is pressed.                       |
| GameInputGamepadDPadUp               | Indicates that the top portion of the D-pad is pressed.       |
| GameInputGamepadDPadDown             | Indicates that the bottom portion of the D-pad is pressed.    |
| GameInputGamepadDPadLeft             | Indicates that the left portion of the D-pad is pressed.      |
| GameInputGamepadDPadRight            | Indicates that the right portion of the D-pad is pressed.     |
| GameInputGamepadLeftShoulder         | Indicates that the left shoulder button is pressed.           |
| GameInputGamepadRightShoulder        | Indicates that the right shoulder button is pressed.          |
| GameInputGamepadLeftTriggerButton    | Indicates that the left trigger button is pressed.            |
| GameInputGamepadRightTriggerButton   | Indicates that the right trigger button is pressed.           |
| GameInputGamepadLeftThumbstick       | Indicates that the left thumbstick is pressed.                |
| GameInputGamepadLeftThumbstickUp     | Indicates that the left thumbstick is pointing upward.        |
| GameInputGamepadLeftThumbstickDown   | Indicates that the left thumbstick is pointing downward.      |
| GameInputGamepadLeftThumbstickLeft   | Indicates that the left thumbstick is pointing to the left.   |
| GameInputGamepadLeftThumbstickRight  | Indicates that the left thumbstick is pointing to the right.  |
| GameInputGamepadRightThumbstick      | Indicates that the right thumbstick is pressed.               |
| GameInputGamepadRightThumbstickUp    | Indicates that the right thumbstick is pointing upward.       |
| GameInputGamepadRightThumbstickDown  | Indicates that the right thumbstick is pointing downward.     |
| GameInputGamepadRightThumbstickLeft  | Indicates that the right thumbstick is pointing to the left.  |
| GameInputGamepadRightThumbstickRight | Indicates that the right thumbstick is pointing to the right. |
| GameInputGamepadPaddleLeft1          | Indicates that the first left paddle button is pressed.       |
| GameInputGamepadPaddleLeft2          | Indicates that the second left paddle button is pressed.      |
| GameInputGamepadPaddleRight1         | Indicates that the first right paddle button is pressed.      |
| GameInputGamepadPaddleRight2         | Indicates that the second right paddle button is pressed.     |

### Gamepad Modules

Modules represent groupings of gamepad elements commonly found together.

| Constant                          | Description                                                 |
| ---                               | ---                                                         |
| GameInputGamepadModuleSystemDuo   | Menu and view buttons.                                      |
| GameInputGamepadModuleDpad        | D-pad buttons (up, down, left, right).                      |
| GameInputGamepadModuleShoulders   | Left and right shoulder buttons.                            |
| GameInputGamepadModuleTriggers    | Left and right triggers.                                    |
| GameInputGamepadModuleThumbsticks | Left and right thumbsticks.                                 |
| GameInputGamepadModulePaddles2    | Two fist paddle buttons (left 1 and right 1).               |
| GameInputGamepadModulePaddles4    | All four paddle buttons (left 1, left 2, right 1, right 2). |

### Gamepad Layouts

Commonly found gamepad layouts.

| Constant                       | Description                                             |
| ---                            | ---                                                     |
| GameInputGamepadLayoutBasic    | System duo (menu and view), D-pad, and A and B buttons. |
| GameInputGamepadLayoutButtons  | Basic layout plus X and Y buttons and shoulder buttons. |
| GameInputGamepadLayoutStandard | Standard layout found on gamepads since the Xbox 360.   |
| GameInputGamepadLayoutElite    | Layout found on the Xbox Elite Controller Series.       |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputGamePadState](../structs/gameinputgamepadstate.md) structure. You can combine values to read multiple buttons simultaneously.

`GameInputGamepadLeftTriggerButton`, `GameInputGamepadRightTriggerButton`, `GameInputGamepadLeftThumbstickUp`, `GameInputGamepadLeftThumbstickDown`, `GameInputGamepadLeftThumbstickLeft`, `GameInputGamepadLeftThumbstickRight`, `GameInputGamepadRightThumbstickUp`, `GameInputGamepadRightThumbstickDown`, `GameInputGamepadRightThumbstickLeft`, and `GameInputGamepadRightThumbstickRight` are digital representations of the corresponding analog axes found on most gamepads. For example, if the left thumbstick is pushed fully upward, both the `GameInputGamepadLeftThumbstickUp` button and the `GameInputGamepadLeftThumbstickY` axis will display value 1.0.

For more information, see the [Getting data from readings](../../../../features/common/input/overviews/input-readings.md#gettingStateSection) section of [GameInput readings](../../../../features/common/input/overviews/input-readings.md).

This enumeration can additionally be used with the [IGameInputMapper::GetGamepadButtonMappingInfo](../interfaces/igameinputmapper/methods/igameinputmapper_getgamepadbuttonmappinginfo.md) method to retrieve mapping information for a specific gamepad button.

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
| **v3** | **Added 16 new flag constants**: `C`, `Z`, `LeftTriggerButton`, `RightTriggerButton`, four `LeftThumbstick` directionals, four `RightThumbstick` directionals, `PaddleLeft1`, `PaddleLeft2`, `PaddleRight1`, `PaddleRight2`. Also added 11 composite/layout constants. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
enum GameInputGamepadButtons
{
    GameInputGamepadNone            = 0x00000000,
    GameInputGamepadMenu            = 0x00000001,
    GameInputGamepadView            = 0x00000002,
    GameInputGamepadA               = 0x00000004,
    GameInputGamepadB               = 0x00000008,
    GameInputGamepadX               = 0x00000010,
    GameInputGamepadY               = 0x00000020,
    GameInputGamepadDPadUp          = 0x00000040,
    GameInputGamepadDPadDown        = 0x00000080,
    GameInputGamepadDPadLeft        = 0x00000100,
    GameInputGamepadDPadRight       = 0x00000200,
    GameInputGamepadLeftShoulder    = 0x00000400,
    GameInputGamepadRightShoulder   = 0x00000800,
    GameInputGamepadLeftThumbstick  = 0x00001000,
    GameInputGamepadRightThumbstick = 0x00002000,
};
```