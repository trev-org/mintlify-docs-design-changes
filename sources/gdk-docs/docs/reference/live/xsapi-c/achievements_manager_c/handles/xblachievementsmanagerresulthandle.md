---
author: joannaleecy
title: "XblAchievementsManagerResultHandle"
description: "A handle to an achievement manager result."
kindex: XblAchievementsManagerResultHandle
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementsManagerResultHandle  

A handle to an achievement manager result.    

## Syntax  
  
```cpp
typedef struct XblAchievementsManagerResult * XblAchievementsManagerResultHandle;  
```  

## Remarks  
  
This handle is used by other APIs to get the achievement objects and to get the next page of achievements from the service if there is one. The handle must be closed using [XblAchievementsManagerResultCloseHandle](../functions/xblachievementsmanagerresultclosehandle.md) when the result is no longer needed.
  
## Member of
  
[XblAchievementsManagerResultGetAchievements](../functions/xblachievementsmanagerresultgetachievements.md)  
[XblAchievementsManagerResultDuplicateHandle](../functions/xblachievementsmanagerresultduplicatehandle.md)  
[XblAchievementsManagerResultCloseHandle](../functions/xblachievementsmanagerresultclosehandle.md)
  
## Requirements  
  
**Header:** achievements_manager_c.h
  
## See also  
[achievements_manager_c](../achievements_manager_c_members.md)  
  
  
