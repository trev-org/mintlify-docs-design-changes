---
description: Defines capability flags for input devices (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputDeviceCapabilities (Deprecated)
---

# GameInputDeviceCapabilities

> [!WARNING]
> **Deprecated.** This enumeration was removed in GameInput v1 and is not available in the current API.

Defines flags describing the capabilities of an input device.

## Syntax

```cpp
enum GameInputDeviceCapabilities : uint32_t
{
    GameInputDeviceCapabilityNone               = 0x00000000,
    GameInputDeviceCapabilityAudio              = 0x00000001,
    GameInputDeviceCapabilityPluginModule       = 0x00000002,
    GameInputDeviceCapabilityPowerOff           = 0x00000004,
    GameInputDeviceCapabilitySync               = 0x00000008,
    GameInputDeviceCapabilityWireless           = 0x00000010,
};
```

## Constants

| Constant | Value | Description |
| --- | --- | --- |
| GameInputDeviceCapabilityNone | 0x00000000 | No special capabilities. |
| GameInputDeviceCapabilityAudio | 0x00000001 | Device has audio capabilities. |
| GameInputDeviceCapabilityPluginModule | 0x00000002 | Device supports plugin modules. |
| GameInputDeviceCapabilityPowerOff | 0x00000004 | Device can be powered off via API. |
| GameInputDeviceCapabilitySync | 0x00000008 | Device supports input synchronization mode. |
| GameInputDeviceCapabilityWireless | 0x00000010 | Device is wireless. |

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
