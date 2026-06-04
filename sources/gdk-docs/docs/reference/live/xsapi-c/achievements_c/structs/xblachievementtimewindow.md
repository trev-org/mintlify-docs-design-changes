---
author: joannaleecy
title: "XblAchievementTimeWindow"
description: "Represents an interval of time during which an achievement can be unlocked."
kindex: XblAchievementTimeWindow
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementTimeWindow  

Represents an interval of time during which an achievement can be unlocked.  

## Syntax  
  
```cpp
typedef struct XblAchievementTimeWindow {  
    time_t startDate;  
    time_t endDate;  
} XblAchievementTimeWindow  
```
  
### Members  
  
*startDate*  
Type: time_t  
  
The start date and time of the achievement time window.
  
*endDate*  
Type: time_t  
  
The end date and time of the achievement time window.
  
## Remarks  
  
This class is only used when the achievement_type enumeration is set to challenge.
  
## Member of
  
[XblAchievement](xblachievement.md)
  
## Requirements  
  
**Header:** achievements_c.h
  
## See also  
[achievements_c](../achievements_c_members.md)  
  
  
