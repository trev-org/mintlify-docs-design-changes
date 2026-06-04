---
author: AlexYatskov
description: "Describes an axis on an input device (v1)."
edited: "03/06/2025"
kindex: "GameInputControllerAxisInfo (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputControllerAxisInfo (v1)"
---

# GameInputControllerAxisInfo (v1)

Describes an axis on an input device.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputControllerAxisInfo
{
    GameInputKind  mappedInputKinds;
    GameInputLabel label;
};
```

<a id="membersSection"></a>

### Members

*mappedInputKinds*
Type: [GameInputKind](../enums/gameinputkind-v1.md)

The kinds of input state, if any, to which this axis contributes.

*label*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for the axis.

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
