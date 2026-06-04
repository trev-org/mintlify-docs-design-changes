---
author: joannaleecy
title: "XblAchievementProgressChangeEventArgs"
description: "Event arguments for achievement progress changes."
kindex: XblAchievementProgressChangeEventArgs
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementProgressChangeEventArgs  

Event arguments for achievement progress changes.  

## Syntax  
  
```cpp
typedef struct XblAchievementProgressChangeEventArgs {  
    XblAchievementProgressChangeEntry* updatedAchievementEntries;  
    size_t entryCount;  
} XblAchievementProgressChangeEventArgs  
```
  
### Members  
  
*updatedAchievementEntries*  
Type: [XblAchievementProgressChangeEntry*](xblachievementprogresschangeentry.md)  
  
Array of objects detailing the progress changes of each achievement that has been updated.
  
*entryCount*  
Type: size_t  
  
The count of **updatedAchievementEntries**.
  
## Requirements  
  
**Header:** achievements_c.h
  
## See also  
[achievements_c](../achievements_c_members.md)  
  
  
