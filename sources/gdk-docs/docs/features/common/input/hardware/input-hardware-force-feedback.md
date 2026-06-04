---
author: lsalvador
description: "GameInput force feedback interface"
edited: 06/30/2025
kindex: "GameInput force feedback interface"
ms.author: lsalvador
ms.date: 06/30/2025
ms.topic: reference
permissioned-type: public
title: "Force Feedback on GameInput"
---

# GameInput force feedback interface

GameInput force feedback devices on PC align to the specification for Physical Interface Devices ("Device Class Definition for PID 1.0") from the [USB Implementer Forum](https://www.usb.org/hid) website. This alignment means that devices that already target DirectInput also interface through the API on PC. In consoles, only Game Input Protocol (GIP) devices interface with the API.

By mapping generic HID buttons, axis, and switches to standardized device interfaces, the API can still be a valuable add to force feedback accessories. This mapping makes it easier for games to pre-map the device's inputs by default. For more information, see [Interfacing with the different GameInput device types](input-hardware-interfaces.md).

<a id="seealsoSection"></a>

## See also 

[Overview of GameInput](../overviews/input-overview.md)

[Force Feedback on GameInput](../advanced/input-forcefeedback.md)

[IGameInputDevice::CreateForceFeedbackEffect](../../../../reference/input/gameinput/interfaces/igameinputdevice/methods/igameinputdevice_createforcefeedbackeffect.md)

[IGameInputForceFeedbackEffect](../../../../reference/input/gameinput/interfaces/igameinputforcefeedbackeffect/igameinputforcefeedbackeffect.md)
