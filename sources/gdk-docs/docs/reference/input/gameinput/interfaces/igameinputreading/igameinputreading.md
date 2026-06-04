---
author: AlexYatskov
description: Encapsulates the data for a single input update.
edited: 05/27/2025
kindex: IGameInputReading
ms.date: 10/21/2025
ms.topic: article
permissioned-type: public
title: IGameInputReading (Interface contents)
---

# IGameInputReading

Encapsulates the data for a single input update. The methods for this interface allow you to interpret game input through the lens of several devices, as well as gain information about the devices sending the input. This interface will help you translate inputs into actionable information about a game controllers state at some moment in time.

## Syntax

```cpp
class IGameInputReading : public IUnknown
```

## Methods

| Method                                                                            | Description                                              |
| ---                                                                               | ---                                                      |
| [GetArcadeStickState](methods/igameinputreading_getarcadestickstate.md)           | Gets the state of the arcade stick on a game controller. |
| [GetControllerAxisCount](methods/igameinputreading_getcontrolleraxiscount.md)     | Gets the number of axes on a game controller.            |
| [GetControllerAxisState](methods/igameinputreading_getcontrolleraxisstate.md)     | Gets the state of the axes on a game controller.         |
| [GetControllerButtonCount](methods/igameinputreading_getcontrollerbuttoncount.md) | Gets the number of buttons on a game controller.         |
| [GetControllerButtonState](methods/igameinputreading_getcontrollerbuttonstate.md) | Gets the state of the buttons on a game controller.      |
| [GetControllerSwitchCount](methods/igameinputreading_getcontrollerswitchcount.md) | Gets the number of switches on a game controller.        |
| [GetControllerSwitchState](methods/igameinputreading_getcontrollerswitchstate.md) | Gets the state of the switches on a game controller.     |
| [GetDevice](methods/igameinputreading_getdevice.md)                               | Gets the devices linked to the current reading.          |
| [GetFlightStickState](methods/igameinputreading_getflightstickstate.md)           | Gets the state of the flight stick on a game controller. |
| [GetGamepadState](methods/igameinputreading_getgamepadstate.md)                   | Gets the state of the gamepad on a game controller.      |
| [GetInputKind](methods/igameinputreading_getinputkind.md)                         | Gets the types of input provided by this reading.        |
| [GetKeyCount](methods/igameinputreading_getkeycount.md)                           | Gets the number of active keys on a game controller.     |
| [GetKeyState](methods/igameinputreading_getkeystate.md)                           | Gets the state of the active keys on a game controller.  |
| [GetMouseState](methods/igameinputreading_getmousestate.md)                       | Gets the state of the mouse on a game controller.        |
| [GetRacingWheelState](methods/igameinputreading_getracingwheelstate.md)           | Gets the state of the racing wheel on a game controller. |
| [GetSensorsState](methods/igameinputreading_getsensorsstate.md)                   | Gets the state of the sensors on a game controller.      |
| [GetTimestamp](methods/igameinputreading_gettimestamp.md)                         | Gets the timestamp of the reading in microseconds.       |
| [GetRawReport](methods/igameinputreading_getrawreport.md)                         | Gets the raw data from the device input.                 |
| [GetSequenceNumber](methods/igameinputreading_getsequencenumber.md)               | Gets the sequence number of the reading.                 |

## Remarks

Every input state change received from a device is captured in an `IGameInputReading` instance. Essentially, this is a snapshot of the device's input state, at a specific moment in time. The `IGameInputReading` interface provides access to both the raw input report data from the device, as well as various transformations of that data.

After capturing the raw input data in a new report, the GameInput API examines the data and attempts to transform it into additional (more useful) representations. With very few exceptions, the data is transformed into one or more rudimentary representations - an array of button and axis values, an array of key states, etc. If possible, the data is also transformed into one or more abstract fixed-format representations, such as gamepad state.

As a result, a single `IGameInputReading` instance often contains multiple "views" of the same input data. This caters to a broad range of applications of varying sophistication, by giving them access to as little or as much low-level detail about the input data as they need. For each kind of input data defined in the `GameInputKind` enumeration, a corresponding `IGameInputReading` method exists to retrieve that kind of data.

