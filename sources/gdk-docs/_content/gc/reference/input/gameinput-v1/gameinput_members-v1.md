---
author: AlexYatskov
description: "GameInput API members (v1)."
edited: "03/03/2025"
kindex: "GameInput (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: article
permissioned-type: public
title: "GameInput API members (v1)"
---

# GameInput (v1)

GameInput APIs are used to capture human input from a wide range of devices, such as game controllers, flight sticks, racing wheels, and touch input.

## Interfaces

| Interface                                                                                                     | Description                                                                                |
| ---                                                                                                           | ---                                                                                        |
| [IGameInputDevice](interfaces/igameinputdevice/igameinputdevice-v1.md)                                        | Defines an input device.                                                                   |
| [IGameInputDispatcher](interfaces/IGameInputDispatcher/igameinputdispatcher-v1.md)                            | Provides manual control over scheduling the background tasks managed by the GameInput API. |
| [IGameInputForceFeedbackEffect](interfaces/igameinputforcefeedbackeffect/igameinputforcefeedbackeffect-v1.md) | Describes a force feedback effect on a compatible input device.                            |
| [IGameInputReading](interfaces/igameinputreading/igameinputreading-v1.md)                                     | Contains the data for a single input update.                                               |
| [IGameInput](interfaces/igameinput/igameinput-v1.md)                                                          | A per-process singleton that provides access to the device input stream.                   |

## Functions

| Function                                                                           | Description                                                            |
| ---                                                                                | ---                                                                    |
| [GameInputCreate](functions/gameinputcreate-v1.md)                                 | Retrieves an instance of the IGameInput interface.                     |
| [GameInputDeviceCallback](functions/gameinputdevicecallback-v1.md)                 | Defines a callback for device connection and disconnection events.     |
| [GameInputKeyboardLayoutCallback](functions/gameinputkeyboardlayoutcallback-v1.md) | Defines a callback for keyboard layout change events.                  |
| [GameInputReadingCallback](functions/gameinputreadingcallback-v1.md)               | Defines a callback for new reading arrival events.                     |
| [GameInputSystemButtonCallback](functions/gameinputsystembuttoncallback-v1.md)     | Defines a callback for Guide or Share button press and release events. |

## Structures

| Structure                                                                                    | Description                                                            |
| ---                                                                                          | ---                                                                    |
| [GameInputArcadeStickInfo](structs/gameinputarcadestickinfo-v1.md)                           | Details the characteristics of an arcade stick.                        |
| [GameInputArcadeStickState](structs/gameinputarcadestickstate-v1.md)                         | Provides the current status of an arcade stick.                        |
| [GameInputControllerAxisInfo](structs/gameinputcontrolleraxisinfo-v1.md)                     | Specifies an axis on an input device.                                  |
| [GameInputControllerButtonInfo](structs/gameinputcontrollerbuttoninfo-v1.md)                 | Specifies a button on an input device.                                 |
| [GameInputControllerSwitchInfo](structs/gameinputcontrollerswitchinfo-v1.md)                 | Specifies a switch on an input device.                                 |
| [GameInputDeviceInfo](structs/gameinputdeviceinfo-v1.md)                                     | Contains comprehensive information about an input device.              |
| [GameInputFlightStickInfo](structs/gameinputflightstickinfo-v1.md)                           | Details the characteristics of a flight stick.                         |
| [GameInputFlightStickState](structs/gameinputflightstickstate-v1.md)                         | Provides the current status of a flight stick.                         |
| [GameInputForceFeedbackConditionParams](structs/gameinputforcefeedbackconditionparams-v1.md) | Defines certain physical aspects of a force-feedback effect.           |
| [GameInputForceFeedbackConstantParams](structs/gameinputforcefeedbackconstantparams-v1.md)   | Defines a constant physical aspect of a force-feedback effect.         |
| [GameInputForceFeedbackEnvelope](structs/gameinputforcefeedbackenvelope-v1.md)               | Defines an envelope that modifies a force-feedback effect.             |
| [GameInputForceFeedbackMagnitude](structs/gameinputforcefeedbackmagnitude-v1.md)             | Defines the magnitude of the force exerted by a force-feedback effect. |
| [GameInputForceFeedbackMotorInfo](structs/gameinputforcefeedbackmotorinfo-v1.md)             | Provides information about the force-feedback motor.                   |
| [GameInputForceFeedbackParams](structs/gameinputforcefeedbackparams-v1.md)                   | Defines the API-supported attributes of a force-feedback effect.       |
| [GameInputForceFeedbackPeriodicParams](structs/gameinputforcefeedbackperiodicparams-v1.md)   | Defines the parameters for a periodic force-feedback effect.           |
| [GameInputForceFeedbackRampParams](structs/gameinputforcefeedbackrampparams-v1.md)           | Defines the parameters for a ramp force-feedback effect.               |
| [GameInputGamepadInfo](structs/gameinputgamepadinfo-v1.md)                                   | Details the characteristics of a gamepad.                              |
| [GameInputGamepadState](structs/gameinputgamepadstate-v1.md)                                 | Provides the current status of a gamepad input device.                 |
| [GameInputKeyState](structs/gameinputkeystate-v1.md)                                         | Provides the current state of a key on a keyboard.                     |
| [GameInputKeyboardInfo](structs/gameinputkeyboardinfo-v1.md)                                 | Details the characteristics of a keyboard.                             |
| [GameInputMouseInfo](structs/gameinputmouseinfo-v1.md)                                       | Details the characteristics of a mouse.                                |
| [GameInputMouseState](structs/gameinputmousestate-v1.md)                                     | Provides the current status of a mouse.                                |
| [GameInputRacingWheelInfo](structs/gameinputracingwheelinfo-v1.md)                           | Details the characteristics of a racing wheel.                         |
| [GameInputRacingWheelState](structs/gameinputracingwheelstate-v1.md)                         | Provides the current status of a racing wheel.                         |
| [GameInputRumbleParams](structs/gameinputrumbleparams-v1.md)                                 | Describes a rumble effect produced by a controller.                    |
| [GameInputUiNavigationInfo](structs/gameinputuinavigationinfo-v1.md)                         | Specifies the labels of navigation buttons in the UI.                  |
| [GameInputUiNavigationState](structs/gameinputuinavigationstate-v1.md)                       | Provides the current status of UI navigation input.                    |
| [GameInputUsage](structs/gameinputusage-v1.md)                                               | Describes a specific HID usage.                                        |

