---
author: joannaleecy
title: "XblAchievementParticipationType"
description: "Enumeration values that indicate the participation type for an achievement."
kindex: XblAchievementParticipationType
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementParticipationType  

Enumeration values that indicate the participation type for an achievement.    

## Syntax  
  
```cpp
enum class XblAchievementParticipationType  : uint32_t  
{  
    Unknown,  
    Individual,  
    Group  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| Unknown | The participation type is unknown. |  
| Individual | An achievement that can be earned as an individual participant. |  
| Group | An achievement that can be earned as a group participant. |  
  
## Member of
  
[XblAchievement](../structs/xblachievement.md)
  
## Requirements  
  
**Header:** achievements_c.h
  
## See also  
[achievements_c](../achievements_c_members.md)  
  
  
