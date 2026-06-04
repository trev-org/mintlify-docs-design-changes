---
author: joannaleecy
title: "XblPreserveSessionMode"
description: "Defines values used to indicate whether a match ticket is for a new game session or an existing session."
kindex: XblPreserveSessionMode
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPreserveSessionMode  

Defines values used to indicate whether a match ticket is for a new game session or an existing session.    

## Syntax  
  
```cpp
enum class XblPreserveSessionMode  : uint32_t  
{  
    Unknown,  
    Always,  
    Never  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| Unknown | The server returned an unrecognized response. |  
| Always | Always use an existing game session. This is for matching more players for a game session that is already created or in progress. |  
| Never | Never use an existing game session. This is for matching players for a new game session. |  
  
## Requirements  
  
**Header:** matchmaking_c.h
  
## See also  
[matchmaking_c](../matchmaking_c_members.md)  
  
  
