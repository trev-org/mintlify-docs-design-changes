---
author: joannaleecy
title: "XblMultiplayerSessionSetMatchmakingServerConnectionPath"
description: "Forces a specific server connection string to be used, useful in preserveSession=always cases."
kindex: XblMultiplayerSessionSetMatchmakingServerConnectionPath
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionSetMatchmakingServerConnectionPath  

Forces a specific server connection string to be used, useful in preserveSession=always cases.  

## Syntax  
  
```cpp
void XblMultiplayerSessionSetMatchmakingServerConnectionPath(  
         XblMultiplayerSessionHandle handle,  
         const char* serverConnectionPath  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*serverConnectionPath* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
The server connection path. Setting this path can be useful when the session is preserved.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
