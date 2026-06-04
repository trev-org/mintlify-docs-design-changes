---
author: AlexYatskov
description: A per-process singleton used to access the device input stream.
edited: 09/22/2025
kindex: IGameInput
ms.date: 10/21/2025
ms.topic: article
permissioned-type: public
title: IGameInput (Interface contents)
---

# IGameInput

A per-process singleton used to access the device input stream.

The IGameInput interface is the starting point for using the GameInput API. This interface provides methods for synchronously retrieving cached readings from the input stream (the polling API), and methods for registering asynchronous callbacks for state changes (the event-based API).

## Syntax

```cpp
class IGameInput : public IUnknown
```

## Methods

| Method                                                                                 | Description                                                                                                                |
| ---                                                                                    | ---                                                                                                                        |
| [CreateAggregateDevice](methods/igameinput_createaggregatedevice.md)                   | Creates a virtual device that aggregates all inputs of an input kind.                                                      |
| [DisableAggregateDevice](methods/igameinput_disableaggregatedevice.md)                 | Disables aggregation of an aggregate device.                                                                               |
| [CreateDispatcher](methods/igameinput_createdispatcher.md)                             | Creates a dispatcher for background tasks.                                                                                 |
| [FindDeviceFromId](methods/igameinput_finddevicefromid.md)                             | Retrieves an IGameInputDevice interface using its identifier.                                                              |
| [FindDeviceFromPlatformString](methods/igameinput_finddevicefromplatformstring.md)     | Retrieves an IGameInputDevice interface using a matching platform string.                                                  |
| [GetCurrentReading](methods/igameinput_getcurrentreading.md)                           | Gets the latest reading from the input stream that matches a specified filter.                                             |
| [GetCurrentTimestamp](methods/igameinput_getcurrenttimestamp.md)                       | Gets the current time in microseconds.                                                                                     |
| [GetNextReading](methods/igameinput_getnextreading.md)                                 | Gets the next available IGameInputReading interface based on a reference reading from an optionally filtered input stream. |
| [GetPreviousReading](methods/igameinput_getpreviousreading.md)                         | Gets the previous IGameInputReading based on a reference reading from an optionally filtered input stream.                 |
| [RegisterDeviceCallback](methods/igameinput_registerdevicecallback.md)                 | Registers a callback function that is called when the device status changes.                                               |
| [RegisterKeyboardLayoutCallback](methods/igameinput_registerkeyboardlayoutcallback.md) | Registers a callback function for keyboard layout changes.                                                                 |
| [RegisterReadingCallback](methods/igameinput_registerreadingcallback.md)               | Registers a callback function that is called when a new reading is available.                                              |
| [RegisterSystemButtonCallback](methods/igameinput_registersystembuttoncallback.md)     | Registers a callback function for Guide or Share button press and release events.                                          |
| [SetFocusPolicy](methods/igameinput_setfocuspolicy.md)                                 | Sets the focus policy for a game's input devices.                                                                          |
| [StopCallback](methods/igameinput_stopcallback.md)                                     | Stops a registered callback without waiting for any executing callbacks to complete.                                       |
| [UnregisterCallback](methods/igameinput_unregistercallback.md)                         | Stops a registered callback, waiting for any executing callbacks to complete.                                              |

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[Input API Overview](../../../../../features/common/input/overviews/input-overview.md)<br>
[GameInput](../../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Added `CreateAggregateDevice` (previously E_NOTIMPL in v0, absent v1/v2). Added `DisableAggregateDevice`. |
| **v1** | Removed `CreateAggregateDevice`, `EnableOemDeviceSupport`, `FindDeviceFromObject`, `FindDeviceFromPlatformHandle`, `GetTemporalReading`, `RegisterGuideButtonCallback`. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

In addition to all methods present in the current version, the following methods existed in v0 and were removed in v1:

| Method | Description |
| --- | --- |
| CreateAggregateDevice (E_NOTIMPL) | Present but returned `E_NOTIMPL`. Re-introduced as functional in v3. |
| EnableOemDeviceSupport | Enabled support for OEM devices with custom protocols. This is now supported by default. |
| FindDeviceFromObject | Retrieves a device from a platform COM object reference. |
| FindDeviceFromPlatformHandle | Retrieves a device by platform window or file handle. |
| GetTemporalReading | Gets a reading interpolated to a specified timestamp. |
| RegisterGuideButtonCallback | Registers a callback for Guide/Xbox button press and release events. |