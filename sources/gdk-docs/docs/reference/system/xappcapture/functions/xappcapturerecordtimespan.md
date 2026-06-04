---
author: avchikar97
title: "XAppCaptureRecordTimespan"
description: "Makes a GameDVR recording."
kindex: XAppCaptureRecordTimespan
ms.author: achikarmane
ms.topic: reference
edited: 11/14/2025
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XAppCaptureRecordTimespan  

Makes a GameDVR recording. There is no UI to indicate that such a recording is being made. The user does not have access to the recording. At most 2 such recordings can be made at any given time. Once 2 recordings are made, [XAppCaptureCloseLocalStream](xappcapturecloselocalstream.md) will need to be called to close & delete a recording before another recording can be made. This can be used to capture past or future activity.

## Syntax  

```cpp
HRESULT XAppCaptureRecordTimespan(
  const SYSTEMTIME * startTimestamp,
  uint64_t durationInMilliseconds,
  XAppCaptureLocalResult * result
)
```

### Parameters  

*startTimestamp* \_In\_opt\_  
Type: const SYSTEMTIME *  

The timestamp to start recording from. This parameter can be null, in which case the system will automatically calculate the start time as *durationInMilliseconds* in the past and the recording will contain past activities.

*durationInMilliseconds* \_In\_  
Type: uint64_t  

Length of recording in milliseconds.  

*result* \_Out\_  
Type: XAppCaptureLocalResult *  

On function completion, contains the capture results. See [XAppCaptureReadLocalStream](xappcapturereadlocalstream.md) for how the resulting recording can be read.

### Return value

Type: HRESULT
  
Function result.  

The function will return E_ACCESSDENIED if the user's GameDVR setting forbids games from making captures.

## Remarks

There are two ways to pass in the *startTimestamp* parameter to record past activity.

In the first, null is passed. The system will automatically calculate the timestamp and record past activities that are *durationInMilliseconds* long from now.

> [!NOTE]
> Older clips will be deleted when allotted space is filled to make room for new clips. Use [PLS](../../xpersistentlocalstorage/xpersistentlocalstorage_members.md) (Persistent Local Storage), connected storage (e.g. [XGameSave](../../xgamesave/xgamesave_members.md) or [XGameSaveFiles](../../xgamesavefiles/xgamesavefiles_members.md)), or a similar storage system in order to retain clips for a set period of time.

```cpp
XAppCaptureLocalResult appCaptureLocalResult = { 0 };
uint64_t durationInMs = 5000; /* 5 seconds, for example */

if (SUCCEEDED(XAppCaptureRecordTimespan(nullptr, durationInMs, &appCaptureLocalResult))) // record the past 5000ms (startTimestamp is calculated automatically)
{
    appLog.AddLog("StartTimestamp: %llu, Duration (ms): %llu, File Size (bytes): %llu, Width: %d, Height: %d, Encoding: %d, Color Format: %d\n", appCaptureLocalResult.clipStartTimestamp, appCaptureLocalResult.durationInMilliseconds, appCaptureLocalResult.fileSizeInBytes,
        appCaptureLocalResult.width, appCaptureLocalResult.height, appCaptureLocalResult.encoding, appCaptureLocalResult.colorFormat);
}
```

In the second, you must calculate your desired start timestamp by converting SYSTEMTIME or FILETIME to ULARGE_INTEGER, doing the required arithmetic, then converting ULARGE_INTEGER back to SYSTEMTIME.

