---
author: avchikar97
title: "XAppCaptureCancelUserRecord"
description: "Stops and deletes an ongoing GameDVR user recording."
kindex: XAppCaptureCancelUserRecord
ms.author: achikarmane
ms.topic: reference
edited: 06/02/2025
quality: good
applies-to: pc-gdk
ms.date: '06/02/2025'
permissioned-type: public
---

# XAppCaptureCancelUserRecord

Stop an ongoing user recording started via [XAppCaptureStartUserRecord](xappcapturestartuserrecord.md) and specified by the inputted ID. Users will not receive a toast to indicate a recording has been stopped and the recording will not be saved to disk. Windows support for this API will be added in a future release.

## Syntax

```cpp
HRESULT XAppCaptureCancelUserRecord(
    const char* localId
)
```

### Parameters

*localId* \_In\_  
Type: const char*

Handle representing the user requesting the recording.

### Return value

Type: HRESULT

Function result. See [XAppCapture Error Codes](../xappcapture_errors.md) for non-`S_OK` return values.

## Remarks

Assumes localIdOfUserRecording holds a local ID returned from [XAppCaptureStartUserRecord](xappcapturestartuserrecord.md).

```cpp

if (FAILED_LOG(XAppCaptureCancelUserRecord(localIdOfUserRecording)))
{
    return;
}

appLog.AddLog("Recording cancelled: localId = %s\n", localIdOfUserRecording);

```

## Requirements

**Header:** XAppCapture.h

**Library:** xgameruntime.lib

**Supported platforms:** Xbox One family consoles and Xbox Series consoles

## See also

[XAppCapture members](../xappcapture_members.md)  
