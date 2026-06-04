---
author: joannaleecy
title: "XblMultiplayerManagerGameSessionIsHost"
description: "Indicates whether the specified user is the host for the game session."
kindex: XblMultiplayerManagerGameSessionIsHost
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerManagerGameSessionIsHost  

Indicates whether the specified user is the host for the game session.  

## Syntax  
  
```cpp
bool XblMultiplayerManagerGameSessionIsHost(  
         uint64_t xuid  
)  
```  
  
### Parameters  
  
*xuid* &nbsp;&nbsp;\_In\_  
Type: uint64_t  
  
The Xbox User ID (XUID) of the user.  
  
  
### Return value  
Type: bool
  
Returns true if the XUID is the host of the game session; otherwise, false.
  
## Remarks  
  
This function returns false if a game session doesn't exist for the lobby session, or if the Xbox User ID (XUID) specified in `xuid` isn't the host for the game session. You can retrieve the host for a game session by calling [XblMultiplayerManagerGameSessionHost](xblmultiplayermanagergamesessionhost.md). For more information, see [Multiplayer Manager API overview](../../../../../services/multiplayer/mpm/concepts/live-multiplayer-manager-api-overview.md).
  
## Requirements  
  
**Header:** multiplayer_manager_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_manager_c](../multiplayer_manager_c_members.md)  
[XblMultiplayerManagerGameSessionSetSynchronizedHost](xblmultiplayermanagergamesessionsetsynchronizedhost.md)
  
  
