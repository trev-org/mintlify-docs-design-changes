---
title: "Best Practices for Game Streaming Custom Resolution"
description: "Guidance on the best ways to use the game streaming custom resolution features."
author: morganb
ms.author: morganb
ms.topic: article
kindex: Best Practices for Game Streaming Custom Resolution
edited: 00/00/0000
ms.date: '08/25/2022'
permissioned-type: public
---

# Best Practices for Game Streaming Custom Resolution

Custom resolution allows titles to render in a wide range of resolutions and aspect ratios when streaming. This document outlines Microsoft's recommendations on how best to use it.

## Choosing the Best Resolution

Players stream games to a wide variety of devices, including phones, tablets, PCs, and TVs. These range from low to high resolution displays, and from ultra-widescreen 32:9 monitors to square tablets, and tall portrait devices. Players prefer to have the game fill their whole screen or window, with no letterbox. Where possible, the picture is also sharper if it matches the client's display without scaling. Finally, the ideal resolution for a client can depend on hardware and network conditions.

The [XGameStreamingGetDisplayDetails](../../../reference/system/xgamestreaming/functions/xgamestreaminggetdisplaydetails.md) API takes all of those factors into consideration and returns a "preferred" width and height. In ideal conditions, the "preferred" resolution is the resolution and aspect ratio of the client's screen, but if that resolution isn't possible, it will be the closest resolution and aspect ratio that fits the constraints of the stream and parameters passed to `XGameStreamingGetDisplayDetails`.

If your game can render any resolution, simply calling [XGameStreamingSetResolution](../../../reference/system/xgamestreaming/functions/xgamestreamingsetresolution.md) and setting your render resolution to the preferred resolution will have the best results.

Many games are designed for a fixed set of resolutions. For example, your game may have a PC version that supports several resolutions, even if those are normally narrowed to one on Xbox. In that case, Microsoft recommends using the preferred resolution as a guide to pick the closest resolution your game supports. One good way to do that is to find the closest match to the preferred aspect ratio so that the game fills as much of the client's screen as possible. Note that the [XGameStreamingDisplayDetails](../../../reference/system/xgamestreaming/structs/xgamestreamingdisplaydetails.md) structure includes the limits for resolutions you can set. It also includes flags to tell you whether the current stream supports nonstandard resolutions and present scaling.

If automatically choosing resolution is not feasible, but the PC version of your game includes a resolution picker, you can also allow players to choose resolutions as long as those resolutions fit within the constraints of the `XGameStreamingDisplayDetails`.

## Listen for Updates

During a stream, the best resolution can change for several reasons:

1. On cloud servers, games are launched before streaming clients connect, so the preferred resolution is not immediately available.
2. A player with a phone or tablet may rotate their device between portrait and landscape.
3. A player on PC may resize the streaming client window or toggle full-screen.
4. Network conditions may change to require a different stream resolution.

To provide the best streaming experience as changes occur, use [XGameStreamingRegisterConnectionStateChanged](../../../reference/system/xgamestreaming/functions/xgamestreamingregisterconnectionstatechanged.md)  to detect new clients and [XGameStreamingRegisterClientPropertiesChanged](../../../reference/system/xgamestreaming/functions/xgamestreamingregisterclientpropertieschanged.md) (checking for the `XGameStreamingClientProperty::DisplayDetails` property) to detect when the client's preferred resolution changes. When those events occur, change resolution to match the new `XGameStreamingDisplayDetails`.

> [!NOTE]
> At a minimum, it's very important to handle the initial client connection event for players on cloud servers to get a matching resolution.

## Limitations on Change

Changing stream resolution is visible to players as a brief flash (like the way changing game resolution on a PC might look). To minimize disruption, Microsoft recommends only changing resolution in response to the events above.

Aside from player experience, it is not recommended to change stream resolution more than once every 200ms as there may not be time for the video encoder to match game resolution, leading to brief visual stretching. The events above will not fire more than once every 200ms.

## Setting Parameters for XGameStreamingGetDisplayDetails

The `XGameStreamingGetDisplayDetails` API includes parameters for your game's constraints. If these are set correctly, the API will calculate the best resolution that fits within those constraints. The parameters are:

`maxSupportedPixels`: This is the total pixel count your game should not exceed. A good rule of thumb to maintain performance is to multiply the width and height your game would normally render on the current system device type. For example, if your game would normally render 1440p on Xbox Series S, then on that device type, pass maxSupportedPixels=2560*1440=3686400.

`widestSupportedAspectRatio` and `tallestSupportedAspectRatio`: These are your game's aspect ratio limits. Setting these to the widest and tallest aspect ratios you've tested will ensure your game looks good on all devices.

## Touch Input and Custom Resolution

Changing resolution via `XGameStreamingSetResolution` changes the touch input coordinate space to match the new aspect ratio. `GameInputTouchState` includes touch coordinates in a normalized 0-1 range. When changing resolution, that range stays the same, but now represents your new resolution. For example, without custom resolution in a 1920x1080 game, a touch at (0.5, 0.5) represents (960, 540), but calling `XGameStreamingSetResolution` to change to 1600x800 means a touch at (0.5, 0.5) represents (800, 400). Note that the resolution and aspect ratio values in `GameInputTouchSensorInfo` do not update when you change resolution; use the values you passed to `XGameStreamingSetResolution`, not `GameInputTouchSensorInfo` to compute touch locations.

## Safe Area

Many devices have partially obstructed screens, blocked by notches, rounded corners, and overlaid swipe bars. `XGameStreamingDisplayDetails` includes a `safeArea` rectangle that describes the unobstructed rectangle in the center of the screen. To ensure important content is visible, treat this rectangle as the boundaries of the title-safe space. Areas outside of it may be visible and should still contain content, but not important UI elements.

## DirectCapture

The best streaming video experience is when games combine custom resolution and DirectCapture, which lowers streaming latency. For information on how to ensure your game benefits from DirectCapture, see [DirectCapture Overview](game-streaming-directcapture-overview.md).

## See also

[Custom Resolution Overview](game-streaming-custom-resolution-overview.md)

[Testing With Custom Resolution (NDA topic)](game-streaming-testing-custom-resolution.md)

[DirectCapture Overview](game-streaming-directcapture-overview.md)