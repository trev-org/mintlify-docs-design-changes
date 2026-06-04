---
author: A-Radu
title: "XSystemAllowFullDownloadBandwidth"
description: "Controls the bandwidth used by a package download while the game is running."
kindex: XSystemAllowFullDownloadBandwidth
ms.author: alvieru
ms.topic: reference
edited: '09/14/2023'
quality: good
applies-to: pc-gdk
ms.date: '09/14/2023'
permissioned-type: public
---

# XSystemAllowFullDownloadBandwidth  

Controls the bandwidth used by a package download while the game is running.

## Syntax  
  
```cpp
void XSystemAllowFullDownloadBandwidth(  
    bool enable
)  
```  
  
### Parameters  
  
*enable* &nbsp;&nbsp; \_In\_  
Type: bool

It tells if the full download bandwidth should get enabled or disabled.

### Return value  
Type: void   

## Remarks

> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
This API can be used when downloading a package in order to speed up the download. When called with the parameter set to *true*, the API signals the system OS to use more resources for download. The API must be called again with the parameter set to *false* when the download has finished, in order to signal back to the system OS that the resources can be reclaimed back.  

Aspects that developers should be aware of when using this API: 
* This API will change the CPU performance in the system OS. If the title is trying to do heavy cross-VM operations (store operations, spatial audio, etc.), they may experience degraded performance. Therefore, this feature should not be left enabled the whole lifetime of the game.   

> [!NOTE]
> This API sends just a signal to the system OS and the system OS can choose to disregard it if it needs those resources for other operations.

Potential usage example:
If the game is starting a download for a DLC or another base game and the game is providing a progress bar, then the game might consider calling this API while the gamer in on that screen and not in active gameplay. If the gamer switches to a different view, the game should then disable this so it ensures that the game has full control of its own network bandwidth.
  
```cpp
void AllowFullDownloadBandwidth() 
{
    XSystemAllowFullDownloadBandwidth(true);

    // Kick off download of DLC or related package

    // Download complete or enter more active gameplay

    XSystemAllowFullDownloadBandwidth(false);
} 
```  
  
## Requirements  
  
**Header:** XSystem.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Xbox Series consoles  
  
## See also  
[XSystem](../xsystem_members.md)  
  