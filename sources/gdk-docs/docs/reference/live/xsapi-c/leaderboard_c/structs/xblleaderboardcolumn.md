---
author: joannaleecy
title: "XblLeaderboardColumn"
description: "Represents a column in a collection of leaderboard items."
kindex: XblLeaderboardColumn
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblLeaderboardColumn  

Represents a column in a collection of leaderboard items.  

## Syntax  
  
```cpp
typedef struct XblLeaderboardColumn {  
    const char* statName;  
    XblLeaderboardStatType statType;  
} XblLeaderboardColumn  
```
  
### Members  
  
*statName*  
Type: const char*  
  
The UTF-8 encoded name the statistic displayed in the column.
  
*statType*  
Type: [XblLeaderboardStatType](../enums/xblleaderboardstattype.md)  
  
The property type of the statistic in the column.
  
## Member of
  
[XblLeaderboardResult](xblleaderboardresult.md)
  
## Requirements  
  
**Header:** leaderboard_c.h
  
## See also  
[leaderboard_c](../leaderboard_c_members.md)  
  
  
