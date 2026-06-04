---
author: AlexYatskov
description: GameInput API member.
edited: 03/03/2025
kindex: GameInput
ms.date: 10/21/2025
ms.topic: article
permissioned-type: public
title: GameInput API members
---

# GameInput

GameInput APIs are used to capture human input from a wide range of devices, such as game controllers, flight sticks, racing wheels, and touch input.

> [!NOTE]
> This page documents the current (latest) GameInput API. Version history for each member is noted in the individual reference pages. Members that existed only in older API versions are listed in the [Removed Members](#removed-members) section below. Note newer runtimes for the API support all available versions of the API, so removed members can still be used with the headers for olders versions.

## Interfaces

| Interface                                                                                                  | Description                                                                                |
| ---                                                                                                        | ---                                                                                        |
| [IGameInputDevice](interfaces/igameinputdevice/igameinputdevice.md)                                        | Defines an input device.                                                                   |
| [IGameInputDispatcher](interfaces/IGameInputDispatcher/igameinputdispatcher.md)                            | Provides manual control over scheduling the background tasks managed by the GameInput API. |
| [IGameInputForceFeedbackEffect](interfaces/igameinputforcefeedbackeffect/igameinputforcefeedbackeffect.md) | Describes a force feedback effect on a compatible input device.                            |
| [IGameInputMapper](interfaces/igameinputmapper/igameinputmapper.md)                                        | Provides information on how GameInput maps a device.                                       |
| [IGameInputRawDeviceReport](interfaces/igameinputrawdevicereport/igameinputrawdevicereport.md)             | Represents a raw byte buffer passed to or from an input device.                            |
| [IGameInputReading](interfaces/igameinputreading/igameinputreading.md)                                     | Contains the data for a single input update.                                               |
| [IGameInput](interfaces/igameinput/igameinput.md)                                                          | A per-process singleton that provides access to the device input stream.                   |

## Functions

| Function                                                                        | Description                                                            |
| ---                                                                             | ---                                                                    |
| [GameInputCreate](functions/gameinputcreate.md)                                 | Retrieves an instance of the IGameInput interface.                     |
| [GameInputDeviceCallback](functions/gameinputdevicecallback.md)                 | Defines a callback for device connection and disconnection events.     |
| [GameInputKeyboardLayoutCallback](functions/gameinputkeyboardlayoutcallback.md) | Defines a callback for keyboard layout change events.                  |
| [GameInputReadingCallback](functions/gameinputreadingcallback.md)               | Defines a callback for new reading arrival events.                     |
| [GameInputSystemButtonCallback](functions/gameinputsystembuttoncallback.md)     | Defines a callback for Guide or Share button press and release events. |

## Structures

| Structure                                                                                 | Description                                                            |
| ---                                                                                       | ---                                                                    |
| [GameInputArcadeStickInfo](structs/gameinputarcadestickinfo.md)                           | Details the characteristics of an arcade stick.                        |
| [GameInputArcadeStickState](structs/gameinputarcadestickstate.md)                         | Provides the current status of an arcade stick.                        |
| [GameInputAxisMapping](structs/gameinputaxismapping.md)                                   | Describes how an axis maps to the controller.                          |
| [GameInputButtonMapping](structs/gameinputbuttonmapping.md)                               | Describes how a button maps to the controller.                         |
| [GameInputControllerInfo](structs/gameinputcontrollerinfo.md)                             | Details the characteristics of a controller.                           |
| [GameInputControllerSwitchInfo](structs/gameinputcontrollerswitchinfo.md)                 | Specifies a switch on an input device.                                 |
| [GameInputDeviceInfo](structs/gameinputdeviceinfo.md)                                     | Contains comprehensive information about an input device.              |
| [GameInputFlightStickInfo](structs/gameinputflightstickinfo.md)                           | Details the characteristics of a flight stick.                         |
| [GameInputFlightStickState](structs/gameinputflightstickstate.md)                         | Provides the current status of a flight stick.                         |
| [GameInputForceFeedbackConditionParams](structs/gameinputforcefeedbackconditionparams.md) | Defines certain physical aspects of a force-feedback effect.           |
| [GameInputForceFeedbackConstantParams](structs/gameinputforcefeedbackconstantparams.md)   | Defines a constant physical aspect of a force-feedback effect.         |
| [GameInputForceFeedbackEnvelope](structs/gameinputforcefeedbackenvelope.md)               | Defines an envelope that modifies a force-feedback effect.             |
| [GameInputForceFeedbackMagnitude](structs/gameinputforcefeedbackmagnitude.md)             | Defines the magnitude of the force exerted by a force-feedback effect. |
| [GameInputForceFeedbackMotorInfo](structs/gameinputforcefeedbackmotorinfo.md)             | Provides information about the force-feedback motor.                   |
| [GameInputForceFeedbackParams](structs/gameinputforcefeedbackparams.md)                   | Defines the API-supported attributes of a force-feedback effect.       |
| [GameInputForceFeedbackPeriodicParams](structs/gameinputforcefeedbackperiodicparams.md)   | Defines the parameters for a periodic force-feedback effect.           |
| [GameInputForceFeedbackRampParams](structs/gameinputforcefeedbackrampparams.md)           | Defines the parameters for a ramp force-feedback effect.               |
| [GameInputGamepadInfo](structs/gameinputgamepadinfo.md)                                   | Details the characteristics of a gamepad.                              |
| [GameInputGamepadState](structs/gameinputgamepadstate.md)                                 | Provides the current status of a gamepad input device.                 |
| [GameInputHapticInfo](structs/gameinputhapticinfo.md)                                     | Details the characteristics of a haptic feedback motor.                |
| [GameInputKeyState](structs/gameinputkeystate.md)                                         | Provides the current state of a key on a keyboard.                     |
| [GameInputKeyboardInfo](structs/gameinputkeyboardinfo.md)                                 | Details the characteristics of a keyboard.                             |
| [GameInputMouseInfo](structs/gameinputmouseinfo.md)                                       | Details the characteristics of a mouse.                                |
| [GameInputMouseState](structs/gameinputmousestate.md)                                     | Provides the current status of a mouse.                                |
| [GameInputRacingWheelInfo](structs/gameinputracingwheelinfo.md)                           | Details the characteristics of a racing wheel.                         |
| [GameInputRacingWheelState](structs/gameinputracingwheelstate.md)                         | Provides the current status of a racing wheel.                         |
| [GameInputRawDeviceReportInfo](structs/gameinputrawdevicereportinfo.md)                   | Describes a raw device report.                                         |
| [GameInputRumbleParams](structs/gameinputrumbleparams.md)                                 | Describes a rumble effect produced by a controller.                    |
| [GameInputSensorsInfo](structs/gameinputsensorsinfo.md)                                   | Details the characteristics of the available sensors.                  |
| [GameInputSensorsState](structs/gameinputsensorsstate.md)                                 | Provides the current status of a device's sensors.                     |
| [GameInputUsage](structs/gameinputusage.md)                                               | Describes a specific HID usage.                                        |
| [GameInputVersion](structs/gameinputversion.md)                                           | Describes a four-part version number.                                  |

## Enumerations

| Enumeration                                                                   | Description                                                                                     |
| ---                                                                           | ---                                                                                             |
| [GameInputArcadeStickButtons](enums/gameinputarcadestickbuttons.md)           | Enumerates inputs from an arcade stick.                                                         |
| [GameInputDeviceFamily](enums/gameinputdevicefamily.md)                       | Enumerates families of input devices.                                                           |
| [GameInputDeviceStatus](enums/gameinputdevicestatus.md)                       | Enumerates the states that an input device can be in.                                           |
| [GameInputElementKind](enums/gameinputelementkind.md)                         | Enumerates the element kind of a given input.                                                   |
| [GameInputEnumerationKind](enums/gameinputenumerationkind.md)                 | Enumerates types of behavior for enumerating input devices.                                     |
| [GameInputFeedbackAxes](enums/gameinputfeedbackaxes.md)                       | Enumerates direction types of force feedback motors available on an input device.               |
| [GameInputFeedbackEffectState](enums/gameinputfeedbackeffectstate.md)         | Enumerates states of a force feedback effect.                                                   |
| [GameInputFlightStickAxes](enums/gameinputflightstickaxes.md)                 | Enumerates flight stick axes.                                                                   |
| [GameInputFlightStickButtons](enums/gameinputflightstickbuttons.md)           | Enumerates flight stick buttons.                                                                |
| [GameInputFocusPolicy](enums/gameinputfocuspolicy.md)                         | Enumerates focus policies for an input device.                                                  |
| [GameInputForceFeedbackEffectKind](enums/gameinputforcefeedbackeffectkind.md) | Enumerates types of magnitude over time effects that can be applied to a force feedback effect. |
| [GameInputGamepadAxes](enums/gameinputgamepadaxes.md)                         | Enumerates gamepad axes.                                                                        |
| [GameInputGamepadButtons](enums/gameinputgamepadbuttons.md)                   | Enumerates gamepad buttons, including the directional pad (D-pad).                              |
| [GameInputKeyboardKind](enums/gameinputkeyboardkind.md)                       | Enumerates keyboard types by key layout.                                                        |
| [GameInputKind](enums/gameinputkind.md)                                       | Enumerates valid GameInput device types.                                                        |
| [GameInputLabel](enums/gameinputlabel.md)                                     | Enumerates supported button labels.                                                             |
| [GameInputMouseButtons](enums/gameinputmousebuttons.md)                       | Enumerates mouse buttons.                                                                       |
| [GameInputMousePositions](enums/gameInputmousepositions.md)                   | Enumerates mouse positioning modes.                                                             |
| [GameInputRacingWheelAxes](enums/gameinputracingwheelaxes.md)                 | Enumerates axes on a racing wheel.                                                              |
| [GameInputRacingWheelButtons](enums/gameinputracingwheelbuttons.md)           | Enumerates buttons on a racing wheel.                                                           |
| [GameInputRawDeviceReportKind](enums/gameinputrawdevicereportkind.md)         | Enumerates kinds of raw device reports.                                                         |
| [GameInputRumbleMotors](enums/gameinputrumblemotors.md)                       | Enumerates the API supported rumble motors for an input device.                                 |
| [GameInputSensorAccuracy](enums/gameinputsensoraccuracy.md)                   | Enumerates levels of accuracy for sensors.                                                      |
| [GameInputSensorsKind](enums/gameinputsensorskind.md)                         | Enumerates valid GameInput sensor types.                                                        |
| [GameInputSwitchKind](enums/gameinputswitchkind.md)                           | Enumerates types of switches supported by an input device.                                      |
| [GameInputSwitchPosition](enums/gameinputswitchposition.md)                   | Enumerates positions of a switch on an input device.                                            |
| [GameInputSystemButtons](enums/gameinputsystembuttons.md)                     | Enumerates buttons used for controlling the system.                                             |

## Removed Members

The following members were present in older API versions but have been removed from the current API. For full documentation on each removed member, see [Deprecated GameInput API members](deprecated/gameinput_deprecated_members.md).

### Removed Interfaces

No interfaces have been permanently removed. `IGameInputRawDeviceReport` was absent in v1 and v2 but has been re-introduced in the current API.

### Removed Functions

| Function | Last version | Description |
| --- | --- | --- |
| [GameInputGuideButtonCallback](deprecated/functions/gameinputguidebuttoncallback.md) | v0 | Title-defined callback for Guide button events. Replaced by `GameInputSystemButtonCallback`. |

### Removed Structures

| Structure | Last version | Description |
| --- | --- | --- |
| [GameInputBatteryState](deprecated/structs/gameinputbatterystate.md) | v0 | Described the battery state of an input device. |
| [GameInputControllerAxisInfo](deprecated/structs/gameinputcontrolleraxisinfo.md) | v2 | Described an axis on an input device. Superseded by fields in `GameInputControllerInfo`. |
| [GameInputControllerButtonInfo](deprecated/structs/gameinputcontrollerbuttoninfo.md) | v2 | Described a button on an input device. Superseded by fields in `GameInputControllerInfo`. |
| [GameInputHapticFeedbackMotorInfo](deprecated/structs/gameinputhapticfeedbackmotorinfo.md) | v0 | Described a haptic feedback motor. Superseded by `GameInputHapticInfo`. |
| [GameInputHapticFeedbackParams](deprecated/structs/gameinputhapticfeedbackparams.md) | v0 | Described a haptic feedback effect. |
| [GameInputHapticWaveformInfo](deprecated/structs/gameinputhapticwaveforminfo.md) | v0 | Described characteristics of a haptic feedback effect. |
| [GameInputMotionInfo](deprecated/structs/gameinputmotioninfo.md) | v0 | Described measurable properties for a motion-enabled input device. |
| [GameInputMotionState](deprecated/structs/gameinputmotionstate.md) | v0 | Described the state of motion input. |
| [GameInputRawDeviceItemCollectionInfo](deprecated/structs/gameinputrawdeviceitemcollectioninfo.md) | v0 | Described a collection of raw device items. |
| [GameInputRawDeviceReportItemInfo](deprecated/structs/gameinputrawdevicereportiteminfo.md) | v0 | Described a raw device report item. |
| [GameInputString](deprecated/structs/gameinputstring.md) | v0 | Described a string containing information about an input device. |
| [GameInputTouchSensorInfo](deprecated/structs/gameinputtouchsensorinfo.md) | v0 | Described a touch sensor for an input device. |
| [GameInputTouchState](deprecated/structs/gameinputtouchstate.md) | v0 | Described the state of a touch input device. |
| [GameInputUiNavigationInfo](deprecated/structs/gameinputuinavigationinfo.md) | v2 | Specified the labels of navigation buttons in the UI. |
| [GameInputUiNavigationState](deprecated/structs/gameinputuinavigationstate.md) | v2 | Provided the current status of UI navigation input. |

### Removed Enumerations

| Enumeration | Last version | Description |
| --- | --- | --- |
| [GameInputBatteryStatus](deprecated/enums/gameinputbatterystatus.md) | v0 | Enumerated battery states for an input device. |
| [GameInputDeviceCapabilities](deprecated/enums/gameinputdevicecapabilities.md) | v0 | Enumerated certain capabilities of an input device. |
| [GameInputLocation](deprecated/enums/gameinputlocation.md) | v0 | Enumerated the parts of an input device. |
| [GameInputMotionAccuracy](deprecated/enums/gameinputmotionaccuracy.md) | v0 | Enumerated levels of accuracy for motion sensors. |
| [GameInputRawDeviceItemCollectionKind](deprecated/enums/gameinputrawdeviceitemcollectionkind.md) | v0 | Enumerated types of collections of raw device items. |
| [GameInputRawDevicePhysicalUnitKind](deprecated/enums/gameinputrawdevicephysicalunitkind.md) | v0 | Enumerated physical units associated with device input. |
| [GameInputRawDeviceReportItemFlags](deprecated/enums/gameinputrawdevicereportitemflags.md) | v0 | Enumerated types of raw device-report items. |
| [GameInputTouchShape](deprecated/enums/gameinputtouchshape.md) | v0 | Enumerated shapes of a touch sensor. |
| [GameInputUiNavigationButtons](deprecated/enums/gameinputuinavigationbuttons.md) | v2 | Enumerated UI navigation buttons. |

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Added `IGameInputMapper` interface. Re-introduced `IGameInputRawDeviceReport` interface (was absent in v1/v2). Added `GameInputAxisMapping`, `GameInputButtonMapping`, `GameInputControllerInfo`, `GameInputHapticInfo` structs. Re-introduced `GameInputRawDeviceReportInfo` struct and `GameInputRawDeviceReportKind` enum (absent in v1/v2). Re-introduced `GameInputVersion` struct (absent in v1/v2). Added `GameInputElementKind`, `GameInputFlightStickAxes`, `GameInputGamepadAxes`, `GameInputRacingWheelAxes` enums. Removed `GameInputControllerAxisInfo`, `GameInputControllerButtonInfo`, `GameInputUiNavigationInfo`, `GameInputUiNavigationState` structs. Removed `GameInputUiNavigationButtons` enum. |
| **v2** | Added `GameInputSensorsInfo`, `GameInputSensorsState` structs. Added `GameInputSensorsKind`, `GameInputSensorAccuracy` enums. Added `IGameInputDevice::DirectInputEscape`, `IGameInputDevice::GetHapticInfo`. Added `IGameInputReading::GetSensorsState`. Re-introduced `GameInputVersion` struct (was absent in v1). |
| **v1** | Removed `IGameInputRawDeviceReport` interface, `GameInputRawDeviceReportInfo` struct, `GameInputRawDeviceReportKind` enum. Removed `GameInputVersion` struct. Added `GameInputMousePositions` enum. Removed v0-only unimplemented haptics, motion, and touch types (`GameInputBatteryState`, `GameInputHapticFeedbackMotorInfo`, `GameInputHapticFeedbackParams`, `GameInputHapticWaveformInfo`, `GameInputMotionInfo`, `GameInputMotionState`, `GameInputTouchSensorInfo`, `GameInputTouchState`, `GameInputString`, `GameInputRawDeviceItemCollectionInfo`, `GameInputRawDeviceReportItemInfo`). |
| **v0** | Introduced. |