---
author: M-Stahl
title: "Blank control"
description: "Blank control"
kindex: Touch Adaptation Kit controls, blank
edited: 00/00/0000
ms.topic: reference
ms.date: 12/20/2020
permissioned-type: public
---

# Blank

A control used in a [`layer`](../layout/game-streaming-touch-layer.md) to hide the control that was being displayed in this slot.

> [!WARNING]
> Layers and the `blank` control are currently available for use in experimental form and may change behavior based on early adopter feedback.

## Properties

`type` - _"blank"_. Specifies the control type.

## Remarks

The `blank` control can ONLY be used on a [`layer`](../layout/game-streaming-touch-layer.md). It is used to hide the control that was being displayed in the base layout in that slot.

## Samples

```JSON
{
    "type": "blank"
}
```

## Requirements

**Minimum Layout Version:** 1.0+.
