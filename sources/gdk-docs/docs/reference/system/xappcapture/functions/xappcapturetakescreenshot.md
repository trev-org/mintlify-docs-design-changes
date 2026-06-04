---
author: avchikar97
title: "XAppCaptureTakeScreenshot"
description: "Takes a screenshot."
kindex: XAppCaptureTakeScreenshot
ms.author: ddobyns
ms.topic: reference
edited: 03/26/2025
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XAppCaptureTakeScreenshot  

Takes a screenshot.  

## Syntax  
  
```cpp
HRESULT XAppCaptureTakeScreenshot(  
         XUserHandle requestingUser,  
         XAppCaptureTakeScreenshotResult* result  
)  
```  
  
### Parameters  
  
*requestingUser* &nbsp;&nbsp;\_In\_  
Type: XUserHandle  

  
Handle representing the user requesting the screenshot.  


*result* &nbsp;&nbsp;\_Out\_  
Type: [XAppCaptureTakeScreenshotResult*](../structs/xappcapturetakescreenshotresult.md)  

  
Results of the screenshot returned.  


  
### Return value
Type: HRESULT
  
Function result.  
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
> [!NOTE]
> This function isn't supported on Xbox Game Streaming. See the Requirements section below to see which platforms support it.  
> [!NOTE]
> Older screenshots will be deleted when allotted space is filled to make room for new screenshots. Use [PLS](../../xpersistentlocalstorage/xpersistentlocalstorage_members.md) (Persistent Local Storage), connected storage (e.g. [XGameSave](../../xgamesave/xgamesave_members.md) or [XGameSaveFiles](../../xgamesavefiles/xgamesavefiles_members.md)), or a similar storage system in order to retain screenshots for a set period of time.

  
**XAppCaptureTakeScreenshot** takes a screenshot as if the user triggered it. This will show a toast and save the game screenshot.
If the game is running in SDR, a single file is generated. If the game is running in HDR, two files are generated, one in HDR and one in SDR format.
The screenshot(s) may be uploaded automatically to Xbox Live depending on the user preference. Once the screenshot was taken successfully, the resulting file can be read by opening the screenshot stream with [XAppCaptureOpenScreenShotStream](xappcaptureopenscreenshotstream.md) and reading the screenshot with [XAppCaptureReadScreenshotStream](xappcapturereadscreenshotstream.md). Both of these function will require that you use the local Id returned in the [XAppCaptureTakeScreenshotResult](../structs/xappcapturetakescreenshotresult.md) returned from this function.
 
```cpp
XAppCaptureTakeScreenshotResult takeScreenshotResult = {0};
XUserHandle user = nullptr;
/* See XUserAddAsync, XUserAddResult on how to initialize XUserHandle */
bool hasHDR = false;

LOG_IF_FAILED(XAppCaptureTakeScreenshot(user, &takeScreenshotResult));

hasHDR = static_cast<bool>(takeScreenshotResult.availableScreenshotFormats & XAppCaptureScreenshotFormatFlag::HDR);

appLog.AddLog("LocalId %s (%s)\n", takeScreenshotResult.localId, hasHDR ? "SDR & HDR" : "SDR only");
```

## Requirements  
  
**Header:** XAppCapture.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[GameDVR Overview](../../../../features/console/game-dvr/gamedvr-broadcast.md)  
[XAppCapture Members](../xappcapture_members.md)  
[XAppCaptureOpenScreenShotStream](xappcaptureopenscreenshotstream.md)  
[XAppCaptureReadScreenShotStream](xappcapturereadscreenshotstream.md)  
[XAppCaptureCloseScreenshotStream](xappcaptureclosescreenshotstream.md)  
[XAppCaptureTakeScreenshotResult](../structs/xappcapturetakescreenshotresult.md)  