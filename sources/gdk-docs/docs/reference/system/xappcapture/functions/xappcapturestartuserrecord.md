---
author: avchikar97
title: "XAppCaptureStartUserRecord"
description: "Start a GameDVR user recording."
kindex: XAppCaptureStartUserRecord
ms.author: achikarmane
ms.topic: reference
edited: 03/26/2025
quality: good
applies-to: pc-gdk
ms.date: '02/20/2024'
permissioned-type: public
---

# XAppCaptureStartUserRecord

Record as if the user had triggered it. If the player suspends/constrains their game while a recording is ongoing, the recording will be stopped. The recording is saved in the user partition. Capture settings are based on GameDVR settings. Once the concurrent recording limit has been hit, [XAppCaptureStopUserRecord](xappcapturestopuserrecord.md) or [XAppCaptureCancelUserRecord](xappcapturecanceluserrecord.md) will need to be called before another recording can be started. Windows support for this API will be added in a future release.

## Syntax

```cpp
HRESULT XAppCaptureStartUserRecord(
    XUserHandle requestingUser,
    uint32_t localIdBufferLength,
    char* localIdBuffer
)
```

### Parameters

*requestingUser* \_In\_  
Type: XUserHandle

Handle representing the user requesting the recording.

*localIdBufferLength* \_In\_  
Type: uint32_t

The length of the buffer receiving the local recording ID.

*localIdBuffer* \_Out\_  
Type: char*

Buffer containing the local ID specifying the ongoing recording operation.

### Return value

Type: HRESULT

Function result. See [XAppCapture Error Codes](../xappcapture_errors.md) for non-`S_OK` return values.

## Remarks

On successful function completion, localIdOfUserRecording contains the local ID of the recording and must be stored to stop a specific recording with [XAppCaptureStopUserRecord](xappcapturestopuserrecord.md) or [XAppCaptureCancelUserRecord](xappcapturecanceluserrecord.md).

> [!NOTE]
> Older clips will be deleted when allotted space is filled to make room for new clips. Use [PLS](../../xpersistentlocalstorage/xpersistentlocalstorage_members.md) (Persistent Local Storage), connected storage (e.g. [XGameSave](../../xgamesave/xgamesave_members.md) or [XGameSaveFiles](../../xgamesavefiles/xgamesavefiles_members.md)), or a similar storage system in order to retain clips for a set period of time.

```cpp
char localIdOfUserRecording[APPCAPTURE_MAX_LOCALID_LENGTH] = { '\0' };

XAppCaptureVideoCaptureSettings captureSettings = { 0 };
if (FAILED_LOG(XAppCaptureGetVideoCaptureSettings(&captureSettings)))
{
    return;
}

if (captureSettings.isCaptureByGamesAllowed)
{
    auto asyncBlock = std::make_unique<XAsyncBlock>();
    ZeroMemory(asyncBlock.get(), sizeof(*asyncBlock));
    asyncBlock->queue = g_taskQueue;
    asyncBlock->callback = [](XAsyncBlock* ab)
    {
        auto asyncBlock = std::unique_ptr<XAsyncBlock>(ab);

        XUserHandle user = nullptr;
        auto scopeExit = wil::scope_exit([&]()
        {
            if (user != nullptr)
            {
                XUserCloseHandle(user);
            }
        });

        if (FAILED_LOG(XUserAddResult(asyncBlock.get(), &user)))
        {
            return;
        }

        if (FAILED_LOG(XAppCaptureStartUserRecord(user, ARRAYSIZE(localIdOfUserRecording), localIdOfUserRecording)))
        {
            return;
        }
        appLog.AddLog("Recording started: localId = %s\n", localIdOfUserRecording);
    };

    if (SUCCEEDED_LOG(XUserAddAsync(
        XUserAddOptions::AddDefaultUserAllowingUI,
        asyncBlock.get())))
    {
        // Once started, release the pointer
        asyncBlock.release();
    }
}
```

## Requirements

**Header:** XAppCapture.h

**Library:** xgameruntime.lib

**Supported platforms:** Xbox One family consoles and Xbox Series consoles

## See also

[XAppCapture members](../xappcapture_members.md)  
