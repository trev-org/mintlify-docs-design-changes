---
author: TBD
title: "XAppCaptureVideoCaptureSettings"
description: "GameDVR video capture settings."
kindex: XAppCaptureVideoCaptureSettings
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XAppCaptureVideoCaptureSettings  

GameDVR video capture settings, obtained from calling [XAppCaptureGetVideoCaptureSettings](../functions/xappcapturegetvideocapturesettings.md).  

## Syntax  

```cpp
struct XAppCaptureVideoCaptureSettings {
  uint32_t width;
  uint32_t height;
  uint64_t maxRecordTimespanDurationInMs;
  XAppCaptureVideoEncoding encoding;
  XAppCaptureVideoColorFormat colorFormat;
  bool isCaptureByGamesAllowed;
}
```

## Members  

*width*  
Type: uint32_t  

The width of recordings.  

*height*  
Type: uint32_t  

The height of recordings.  

*maxRecordTimespanDurationInMs*  
Type: uint64_t  

The maximum recording duration in milliseconds.  

*encoding*  
Type: XAppCaptureVideoEncoding  

The encoding of recordings.  

*colorFormat*  
Type: XAppCaptureVideoColorFormat  

The color format of recordings.  

*isCaptureByGamesAllowed*  
Type: bool  

Indicates whether games are allowed to capture recordings.    

## Requirements  

**Header:** XAppCapture.h  

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

## See also  

[XAppCapture members](../xappcapture_members.md)  