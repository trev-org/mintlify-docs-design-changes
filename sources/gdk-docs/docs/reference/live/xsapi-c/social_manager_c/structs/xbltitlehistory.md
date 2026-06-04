---
author: joannaleecy
title: "XblTitleHistory"
description: "Data about whether the user has played the title."
kindex: XblTitleHistory
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblTitleHistory  

Data about whether the user has played the title.  

## Syntax  
  
```cpp
typedef struct XblTitleHistory {  
    bool hasUserPlayed;  
    time_t lastTimeUserPlayed;  
} XblTitleHistory  
```
  
### Members  
  
*hasUserPlayed*  
Type: bool  
  
Whether the user has played this title.
  
*lastTimeUserPlayed*  
Type: time_t  
  
The last time the user had played.
  
## Member of
  
[XblSocialManagerUser](xblsocialmanageruser.md)
  
## Requirements  
  
**Header:** social_manager_c.h
  
## See also  
[social_manager_c](../social_manager_c_members.md)  
  
  
