---
author: M-Stahl
title: "XAppCaptureReadScreenshotStream"
description: "Reads a screenshot stream."
kindex: XAppCaptureReadScreenshotStream
ms.author: ddobyns
ms.topic: reference
edited: 02/10/2020
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XAppCaptureReadScreenshotStream  

Reads a screenshot stream.  

## Syntax  
  
```cpp
HRESULT XAppCaptureReadScreenshotStream(  
         XAppCaptureScreenshotStreamHandle handle,  
         uint64_t startPosition,  
         uint32_t bytesToRead,  
         uint8_t* buffer,  
         uint32_t* bytesWritten  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: XAppCaptureScreenshotStreamHandle  

  
Screenshot stream handle returned by calling [XAppCaptureOpenScreenshotStream](xappcaptureopenscreenshotstream.md).  


*startPosition* &nbsp;&nbsp;\_In\_  
Type: uint64_t  

  
Position in the stream to start reading.  


*bytesToRead* &nbsp;&nbsp;\_In\_  
Type: uint32_t  

  
Number of bytes in the stream to read.  


*buffer* &nbsp;&nbsp;\_Out\_writes\_to\_(bytesToRead,*bytesWritten)  
Type: uint8_t*  

  
Buffer to contain the bytes read by **XAppCaptureReadScreenshotStream**.  


*bytesWritten* &nbsp;&nbsp;\_Out\_  
Type: uint32_t*  

  
Number of bytes actually written to the *buffer*.  


  
### Return value
Type: HRESULT
  
Function result.  

## Remarks
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
Before reading a screenshot you must open a screenshot stream with [XAppCaptureOpenScreenShotStream](xappcaptureopenscreenshotstream.md). This will produce the **XAppCaptureScreenshotStreamHandle** needed for the *handle* parameter. You may then call this function to read the screenshot. The *startPosition* and *bytesToRead* parameters will allow you to read a section of the screenshot, this is useful for reading a large stream a section at a time. You can get the total size of the stream from the *totalBytes* output parameter in [XAppCaptureOpenScreenShotStream](xappcaptureopenscreenshotstream.md). The output parameters *buffer* and *bytesWritten* will help you accurately read the data returned from this function. After reading the screenshot data close the screenshot stream with [XAppCaptureCloseScreenshotStream](xappcaptureclosescreenshotstream.md) in order to avoid a memory leak.

```cpp
const int MAX_DATA = 1024;

XAppCaptureTakeScreenshotResult takeScreenshotResult = {0};
XAppCaptureScreenshotStreamHandle handle = nullptr;
XAppCaptureScreenshotFormatFlag screenshotFormat = XAppCaptureScreenshotFormatFlag::SDR;

BYTE buffer[MAX_DATA];
HANDLE file = INVALID_HANDLE_VALUE;
UINT64 totalBytesRead = 0;
UINT64 totalBytesToRead = 0;
bool hdrAvailable = false;

/* ... obtain takeScreenshotResult with XAppCaptureTakeScreenshot. Refer to corresponding documentation ... */

hdrAvailable = static_cast<bool>(takeScreenshotResult.availableScreenshotFormats & XAppCaptureScreenshotFormatFlag::HDR);

/* Note: It is optional to obtain the HDR screenshot, if HDR is available. You will need to call XAppCaptureOpenScreenshotStream twice to obtain both SDR and HDR screenshots */
if (hdrAvailable)
{
    screenshotFormat = XAppCaptureScreenshotFormatFlag::HDR;
}

if (FAILED_LOG(XAppCaptureOpenScreenshotStream(takeScreenshotResult.localId, screenshotFormat, &handle, &totalBytesToRead)))
{
    return;
}

/* T:\ is one example of a writeable local directory. Be aware that the T:\ drive can be invalidated on suspend or resume, and as such it's better to use Persistant Local Storage */
file = CreateFileA(hdrAvailable ? "T:\\MyScreenshot.jxr" : "T:\\MyScreenshot.png", GENERIC_READ | GENERIC_WRITE, 0, 0, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, 0);
if (file == INVALID_HANDLE_VALUE)
{
    /* You must always call XAppCaptureCloseScreenshotStream on an open XAppCaptureScreenshotStreamHandle to avoid a memory leak */
    FAILED_LOG(XAppCaptureCloseScreenshotStream(handle));
    return;
}

while (totalBytesRead < totalBytesToRead)
{
    uint32_t bytesRead = 0;
    uint32_t bytesWritten = 0;
    if (SUCCEEDED(XAppCaptureReadScreenshotStream(handle, totalBytesRead, sizeof(buffer), buffer, &bytesRead)))
    {
        WriteFile(file, buffer, bytesRead, &bytesWritten, NULL);

        totalBytesRead += bytesRead;
    }
    else
    {
        break;
    }
}

FAILED_LOG(XAppCaptureCloseScreenshotStream(handle));

CloseHandle(file);

```

## Requirements  
  
**Header:** XAppCapture.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[GameDVR Overview](../../../../features/console/game-dvr/gamedvr-broadcast.md)  
[XAppCapture Members](../xappcapture_members.md)  
[XAppCaptureOpenScreenShotStream](xappcaptureopenscreenshotstream.md)  
[XAppCaptureTakeScreenshot](xappcapturetakescreenshot.md)  
[XAppCaptureCloseScreenshotStream](xappcaptureclosescreenshotstream.md)