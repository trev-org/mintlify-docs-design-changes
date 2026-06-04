---
author: TBD
title: "XAppCaptureLocalResult"
description: "Contains the result from calling XAppCaptureRecordTimespan."
kindex: XAppCaptureLocalResult
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XAppCaptureLocalResult  

Contains the result from calling [XAppCaptureRecordTimespan](../functions/xappcapturerecordtimespan.md).  

## Syntax  

```cpp
struct XAppCaptureLocalResult {
  XAppCaptureLocalStreamHandle clipHandle;
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

*clipHandle*  
Type: XAppCaptureLocalStreamHandle  

Handle to the local .mp4 file.  The handle is used in [XAppCaptureReadLocalStream](../functions/xappcapturereadlocalstream.md) and [XAppCaptureCloseLocalStream](../functions/xappcapturecloselocalstream.md).  
Once a recording is made, [XAppCaptureCloseLocalStream](../functions/xappcapturecloselocalstream.md) should always be called on the handle in order to free up system resources.  

*fileSizeInBytes*  
Type: size_t  

Size of the recording in bytes.  

*clipStartTimestamp*  
Type: SYSTEMTIME  

The start time of the recording.  

*durationInMilliseconds*  
Type: uint64_t  

The actual duration of the recording in milliseconds. This may be different from the duration passed in [XAppCaptureRecordTimespan](../functions/xappcapturerecordtimespan.md). For example, the recording does not include any time when the game was not in foreground.

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

[XAppCapture members](../xappcapture_members.md)  