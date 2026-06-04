---
author: joannaleecy
title: "XblAchievementsManagerEventType"
description: "Defines values used to indicate event types for an achievement."
kindex: XblAchievementsManagerEventType
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementsManagerEventType  

Defines values used to indicate event types for an achievement.    

## Syntax  
  
```cpp
enum class XblAchievementsManagerEventType  : uint32_t  
{  
    LocalUserInitialStateSynced = 0,  
    AchievementUnlocked = 1,  
    AchievementProgressUpdated = 2  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| LocalUserInitialStateSynced | Indicates that a local user was added and has been initialized. |  
| AchievementUnlocked | Indicates the achievement was unlocked. |  
| AchievementProgressUpdated | Indicates progress has been made on (a requirement of) an achievement. |  
  
## Requirements  
  
**Header:** achievements_manager_c.h
  
## See also  
[achievements_manager_c](../achievements_manager_c_members.md)  
  
  
