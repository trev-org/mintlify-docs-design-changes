---
author: avchikar97
title: "XAppCaptureUserRecordingResult"
description: "Contains the result from calling XAppCaptureStopUserRecord."
kindex: XAppCaptureUserRecordingResult
ms.author: achikarmane
ms.topic: reference
edited: 02/20/2024
quality: good
applies-to: pc-gdk
ms.date: '02/20/2024'
permissioned-type: public
---

# XAppCaptureUserRecordingResult

Contains the result from calling [XAppCaptureStopUserRecord](../functions/xappcapturestopuserrecord.md).

## Syntax

```cpp
struct XAppCaptureUserRecordingResult {
    size_t fileSizeInBytes;
    SYSTEMTIME clipStartTimestamp;
    uint64_t durationInMilliseconds;
    uint32_t width;
    uint32_t height;
    XAppCaptureVideoEncoding encoding;
    XAppCaptureVideoColorFormat colorFormat;
}
```

## Members

*fileSizeInBytes*
Type: size_t

Size of the recording in bytes.

*clipStartTimestamp*
Type: SYSTEMTIME

The start time of the recording.

*durationInMilliseconds*
Type: uint64_t

The actual duration of the recording in milliseconds.

*width*
Type: uint32_t

Width of the recording.

*height*
Type: uint32_t

Height of the recording.

*encoding*
Type: XAppCaptureVideoEncoding

The encoding format of the recording.

*colorFormat*
Type: XAppCaptureVideoColorFormat

The color format of the recording.

## Requirements

**Header:** XAppCapture.h

**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles

## See also

[GameDVR Overview](../../../../features/console/game-dvr/gamedvr-broadcast.md)  
[XAppCapture Members](../xappcapture_members.md)  
[XAppCaptureStartUserRecord](../functions/xappcapturestartuserrecord.md)  
[XAppCaptureStopUserRecord](../functions/xappcapturestopuserrecord.md)  
