---
author: M-Stahl
title: "XAppCaptureRecordDiagnosticClip"
description: "Records a diagnostic clip from your app."
kindex: XAppCaptureRecordDiagnosticClip
ms.author: ddobyns
ms.topic: reference
edited: 02/10/2020
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XAppCaptureRecordDiagnosticClip  

Records a diagnostic clip from your app.  

## Syntax  
  
```cpp
HRESULT XAppCaptureRecordDiagnosticClip(  
         time_t startTime,  
         uint32_t durationInMs,  
         const char* filenamePrefix,  
         XAppCaptureRecordClipResult* result  
)  
```  
  
### Parameters  
  
*startTime* &nbsp;&nbsp;\_In\_  
Type: time_t  

  
Timestamp for the beginning of the diagnostic clip.  


*durationInMs* &nbsp;&nbsp;\_In\_  
Type: uint32_t  

  
Duration in milliseconds of the diagnostic clip.  


*filenamePrefix* &nbsp;&nbsp;\_In\_opt\_  
Type: char*  

  
Desired prefix for the file name, is optional, will be appended to the front of the diagnostic file name.  


*result* &nbsp;&nbsp;\_Out\_  
Type: [XAppCaptureRecordClipResult*](../structs/xappcapturerecordclipresult.md)  

  
The resulting recorded diagnostic clip.  


  
### Return value
Type: HRESULT
  
Function result.  
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
Calling this function does not trigger a UI notification. Clips are saved to a game accessible partition. The [XAppCaptureRecordDiagnosticClipResult](../structs/xappcapturerecordclipresult.md) contains a file path which you can use to access the clip.
On Xbox, this function will only be available on development kits. On retail kits this api will return an error immediately.

On PC, you must enable background recording for your app for this function to work. The best way to do this is to bring up Game Bar by pressing Win+G, then click the Settings icon, go to the Capturing tab, and enable "Record in the background while I'm playing a game".
Then, you must mark your app as a game. The best way to do this is by running your game first. While the game is in focus, bring up Game Bar by pressing Win+G, then click the Settings icon, go to the General tab, and check "Remember this is a game".
## Requirements  
  
**Header:** XAppCapture.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[GameDVR Overview](../../../../features/console/game-dvr/gamedvr-broadcast.md)  
[XAppCapture Members](../xappcapture_members.md)  
[XAppCaptureRecordDiagnosticClipResult](../structs/xappcapturerecordclipresult.md)  
  