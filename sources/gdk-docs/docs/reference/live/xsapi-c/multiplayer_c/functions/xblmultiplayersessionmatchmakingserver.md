---
author: joannaleecy
title: "XblMultiplayerSessionMatchmakingServer"
description: "A multiplayer session server that contains properties associated with a target session reference."
kindex: XblMultiplayerSessionMatchmakingServer
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionMatchmakingServer  

A multiplayer session server that contains properties associated with a target session reference.  

## Syntax  
  
```cpp
const XblMultiplayerSessionMatchmakingServer(  
         XblMultiplayerSessionHandle handle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
  
### Return value  
Type: const
  
The matchmaking server supporting the multiplayer session. The memory for the returned pointer will remain valid for the life of the XblMultiplayerSessionHandle object until it is closed.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
