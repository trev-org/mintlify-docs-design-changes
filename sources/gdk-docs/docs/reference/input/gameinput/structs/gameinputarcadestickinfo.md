---
author: AlexYatskov
description: Describes the properties of an arcade stick.
edited: 03/06/2025
kindex: GameInputArcadeStickInfo
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputArcadeStickInfo
---

# GameInputArcadeStickInfo

Describes the properties of an arcade stick.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputArcadeStickInfo
{
    GameInputLabel menuButtonLabel;
    GameInputLabel viewButtonLabel;
    GameInputLabel stickUpLabel;
    GameInputLabel stickDownLabel;
    GameInputLabel stickLeftLabel;
    GameInputLabel stickRightLabel;
    GameInputLabel actionButton1Label;
    GameInputLabel actionButton2Label;
    GameInputLabel actionButton3Label;
    GameInputLabel actionButton4Label;
    GameInputLabel actionButton5Label;
    GameInputLabel actionButton6Label;
    GameInputLabel specialButton1Label;
    GameInputLabel specialButton2Label;
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

*stickUpLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for up input from stick.

*stickDownLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for down input from stick.

*stickLeftLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for left input from stick.

*stickRightLabel*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for right input from stick.

*actionButton1Label*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for action button 1.

*actionButton2Label*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for action button 2.

*actionButton3Label*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for action button 3.

*actionButton4Label*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for action button 4.

*actionButton5Label*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for action button 5.

*actionButton6Label*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for action button 6.

*specialButton1Label*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for special button 1.

*specialButton2Label*<br>
Type: [GameInputLabel](../enums/gameinputlabel.md)

Physical label for special button 2.

*extraButtonCount*<br>
Type: uint32_t

The number of device buttons that are not mapped to arcade stick buttons.

*extraAxisCount*<br>
Type: uint32_t

The number of device axes that are not mapped to arcade stick axes.

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
| **v3** | **Added** `extraButtonCount` (uint32_t) and `extraAxisCount` (uint32_t). |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0, v1, v2

```cpp
struct GameInputArcadeStickInfo
{
    GameInputLabel menuButtonLabel;
    GameInputLabel viewButtonLabel;
    GameInputLabel stickUpLabel;
    GameInputLabel stickDownLabel;
    GameInputLabel stickLeftLabel;
    GameInputLabel stickRightLabel;
    GameInputLabel actionButton1Label;
    GameInputLabel actionButton2Label;
    GameInputLabel actionButton3Label;
    GameInputLabel actionButton4Label;
    GameInputLabel actionButton5Label;
    GameInputLabel actionButton6Label;
    GameInputLabel specialButton1Label;
    GameInputLabel specialButton2Label;
};
```