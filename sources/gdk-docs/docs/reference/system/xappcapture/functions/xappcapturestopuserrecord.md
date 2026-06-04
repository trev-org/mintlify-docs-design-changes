---
author: avchikar97
title: "XAppCaptureStopUserRecord"
description: "Stops and saves an ongoing GameDVR user recording."
kindex: XAppCaptureStopUserRecord
ms.author: achikarmane
ms.topic: reference
edited: 06/02/2025
quality: good
applies-to: pc-gdk
ms.date: '02/20/2024'
permissioned-type: public
---

# XAppCaptureStopUserRecord

Stop an ongoing user recording started via [XAppCaptureStartUserRecord](xappcapturestartuserrecord.md) and specified by the inputted ID. Users will receive a toast to indicate a recording has been saved and the recording will be accessible by the user. Windows support for this API will be added in a future release.

## Syntax

```cpp
HRESULT XAppCaptureStopUserRecord(
    const char* localId,
    XAppCaptureUserRecordingResult* result
)
```

### Parameters

*localId* \_In\_  
Type: const char*

Handle representing the user requesting the recording.

*result* \_Out\_  
Type: [XAppCaptureUserRecordingResult](../structs/xappcaptureuserrecordingresult.md)*

On successful function completion, contains information for the recorded clip.

### Return value

Type: HRESULT

Function result. See [XAppCapture Error Codes](../xappcapture_errors.md) for non-`S_OK` return values.

## Remarks

Assumes localIdOfUserRecording holds a local ID returned from [XAppCaptureStartUserRecord](xappcapturestartuserrecord.md).

> [!NOTE]
> If this API is not called before the recording hits its maximum time limit, the recording will be stopped and deleted (not saved). Calling this API to stop the recording after the time limit has passed will return an error code.

```cpp
XAppCaptureUserRecordingResult userRecording = { 0 };

if (FAILED_LOG(XAppCaptureStopUserRecord(localIdOfUserRecording, &userRecording)))
{
    return;
}

appLog.AddLog("Recording stopped: Start timestamp: %llu, Duration (ms): %llu, File Size (bytes): %llu, Width: %d, Height: %d, Encoding: %d, Color Format: %d\n",
    userRecording.clipStartTimestamp, userRecording.durationInMilliseconds, userRecording.fileSizeInBytes, userRecording.width, userRecording.height, userRecording.encoding, userRecording.colorFormat);
```

## Requirements

**Header:** XAppCapture.h

**Library:** xgameruntime.lib

**Supported platforms:** Xbox One family consoles and Xbox Series consoles

## See also

[XAppCapture members](../xappcapture_members.md)  
