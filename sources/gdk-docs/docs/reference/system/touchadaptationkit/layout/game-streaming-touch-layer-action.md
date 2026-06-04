---
author: M-Stahl
title: "Layer action"
description: "An action that a button can use to display a layer."
kindex: Touch Adaptation Kit layout, layer action
edited: 00/00/0000
ms.topic: reference
ms.date: 12/20/2020
permissioned-type: public
---

# Layer Action (Experimental)

An action that a button can use to display a layer.

> [!WARNING]
> Layers are currently available for use in experimental form and may change behavior based on early adopter feedback.

## Properties

`type` - _"layer"_. Specifies the type of the action

`target` - _string_. The name of the [`layer`](game-streaming-touch-layer.md) that should be shown when the action is taken.

## Remarks

The **layer action** is used to allow the player to cause a layer to be displayed.

If the [`button`](../controls/game-streaming-touch-button.md) is a toggle button, the `layer` will be displayed until the `button` is pressed again.

## Sample

#### A toggle button that has a layer action to show the selectAbility layer

```JSON
{
    "type": "button",
    "action": {
        "type": "layer",
        "target": "selectAbility"
    },
    "styles": {
        "default": {
            "faceImage": {
                "type": "icon",
                "value": "add"
            }
        }
    },
    "toggle" : true
}
```

## See Also

[Touch Adaptation Kit Reference](../../../../features/common/game-streaming/game-streaming-touch-touch-adaptation-kit-overview.md)  
[Button](../controls/game-streaming-touch-button.md)  
[Layer](game-streaming-touch-layer.md)
