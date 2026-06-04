---
author: AlexYatskov
description: Represents an Input device.
edited: 03/06/2025
kindex: IGameInputDevice
ms.date: 10/21/2025
ms.topic: article
permissioned-type: public
title: IGameInputDevice (Interface contents)
---

# IGameInputDevice

Represents an input device. The methods in this interface allow you to identify and interact with a game input device. You can query for information about the device like its type, abilities, and battery state. You may also activate some device specific hardware like haptic and force feedback.

## Syntax

```cpp
class IGameInputDevice : public IUnknown
```

## Methods

| Method                                                                                     | Description                                                                                                           |
| ---                                                                                        | ---                                                                                                                   |
| [CreateForceFeedbackEffect](methods/igameinputdevice_createforcefeedbackeffect.md)         | Utilizes the IGameInputForceFeedbackEffect interface to track the force feedback effect on a motor.                   |
| [DirectInputEscape](methods/igameinputdevice_directinputescape.md)                         | Sends a hardware-specific command to the force-feedback driver.                                                       |
| [GetDeviceInfo](methods/igameinputdevice_getdeviceinfo.md)                                 | Provides static information about the complete properties and capabilities of an input device.                        |
| [GetHapticInfo](methods/igameinputdevice_gethapticinfo.md)                                 | Provides dynamic information about the complete haptic properties and capabilities of an input device.                |
| [GetDeviceStatus](methods/igameinputdevice_getdevicestatus.md)                             | Gets the current status of an input device.                                                                           |
| [IsForceFeedbackMotorPoweredOn](methods/igameinputdevice_isforcefeedbackmotorpoweredon.md) | Shows whether a specific force feedback motor is powered on.                                                          |
| [SetForceFeedbackMotorGain](methods/igameinputdevice_setforcefeedbackmotorgain.md)         | Sets a global attenuation factor for all loaded effects on a motor.                                                   |
| [SetRumbleState](methods/igameinputdevice_setrumblestate.md)                               | Adjusts the desired intensities of the four rumble motors on the device.                                              |
| [CreateInputMapper](methods/igameinputdevice_createinputmapper.md)                         | Creates a IGameInputMapper interface that provides the mapping information for a given input element in a input kind. |
| [GetExtraAxisCount](methods/igameinputdevice_getextraaxiscount.md)                         | Gets the number of extra axes, or non-mapped axes, present in the device for a given input kind.                      |
| [GetExtraButtonCount](methods/igameinputdevice_getextrabuttoncount.md)                     | Gets the number of extra buttons, or non-supported buttons, present in the device for a given input kind.             |
| [GetExtraAxisIndexes](methods/igameinputdevice_getextraaxisindexes.md)                     | Gets the controller axis indexes of the extra axes on the device for a given input kind.                              |
| [GetExtraButtonIndexes](methods/igameinputdevice_getextrabuttonindexes.md)                 | Gets the controller button indexes of the extra buttons on the device for a given input kind.                         |
| [CreateRawDeviceReport](methods/igameinputdevice_createrawdevicereport.md)                 | Creates a new buffer represented by an IGameInputRawDeviceReport instance.                                            |
| [SendRawDeviceOutput](methods/igameinputdevice_sendrawdeviceoutput.md)                     | Sends raw data to the device.                                                                                         |

## Remarks

The `IGameInputDevice` interface gives applications access to rich information about an input device's properties, capabilities, and current state. It also provides access to advanced functionality, such as force feedback and haptic feedback. Many applications never need to call the methods on this interface, and only use `IGameInputDevice` instances as simple device identifiers for filtering readings from the input stream.

Like `IGameInputReading` instances, every `IGameInputDevice` instance is a singleton; retrieving the same device multiple times simply increments the reference count on the underlying object. Therefore, `IGameInputDevice` instances can be compared for reference equality.

Applications may continue to hold references to an `IGameInputDevice` instance (intentionally or unintentionally) after the underlying device has been disconnected from the system. The `IGameInputDevice` instance remains valid, since the application cannot be forced to release its reference to the interface, but the underlying object enters a zombie state.

When in a zombie state, any methods on the `IGameInputDevice` interface that return static configuration information or device state information remain callable (in general, the Get* methods). However, any methods that would modify device state, or in some way require the device to be connected, return a failure `HRESULT` indicating that the device is no longer connected. If the same physical device is later reconnected to the system, the zombie device object is resurrected and all methods on the `IGameInputDevice` instance become functional again.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Input API Overview](../../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Added `CreateInputMapper`, `CreateRawDeviceReport`, `GetExtraAxisCount`, `GetExtraAxisIndexes`, `GetExtraButtonCount`, `GetExtraButtonIndexes`, `SendRawDeviceOutput`. |
| **v2** | Added `DirectInputEscape`, `GetHapticInfo`. |
| **v1** | Removed `AcquireExclusiveRawDeviceAccess`, `CreateRawDeviceReport`, `ExecuteRawDeviceIoControl`, `GetBatteryState`, `GetRawDeviceFeature`, `PowerOff`, `ReleaseExclusiveRawDeviceAccess`, `SendInputSynchronizationHint`, `SetHapticMotorState`, `SetInputSynchronizationState`, `SetRawDeviceFeature`. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

In addition to all methods present in v1 (listed below), the following methods existed in v0 and were removed in v1:

| Method | Description |
| --- | --- |
| AcquireExclusiveRawDeviceAccess | Acquires exclusive access to the device's raw input stream. |
| CreateRawDeviceReport | Creates a raw device report buffer. Re-introduced in v3. |
| ExecuteRawDeviceIoControl | Sends a raw I/O control command to the device. |
| GetBatteryState | Retrieves the battery state of the device. |
| GetRawDeviceFeature | Retrieves a feature report from the device. |
| PowerOff | Powers off the device. |
| ReleaseExclusiveRawDeviceAccess | Releases exclusive access to the device's raw input stream. |
| SendInputSynchronizationHint | Sends a synchronization hint to the device input stream. |
| SendRawDeviceOutput | Sends raw data to the device. Re-introduced in v3. |
| SetHapticMotorState | Sets the state of a haptic motor on the device. |
| SetInputSynchronizationState | Sets the synchronization state for the device input stream. |
| SetRawDeviceFeature | Sets a feature report on the device. |

### v1

| Method | Description |
| --- | --- |
| [CreateForceFeedbackEffect](methods/igameinputdevice_createforcefeedbackeffect.md) | Utilizes the IGameInputForceFeedbackEffect interface to track the force feedback effect on a motor. |
| [GetDeviceInfo](methods/igameinputdevice_getdeviceinfo.md) | Provides static information about the complete properties and capabilities of an input device. |
| [GetDeviceStatus](methods/igameinputdevice_getdevicestatus.md) | Gets the current status of an input device. |
| [IsForceFeedbackMotorPoweredOn](methods/igameinputdevice_isforcefeedbackmotorpoweredon.md) | Shows whether a specific force feedback motor is powered on. |
| [SetForceFeedbackMotorGain](methods/igameinputdevice_setforcefeedbackmotorgain.md) | Sets a global attenuation factor for all loaded effects on a motor. |
| [SetRumbleState](methods/igameinputdevice_setrumblestate.md) | Adjusts the desired intensities of the four rumble motors on the device. |

### v2

All methods from v1, plus:

| Method | Description |
| --- | --- |
| [DirectInputEscape](methods/igameinputdevice_directinputescape.md) | Sends a hardware-specific command to the force-feedback driver. |
| [GetHapticInfo](methods/igameinputdevice_gethapticinfo.md) | Provides dynamic information about the complete haptic properties and capabilities of an input device. |