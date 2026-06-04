---
description: Reference for GameInput API members that have been removed from the current API.
ms.date: 10/21/2025
ms.topic: article
permissioned-type: public
title: Deprecated GameInput API members
---

# Deprecated GameInput API members

This page documents GameInput API members that were present in older versions of the API but have been removed. For current API members, see [GameInput](../gameinput_members.md).

> [!IMPORTANT]
> These members are no longer available in the current GameInput API. They are documented here for reference when working with older code.

## Removed Interface Methods

### IGameInput

| Method | Last Version | Description |
| --- | --- | --- |
| [EnableOemDeviceSupport](interfaces/igameinput/methods/igameinput_enableoemdevicesupport.md) | v0 | Enabled support for a specific OEM device. |
| [FindDeviceFromObject](interfaces/igameinput/methods/igameinput_finddevicefromobject.md) | v0 | Retrieved a device from a platform COM object. |
| [FindDeviceFromPlatformHandle](interfaces/igameinput/methods/igameinput_finddevicefromplatformhandle.md) | v0 | Retrieved a device from a platform window or file handle. |
| [GetTemporalReading](interfaces/igameinput/methods/igameinput_gettemporalreading.md) | v0 | Got a reading interpolated to a specified timestamp. |
| [RegisterGuideButtonCallback](interfaces/igameinput/methods/igameinput_registerguidebuttoncallback.md) | v0 | Registered a callback for Guide button events. Replaced by [RegisterSystemButtonCallback](../interfaces/igameinput/methods/igameinput_registersystembuttoncallback.md). |

### IGameInputDevice

| Method | Last Version | Description |
| --- | --- | --- |
| [AcquireExclusiveRawDeviceAccess](interfaces/igameinputdevice/methods/igameinputdevice_acquireexclusiverawdeviceaccess.md) | v0 | Acquired exclusive access to the device's raw input stream. |
| [ExecuteRawDeviceIoControl](interfaces/igameinputdevice/methods/igameinputdevice_executerawdeviceiocontrol.md) | v0 | Sent a raw I/O control command to the device. |
| [GetBatteryState](interfaces/igameinputdevice/methods/igameinputdevice_getbatterystate.md) | v0 | Retrieved the battery state of the device. |
| [GetRawDeviceFeature](interfaces/igameinputdevice/methods/igameinputdevice_getrawdevicefeature.md) | v0 | Retrieved a feature report from the device. |
| [PowerOff](interfaces/igameinputdevice/methods/igameinputdevice_poweroff.md) | v0 | Powered off the device. |
| [ReleaseExclusiveRawDeviceAccess](interfaces/igameinputdevice/methods/igameinputdevice_releaseexclusiverawdeviceaccess.md) | v0 | Released exclusive access to the device's raw input stream. |
| [SendInputSynchronizationHint](interfaces/igameinputdevice/methods/igameinputdevice_sendinputsynchronizationhint.md) | v0 | Sent a synchronization hint to the device input stream. |
| [SetHapticMotorState](interfaces/igameinputdevice/methods/igameinputdevice_sethapticmotorstate.md) | v0 | Set the state of a haptic motor. Replaced by [GetHapticInfo](../interfaces/igameinputdevice/methods/igameinputdevice_gethapticinfo.md). |
| [SetInputSynchronizationState](interfaces/igameinputdevice/methods/igameinputdevice_setinputsynchronizationstate.md) | v0 | Set the synchronization state for the device input stream. |
| [SetRawDeviceFeature](interfaces/igameinputdevice/methods/igameinputdevice_setrawdevicefeature.md) | v0 | Set a feature report on the device. |

### IGameInputReading

| Method | Last Version | Description |
| --- | --- | --- |
| [GetMotionState](interfaces/igameinputreading/methods/igameinputreading_getmotionstate.md) | v0 | Retrieved motion sensor state from a reading. Superseded by [GetSensorsState](../interfaces/igameinputreading/methods/igameinputreading_getsensorsstate.md). |
| [GetTouchCount](interfaces/igameinputreading/methods/igameinputreading_gettouchcount.md) | v0 | Got the number of active touch points in a reading. |
| [GetTouchState](interfaces/igameinputreading/methods/igameinputreading_gettouchstate.md) | v0 | Got the state of touch points in a reading. |
| [GetUiNavigationState](interfaces/igameinputreading/methods/igameinputreading_getuinavigationstate.md) | v2 | Got the UI navigation input state from a reading. |

