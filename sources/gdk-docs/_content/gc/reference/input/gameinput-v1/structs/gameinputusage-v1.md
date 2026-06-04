---
author: AlexYatskov
description: "Describes a specific HID usage (v1)."
edited: "03/06/2025"
kindex: "GameInputUsage (v1)"
ms.author: alyatsko
ms.date: "03/06/2025"
ms.topic: reference
permissioned-type: public
title: "GameInputUsage (v1)"
---

# GameInputUsage (v1)

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

*page*
Type: uint16_t

A page that designates a group of HID usages.

*id*
Type: uint16_t

ID of the specific HID usage within *page*.

<a id="requirementsSection"></a>

## Requirements

**Header:** GameInput.h

**Supported platforms:** Windows

<a id="seealsoSection"></a>

## See also

[Human Interface Device (HID) Information](https://www.usb.org/hid)
[Overview of GameInput](../../../../input/overviews/input-overview.md)
[GameInput](../gameinput_members-v1.md)
