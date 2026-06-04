---
author: AlexYatskov
description: Describes all the information about an input device.
edited: 05/27/2025
kindex: GameInputDeviceInfo
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputDeviceInfo
---

# GameInputDeviceInfo

Describes all the information about an input device.

## Syntax

```cpp
struct GameInputDeviceInfo
{
    uint16_t               vendorId;
    uint16_t               productId;
    uint16_t               revisionNumber;
    GameInputUsage         usage;
    GameInputVersion       hardwareVersion;
    GameInputVersion       firmwareVersion;
    APP_LOCAL_DEVICE_ID    deviceId;
    APP_LOCAL_DEVICE_ID    deviceRootId;
    GameInputDeviceFamily  deviceFamily;
    GameInputKind          supportedInput;
    GameInputRumbleMotors  supportedRumbleMotors;
    GameInputSystemButtons supportedSystemButtons;
    GUID                   containerId;
    const char*            displayName;
    const char*            pnpPath;

    const GameInputKeyboardInfo* keyboardInfo;
    const GameInputMouseInfo*    mouseInfo;
    const GameInputSensorsInfo*  sensorsInfo;

    const GameInputControllerInfo*  controllerInfo;
    const GameInputArcadeStickInfo* arcadeStickInfo;
    const GameInputFlightStickInfo* flightStickInfo;
    const GameInputGamepadInfo*     gamepadInfo;
    const GameInputRacingWheelInfo* racingWheelInfo;

    uint32_t                               forceFeedbackMotorCount;
    const GameInputForceFeedbackMotorInfo* forceFeedbackMotorInfo;

    uint32_t                            inputReportCount;
    const GameInputRawDeviceReportInfo* inputReportInfo;

    uint32_t                            outputReportCount;
    const GameInputRawDeviceReportInfo* outputReportInfo;
};
```

### Members

*vendorId*<br>
Type: uint16_t

Identifies the vendor of the input device.

*productId*<br>
Type: uint16_t

Identifies the input device as a product.

*revisionNumber*<br>
Type: uint16_t

Hardware revision number of the device, if any.

*usage*<br>
Type: [GameInputUsage](gameinputusage.md)

Two-part index that describes the input used.

*hardwareVersion*<br>
Type: [GameInputVersion](gameinputversion.md)

Hardware version of the device, if any.

*firmwareVersion*<br>
Type: [GameInputVersion](gameinputversion.md)

Firmware version of the device, if any.

*deviceId*<br>
Type: APP_LOCAL_DEVICE_ID

Device ID of the input device.

*deviceRootId*<br>
Type: APP_LOCAL_DEVICE_ID

Root ID of the input device.

*deviceFamily*<br>
Type: [GameInputDeviceFamily](../enums/gameinputdevicefamily.md)

Designates the family of input device that the input device belongs to.

*supportedInput*<br>
Type: [GameInputKind](../enums/gameinputkind.md)

Describes the type or types of input that the device supports.

*supportedRumbleMotors*<br>
Type: [GameInputRumbleMotors](../enums/gameinputrumblemotors.md)

Describes the accessible rumble motors on the device, if any.

*supportedSystemButtons*<br>
Type: [GameInputSystemButtons](../enums/gameinputsystembuttons.md)

Describes the available buttons for controlling the system, often outside a game.

*containerId*<br>
Type: GUID

Container ID of the input device.

*displayName*<br>
Type: const char*

Describes the friendly name for the device.

*pnpPath*<br>
Type: const char*

Describes the plug and play capability of the device. Use this path to reference the underlying devices through other APIs.

*keyboardInfo*<br>
Type: [GameInputKeyboardInfo](gameinputkeyboardinfo.md) const *

Information about a keyboard input device.

*mouseInfo*<br>
Type: [GameInputMouseInfo](gameinputmouseinfo.md) const *

Information about a mouse input device.

*sensorsInfo*<br>
Type: [GameInputSensorsInfo](gameinputsensorsinfo.md) const *

Information about sensors on the device.

*controllerInfo*<br>
Type: [GameInputControllerInfo](gameinputcontrollerinfo.md) const *

Information about the generic controller input device. The controller represents the raw non-mapped axes, buttons, and switches on a device.

*arcadeStickInfo*<br>
Type: [GameInputArcadeStickInfo](gameinputarcadestickinfo.md) const *

Information about an arcade stick input device.

*flightStickInfo*<br>
Type: [GameInputFlightStickInfo](gameinputflightstickinfo.md) const *

Information about a flight stick input device.

*gamepadInfo*<br>
Type: [GameInputGamepadInfo](gameinputgamepadinfo.md) const *

Information about a gamepad input device.

*racingWheelInfo*<br>
Type: [GameInputRacingWheelInfo](gameinputracingwheelinfo.md) const *

Information about a racing wheel input device.

*forceFeedbackMotorCount*<br>
Type: uint32_t

The number of force feedback motors on the input device.

*forceFeedbackMotorInfo*<br>
Type: [GameInputForceFeedbackMotorInfo](gameinputforcefeedbackmotorinfo.md) const *

Information about all the force feedback motors on a device.

*inputReportCount*<br>
Type: uint32_t

Number of input reports for the device.

*inputReportInfo*<br>
Type: [GameInputRawDeviceReportInfo](gameinputrawdevicereportinfo.md) const *

Input report info object.

*outputReportCount*<br>
Type: uint32_t

Number of output reports for the device.

*outputReportInfo*<br>
Type: [GameInputRawDeviceReportInfo](gameinputrawdevicereportinfo.md) const *

Output report.

## Remarks

All string members in this structure use UTF-8 encoding.

The `deviceId` is an application-local ID: a 256-bit hash value that uniquely identifies the device. This ID always stays the same for a given device, even across runs of an application or reboots of the system, as long as the device connects to the same USB port. The application generates application-local ID hashes, partly with information specific to the calling application and system.

