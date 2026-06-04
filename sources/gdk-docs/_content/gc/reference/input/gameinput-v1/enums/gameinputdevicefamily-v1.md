---
author: AlexYatskov
description: "Enumerates families of input devices (v1)."
edited: "03/03/2025"
kindex: "GameInputDeviceFamily (v1)"
ms.author: alyatsko
ms.date: "03/03/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputDeviceFamily (v1)"
---

# GameInputDeviceFamily (v1)

Enumerates families of input devices.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum GameInputDeviceFamily
{
    GameInputFamilyVirtual   = -1,
    GameInputFamilyAggregate =  0,
    GameInputFamilyXboxOne   =  1,
    GameInputFamilyXbox360   =  2,
    GameInputFamilyHid       =  3,
    GameInputFamilyI8042     =  4
};
```

<a id="constantsSection"></a>

## Constants

| Constant                 | Description                                            |
| ---                      | ---                                                    |
| GameInputFamilyVirtual   | Represents a virtualized input device on the platform. |
| GameInputFamilyAggregate | Represents an aggregate input device.                  |
| GameInputFamilyXboxOne   | Represents an Xbox One input device.                   |
| GameInputFamilyXbox360   | Represents an Xbox 360 input device.                   |
| GameInputFamilyHid       | Represents a generic Human Interface Device (HID).     |
| GameInputFamilyI8042     | Represents an input device connected via an i8042 bus. |

<a id="remarksSection"></a>

## Remarks

This enumeration is used in the [GameInputDeviceInfo](../structs/gameinputkeyboardinfo-v1.md) structure. `GameInputDeviceInfo` is used by the [GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo-v1.md) function.

For more information, see [GameInput devices](../../../../input/overviews/input-devices.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
