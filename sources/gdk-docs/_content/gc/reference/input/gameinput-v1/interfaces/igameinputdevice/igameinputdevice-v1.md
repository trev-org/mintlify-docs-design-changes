---
author: AlexYatskov
description: "Represents an Input device (v1)."
edited: "03/06/2025"
kindex: "IGameInputDevice (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: article
permissioned-type: public
title: "IGameInputDevice (Interface contents) (v1)"
---

# IGameInputDevice (v1)

Represents an input device. The methods in this interface allow you to identify and interact with a game input device. You can query for information about the device like its type, abilities, and battery state. You may also activate some device specific hardware like haptic and force feedback.

## Syntax

```cpp
class IGameInputDevice : public IUnknown
```

## Methods

| Method                                                                                        | Description                                                                                         |
| ---                                                                                           | ---                                                                                                 |
| [CreateForceFeedbackEffect](methods/igameinputdevice_createforcefeedbackeffect-v1.md)         | Utilizes the IGameInputForceFeedbackEffect interface to track the force feedback effect on a motor. |
| [GetDeviceInfo](methods/igameinputdevice_getdeviceinfo-v1.md)                                 | Provides static information about the complete properties and capabilities of an input device.      |
| [GetDeviceStatus](methods/igameinputdevice_getdevicestatus-v1.md)                             | Gets the current status of an input device.                                                         |
| [IsForceFeedbackMotorPoweredOn](methods/igameinputdevice_isforcefeedbackmotorpoweredon-v1.md) | Shows whether a specific force feedback motor is powered on.                                        |
| [SetForceFeedbackMotorGain](methods/igameinputdevice_setforcefeedbackmotorgain-v1.md)         | Sets a global attenuation factor for all loaded effects on a motor.                                 |
| [SetRumbleState](methods/igameinputdevice_setrumblestate-v1.md)                               | Adjusts the desired intensities of the four rumble motors on the device.                            |

## Remarks

The `IGameInputDevice` interface gives applications access to rich information about an input device's properties, capabilities, and current state. It also provides access to advanced functionality, such as force feedback and haptic feedback. Many applications never need to call the methods on this interface, and only use `IGameInputDevice` instances as simple device identifiers for filtering readings from the input stream.

Like `IGameInputReading` instances, every `IGameInputDevice` instance is a singleton; retrieving the same device multiple times simply increments the reference count on the underlying object. Therefore, `IGameInputDevice` instances can be compared for reference equality.

Applications may continue to hold references to an `IGameInputDevice` instance (intentionally or unintentionally) after the underlying device has been disconnected from the system. The `IGameInputDevice` instance remains valid, since the application cannot be forced to release its reference to the interface, but the underlying object enters a zombie state.

When in a zombie state, any methods on the `IGameInputDevice` interface that return static configuration information or device state information remain callable (in general, the Get* methods). However, any methods that would modify device state, or in some way require the device to be connected, return a failure `HRESULT` indicating that the device is no longer connected. If the same physical device is later reconnected to the system, the zombie device object is resurrected and all methods on the `IGameInputDevice` instance become functional again.

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

## See also

[Input API Overview](../../../../../input/overviews/input-overview.md)
[GameInput](../../gameinput_members-v1.md)
