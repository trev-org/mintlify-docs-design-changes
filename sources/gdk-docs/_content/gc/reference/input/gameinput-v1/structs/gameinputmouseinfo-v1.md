---
author: AlexYatskov
description: "Describes the properties of a mouse (v1)."
edited: "03/06/2025"
kindex: "GameInputMouseInfo (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputMouseInfo (v1)"
---

# GameInputMouseInfo (v1)

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

*supportedButtons*
Type: [GameInputMouseButtons](../enums/gameinputmousebuttons-v1.md)

Buttons supported by the mouse.

*sampleRate*
Type: uint32_t

Number of times per second that mouse movement is sampled.

*hasWheelX*
Type: bool

Indicates whether the mouse has a scroll wheel for the x-axis.

*hasWheelY*
Type: bool

Indicates whether the mouse has a scroll wheel for the y-axis.

<a id="remarksSection"></a>

## Remarks

This structure is used in the [GameInputDeviceInfo](gameinputdeviceinfo-v1.md) structure. `GameInputDeviceInfo` is used by the [IGameInputDevice::GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo-v1.md) method.

For more information, see [GameInput devices](../../../../input/overviews/input-devices.md).

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
