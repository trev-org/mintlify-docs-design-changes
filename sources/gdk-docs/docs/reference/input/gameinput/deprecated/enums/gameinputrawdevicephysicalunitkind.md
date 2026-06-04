---
description: Defines the physical unit system for a raw HID device report item (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputRawDevicePhysicalUnitKind (Deprecated)
---

# GameInputRawDevicePhysicalUnitKind

> [!WARNING]
> **Deprecated.** This enumeration was removed in GameInput v1 and is not available in the current API.

Defines the physical unit system used to interpret values in a raw HID device report item.

## Syntax

```cpp
enum GameInputRawDevicePhysicalUnitKind
{
    GameInputRawDevicePhysicalUnitKindUnknown       = -1,
    GameInputRawDevicePhysicalUnitKindNone          = 0,
    GameInputRawDevicePhysicalUnitKindRotation      = 1,
    GameInputRawDevicePhysicalUnitKindLinear        = 2,
    GameInputRawDevicePhysicalUnitKindMiscellaneous = 3,
    GameInputRawDevicePhysicalUnitKindSI            = 4,
    GameInputRawDevicePhysicalUnitKindEnglish       = 5,
};
```

## Constants

| Constant | Value | Description |
| --- | --- | --- |
| GameInputRawDevicePhysicalUnitKindUnknown | -1 | Unknown unit system. |
| GameInputRawDevicePhysicalUnitKindNone | 0 | Dimensionless or no units. |
| GameInputRawDevicePhysicalUnitKindRotation | 1 | Rotational units (HID rotation system). |
| GameInputRawDevicePhysicalUnitKindLinear | 2 | Linear units (HID linear system). |
| GameInputRawDevicePhysicalUnitKindMiscellaneous | 3 | Miscellaneous HID units. |
| GameInputRawDevicePhysicalUnitKindSI | 4 | SI (metric) unit system. |
| GameInputRawDevicePhysicalUnitKindEnglish | 5 | English (imperial) unit system. |

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputRawDeviceReportItemInfo](../structs/gameinputrawdevicereportiteminfo.md)