## Enumerations

| Enumeration                                                                      | Description                                                                                     |
| ---                                                                              | ---                                                                                             |
| [GameInputArcadeStickButtons](enums/gameinputarcadestickbuttons-v1.md)           | Enumerates inputs from an arcade stick.                                                         |
| [GameInputDeviceFamily](enums/gameinputdevicefamily-v1.md)                       | Enumerates families of input devices.                                                           |
| [GameInputDeviceStatus](enums/gameinputdevicestatus-v1.md)                       | Enumerates the states that an input device can be in.                                           |
| [GameInputEnumerationKind](enums/gameinputenumerationkind-v1.md)                 | Enumerates types of behavior for enumerating input devices.                                     |
| [GameInputFeedbackAxes](enums/gameinputfeedbackaxes-v1.md)                       | Enumerates direction types of force feedback motors available on an input device.               |
| [GameInputFeedbackEffectState](enums/gameinputfeedbackeffectstate-v1.md)         | Enumerates states of a force feedback effect.                                                   |
| [GameInputFlightStickButtons](enums/gameinputflightstickbuttons-v1.md)           | Enumerates flight stick buttons.                                                                |
| [GameInputFocusPolicy](enums/gameinputfocuspolicy-v1.md)                         | Enumerates focus policies for an input device.                                                  |
| [GameInputForceFeedbackEffectKind](enums/gameinputforcefeedbackeffectkind-v1.md) | Enumerates types of magnitude over time effects that can be applied to a force feedback effect. |
| [GameInputGamepadButtons](enums/gameinputgamepadbuttons-v1.md)                   | Enumerates gamepad buttons, including the directional pad (D-pad).                              |
| [GameInputKeyboardKind](enums/gameinputkeyboardkind-v1.md)                       | Enumerates keyboard types by key layout.                                                        |
| [GameInputKind](enums/gameinputkind-v1.md)                                       | Enumerates valid GameInput device types.                                                        |
| [GameInputLabel](enums/gameinputlabel-v1.md)                                     | Enumerates supported button labels.                                                             |
| [GameInputMouseButtons](enums/gameinputmousebuttons-v1.md)                       | Enumerates mouse buttons.                                                                       |
| [GameInputRacingWheelButtons](enums/gameinputracingwheelbuttons-v1.md)           | Enumerates buttons on a racing wheel.                                                           |
| [GameInputRumbleMotors](enums/gameinputrumblemotors-v1.md)                       | Enumerates the API supported rumble motors for an input device.                                 |
| [GameInputSwitchKind](enums/gameinputswitchkind-v1.md)                           | Enumerates types of switches supported by an input device.                                      |
| [GameInputSwitchPosition](enums/gameinputswitchposition-v1.md)                   | Enumerates positions of a switch on an input device.                                            |
| [GameInputSystemButtons](enums/gameinputsystembuttons-v1.md)                     | Enumerates buttons used for controlling the system.                                             |
| [GameInputUiNavigationButtons](enums/gameinputuinavigationbuttons-v1.md)         | Enumerates UI navigation buttons.                                                               |
