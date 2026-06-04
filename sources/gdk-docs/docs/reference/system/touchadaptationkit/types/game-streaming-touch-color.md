---
title: "Color"
description: "Reference to a color."
author: M-Stahl
kindex: Touch Adaptation Kit types, Color
edited: 00/00/0000
ms.topic: reference
ms.date: 12/20/2020
permissioned-type: public
---

# Color

Reference to a color.

## Properties

`opacity` - _number_, _optional_. The opacity to be applied to the color.

`type` - _string_. "color"

`value` - _string_. [Hexadecimal representation](game-streaming-touch-hexcolor.md) of RGBA color value or a [color reference](game-streaming-touch-colorreference.md).

## Sample

Example of a using a hexadecimal color:
```JSON
{
    "type": "color",
    "value": "#0e7a0d"
}
```

Example of using a color reference:
```
{
    "type": "color",
    "value": "colors/myColor"
}
```

## Remarks

Colors specified as a hexadecimal value must follow the [`hex-color` CSS specification](https://developer.mozilla.org/en-US/docs/Web/CSS/hex-color).

For example, this specification dictates that all of the following color representations would be equivalent:

- #0099ff
- #0099ffaa
- #09f
- #09fa

Colors specified as references must be prefixed with `colors/`, followed by the name of the color defined in the [color palette](../layout/game-streaming-touch-color-palette.md) to be referenced.

## Related Controls

[Arcade Buttons](../controls/game-streaming-touch-arcadebuttons.md)  
[Button](../controls/game-streaming-touch-button.md)  
[Directional Pad](../controls/game-streaming-touch-directionalpad.md)  
[Joystick](../controls/game-streaming-touch-joystick.md)  
[Throttle](../controls/game-streaming-touch-throttle.md)  
[Touchpad](../controls/game-streaming-touch-touchpad.md)

## See also

[Touch Adaptation Kit Reference](../../../../features/common/game-streaming/game-streaming-touch-touch-adaptation-kit-overview.md)
