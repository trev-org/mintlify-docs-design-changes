---
description: Describes an individual raw device report item (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputRawDeviceReportItemInfo (Deprecated)
---

# GameInputRawDeviceReportItemInfo

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v1 and is not available in the current API. The current [GameInputRawDeviceReportInfo](../../structs/gameinputrawdevicereportinfo.md) uses a different item descriptor.

Describes an individual data item within a raw HID device report.

## Syntax

```cpp
typedef struct GameInputRawDeviceReportItemInfo {
    uint32_t bitOffset;
    uint32_t bitSize;
    int64_t logicalMin;
    int64_t logicalMax;
    int64_t physicalMin;
    int64_t physicalMax;
    GameInputRawDevicePhysicalUnitKind physicalUnits;
    uint32_t rawPhysicalUnits;
    int32_t rawPhysicalUnitsExponent;
    GameInputRawDeviceReportItemFlags flags;
    uint32_t usageCount;
    const GameInputUsage* usages;
    const GameInputRawDeviceItemCollectionInfo* collection;
    const GameInputLabel* itemLabel;
    const GameInputLabel* collectionLabel;
} GameInputRawDeviceReportItemInfo;
```

## Members

**bitOffset**\
Type: uint32_t

Bit offset of this item within the report.

**bitSize**\
Type: uint32_t

Size of this item in bits.

**logicalMin, logicalMax**\
Type: int64_t

The logical (raw) value range for this item.

**physicalMin, physicalMax**\
Type: int64_t

The physical value range for this item (after applying unit exponent).

**physicalUnits**\
Type: [GameInputRawDevicePhysicalUnitKind](../enums/gameinputrawdevicephysicalunitkind.md)

The physical unit system for this item.

**rawPhysicalUnits**\
Type: uint32_t

The raw HID physical units value.

**rawPhysicalUnitsExponent**\
Type: int32_t

The decimal exponent to apply to raw physical values.

**flags**\
Type: [GameInputRawDeviceReportItemFlags](../enums/gameinputrawdevicereportitemflags.md)

Flags describing item properties.

**usageCount**\
Type: uint32_t

Number of HID usages for this item.

**usages**\
Type: const GameInputUsage*

Pointer to an array of `usageCount` usages.

**collection**\
Type: const [GameInputRawDeviceItemCollectionInfo](gameinputrawdeviceitemcollectioninfo.md)*

The collection this item belongs to.

**itemLabel**\
Type: const GameInputLabel*

An optional label for the item.

**collectionLabel**\
Type: const GameInputLabel*

An optional label for the parent collection.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputRawDeviceItemCollectionInfo](gameinputrawdeviceitemcollectioninfo.md)
[GameInputRawDevicePhysicalUnitKind](../enums/gameinputrawdevicephysicalunitkind.md)
[GameInputRawDeviceReportItemFlags](../enums/gameinputrawdevicereportitemflags.md)
