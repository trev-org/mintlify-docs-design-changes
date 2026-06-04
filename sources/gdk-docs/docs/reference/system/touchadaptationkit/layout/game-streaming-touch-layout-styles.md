---
title: "Styles"
description: "Reusable styles of the touch layout."
author: bkellam
kindex: Touch Adaptation Kit layout, styles
edited: 00/00/0000
ms.author: bkellam
ms.date: 2/7/2023
ms.topic: reference
permissioned-type: public
---

# Styles

A collection of reusable styles which can be referenced throughout the layout for styling purposes. Note that a `styles` property may also be defined within a bundle's [context file](../../../../features/common/game-streaming/game-streaming-touch-touch-adaptation-bundle.md#context). If an equivalent `styles` property is defined in the context file, the contents of each will be merged. If a duplicate definition is found, the definition in the layout is preferred, overwriting the definition in the context file.

## Properties

`colors` - _object_, _optional_. Defines a collection of [color palettes](game-streaming-touch-color-palette.md) with colors that can be reused throughout the layout.

## See Also

[Touch Adaptation Kit Reference](../../../../features/common/game-streaming/game-streaming-touch-touch-adaptation-kit-overview.md)  
[Getting started with sample layouts](../../../../features/common/game-streaming/building-touch-layouts/samples/game-streaming-touch-getting-started-with-sample-layouts.md)