---
author: joannaleecy
title: "XblAchievementsResultHandle"
description: "A handle to an achievement result."
kindex: XblAchievementsResultHandle
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementsResultHandle  

A handle to an achievement result.    

## Syntax  
  
```cpp
typedef struct XblAchievementsResult * XblAchievementsResultHandle;  
```  

## Remarks  
  
This handle is used by other APIs to get the achievement objects and to get the next page of achievements from the service if there is one. The handle must be closed using [XblAchievementsResultCloseHandle](../functions/xblachievementsresultclosehandle.md) when the result is no longer needed.
  
## Member of
  
[XblAchievementsResultGetAchievements](../functions/xblachievementsresultgetachievements.md)  
[XblAchievementsResultHasNext](../functions/xblachievementsresulthasnext.md)  
[XblAchievementsResultGetNextAsync](../functions/xblachievementsresultgetnextasync.md)  
[XblAchievementsResultGetNextResult](../functions/xblachievementsresultgetnextresult.md)  
[XblAchievementsGetAchievementsForTitleIdResult](../functions/xblachievementsgetachievementsfortitleidresult.md)  
[XblAchievementsGetAchievementResult](../functions/xblachievementsgetachievementresult.md)  
[XblAchievementsResultDuplicateHandle](../functions/xblachievementsresultduplicatehandle.md)  
[XblAchievementsResultCloseHandle](../functions/xblachievementsresultclosehandle.md)
  
## Requirements  
  
**Header:** achievements_c.h
  
## See also  
[achievements_c](../achievements_c_members.md)  
  
  