## Removed Functions

| Function | Last Version | Description |
| --- | --- | --- |
| [GameInputGuidButtonCallback](functions/gameinputguidebuttoncallback.md) | v0 | Title-defined callback for Guide button events. Replaced by [GameInputSystemButtonCallback](../functions/gameinputsystembuttoncallback.md). |

## Removed Structures

| Structure | Last Version | Description |
| --- | --- | --- |
| [GameInputBatteryState](structs/gameinputbatterystate.md) | v0 | Described the battery state of an input device. |
| [GameInputControllerAxisInfo](structs/gameinputcontrolleraxisinfo.md) | v2 | Described an axis on an input device. Superseded by fields in [GameInputControllerInfo](../structs/gameinputcontrollerinfo.md). |
| [GameInputControllerButtonInfo](structs/gameinputcontrollerbuttoninfo.md) | v2 | Described a button on an input device. Superseded by fields in [GameInputControllerInfo](../structs/gameinputcontrollerinfo.md). |
| [GameInputHapticFeedbackMotorInfo](structs/gameinputhapticfeedbackmotorinfo.md) | v0 | Described a haptic feedback motor. Superseded by [GameInputHapticInfo](../structs/gameinputhapticinfo.md). |
| [GameInputHapticFeedbackParams](structs/gameinputhapticfeedbackparams.md) | v0 | Described a haptic feedback effect. |
| [GameInputHapticWaveformInfo](structs/gameinputhapticwaveforminfo.md) | v0 | Described characteristics of a haptic feedback waveform. |
| [GameInputMotionInfo](structs/gameinputmotioninfo.md) | v0 | Described measurable properties for a motion-enabled input device. |
| [GameInputMotionState](structs/gameinputmotionstate.md) | v0 | Described the state of motion input. |
| [GameInputRawDeviceItemCollectionInfo](structs/gameinputrawdeviceitemcollectioninfo.md) | v0 | Described a collection of raw device items. |
| [GameInputRawDeviceReportItemInfo](structs/gameinputrawdevicereportiteminfo.md) | v0 | Described an individual item within a raw device report. |
| [GameInputString](structs/gameinputstring.md) | v0 | Described a string containing information about an input device. |
| [GameInputTouchSensorInfo](structs/gameinputtouchsensorinfo.md) | v0 | Described the characteristics of a touch sensor. |
| [GameInputTouchState](structs/gameinputtouchstate.md) | v0 | Described the state of a touch input device. |
| [GameInputUiNavigationInfo](structs/gameinputuinavigationinfo.md) | v2 | Specified the labels of navigation buttons in the UI. |
| [GameInputUiNavigationState](structs/gameinputuinavigationstate.md) | v2 | Provided the current status of UI navigation input. |

## Removed Enumerations

| Enumeration | Last Version | Description |
| --- | --- | --- |
| [GameInputBatteryStatus](enums/gameinputbatterystatus.md) | v0 | Enumerated battery states for an input device. |
| [GameInputDeviceCapabilities](enums/gameinputdevicecapabilities.md) | v0 | Enumerated certain capabilities of an input device. |
| [GameInputLocation](enums/gameinputlocation.md) | v0 | Enumerated the parts of an input device. |
| [GameInputMotionAccuracy](enums/gameinputmotionaccuracy.md) | v0 | Enumerated levels of accuracy for motion sensors. |
| [GameInputRawDeviceItemCollectionKind](enums/gameinputrawdeviceitemcollectionkind.md) | v0 | Enumerated types of collections of raw device items. |
| [GameInputRawDevicePhysicalUnitKind](enums/gameinputrawdevicephysicalunitkind.md) | v0 | Enumerated physical units associated with device input. |
| [GameInputRawDeviceReportItemFlags](enums/gameinputrawdevicereportitemflags.md) | v0 | Enumerated types of raw device-report items. |
| [GameInputTouchShape](enums/gameinputtouchshape.md) | v0 | Enumerated shapes of a touch sensor. |
| [GameInputUiNavigationButtons](enums/gameinputuinavigationbuttons.md) | v2 | Enumerated UI navigation buttons. |

## See also

[GameInput API members](../gameinput_members.md)  
[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
