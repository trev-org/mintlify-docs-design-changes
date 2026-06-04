---
description: Defines the shape of a touch sensor surface (removed in v1).
ms.date: 10/21/2025
ms.topic: reference
permissioned-type: public
title: GameInputTouchShape (Deprecated)
---

# GameInputTouchShape

> [!WARNING]
> **Deprecated.** This enumeration was removed in GameInput v1 and is not available in the current API.

Defines constants describing the geometric shape of a touch sensor surface.

## Syntax

```cpp
enum GameInputTouchShape
{
    GameInputTouchShapeUnknown      = -1,
    GameInputTouchShapeNone         = 0,
    GameInputTouchShape1DLinear     = 1,
    GameInputTouchShape1DArc        = 2,
    GameInputTouchShape1DRadial     = 3,
    GameInputTouchShape2DRectangle  = 4,
    GameInputTouchShape2DArbitrary  = 5,
    GameInputTouchShape3DCylinder   = 6,
    GameInputTouchShape3DSphere     = 7,
    GameInputTouchShape3DArbitrary  = 8,
};
```

## Constants

| Constant | Value | Description |
| --- | --- | --- |
| GameInputTouchShapeUnknown | -1 | Shape is unknown. |
| GameInputTouchShapeNone | 0 | No defined shape. |
| GameInputTouchShape1DLinear | 1 | One-dimensional linear strip. |
| GameInputTouchShape1DArc | 2 | One-dimensional arc. |
| GameInputTouchShape1DRadial | 3 | One-dimensional radial dial. |
| GameInputTouchShape2DRectangle | 4 | Two-dimensional rectangular pad. |
| GameInputTouchShape2DArbitrary | 5 | Two-dimensional arbitrary shape. |
| GameInputTouchShape3DCylinder | 6 | Three-dimensional cylinder. |
| GameInputTouchShape3DSphere | 7 | Three-dimensional sphere. |
| GameInputTouchShape3DArbitrary | 8 | Three-dimensional arbitrary shape. |

## Version History

| Version | Changes |
| --- | --- |
| **v1** | Removed. |
| **v0** | Introduced. |

## See also

[Deprecated GameInput API members](../gameinput_deprecated_members.md)
[GameInputTouchSensorInfo](../structs/gameinputtouchsensorinfo.md)
