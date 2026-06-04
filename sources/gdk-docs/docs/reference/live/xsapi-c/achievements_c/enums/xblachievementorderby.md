---
author: joannaleecy
title: "XblAchievementOrderBy"
description: "Enumeration values that indicate the achievement sort order."
kindex: XblAchievementOrderBy
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementOrderBy  

Enumeration values that indicate the achievement sort order.    

## Syntax  
  
```cpp
enum class XblAchievementOrderBy  : uint32_t  
{  
    DefaultOrder,  
    TitleId,  
    UnlockTime  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| DefaultOrder | Default order does not guarantee sort order. |  
| TitleId | Sort by title id. |  
| UnlockTime | Sort by achievement unlock time. |  
  
## Argument of
  
[XblAchievementsGetAchievementsForTitleIdAsync](../functions/xblachievementsgetachievementsfortitleidasync.md)
  
## Requirements  
  
**Header:** achievements_c.h
  
## See also  
[achievements_c](../achievements_c_members.md)  
  
  
