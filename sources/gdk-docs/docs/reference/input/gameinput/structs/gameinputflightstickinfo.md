---
author: AlexYatskov
description: Describes the properties of a flight stick.
edited: 03/06/2025
kindex: GameInputFlightStickInfo
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputFlightStickInfo
---

# GameInputFlightStickInfo

Describes the properties of a flight stick.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputFlightStickInfo
{
    GameInputLabel menuButtonLabel;
    GameInputLabel viewButtonLabel;
    GameInputLabel firePrimaryButtonLabel;
    GameInputLabel fireSecondaryButtonLabel;
    GameInputLabel hatSwitchUpLabel;
    GameInputLabel hatSwitchDownLabel;
    GameInputLabel hatSwitchLeftLabel;
    GameInputLabel hatSwitchRightLabel;
    GameInputLabel aButtonLabel;
    GameInputLabel bButtonLabel;
    GameInputLabel xButtonLabel;
    GameInputLabel yButtonLabel;
    uint32_t       extraButtonCount;
    uint32_t       extraAxisCount;
};
```

<a id="membersSection"></a>

### Members

*menuButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for Menu button.

*viewButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for View button.

*firePrimaryButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for primary fire button.

*fireSecondaryButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for secondary fire button.

*hatSwitchUpLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for up input from hat switch.

*hatSwitchDownLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for down input from hat switch.

*hatSwitchLeftLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for left input from hat switch.

*hatSwitchRightLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for right input from hat switch.

*aButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for **A** button.

*bButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for **B** button.

*xButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for **X** button.

*yButtonLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for **Y** button.


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
| **v3** | Removed `hatSwitchKind`. **Added** 4 hat direction button labels (`hatSwitchUpLabel`, `hatSwitchDownLabel`, `hatSwitchLeftLabel`, `hatSwitchRightLabel`), 4 face button labels (`aButtonLabel`, `bButtonLabel`, `xButtonLabel`, `yButtonLabel`), `extraButtonCount`, `extraAxisCount`. |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0, v1, v2

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