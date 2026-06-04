---
author: M-Stahl
title: "XAppCaptureEnableRecord"
description: "Enables recording / screenshot for the current user."
kindex: XAppCaptureEnableRecord
ms.topic: reference
edited: 02/10/2020
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XAppCaptureEnableRecord  

Enables the xbox recording function which allows the user to take screenshot,record or broadcast the game via guide.

## Syntax  
  
```cpp
HRESULT XAppCaptureEnableRecord(
)  
```  
  
### Parameters  

### Return value
Type: HRESULT
  
Function result.  
  
## Remarks  
  
> [!NOTE]
> This function isn't safe to call on a time-sensitive thread. For more information, see [Time-sensitive threads](../../../../gdk-dev/console-dev/overviews/threads/time-sensitive-threads.md).  
  
This function can be used to enable the inbuilt xbox recording/screenshot/broadcast functionality. If the functionality is enabled the user can take screenshot,record or broadcast the game using guide. I.e Press Home Button -> Take Screenshot/Recording.

The functionality is enabled by default. To disable the functionality the game can call [XAppCaptureDisableRecord](xappcapturedisablerecord.md)

## Requirements  
  
**Header:** XAppCapture.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XAppCaptureDisableRecord](xappcapturedisablerecord.md)
