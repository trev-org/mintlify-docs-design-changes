---
description: Defines flags describing the properties of a raw HID device report item (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputRawDeviceReportItemFlags (Deprecated)
---

# GameInputRawDeviceReportItemFlags

> [!WARNING]
> **Deprecated.** This enumeration was removed in GameInput v1 and is not available in the current API.

Defines bitmask flags describing the properties of an individual raw HID device report item.

## Syntax

```cpp
enum GameInputRawDeviceReportItemFlags : uint32_t
{
    GameInputRawDeviceReportItemFlagNone                = 0x00000000,
    GameInputRawDeviceReportItemFlagConstant            = 0x00000001,
    GameInputRawDeviceReportItemFlagVariable            = 0x00000002,
    GameInputRawDeviceReportItemFlagRelative            = 0x00000004,
    GameInputRawDeviceReportItemFlagWrap                = 0x00000008,
    GameInputRawDeviceReportItemFlagNonLinear           = 0x00000010,
    GameInputRawDeviceReportItemFlagNoPreferredState    = 0x00000020,
    GameInputRawDeviceReportItemFlagHasNullState        = 0x00000040,
    GameInputRawDeviceReportItemFlagVolatile            = 0x00000080,
    GameInputRawDeviceReportItemFlagBufferedBytes       = 0x00000100,
};
```

## Constants

| Constant | Value | Description |
| --- | --- | --- |
| GameInputRawDeviceReportItemFlagNone | 0x00000000 | No flags set. |
| GameInputRawDeviceReportItemFlagConstant | 0x00000001 | The item value is constant (not changeable). |
| GameInputRawDeviceReportItemFlagVariable | 0x00000002 | The item is a variable (not an array). |
| GameInputRawDeviceReportItemFlagRelative | 0x00000004 | The item reports relative (not absolute) changes. |
| GameInputRawDeviceReportItemFlagWrap | 0x00000008 | The item wraps around at the logical limits. |
| GameInputRawDeviceReportItemFlagNonLinear | 0x00000010 | The item has a non-linear response. |
| GameInputRawDeviceReportItemFlagNoPreferredState | 0x00000020 | The item has no preferred (neutral) state. |
| GameInputRawDeviceReportItemFlagHasNullState | 0x00000040 | The item has a null (out-of-range) state. |
| GameInputRawDeviceReportItemFlagVolatile | 0x00000080 | The item is volatile (value may change between reads). |
| GameInputRawDeviceReportItemFlagBufferedBytes | 0x00000100 | The item uses buffered byte transfer. |

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputRawDeviceReportItemInfo](../structs/gameinputrawdevicereportiteminfo.md)
