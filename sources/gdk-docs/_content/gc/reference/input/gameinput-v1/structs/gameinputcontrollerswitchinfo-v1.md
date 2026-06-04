---
author: AlexYatskov
description: "Describes a switch on an input device (v1)."
edited: "03/06/2025"
kindex: "GameInputControllerSwitchInfo (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputControllerSwitchInfo (v1)"
---

# GameInputControllerSwitchInfo (v1)

Describes a switch on an input device.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputControllerSwitchInfo
{
    GameInputKind       mappedInputKinds;
    GameInputLabel      label;
    GameInputSwitchKind kind;
};
```

<a id="membersSection"></a>

### Members

*mappedInputKinds*
Type: [GameInputKind](../enums/gameinputkind-v1.md)

The kinds of input state, if any, to which this switch contributes.

*label*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for the switch.

*kind*
Type: [GameInputSwitchKind](../enums/gameinputswitchkind-v1.md)

The type of the switch.

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
