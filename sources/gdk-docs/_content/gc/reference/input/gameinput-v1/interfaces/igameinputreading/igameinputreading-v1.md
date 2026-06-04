---
author: AlexYatskov
description: "Encapsulates the data for a single input update (v1)."
edited: "03/06/2025"
kindex: "IGameInputReading (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: article
permissioned-type: public
title: "IGameInputReading (Interface contents) (v1)"
---

# IGameInputReading (v1)

Encapsulates the data for a single input update. The methods for this interface allow you to interpret game input through the lens of several devices, as well as gain information about the devices sending the input. This interface will help you translate inputs into actionable information about a game controllers state at some moment in time.

## Syntax

```cpp
class IGameInputReading : public IUnknown
```

## Methods

| Method                                                                               | Description                                               |
| ---                                                                                  | ---                                                       |
| [GetArcadeStickState](methods/igameinputreading_getarcadestickstate-v1.md)           | Gets the state of the arcade stick on a game controller.  |
| [GetControllerAxisCount](methods/igameinputreading_getcontrolleraxiscount-v1.md)     | Gets the number of axes on a game controller.             |
| [GetControllerAxisState](methods/igameinputreading_getcontrolleraxisstate-v1.md)     | Gets the state of the axes on a game controller.          |
| [GetControllerButtonCount](methods/igameinputreading_getcontrollerbuttoncount-v1.md) | Gets the number of buttons on a game controller.          |
| [GetControllerButtonState](methods/igameinputreading_getcontrollerbuttonstate-v1.md) | Gets the state of the buttons on a game controller.       |
| [GetControllerSwitchCount](methods/igameinputreading_getcontrollerswitchcount-v1.md) | Gets the number of switches on a game controller.         |
| [GetControllerSwitchState](methods/igameinputreading_getcontrollerswitchstate-v1.md) | Gets the state of the switches on a game controller.      |
| [GetDevice](methods/igameinputreading_getdevice-v1.md)                               | Gets the devices linked to the current reading.           |
| [GetFlightStickState](methods/igameinputreading_getflightstickstate-v1.md)           | Gets the state of the flight stick on a game controller.  |
| [GetGamepadState](methods/igameinputreading_getgamepadstate-v1.md)                   | Gets the state of the gamepad on a game controller.       |
| [GetInputKind](methods/igameinputreading_getinputkind-v1.md)                         | Gets the types of input provided by this reading.         |
| [GetKeyCount](methods/igameinputreading_getkeycount-v1.md)                           | Gets the number of active keys on a game controller.      |
| [GetKeyState](methods/igameinputreading_getkeystate-v1.md)                           | Gets the state of the active keys on a game controller.   |
| [GetMouseState](methods/igameinputreading_getmousestate-v1.md)                       | Gets the state of the mouse on a game controller.         |
| [GetRacingWheelState](methods/igameinputreading_getracingwheelstate-v1.md)           | Gets the state of the racing wheel on a game controller.  |
| [GetTimestamp](methods/igameinputreading_gettimestamp-v1.md)                         | Gets the timestamp of the reading in microseconds.        |
| [GetUiNavigationState](methods/igameinputreading_getuinavigationstate-v1.md)         | Gets the state of the UI navigation on a game controller. |

## Remarks

Every input state change received from a device is captured in an `IGameInputReading` instance. Essentially, this is a snapshot of the device's input state, at a specific moment in time. The `IGameInputReading` interface provides access to both the raw input report data from the device, as well as various transformations of that data.

After capturing the raw input data in a new report, the GameInput API examines the data and attempts to transform it into additional (more useful) representations. With very few exceptions, the data is transformed into one or more rudimentary representations - an array of button and axis values, an array of key states, etc. If possible, the data is also transformed into one or more abstract fixed-format representations, such as gamepad state.

As a result, a single `IGameInputReading` instance often contains multiple "views" of the same input data. This caters to a broad range of applications of varying sophistication, by giving them access to as little or as much low-level detail about the input data as they need. For each kind of input data defined in the `GameInputKind` enumeration, a corresponding `IGameInputReading` method exists to retrieve that kind of data.

Every `IGameInputReading` retrieved from the input stream is a singleton; retrieving the same reading multiple times simply increments the reference count on the underlying object. As a result, `IGameInputReading` instances can be compared for reference equality. `IGameInputReading` instances always remain valid (and state can be retrieved from them) until all references to the reading instance have been released - even if the underlying device has been disconnected from the system, or if the reading is so old it is no longer in the input stream buffer. Because all of the methods on this interface are simply retrieving cached data stored in the reading, they all return extremely quickly and are safe to call from time sensitive contexts.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../input/overviews/input-overview.md)
[GameInput](../../gameinput_members-v1.md)
