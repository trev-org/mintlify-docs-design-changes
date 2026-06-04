---
author: AlexYatskov
description: "A per-process singleton used to access the device input stream (v1)."
edited: "03/06/2025"
kindex: "IGameInput (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: article
permissioned-type: public
title: "IGameInput (Interface contents) (v1)"
---

# IGameInput (v1)

A per-process singleton used to access the device input stream.

The IGameInput interface is the starting point for using the GameInput API. This interface provides methods for synchronously retrieving cached readings from the input stream (the polling API), and methods for registering asynchronous callbacks for state changes (the event-based API).

## Syntax

```cpp
class IGameInput : public IUnknown
```

## Methods

| Method                                                                                    | Description                                                                                                                |
| ---                                                                                       | ---                                                                                                                        |
| [CreateDispatcher](methods/igameinput_createdispatcher-v1.md)                             | Creates a dispatcher for background tasks.                                                                                 |
| [FindDeviceFromId](methods/igameinput_finddevicefromid-v1.md)                             | Retrieves an IGameInputDevice interface using its identifier.                                                              |
| [FindDeviceFromPlatformString](methods/igameinput_finddevicefromplatformstring-v1.md)     | Retrieves an IGameInputDevice interface using a matching platform string.                                                  |
| [GetCurrentReading](methods/igameinput_getcurrentreading-v1.md)                           | Gets the latest reading from the input stream that matches a specified filter.                                             |
| [GetCurrentTimestamp](methods/igameinput_getcurrenttimestamp-v1.md)                       | Gets the current time in microseconds.                                                                                     |
| [GetNextReading](methods/igameinput_getnextreading-v1.md)                                 | Gets the next available IGameInputReading interface based on a reference reading from an optionally filtered input stream. |
| [GetPreviousReading](methods/igameinput_getpreviousreading-v1.md)                         | Gets the previous IGameInputReading based on a reference reading from an optionally filtered input stream.                 |
| [RegisterDeviceCallback](methods/igameinput_registerdevicecallback-v1.md)                 | Registers a callback function that is called when the device status changes.                                               |
| [RegisterKeyboardLayoutCallback](methods/igameinput_registerkeyboardlayoutcallback-v1.md) | Registers a callback function for keyboard layout changes.                                                                 |
| [RegisterReadingCallback](methods/igameinput_registerreadingcallback-v1.md)               | Registers a callback function that is called when a new reading is available.                                              |
| [RegisterSystemButtonCallback](methods/igameinput_registersystembuttoncallback-v1.md)     | Registers a callback function for Guide or Share button press and release events.                                          |
| [SetFocusPolicy](methods/igameinput_setfocuspolicy-v1.md)                                 | Sets the focus policy for a game's input devices.                                                                          |
| [StopCallback](methods/igameinput_stopcallback-v1.md)                                     | Stops a registered callback without waiting for any executing callbacks to complete.                                       |
| [UnregisterCallback](methods/igameinput_unregistercallback-v1.md)                         | Stops a registered callback, waiting for any executing callbacks to complete.                                              |

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../input/overviews/input-overview.md)
[GameInput](../../gameinput_members-v1.md)
