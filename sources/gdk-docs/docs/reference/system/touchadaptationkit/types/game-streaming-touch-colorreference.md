---
title: "ColorReference"
description: "Reference to a color palette color"
author: bkellam
kindex: Touch Adaptation Kit types, ColorReference
edited: 00/00/0000
ms.author: bkellam
ms.date: 2/7/2023
ms.topic: reference
permissioned-type: public
---

# ColorReference

String containing a reference to a color defined within a [color palette](../layout/game-streaming-touch-color-palette.md).


## Sample

```JSON
colors/myFirstColor
colors/mySecondColor
colors/system_contentPrimary
colors/system_contrastPrimary
```

## Remarks

Colors specified as references must be prefixed with `colors/`, followed by the name of the color defined in the [color palette](../layout/game-streaming-touch-color-palette.md) to be referenced.

## See also

[Touch Adaptation Kit Reference](../../../../features/common/game-streaming/game-streaming-touch-touch-adaptation-kit-overview.md)  
[Color object](game-streaming-touch-color.md)