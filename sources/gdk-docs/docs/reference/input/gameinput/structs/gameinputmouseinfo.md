---
author: AlexYatskov
description: Describes the properties of a mouse.
edited: 03/06/2025
kindex: GameInputMouseInfo
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputMouseInfo
---

# GameInputMouseInfo

Describes the properties of a mouse.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputMouseInfo
{
    GameInputMouseButtons supportedButtons;
    uint32_t              sampleRate;
    bool                  hasWheelX;
    bool                  hasWheelY;
};
```

<a id="membersSection"></a>

### Members

*supportedButtons*<br>
Type: [GameInputMouseButtons](../enums/gameinputmousebuttons.md)

Buttons supported by the mouse.

*sampleRate*<br>
Type: uint32_t

Number of times per second that mouse movement is sampled.

*hasWheelX*<br>
Type: bool

Indicates whether the mouse has a scroll wheel for the x-axis.

*hasWheelY*<br>
Type: bool

Indicates whether the mouse has a scroll wheel for the y-axis.

<a id="remarksSection"></a>

## Remarks

This structure is used in the [GameInputDeviceInfo](gameinputdeviceinfo.md) structure. `GameInputDeviceInfo` is used by the [IGameInputDevice::GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo.md) method.

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
| **v1** | **Removed** `sensorDpi` (uint32_t). |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
struct GameInputMouseInfo
{
    GameInputMouseButtons supportedButtons;
    uint32_t              sampleRate;
    uint32_t              sensorDpi;
    bool                  hasWheelX;
    bool                  hasWheelY;
};
```