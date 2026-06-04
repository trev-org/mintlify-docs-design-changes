---
author: gozhou
title: "XGameStreamingDisplayDetails"
description: "Details about the display of the streaming client device."
kindex: XGameStreamingDisplayDetails
ms.author: gozhou
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
permissioned-type: public
ms.date: 11/07/2023
---

# XGameStreamingDisplayDetails

Details about the display of the streaming client device.

<a id="syntaxSection"></a>

## Syntax

```cpp
struct XGameStreamingDisplayDetails
{
    uint32_t preferredWidth;
    uint32_t preferredHeight;
    RECT safeArea;
    uint32_t maxPixels;
    uint32_t maxWidth;
    uint32_t maxHeight;
    XGameStreamingVideoFlags flags;
};
```

<a id="membersSection"></a>

### Members

*preferredWidth*  
Type: uint32_t

The preferred width that the resolution of the game should render at to provide the optimal experience on the client device.

*preferredHeight*  
Type: uint32_t

The preferred height that the resolution of the game should render at to provide the optimal experience on the client device.

*safeArea*  
Type: RECT

The subarea of the preferred resolution where it is safe to render to. Unsafe areas are those where the screen is occluded like with a camera notch or uninteractable like the edges on some devices. The values of the rectangle is in reference to the `preferredWidth` and `preferredHeight`.

*maxPixels*  
Type: uint32_t

The maximum number of pixels that is supported. This is the minimum of the maximum pixels supported by the streaming system and the maxPixels passed to the [XGameStreamingGetDisplayDetails](../functions/xgamestreaminggetdisplaydetails.md) API.

*maxWidth*  
Type: uint32_t

The maximum width that the streaming system supports.

*maxHeight*  
Type: uint32_t

The maximum height that the streaming system supports.

*flags*  
Type: [XGameStreamingVideoFlags](../enums/xgamestreamingvideoflags.md)

The set of video related features supported by the streaming client.

<a id="remarksSection"></a>

## Remarks

This structure is returned by the [XGameStreamingGetDisplayDetails](../functions/xgamestreaminggetdisplaydetails.md) API. As a result some properties like the *preferredWidth*, *preferredHeight*, and *safeArea* may return different results depending on the parameters passed into the mentioned API.

<a id="requirementsSection"></a>

## Requirements

**Header:** XGameStreaming.h

**Supported Platforms**: Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[XGameStreaming](../xgamestreaming_members.md)  
[XGameStreamingVideoFlags](../enums/xgamestreamingvideoflags.md)  
[XGameStreamingGetDisplayDetails](../functions/xgamestreaminggetdisplaydetails.md)  
[Custom Resolution Overview](../../../../features/common/game-streaming/game-streaming-custom-resolution-overview.md)