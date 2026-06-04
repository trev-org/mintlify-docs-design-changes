---
author: AlexYatskov
description: "Describes the properties of a keyboard (v1)."
edited: "03/06/2025"
kindex: "GameInputKeyboardInfo (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputKeyboardInfo (v1)"
---

# GameInputKeyboardInfo (v1)

Describes the properties of a keyboard.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputKeyboardInfo
{
    GameInputKeyboardKind kind;
    uint32_t              layout;
    uint32_t              keyCount;
    uint32_t              functionKeyCount;
    uint32_t              maxSimultaneousKeys;
    uint32_t              platformType;
    uint32_t              platformSubtype;
};
```

<a id="membersSection"></a>

### Members

*kind*
Type: [GameInputKeyboardKind](../enums/gameinputkeyboardkind-v1.md)

Layout of the keyboard by keyboard type.

*layout*
Type: uint32_t

Layout of the keyboard by country or region and language. This parameter contains the Keyboard Layout ID values that are identical to those provided by the [GetKeyboardLayoutName](/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutnamea) function, but expressed as a 32-bit integer instead of a string.

*keyCount*
Type: uint32_t

Number of keys on the keyboard.

*functionKeyCount*
Type: uint32_t

Number of function keys on the keyboard.

*maxSimultaneousKeys*
Type: uint32_t

Maximum number of simultaneous keystrokes that can be registered.

*platformType*
Type: uint32_t

Keyboard platform type.

*platformSubtype*
Type: uint32_t

Keyboard platform subtype.

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
