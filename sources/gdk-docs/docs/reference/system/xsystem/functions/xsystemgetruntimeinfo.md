---
author: jgup
title: "XSystemGetRuntimeInfo"
description: "Provides information about the current and available versions of the gaming runtime service."
kindex: XSystemGetRuntimeInfo
ms.author: jgup
ms.topic: reference
edited: 05/31/2019
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XSystemGetRuntimeInfo  

Provides information about the current and available versions of the gaming runtime service.

## Syntax  
  
```cpp
XSystemRuntimeInfo XSystemGetRuntimeInfo(  
);
```  
  
### Parameters  
  
None.
  
### Return value
Type: [XSystemRuntimeInfo](../structs/xsystemruntimeinfo.md)
  
Returns an [XSystemRuntimeInfo](../structs/xsystemruntimeinfo.md) structure that contains information about the gaming runtime service.  
  
## Remarks
  
This function can be called prior to calling [XGameRuntimeInitialize](../../xgameruntimeinit/functions/xgameruntimeinitialize.md).
  
## Requirements  
  
**Header:** XSystem.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XSystem](../xsystem_members.md)  
[XSystemRuntimeInfo](../structs/xsystemruntimeinfo.md)
  
  