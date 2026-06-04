---
author: AlexYatskov
description: "Describes the labels of navigation buttons in the UI (v1)."
edited: "03/06/2025"
kindex: "GameInputUiNavigationInfo (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputUiNavigationInfo (v1)"
---

# GameInputUiNavigationInfo (v1)

Describes the labels of navigation buttons in the UI.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputUiNavigationInfo
{
    GameInputLabel menuButtonLabel;
    GameInputLabel viewButtonLabel;
    GameInputLabel acceptButtonLabel;
    GameInputLabel cancelButtonLabel;
    GameInputLabel upButtonLabel;
    GameInputLabel downButtonLabel;
    GameInputLabel leftButtonLabel;
    GameInputLabel rightButtonLabel;
    GameInputLabel contextButton1Label;
    GameInputLabel contextButton2Label;
    GameInputLabel contextButton3Label;
    GameInputLabel contextButton4Label;
    GameInputLabel pageUpButtonLabel;
    GameInputLabel pageDownButtonLabel;
    GameInputLabel pageLeftButtonLabel;
    GameInputLabel pageRightButtonLabel;
    GameInputLabel scrollUpButtonLabel;
    GameInputLabel scrollDownButtonLabel;
    GameInputLabel scrollLeftButtonLabel;
    GameInputLabel scrollRightButtonLabel;
    GameInputLabel guideButtonLabel;
};
```

<a id="membersSection"></a>

### Members

*menuButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Menu button.

*viewButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for View button.

*acceptButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Accept button.

*cancelButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Cancel button.

*upButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Up button.

*downButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Down button.

*leftButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Left button.

*rightButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Right button.

*contextButton1Label*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for context button 1.

*contextButton2Label*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for context button 2.

*contextButton3Label*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for context button 3.

*contextButton4Label*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for context button 4.

*pageUpButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Page Up button.

*pageDownButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Page Down button.

*pageLeftButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Page Left button.

*pageRightButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Page Right button.

*scrollUpButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Scroll Up button.

*scrollDownButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Scroll Down button.

*scrollLeftButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Scroll Left button.

*scrollRightButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Scroll Right button.

*guideButtonLabel*
Type: [GameInputLabel](../enums/gameinputlabel-v1.md)

Label for Guide button.

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

[Input API Overview](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