```cpp
void SubtractMsDurationFromFileTimeToULarge(_In_ FILETIME* pFileTime, _In_ uint64_t durationInMs, _Out_ ULARGE_INTEGER* pUlResultingTime)
{
    ULARGE_INTEGER fileTimeAsUlarge;

    fileTimeAsUlarge.LowPart = pFileTime->dwLowDateTime;
    fileTimeAsUlarge.HighPart = pFileTime->dwHighDateTime;

    // Convert ms to 100 ns intervals, the convention used by FILETIME
    pUlResultingTime->QuadPart = fileTimeAsUlarge.QuadPart - (durationInMs * 10000LL);
}

void ULargeToSystemTime(_In_ ULARGE_INTEGER ulInputTime, _Out_ SYSTEMTIME* pOutputTime)
{
    FILETIME inputAsFiletime;

    inputAsFiletime.dwLowDateTime = ulInputTime.LowPart;
    inputAsFiletime.dwHighDateTime = ulInputTime.HighPart;

    FileTimeToSystemTime(&inputAsFiletime, pOutputTime);
}

void YourFunction()
{
    XAppCaptureLocalResult appCaptureLocalResult = { 0 }; 
    uint64_t durationInMs = 8000; /* 8 seconds, for example */
    FILETIME now;
    ULARGE_INTEGER calculatedStartTimestamp;
    SYSTEMTIME startTimestampAsSystemTime;
    XAppCaptureVideoCaptureSettings captureSettings = { 0 };

    GetSystemTimeAsFileTime(&now);
    SubtractMsDurationFromFileTimeToULarge(&now, durationInMs, &calculatedStartTimestamp);
    ULargeToSystemTime(calculatedStartTimestamp, &startTimestampAsSystemTime);
    
    if (SUCCEEDED(XAppCaptureGetVideoCaptureSettings(&captureSettings)) && captureSettings.isCaptureByGamesAllowed && (captureSettings.maxRecordTimespanDurationInMs >= durationInMs)){
        if (SUCCEEDED(XAppCaptureRecordTimespan(&startTimestampAsSystemTime, durationInMs, &appCaptureLocalResult))) // record 8000ms starting from 8000ms before now (calculated manually)
        {
            appLog.AddLog("StartTimestamp: %llu, Duration (ms): %llu, File Size (bytes): %llu, Width: %d, Height: %d, Encoding: %d, Color Format: %d\n", appCaptureLocalResult.clipStartTimestamp, appCaptureLocalResult.durationInMilliseconds, appCaptureLocalResult.fileSizeInBytes,
                appCaptureLocalResult.width, appCaptureLocalResult.height, appCaptureLocalResult.encoding, appCaptureLocalResult.colorFormat);
        }
    }
}
```

XAppCaptureRecordTimespan can also be used to record the next *durationInMilliseconds* milliseconds of activity by specifying *startTimestamp* as the current system time.

```cpp
XAppCaptureLocalResult appCaptureLocalResult = { 0 }; 
uint64_t durationInMs = 10000; /* 10 seconds, for example */
SYSTEMTIME nowStartTimestamp;
XAppCaptureVideoCaptureSettings captureSettings = { 0 };

GetSystemTime(&nowStartTimestamp);

if (SUCCEEDED(XAppCaptureGetVideoCaptureSettings(&captureSettings)) && captureSettings.isCaptureByGamesAllowed){
    if (SUCCEEDED(XAppCaptureRecordTimespan(&nowStartTimestamp, durationInMs, &appCaptureLocalResult))) // record the next 10 seconds starting now
    {
        appLog.AddLog("StartTimestamp: %llu, Duration (ms): %llu, File Size (bytes): %llu, Width: %d, Height: %d, Encoding: %d, Color Format: %d\n", appCaptureLocalResult.clipStartTimestamp, appCaptureLocalResult.durationInMilliseconds, appCaptureLocalResult.fileSizeInBytes,
            appCaptureLocalResult.width, appCaptureLocalResult.height, appCaptureLocalResult.encoding, appCaptureLocalResult.colorFormat);
    }
}
```

See [XAppCaptureLocalResult](../structs/xappcapturelocalresult.md) and [XAppCaptureReadLocalStream](xappcapturereadlocalstream.md)

## Requirements  

**Header:** XAppCapture.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  

## See also  

[XAppCapture members](../xappcapture_members.md)  
