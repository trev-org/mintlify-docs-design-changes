---
author: joannaleecy
title: "XblAchievementsResultCloseHandle"
description: "Closes the XblAchievementsResultHandle."
kindex: XblAchievementsResultCloseHandle
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementsResultCloseHandle  

Closes the XblAchievementsResultHandle.  

## Syntax  
  
```cpp
void XblAchievementsResultCloseHandle(  
         XblAchievementsResultHandle handle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblAchievementsResultHandle](../handles/xblachievementsresulthandle.md)  
  
The XblAchievementsResultHandle to close.  
  
  
### Return value  
Type: void
  

  
## Remarks  
  
When all outstanding handles have been closed, the memory associated with the achievement result will be freed.
  
## Requirements  
  
**Header:** achievements_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[achievements_c](../achievements_c_members.md)  
  
  
