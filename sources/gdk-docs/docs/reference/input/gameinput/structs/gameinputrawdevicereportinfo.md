---
author: AlexYatskov
description: Describes a report of the raw stream from an input device.
edited: 08/08/2019
kindex: GameInputRawDeviceReportInfo
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputRawDeviceReportInfo
---

# GameInputRawDeviceReportInfo

Describes a report of the raw stream from an input device. These reports are only supported for Game Input Protocol (GIP) devices.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct GameInputRawDeviceReportInfo
{
    GameInputRawDeviceReportKind kind;
    uint32_t id;
    uint32_t size;
};
```

<a id="membersSection"></a>

### Members

*kind*<br>
Type: [GameInputRawDeviceReportKind](../enums/gameinputrawdevicereportkind.md)

The type of this report.

*id*<br>
Type: uint32_t

The ID of this report. For Game Input Protocol (GIP) devices, this represents the message ID.

*size*<br>
Type: uint32_t

The size of this report.

<a id="remarksSection"></a>

## Remarks

This structure is used in the [GameInputDeviceInfo](gameinputdeviceinfo.md) structure.

For more information, see the [GetDeviceInfo](../interfaces/igameinputdevice/methods/igameinputdevice_getdeviceinfo.md) method of [IGameInputDevice](../interfaces/igameinputdevice/igameinputdevice.md).

For intermediate and advanced use cases of the GameInput API, see [Advanced GameInput](../../../../features/common/input/advanced/input-advanced-topics.md) topics.

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
| **v3** | **Re-introduced** (was present in v0, absent in v1 and v2). For v3+ version is simplified: `itemCount` and `items` pointer removed. Only `kind`, `id`, and `size` remain. |
| **v2** | Not present (removed in v1). |
| **v1** | Not present (removed from v0). |
| **v0** | Introduced. |

## Appendix: Previous versions

### v0

```cpp
struct GameInputRawDeviceReportInfo
{
    GameInputRawDeviceReportKind           kind;
    uint32_t                               id;
    uint32_t                               size;
    uint32_t                               itemCount;
    GameInputRawDeviceItemInfo const*      items;
};
```