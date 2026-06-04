---
author: joannaleecy
title: "XblMultiplayerManagerSetAutoFillMembersDuringMatchmaking"
description: "Sets if matchmaking should auto fill open slots during gameplay. This can be changed anytime."
kindex: XblMultiplayerManagerSetAutoFillMembersDuringMatchmaking
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerManagerSetAutoFillMembersDuringMatchmaking  

Sets if matchmaking should auto fill open slots during gameplay. This can be changed anytime.  

## Syntax  
  
```cpp
void XblMultiplayerManagerSetAutoFillMembersDuringMatchmaking(  
         bool autoFillMembers  
)  
```  
  
### Parameters  
  
*autoFillMembers* &nbsp;&nbsp;\_In\_  
Type: bool  
  
Set true, to search for members during matchmaking if the game has open slots. Set false, to not allow auto fill.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** multiplayer_manager_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_manager_c](../multiplayer_manager_c_members.md)  
  
  
