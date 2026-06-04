---
author: AlexYatskov
description: Describes a specific HID usage.
edited: 03/06/2025
kindex: GameInputUsage
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputUsage
---

# GameInputUsage

Describes a specific HID usage.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputUsage
{
    uint16_t page;
    uint16_t id;
};
```

<a id="membersSection"></a>

### Members

*page*<br>
Type: uint16_t

A page that designates a group of HID usages.

*id*<br>
Type: uint16_t

ID of the specific HID usage within *page*.

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[Human Interface Device (HID) Information](https://www.usb.org/hid)  
[Overview of GameInput](../../../../features/common/input/overviews/input-overview.md)  
[GameInput](../gameinput_members.md)

## Version History

| Version | Changes |
| --- | --- |
| **v0** | Introduced. |