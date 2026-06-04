---
author: joannaleecy
title: "XblMultiplayerManagerCancelMatch"
description: "Cancels the match request on the server, if one exists."
kindex: XblMultiplayerManagerCancelMatch
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerManagerCancelMatch  

Cancels the match request on the server, if one exists.  

## Syntax  
  
```cpp
void XblMultiplayerManagerCancelMatch(  
)  
```  
  
### Parameters  
  
  
### Return value  
Type: void
  

  
## Remarks  
  
This function cancels a previously submitted match ticket. This function is ignored if the status of the match ticket is set to `XblMultiplayerMatchStatus::None`, `XblMultiplayerMatchStatus::Expired`, `XblMultiplayerMatchStatus::Canceled`, or `XblMultiplayerMatchStatus::Failed`, or if a different host submitted the match ticket. <br />If this function is called, the status of the match ticket is set to `XblMultiplayerMatchStatus::Canceling` until the match ticket is canceled on the server.  <br />For more information about match tickets, see [Multiplayer concepts overview](../../../../../services/multiplayer/concepts/live-multiplayer-concepts.md).
  
## Requirements  
  
**Header:** multiplayer_manager_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_manager_c](../multiplayer_manager_c_members.md)  
[XblMultiplayerManagerFindMatch](xblmultiplayermanagerfindmatch.md)  
[XblMultiplayerManagerMatchStatus](xblmultiplayermanagermatchstatus.md)
  
  
