---
author: joannaleecy
title: "XblAchievementProgression"
description: "Represents progress details about the achievement, including requirements."
kindex: XblAchievementProgression
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementProgression  

Represents progress details about the achievement, including requirements.  

## Syntax  
  
```cpp
typedef struct XblAchievementProgression {  
    XblAchievementRequirement* requirements;  
    size_t requirementsCount;  
    time_t timeUnlocked;  
} XblAchievementProgression  
```
  
### Members  
  
*requirements*  
Type: [XblAchievementRequirement*](xblachievementrequirement.md)  
  
The actions and conditions that are required to unlock the achievement.
  
*requirementsCount*  
Type: size_t  
  
The size of **requirements**.
  
*timeUnlocked*  
Type: time_t  
  
The timestamp when the achievement was first unlocked.
  
## Member of
  
[XblAchievement](xblachievement.md)
  
## Requirements  
  
**Header:** achievements_c.h
  
## See also  
[achievements_c](../achievements_c_members.md)  
  
  
