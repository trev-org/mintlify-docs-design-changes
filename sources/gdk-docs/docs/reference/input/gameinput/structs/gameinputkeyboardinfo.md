---
author: AlexYatskov
description: Describes the properties of a keyboard.
edited: 03/06/2025
kindex: GameInputKeyboardInfo
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputKeyboardInfo
---

# GameInputKeyboardInfo

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

*kind*<br>
Type: [GameInputKeyboardKind](../enums/gameinputkeyboardkind.md)

Layout of the keyboard by keyboard type.

*layout*<br>
Type: uint32_t

Layout of the keyboard by country/region and language. This parameter contains the Keyboard Layout ID values that are identical to those provided by the [GetKeyboardLayoutName](/windows/win32/api/winuser/nf-winuser-getkeyboardlayoutnamea) function, but expressed as a 32-bit integer instead of a string.

*keyCount*<br>
Type: uint32_t

Number of keys on the keyboard.

*functionKeyCount*<br>
Type: uint32_t

Number of function keys on the keyboard.

*maxSimultaneousKeys*<br>
Type: uint32_t

Maximum number of simultaneous keystrokes that can be registered.

*platformType*<br>
Type: uint32_t

Keyboard platform type.

*platformSubtype*<br>
Type: uint32_t

Keyboard platform subtype.

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
| **v1** | **Removed** `nativeLanguage` (GameInputString const\*). |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
struct GameInputKeyboardInfo
{
    GameInputKeyboardKind  kind;
    uint32_t               layout;
    uint32_t               keyCount;
    uint32_t               functionKeyCount;
    uint32_t               maxSimultaneousKeys;
    uint32_t               platformType;
    uint32_t               platformSubtype;
    GameInputString const* nativeLanguage;
};
```