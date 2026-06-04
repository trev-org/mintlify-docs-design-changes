---
author: joannaleecy
title: "XblMultiplayerSessionRawServersJson"
description: "A JSON string containing a collection of servers for this multiplayer session. This Json object has the info that is parsed to create the XblMultiplayerArbitrationServer, XblMultiplayerMatchmakingServer, and XblMultiplayerTournamentsServer objects."
kindex: XblMultiplayerSessionRawServersJson
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionRawServersJson  

A JSON string containing a collection of servers for this multiplayer session. This Json object has the info that is parsed to create the XblMultiplayerArbitrationServer, XblMultiplayerMatchmakingServer, and XblMultiplayerTournamentsServer objects.  

## Syntax  
  
```cpp
const XblMultiplayerSessionRawServersJson(  
         XblMultiplayerSessionHandle handle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
  
### Return value  
Type: const
  
The JSON string containing a collection of servers for this multiplayer session. The memory for the returned pointer will remain valid for the life of the XblMultiplayerSessionHandle object until it is closed.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
