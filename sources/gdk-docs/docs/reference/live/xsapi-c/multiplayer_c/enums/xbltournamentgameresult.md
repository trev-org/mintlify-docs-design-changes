---
author: joannaleecy
title: "XblTournamentGameResult"
description: "Defines values that indicate the state of a tournament game. DEPRECATED. This enumeration will be removed in a future release."
kindex: XblTournamentGameResult
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblTournamentGameResult  

Defines values that indicate the state of a tournament game. DEPRECATED. This enumeration will be removed in a future release.    

## Syntax  
  
```cpp
enum class XblTournamentGameResult  : uint32_t  
{  
    NoContest,  
    Win,  
    Loss,  
    Draw,  
    Rank,  
    NoShow,  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| NoContest | No game. |  
| Win | Win. |  
| Loss | Loss. |  
| Draw | Draw. |  
| Rank | Rank. |  
| NoShow | Didn't show up. |  
  
## Member of
  
[XblTournamentGameResultWithRank](../structs/xbltournamentgameresultwithrank.md)
  
## Requirements  
  
**Header:** multiplayer_c.h
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
