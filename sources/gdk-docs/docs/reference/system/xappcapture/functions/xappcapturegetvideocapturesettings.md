---
author: avchikar97
title: "XAppCaptureGetVideoCaptureSettings"
description: "Queries the device's GameDVR settings that include encoding type, color format, resolution, maximum possible recording length, and whether the current user allows captures by games."
kindex: XAppCaptureGetVideoCaptureSettings
ms.author: achikarmane
ms.topic: reference
edited: 10/22/2024
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XAppCaptureGetVideoCaptureSettings  

Queries the device's GameDVR settings that include encoding type, color format, resolution, maximum possible recording length, and whether the current user allows captures by games.

## Syntax  

```cpp
HRESULT XAppCaptureGetVideoCaptureSettings(
  XAppCaptureVideoCaptureSettings * userCaptureSettings
)
```

### Parameters  

*userCaptureSettings* \_Out\_  
Type: XAppCaptureVideoCaptureSettings *  

On function return contains the device's GameDVR setting for capture resolution.  

### Return value  

Type: HRESULT  
  
Function result.  

## Remarks  

The values returned by **XAppCaptureGetVideoCaptureSettings** can be changed by the user at any moment. Therefore, it is recommended that **XAppCaptureGetVideoCaptureSettings** is called right before calling [XAppCaptureRecordTimespan](xappcapturerecordtimespan.md) in order to ensure the latest values are retrieved.

The [XAppCaptureVideoCaptureSettings](../structs/xappcapturevideocapturesettings.md) struct can be obtained like so.

```cpp
XAppCaptureVideoCaptureSettings captureSettings = { 0 };

if (SUCCEEDED(XAppCaptureGetVideoCaptureSettings(&captureSettings)))
{
    appLog.AddLog("Color Format: %s , encoding: %s, Width: %lu, Height %lu, Max RecordTimespan duration: %llu, Capture Permitted: %d\n",
        (captureSettings.colorFormat == XAppCaptureVideoColorFormat::SDR) ? "SDR" : "HDR",
        (captureSettings.encoding == XAppCaptureVideoEncoding::H264) ? "H264" : "HEVC",
        captureSettings.width,
        captureSettings.height,
        captureSettings.maxRecordTimespanDurationInMs,
        captureSettings.isCaptureByGamesAllowed);
}
```

## Requirements  

**Header:** XAppCapture.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

## See also  

[XAppCapture members](../xappcapture_members.md)  
