---
description: Describes a button on a controller device (removed in v3).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputControllerButtonInfo (Deprecated)
---

# GameInputControllerButtonInfo

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v3 and is not available in the current API. This information is now provided within [GameInputControllerInfo](../../structs/gameinputcontrollerinfo.md).

Describes an individual button on a generic controller device.

## Syntax

```cpp
typedef struct GameInputControllerButtonInfo {
    GameInputLabel label;
    GameInputLocation location;
    uint32_t locationId;
} GameInputControllerButtonInfo;
```

## Members

**label**\
Type: [GameInputLabel](../../enums/gameinputlabel.md)

A label identifying the button's function.

**location**\
Type: [GameInputLocation](../enums/gameinputlocation.md)

The physical location of the button on the device.

**locationId**\
Type: uint32_t

An identifier distinguishing buttons at the same location.

## Version History

| Version | Changes |
| --- | --- |
| **v3** | Removed. Fields integrated into [GameInputControllerInfo](../../structs/gameinputcontrollerinfo.md). |
| **v2** | No changes. |
| **v1** | No changes. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputControllerInfo](../../structs/gameinputcontrollerinfo.md)
