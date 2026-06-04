---
author: M-Stahl
title: "XAppCaptureCloseScreenshotStream"
description: "Closes a screenshot stream."
kindex: XAppCaptureCloseScreenshotStream
ms.author: ddobyns
ms.topic: reference
edited: 02/10/2020
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XAppCaptureCloseScreenshotStream  

Closes a screenshot stream.  

## Syntax  
  
```cpp
HRESULT XAppCaptureCloseScreenshotStream(  
         XAppCaptureScreenshotStreamHandle handle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: XAppCaptureScreenshotStreamHandle  

  
Handle of the screenshot stream to close.  


  
### Return value
Type: HRESULT
  
Function result.  
  
## Remarks
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
Use this function to close the screenshot stream opened by [XAppCaptureOpenScreenShotStream](xappcaptureopenscreenshotstream.md). Failure to close an opened screenshot stream will result in a memory leak. The handle required to close the stream is returned from the [XAppCaptureOpenScreenShotStream](xappcaptureopenscreenshotstream.md) that originally opened the stream.
  
## Requirements  
  
**Header:** XAppCapture.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[GameDVR Overview](../../../../features/console/game-dvr/gamedvr-broadcast.md)  
[XAppCapture Members](../xappcapture_members.md)  
[XAppCaptureOpenScreenShotStream](xappcaptureopenscreenshotstream.md)  
[XAppCaptureReadScreenShotStream](xappcapturereadscreenshotstream.md)  
[XAppCaptureTakeScreenshot](xappcapturetakescreenshot.md)  