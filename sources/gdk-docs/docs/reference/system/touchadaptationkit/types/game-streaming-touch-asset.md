---
title: "Asset"
description: "Reference to a custom image"
author: M-Stahl
kindex: Touch Adaptation Kit types, Asset
edited: 00/00/0000
ms.topic: reference
ms.date: 12/20/2020
permissioned-type: public
---

# Asset

Reference to a custom image that has been included in the touch adaptation package.

## Properties

`type` - _string_. "asset"

`value` - _string_. The name of the image asset that is being referenced.

`opacity` - _number_. The opacity that should be applied to the asset. Defaults to 1.0.

## Sample

```JSON
{
    "type": "asset",
    "value": "someImage",
    "opacity": 1
}
```

## Remarks

All assets are either PNG images or a PNG sprite sheet image paired with a JSON sprite atlas.

Assets must be included in all resolutions (1.0x, 1.5x, 2.0x, 3.0x, 4.0x) and at LEAST in the neutral language. Localized assets are supported as well.

The `value` is the name of the asset that was included without the file extension. Example: For as an asset "someImage.png" the value should be "someImage".

For sprite assets, the `value` field should be of the form `spriteSheetFileName/spriteName`. Example: "icons/fire" would map to the 'fire' sprite within the icons.png and icons.json files.

The expected dimensions of the asset depend on where the asset is being used. For sprite assets, the individual sprite must conform to the expected dimensions where it is used.

Check per control documentation for the specific dimensions for each area of use.

## Related Controls

[Arcade Buttons](../controls/game-streaming-touch-arcadebuttons.md)  
[Button](../controls/game-streaming-touch-button.md)  
[Directional Pad](../controls/game-streaming-touch-directionalpad.md)  
[Joystick](../controls/game-streaming-touch-joystick.md)  
[Throttle](../controls/game-streaming-touch-throttle.md)  
[Touchpad](../controls/game-streaming-touch-touchpad.md)

## See also

[Touch Adaptation Kit Reference](../../../../features/common/game-streaming/game-streaming-touch-touch-adaptation-kit-overview.md)
