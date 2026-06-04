---
title: "Stroke"
description: "Outline"
author: M-Stahl
kindex: Touch Adaptation Kit types, Stroke
edited: 00/00/0000
ms.topic: reference
ms.date: 12/20/2020
permissioned-type: public
---

# Stroke

The styling attributes for outline of the object being referenced.

## Properties

`type` - _string_. The type of stroke to be drawn. Only available value is "solid"

`color` - _string_. The [hex color](game-streaming-touch-hexcolor.md) or [color reference](game-streaming-touch-colorreference.md) to be used.

`opacity` - _number_. The opacity that should be applied. Defaults to 1.0.

## Sample

```JSON
{
    "type": "solid",
    "color": "#0e7a0d",
    "opacity": 1.0
}
```

## Remarks

The stroke applies to the outline of the object that is being referenced.

## Related Controls

[Directional Pad](../controls/game-streaming-touch-directionalpad.md)  
[Joystick](../controls/game-streaming-touch-joystick.md)  
[Throttle](../controls/game-streaming-touch-throttle.md)

## See also

[Touch Adaptation Kit Reference](../../../../features/common/game-streaming/game-streaming-touch-touch-adaptation-kit-overview.md)
