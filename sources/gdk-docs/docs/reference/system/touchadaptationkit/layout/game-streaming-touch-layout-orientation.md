---
title: "Orientation"
description: "The orientation of the touch layout."
author: M-Stahl
kindex: Touch Adaptation Kit layout, orientation
edited: 00/00/0000
ms.date: 12/20/2020
ms.topic: reference
permissioned-type: public
---

# Orientation (DEPRECATED)

The orientation that the touch layout will be displayed. This feature has been deprecated. All endpoints will ignore this value.

> [!WARNING]
> Orientation is deprecated and should not be used in any layouts. All endpoints will ignore this value.

## Constants

| Constant            | Description                                                                                                                                                                |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **landscape**       | Render in landscape mode with the top-left of the layout equating to the top-left of the video stream.                                                                     |
| **portrait**        | Render in portrait mode with the top-left of the layout equating to the bottom-left of the video stream (as if the video stream was rotated 90 degrees counter clockwise). |
| **landscape-left**  | Render in landscape mode with the device top being on the left side.                                                                                                       |
| **landscape-right** | Render in landscape mode with the device top being on the right side.                                                                                                      |
| **portrait-up**     | Render in portrait mode with the device top being on the top side.                                                                                                         |

## Remarks

> [!WARNING]
> The streaming client will always display the video stream in `landscape` orientation in relation to the Xbox video output.

Utilizing an orientation that implies a specific way that the device is being held by the player is likely to have unexpected results for some players. It is recommended to utilize only `landscape` or `portrait` orientations.

## See Also

[Touch Adaptation Kit Reference](../../../../features/common/game-streaming/game-streaming-touch-touch-adaptation-kit-overview.md)  
[Layout](game-streaming-touch-layout.md)
