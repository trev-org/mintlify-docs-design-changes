---
author: AlexYatskov
description: Enumerates families of input devices.
edited: 03/03/2025
kindex: GameInputDeviceFamily
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputDeviceFamily
---

# GameInputDeviceFamily

Enumerates families of input devices.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputDeviceFamily
{
    GameInputFamilyVirtual   = -1,
    GameInputFamilyUnknown   =  0,
    GameInputFamilyXboxOne   =  1,
    GameInputFamilyXbox360   =  2,
    GameInputFamilyHid       =  3,
    GameInputFamilyI8042     =  4,
    GameInputFamilyAggregate =  5,
};
```

<a id="constantsSection"></a>

## Constants

| Constant                 | Description                                                     |
| ---                      | ---                                                             |
| GameInputFamilyVirtual   | Represents a virtualized input device on the platform.          |
| GameInputFamilyUnknown   | Represents an unknown device family.                            |
| GameInputFamilyXboxOne   | Represents a device managed by the XboxGIP or XInputHID drivers |
| GameInputFamilyXbox360   | Represents a device managed by the XUSB22 driver                |
| GameInputFamilyHid       | Represents a generic Human Interface Device (HID).              |
| GameInputFamilyI8042     | Represents an input device connected via an i8042 bus.          |
| GameInputFamilyAggregate | Represents an aggregate input device.                           |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputDeviceInfo](../structs/gameinputkeyboardinfo.md) structure. `GameInputDeviceInfo` is used by the [GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo.md) function.

For more information, see [GameInput devices](../../../../features/common/input/overviews/input-devices.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v3** | **Added** `GameInputFamilyUnknown` (value 0). **Renumbered** `GameInputFamilyAggregate` from value 0 to value 5 following implementation of aggregate devices. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
enum GameInputDeviceFamily
{
    GameInputFamilyVirtual   = -1,
    GameInputFamilyAggregate =  0,
    GameInputFamilyXboxOne   =  1,
    GameInputFamilyXbox360   =  2,
    GameInputFamilyHid       =  3,
    GameInputFamilyI8042     =  4,
};
```