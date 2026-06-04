---
author: joannaleecy
title: "XblAchievementsManagerSortOrder"
description: "Enumeration values that specify the order we display the results in."
kindex: XblAchievementsManagerSortOrder
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementsManagerSortOrder  

Enumeration values that specify the order we display the results in.    

## Syntax  
  
```cpp
enum class XblAchievementsManagerSortOrder  : uint32_t  
{  
    Unsorted = 0,  
    Ascending = 1,  
    Descending = 2  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| Unsorted | Unsorted sort order will skip the sort operation. |  
| Ascending | Elements in the response are in ascending order of the field specified by XblAchievementsManagerSortValue. |  
| Descending | Elements in the response are in descending order of the field specified by XblAchievementsManagerSortValue. |  
  
## Requirements  
  
**Header:** achievements_manager_c.h
  
## See also  
[achievements_manager_c](../achievements_manager_c_members.md)  
  
  
