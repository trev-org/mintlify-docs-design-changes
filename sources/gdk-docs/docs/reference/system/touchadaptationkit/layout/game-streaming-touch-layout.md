---
title: "Layout"
description: "The representation of a full touch layout for a game."
author: M-Stahl
kindex: Touch Adaptation Kit layout, overview
edited: 00/00/0000
ms.date: 12/20/2020
ms.topic: reference
permissioned-type: public
---

# Layout

The representation of a full touch layout for a game.

## Properties

`content` - _object_. A [Content](game-streaming-touch-layout-content.md) object that defines the actual content of the layout.

`styles` - _object_, _optional_. A [Styles](game-streaming-touch-layout-styles.md) object containing a collection of reusable styles which can be referenced throughout the layout for styling purposes.

`definitions` - _object_, _optional_. A section that can be used to contain reusable components and values for touch layouts.

## Requirements

The version of the layout is specified by the `$schema` attribute in the layout json file. This specifies the specific set of controls and capabilities that are available in the layout.

The properties described here are valid for layout versions 4.0 and above.

## See Also

[Touch Adaptation Kit Reference](../../../../features/common/game-streaming/game-streaming-touch-touch-adaptation-kit-overview.md)  
[Getting started with sample layouts](../../../../features/common/game-streaming/building-touch-layouts/samples/game-streaming-touch-getting-started-with-sample-layouts.md)
