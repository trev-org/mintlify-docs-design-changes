---
description: Defines the type of a HID item collection (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputRawDeviceItemCollectionKind (Deprecated)
---

# GameInputRawDeviceItemCollectionKind

> [!WARNING]
> **Deprecated.** This enumeration was removed in GameInput v1 and is not available in the current API.

Defines constants identifying the type of a HID usage collection.

## Syntax

```cpp
enum GameInputRawDeviceItemCollectionKind
{
    GameInputRawDeviceItemCollectionKindUnknown         = -1,
    GameInputRawDeviceItemCollectionKindPhysical        = 0,
    GameInputRawDeviceItemCollectionKindApplication     = 1,
    GameInputRawDeviceItemCollectionKindLogical         = 2,
    GameInputRawDeviceItemCollectionKindReport          = 3,
    GameInputRawDeviceItemCollectionKindNamedArray      = 4,
    GameInputRawDeviceItemCollectionKindUsageSwitch     = 5,
    GameInputRawDeviceItemCollectionKindUsageModifier   = 6,
};
```

## Constants

| Constant | Value | Description |
| --- | --- | --- |
| GameInputRawDeviceItemCollectionKindUnknown | -1 | Unknown collection type. |
| GameInputRawDeviceItemCollectionKindPhysical | 0 | Physical collection of inputs in a single geometric plane. |
| GameInputRawDeviceItemCollectionKindApplication | 1 | Top-level application collection. |
| GameInputRawDeviceItemCollectionKindLogical | 2 | Logical grouping that has no physical meaning. |
| GameInputRawDeviceItemCollectionKindReport | 3 | A collection used to structure a report. |
| GameInputRawDeviceItemCollectionKindNamedArray | 4 | Named array collection. |
| GameInputRawDeviceItemCollectionKindUsageSwitch | 5 | A switch that selects a different usage on its children. |
| GameInputRawDeviceItemCollectionKindUsageModifier | 6 | A modifier that changes the meaning of a sibling usage. |

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputRawDeviceItemCollectionInfo](../structs/gameinputrawdeviceitemcollectioninfo.md)
