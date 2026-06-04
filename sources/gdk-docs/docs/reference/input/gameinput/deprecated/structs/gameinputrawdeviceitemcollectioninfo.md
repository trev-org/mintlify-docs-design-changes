---
description: Describes a collection of raw device report items (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputRawDeviceItemCollectionInfo (Deprecated)
---

# GameInputRawDeviceItemCollectionInfo

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v1 and is not available in the current API.

Describes a HID collection that groups related raw device report items.

## Syntax

```cpp
typedef struct GameInputRawDeviceItemCollectionInfo {
    GameInputRawDeviceItemCollectionKind kind;
    uint32_t childCount;
    uint32_t siblingCount;
    uint32_t usageCount;
    const GameInputUsage* usages;
    const GameInputRawDeviceItemCollectionInfo* parent;
    const GameInputRawDeviceItemCollectionInfo* firstSibling;
    const GameInputRawDeviceItemCollectionInfo* previousSibling;
    const GameInputRawDeviceItemCollectionInfo* nextSibling;
    const GameInputRawDeviceItemCollectionInfo* lastSibling;
    const GameInputRawDeviceItemCollectionInfo* firstChild;
    const GameInputRawDeviceItemCollectionInfo* lastChild;
} GameInputRawDeviceItemCollectionInfo;
```

## Members

**kind**\
Type: [GameInputRawDeviceItemCollectionKind](../enums/gameinputrawdeviceitemcollectionkind.md)

The type of HID collection.

**childCount**\
Type: uint32_t

Number of child collections.

**siblingCount**\
Type: uint32_t

Number of sibling collections at the same level.

**usageCount**\
Type: uint32_t

Number of HID usages associated with this collection.

**usages**\
Type: const GameInputUsage*

Pointer to an array of `usageCount` HID usages.

**parent, firstSibling, previousSibling, nextSibling, lastSibling, firstChild, lastChild**\
Type: const GameInputRawDeviceItemCollectionInfo*

Navigation pointers forming the collection tree.

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputRawDeviceItemCollectionKind](../enums/gameinputrawdeviceitemcollectionkind.md)
[GameInputRawDeviceReportItemInfo](gameinputrawdevicereportiteminfo.md)
