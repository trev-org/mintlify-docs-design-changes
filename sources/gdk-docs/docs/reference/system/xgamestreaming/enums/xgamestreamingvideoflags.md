---
author: gozhou
title: "XGameStreamingVideoFlags"
description: "Specifies the types of video related features supported."
kindex: XGameStreamingVideoFlags
ms.author: gozhou
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
permissioned-type: public
ms.date: 11/07/2023
---

# XGameStreamingVideoFlags

Specifies the types of video related features supported.

<a id="syntaxSection"></a>

## Syntax

```cpp
enum class XGameStreamingVideoFlags : uint32_t
{
    None = 0x0,
    SupportsCustomAspectRatio = 0x1,
    SupportsPresentScaling = 0x2
}
```

<a id="constantsSection"></a>

## Constants

| Constant | Description |
| --- | --- |
| None | No supported features. |
| SupportsCustomAspectRatio | The client supports custom aspect ratios. If false then the client only supports standard 16:9 resolutions. |
| SupportsPresentScaling | True if using `D3D12XBOX_PRESENT_PLANE_PARAMETERS.pSrcViewRects` and `D3D12XBOX_PRESENT_PLANE_PARAMETERS.pDestPlacementBase` to scale video parameters is supported by DirectCapture. If this is false, ensure the present resolution matches the resolution passed to XGameStreamingSetResolution. |

<a id="remarksSection"></a>

## Remarks

This enumeration is used to signify which video related features are supported.

<a id="requirementsSection"></a>

## Requirements

**Header:** XGameStreaming.h

**Supported Platforms**: Windows, Xbox One family consoles and Xbox Series consoles

<a id="seealsoSection"></a>

## See also

[XGameStreaming](../xgamestreaming_members.md)  
[XGameStreamingDisplayDetails](../structs/xgamestreamingdisplaydetails.md)  
[XGameStreamingGetDisplayDetails](../functions/xgamestreaminggetdisplaydetails.md)  