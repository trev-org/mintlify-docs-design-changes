---
description: Describes an axis on a controller device (removed in v3).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputControllerAxisInfo (Deprecated)
---

# GameInputControllerAxisInfo

> [!WARNING]
> **Deprecated.** This structure was removed in GameInput v3 and is not available in the current API. This information is now provided within [GameInputControllerInfo](../../structs/gameinputcontrollerinfo.md).

Describes an individual axis on a generic controller device.

## Syntax

```cpp
typedef struct GameInputControllerAxisInfo {
    GameInputLabel label;
    GameInputLocation location;
    uint32_t locationId;
    int64_t lowerLimit;
    int64_t upperLimit;
    uint64_t deadZone;
    uint64_t resolutionX;
    uint64_t resolutionY;
    bool isAbsolute;
    bool isLinear;
    bool hasDeadZone;
    bool noReturn;
} GameInputControllerAxisInfo;
```

## Members

**label**\
Type: [GameInputLabel](../../enums/gameinputlabel.md)

A label identifying the axis's function.

**location**\
Type: [GameInputLocation](../enums/gameinputlocation.md)

The physical location of the axis on the device.

**locationId**\
Type: uint32_t

An identifier distinguishing axes at the same location.

**lowerLimit**\
Type: int64_t

The minimum physical value of the axis.

**upperLimit**\
Type: int64_t

The maximum physical value of the axis.

**deadZone**\
Type: uint64_t

The size of the dead zone around the center position.

**resolutionX**\
Type: uint64_t

Horizontal resolution of the axis.

**resolutionY**\
Type: uint64_t

Vertical resolution of the axis.

**isAbsolute**\
Type: bool

Whether the axis reports absolute (true) or relative (false) values.

**isLinear**\
Type: bool

Whether the axis has a linear response.

**hasDeadZone**\
Type: bool

Whether the axis has a mechanical dead zone.

**noReturn**\
Type: bool

Whether the axis does not return to center when released.

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
