---
author: joannaleecy
title: "XblMultiplayerSessionSetMatchmakingResubmit"
description: "Sets if a match needs to be resubmitted or not."
kindex: XblMultiplayerSessionSetMatchmakingResubmit
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionSetMatchmakingResubmit  

Sets if a match needs to be resubmitted or not.  

## Syntax  
  
```cpp
void XblMultiplayerSessionSetMatchmakingResubmit(  
         XblMultiplayerSessionHandle handle,  
         bool matchResubmit  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*matchResubmit* &nbsp;&nbsp;\_In\_  
Type: bool  
  
Set true, if the match that was found didn't work out and needs to be resubmitted. Set false, if the match did work and the matchmaking service can release the session.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