Every `IGameInputReading` retrieved from the input stream is a singleton; retrieving the same reading multiple times simply increments the reference count on the underlying object. As a result, `IGameInputReading` instances can be compared for reference equality. `IGameInputReading` instances always remain valid (and state can be retrieved from them) until all references to the reading instance have been released - even if the underlying device has been disconnected from the system, or if the reading is so old it is no longer in the input stream buffer. Because all of the methods on this interface are simply retrieving cached data stored in the reading, they all return extremely quickly and are safe to call from time sensitive contexts.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Input API Overview](../../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Removed `GetUiNavigationState`. Added `GetRawReport`, `GetSequenceNumber`. |
| **v2** | Added `GetSensorsState`. Removed `GetRawReport`, `GetSequenceNumber`. |
| **v1** | Removed `GetMotionState`, `GetTouchCount`, `GetTouchState`, `GetRawReport`, `GetSequenceNumber`. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

In addition to all methods present in v1 (see below), the following methods existed in v0:

| Method | Description |
| --- | --- |
| GetMotionState | Gets the motion sensor state (accelerometer/gyroscope) from the reading. Removed in v1. |
| GetRawReport | Gets the raw data from the device input. Removed in v1; re-introduced in v3. |
| GetSequenceNumber | Gets the monotonically increasing sequence number of the reading. Removed in v1; re-introduced in v3. |
| GetTouchCount | Gets the number of active touch points in the reading. Removed in v1. |
| GetTouchState | Gets the state of the touch points in the reading. Removed in v1. |
| GetUiNavigationState | Gets the UI navigation input state from the reading. Present in v0–v2; removed in v3. |

### v1

| Method | Description |
| --- | --- |
| [GetArcadeStickState](methods/igameinputreading_getarcadestickstate.md) | Gets the state of the arcade stick on a game controller. |
| [GetControllerAxisCount](methods/igameinputreading_getcontrolleraxiscount.md) | Gets the number of axes on a game controller. |
| [GetControllerAxisState](methods/igameinputreading_getcontrolleraxisstate.md) | Gets the state of the axes on a game controller. |
| [GetControllerButtonCount](methods/igameinputreading_getcontrollerbuttoncount.md) | Gets the number of buttons on a game controller. |
| [GetControllerButtonState](methods/igameinputreading_getcontrollerbuttonstate.md) | Gets the state of the buttons on a game controller. |
| [GetControllerSwitchCount](methods/igameinputreading_getcontrollerswitchcount.md) | Gets the number of switches on a game controller. |
| [GetControllerSwitchState](methods/igameinputreading_getcontrollerswitchstate.md) | Gets the state of the switches on a game controller. |
| [GetDevice](methods/igameinputreading_getdevice.md) | Gets the device linked to the current reading. |
| [GetFlightStickState](methods/igameinputreading_getflightstickstate.md) | Gets the state of the flight stick on a game controller. |
| [GetGamepadState](methods/igameinputreading_getgamepadstate.md) | Gets the state of the gamepad on a game controller. |
| [GetInputKind](methods/igameinputreading_getinputkind.md) | Gets the types of input provided by this reading. |
| [GetKeyCount](methods/igameinputreading_getkeycount.md) | Gets the number of active keys on a game controller. |
| [GetKeyState](methods/igameinputreading_getkeystate.md) | Gets the state of the active keys on a game controller. |
| [GetMouseState](methods/igameinputreading_getmousestate.md) | Gets the state of the mouse on a game controller. |
| [GetRacingWheelState](methods/igameinputreading_getracingwheelstate.md) | Gets the state of the racing wheel on a game controller. |
| [GetTimestamp](methods/igameinputreading_gettimestamp.md) | Gets the timestamp of the reading in microseconds. |
| GetUiNavigationState | Gets the UI navigation input state from the reading. Removed in v3. |

### v2

All methods from v1, plus:

| Method | Description |
| --- | --- |
| [GetSensorsState](methods/igameinputreading_getsensorsstate.md) | Gets the state of the sensors on a game controller. |