The `deviceRootId` is another application-local ID, which identifies the root device node for composite devices. This allows applications to reason about the relationship of individual devices. For example, some gaming keyboards work around the legacy USB limit of eight simultaneous keystrokes by exposing themselves as a composite device with multiple keyboard nodes. These nodes are merged together into the "system" keyboard, so this is usually transparent to the user. But when processing per-keyboard input via the GameInput API, understanding this allows applications to avoid improper assumptions (for example, that a keystroke always comes from a specific device) when mapping functions to keystrokes. The `deviceId` and `deviceRootId` are the same if the device isn't one of many interfaces on a composite device.

The `displayName` string contains a "friendly" name for the device. You can display this string in an application's UI, but there's no guarantee that it's localized. This lack of localization comes from the GameInput API searching several locations for this string, and one of the final fallbacks comes from the device's firmware.

The final fields in the `GameInputDeviceInfo` structure are pointers to variable-sized arrays of information about the device, like information about force feedback and haptic feedback support. `NULL` pointers indicate that the corresponding feature isn't available or supported by the device. A corresponding field in the structure indicates the number of elements in each array, as noted in the Source Annotation Language (SAL) annotations.

No input device provides readable values for all attributes. Some devices include values only for relevant attributes. The system returns this information through [IGameInputDevice::GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo.md).

## See also

[Input API Overview](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)  
[IGameInputDevice::GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Replaced `uiNavigationInfo` with `controllerInfo` pointer. Replaced separate axis/button/switch count+info fields with `controllerInfo`. Added `inputReportCount`/`inputReportInfo` and `outputReportCount`/`outputReportInfo`. Removed `hapticFeedbackMotorInfo`. |
| **v2** | **Added** `revisionNumber`, `hardwareVersion`, `firmwareVersion`, `containerId` (GUID), and `sensorsInfo` pointer. |
| **v1** | **Major simplification** from v0: removed `infoSize`, `interfaceNumber`, `collectionNumber`, `capabilities` (GameInputDeviceCapabilities), touch/haptic/string/descriptor count fields; added `supportedSystemButtons`, `displayName` as `const char*`, `pnpPath`. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v2

```cpp
struct GameInputDeviceInfo
{
    uint16_t               vendorId;
    uint16_t               productId;
    uint16_t               revisionNumber;
    GameInputUsage         usage;
    GameInputVersion       hardwareVersion;
    GameInputVersion       firmwareVersion;
    APP_LOCAL_DEVICE_ID    deviceId;
    APP_LOCAL_DEVICE_ID    deviceRootId;
    GameInputDeviceFamily  deviceFamily;
    GameInputKind          supportedInput;
    GameInputRumbleMotors  supportedRumbleMotors;
    GameInputSystemButtons supportedSystemButtons;
    GUID                   containerId;
    const char*            displayName;
    const char*            pnpPath;

    const GameInputKeyboardInfo* keyboardInfo;
    const GameInputMouseInfo*    mouseInfo;
    const GameInputSensorsInfo*  sensorsInfo;

    const GameInputUiNavigationInfo* uiNavigationInfo;
    const GameInputArcadeStickInfo*  arcadeStickInfo;
    const GameInputFlightStickInfo*  flightStickInfo;
    const GameInputGamepadInfo*      gamepadInfo;
    const GameInputRacingWheelInfo*  racingWheelInfo;

    uint32_t                              controllerAxisCount;
    const GameInputControllerAxisInfo*    controllerAxisInfo;
    uint32_t                              controllerButtonCount;
    const GameInputControllerButtonInfo*  controllerButtonInfo;
    uint32_t                              controllerSwitchCount;
    const GameInputControllerSwitchInfo*  controllerSwitchInfo;

    uint32_t                               forceFeedbackMotorCount;
    const GameInputForceFeedbackMotorInfo* forceFeedbackMotorInfo;

    uint32_t                                hapticFeedbackMotorCount;
    const GameInputHapticFeedbackMotorInfo* hapticFeedbackMotorInfo;
};
```

### v1

```cpp
struct GameInputDeviceInfo
{
    uint16_t               vendorId;
    uint16_t               productId;
    GameInputUsage         usage;
    APP_LOCAL_DEVICE_ID    deviceId;
    APP_LOCAL_DEVICE_ID    deviceRootId;
    GameInputDeviceFamily  deviceFamily;
    GameInputKind          supportedInput;
    GameInputRumbleMotors  supportedRumbleMotors;
    GameInputSystemButtons supportedSystemButtons;
    const char*            displayName;
    const char*            pnpPath;

    const GameInputKeyboardInfo* keyboardInfo;
    const GameInputMouseInfo*    mouseInfo;

    const GameInputUiNavigationInfo* uiNavigationInfo;
    const GameInputArcadeStickInfo*  arcadeStickInfo;
    const GameInputFlightStickInfo*  flightStickInfo;
    const GameInputGamepadInfo*      gamepadInfo;
    const GameInputRacingWheelInfo*  racingWheelInfo;

    uint32_t                              controllerAxisCount;
    const GameInputControllerAxisInfo*    controllerAxisInfo;
    uint32_t                              controllerButtonCount;
    const GameInputControllerButtonInfo*  controllerButtonInfo;
    uint32_t                              controllerSwitchCount;
    const GameInputControllerSwitchInfo*  controllerSwitchInfo;

    uint32_t                               forceFeedbackMotorCount;
    const GameInputForceFeedbackMotorInfo* forceFeedbackMotorInfo;

    uint32_t                                hapticFeedbackMotorCount;
    const GameInputHapticFeedbackMotorInfo* hapticFeedbackMotorInfo;
};
```
