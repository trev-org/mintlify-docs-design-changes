---
author: AlexYatskov
description: "Describes the properties of a gamepad (v1)."
edited: "03/06/2025"
kindex: "GameInputGamepadInfo (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputGamepadInfo (v1)"
---

# GameInputGamepadInfo (v1)

Describes the properties of a gamepad.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputGamepadInfo
{
    GameInputLabel menuButtonLabel;
    GameInputLabel viewButtonLabel;
    GameInputLabel aButtonLabel;
    GameInputLabel bButtonLabel;
    GameInputLabel xButtonLabel;
    GameInputLabel yButtonLabel;
    GameInputLabel dpadUpLabel;
    GameInputLabel dpadDownLabel;
    GameInputLabel dpadLeftLabel;
    GameInputLabel dpadRightLabel;
    GameInputLabel leftShoulderButtonLabel;
    GameInputLabel rightShoulderButtonLabel;
    GameInputLabel leftThumbstickButtonLabel;
    GameInputLabel rightThumbstickButtonLabel;
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

*aButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for **A** button.

*bButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for **B** button.

*xButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for **X** button.

*yButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for **Y** button.

*dpadUpLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for D-pad up.

*dpadDownLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for D-pad down.

*dpadLeftLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for D-pad left.

*dpadRightLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for D-Pad right.

*leftShoulderButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for left shoulder button.

*rightShoulderButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for right shoulder button.

*leftThumbstickButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for left thumbstick.

*rightThumbstickButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Physical label for right thumbstick.

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
