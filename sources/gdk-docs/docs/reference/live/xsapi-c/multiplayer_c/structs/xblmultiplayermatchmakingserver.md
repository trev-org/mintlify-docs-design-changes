---
author: joannaleecy
title: "XblMultiplayerMatchmakingServer"
description: "Represents the matchmaking server that supports a multiplayer session."
kindex: XblMultiplayerMatchmakingServer
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerMatchmakingServer  

Represents the matchmaking server that supports a multiplayer session.  

## Syntax  
  
```cpp
typedef struct XblMultiplayerMatchmakingServer {  
    XblMatchmakingStatus Status;  
    const char* StatusDetails;  
    uint32_t TypicalWaitInSeconds;  
    XblMultiplayerSessionReference TargetSessionRef;  
} XblMultiplayerMatchmakingServer  
```
  
### Members  
  
*Status*  
Type: [XblMatchmakingStatus](../enums/xblmatchmakingstatus.md)  
  
The status of the matchmaking server.
  
*StatusDetails*  
Type: const char*  
  
The status details, if any, of the matchmaking server.
  
*TypicalWaitInSeconds*  
Type: uint32_t  
  
The typical wait time, in seconds.
  
*TargetSessionRef*  
Type: [XblMultiplayerSessionReference](xblmultiplayersessionreference.md)  
  
A reference to the target session.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
