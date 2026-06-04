---
author: AlexYatskov
description: "Describes all the information about an input device (v1)."
edited: "03/06/2025"
kindex: "GameInputDeviceInfo (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputDeviceInfo (v1)"
---

# GameInputDeviceInfo (v1)

Describes all the information about an input device.

## Syntax

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

    const GameInputKeyboardInfo*     keyboardInfo;
    const GameInputMouseInfo*        mouseInfo;
    const GameInputArcadeStickInfo*  arcadeStickInfo;
    const GameInputFlightStickInfo*  flightStickInfo;
    const GameInputGamepadInfo*      gamepadInfo;
    const GameInputRacingWheelInfo*  racingWheelInfo;
    const GameInputUiNavigationInfo* uiNavigationInfo;

    uint32_t                           controllerAxisCount;
    const GameInputControllerAxisInfo* controllerAxisInfo;

    uint32_t                             controllerButtonCount;
    const GameInputControllerButtonInfo* controllerButtonInfo;

    uint32_t                             controllerSwitchCount;
    const GameInputControllerSwitchInfo* controllerSwitchInfo;

    uint32_t                               forceFeedbackMotorCount;
    const GameInputForceFeedbackMotorInfo* forceFeedbackMotorInfo;
};
```

### Members

*vendorId*
Type: uint16_t

Identifies the vendor of the input device.

*productId*
Type: uint16_t

Identifies the input device as a product.

*usage*
Type: [GameInputUsage](gameinputusage-v1.md)

Two part index describing the input used.

*deviceId*
Type: APP_LOCAL_DEVICE_ID

Device ID of the input device.

*deviceRootId*
Type: APP_LOCAL_DEVICE_ID

Root ID of the input device.

*deviceFamily*
Type: [GameInputDeviceFamily](../enums/gameinputdevicefamily-v1.md)

Designates the family of input device the input device belongs to.

*supportedInput*
Type: [GameInputKind](../enums/gameinputkind-v1.md)

Describes the type or types of input the device supports.

*supportedRumbleMotors*
Type: [GameInputRumbleMotors](../enums/gameinputrumblemotors-v1.md)

Describes the accessible rumble motors on the device if there are any.

*supportedSystemButtons*
Type: [GameInputSystemButtons](../enums/gameinputsystembuttons-v1.md)

Describes the available buttons for controlling the system, often outside of a game.

*displayName*
Type: const char*

Describes the friendly name for the device.

*pnpPath*
Type: const char*

Describes the PNP path for the device; this path can be used to reference the underlying devices through other APIs.

*keyboardInfo*
Type: [GameInputKeyboardInfo](gameinputkeyboardinfo-v1.md) const *

Information about a keyboard input device.

*mouseInfo*
Type: [GameInputMouseInfo](gameinputmouseinfo-v1.md) const *

Information about a mouse input device.

*arcadeStickInfo*
Type: [GameInputArcadeStickInfo](gameinputarcadestickinfo-v1.md) const *

Information about an arcade stick input device.

*flightStickInfo*
Type: [GameInputFlightStickInfo](gameinputflightstickinfo-v1.md) const *

Information about a flight stick input device.

*gamepadInfo*
Type: [GameInputGamepadInfo](gameinputgamepadinfo-v1.md) const *

Information about a gamepad input device.

*racingWheelInfo*
Type: [GameInputRacingWheelInfo](gameinputracingwheelinfo-v1.md) const *

Information about a racing wheel input device.

*uiNavigationInfo*
Type: [GameInputUiNavigationInfo](gameinputuinavigationinfo-v1.md) const *

Information about the navigation mapping for an input device.

*controllerAxisCount*
Type: uint32_t

The number of Axis on the input device.

*controllerAxisInfo*
Type: [GameInputControllerAxisInfo](gameinputcontrolleraxisinfo-v1.md) const *

Information about all of the axis for an input device.

*controllerButtonCount*
Type: uint32_t

The number of buttons on the input device.

*controllerButtonInfo*
Type: [GameInputControllerButtonInfo](gameinputcontrollerbuttoninfo-v1.md) const *

Information about all of the buttons on an input device.

*controllerSwitchCount*
Type: uint32_t

The number of switches on the inputdevice

*controllerSwitchInfo*
Type: [GameInputControllerSwitchInfo](gameinputcontrollerswitchinfo-v1.md) const *

Information about all of the switches on an input device.

*forceFeedbackMotorCount*
Type: uint32_t

The number of force feedback motors on the input device.

*forceFeedbackMotorInfo*
Type: [GameInputForceFeedbackMotorInfo](gameinputforcefeedbackmotorinfo-v1.md) const *

Information about all of the force feedback motors on a device.

## Remarks

The `deviceId` is an application-local ID - a 256-bit hash value which uniquely identifies the device. This ID is always the same for a given device, even across runs of an application or reboots of the system, provided it is connected to the same USB port. Application-local ID hashes are, in part, generated with information specific to the calling application and system.

The `deviceRootId` is another application-local ID which identifies the root device node for composite devices. This allows applications to reason about the relationship of individual devices. For example, some gaming keyboards work around the legacy USB limit of 8 simultaneous keypresses by exposing themselves as a composite device with multiple keyboard nodes. These are merged together into the "system" keyboard, so this is usually transparent to the user. But when processing per-keyboard input via the GameInput API, understanding this allows applications to avoid improper assumptions (e.g. that a keypress will always come from a specific device) when mapping functions to keypresses. The `deviceId` and `deviceRootId` are the same if the device is not one of many interfaces on a composite device.

The `displayName` string contains a "friendly" name for the device. This string is suitable for display in an application's UI, however there is no guarantee that it is localized. This is because the GameInput API searches several locations for this string, and one of the final fallbacks comes from the device's firmware.

The final fields in the `GameInputDeviceInfo` structure are pointers to variable-sized arrays of information about the device, such as detailed properties of individual controller buttons, or information about force feedback and haptic feedback support. NULL pointers indicate that the corresponding feature is not available or supported by the device. The number of elements in each array is indicated by a corresponding field in the structure (as noted in the SAL annotations).

No one input device will have readable values for all attributes. Some input device will only have values for relevant attributes.
Returned by [IGameInputDevice::GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo-v1.md).

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
[IGameInputDevice::GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo-v1.md)
