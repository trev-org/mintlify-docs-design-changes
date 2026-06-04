---
author: AlexYatskov
description: "Describes the properties of a flight stick (v1)."
edited: "03/06/2025"
kindex: "GameInputFlightStickInfo (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputFlightStickInfo (v1)"
---

# GameInputFlightStickInfo (v1)

Describes the properties of a flight stick.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputFlightStickInfo
{
    GameInputLabel      menuButtonLabel;
    GameInputLabel      viewButtonLabel;
    GameInputLabel      firePrimaryButtonLabel;
    GameInputLabel      fireSecondaryButtonLabel;
    GameInputSwitchKind hatSwitchKind;
};
```

<a id="membersSection"></a>

### Members

*menuButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for Menu button.

*viewButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for View button.

*firePrimaryButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for primary fire button.

*fireSecondaryButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for secondary fire button.

*hatSwitchKind*
Type: [GameInputSwitchKind](../enums/gameinputswitchkind-v1.md)

Type of hat switch.

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
