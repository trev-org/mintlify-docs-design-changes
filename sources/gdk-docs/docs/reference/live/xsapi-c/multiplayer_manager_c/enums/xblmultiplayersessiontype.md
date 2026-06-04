---
author: joannaleecy
title: "XblMultiplayerSessionType"
description: "Defines values used to indicate types for multiplayer sessions."
kindex: XblMultiplayerSessionType
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionType  

Defines values used to indicate types for multiplayer sessions.    

## Syntax  
  
```cpp
enum class XblMultiplayerSessionType  : uint32_t  
{  
    Unknown,  
    LobbySession,  
    GameSession,  
    MatchSession  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| Unknown | The session type is unknown. |  
| LobbySession | Indicates multiplayer lobby session. |  
| GameSession | Indicates multiplayer game session. |  
| MatchSession | Indicates multiplayer match session. |  
  
## Requirements  
  
**Header:** multiplayer_manager_c.h
  
## See also  
[multiplayer_manager_c](../multiplayer_manager_c_members.md)  
  
  
