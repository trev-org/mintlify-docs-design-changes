---
author: joannaleecy
title: "XblMultiplayerSessionGetInfo"
description: "Gets some basic info about the session. Represents the info in the root of the MPSD session document."
kindex: XblMultiplayerSessionGetInfo
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionGetInfo  

Gets some basic info about the session. Represents the info in the root of the MPSD session document.  

## Syntax  
  
```cpp
const XblMultiplayerSessionInfo* XblMultiplayerSessionGetInfo(  
         XblMultiplayerSessionHandle handle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
  
### Return value  
Type: const XblMultiplayerSessionInfo*
  
A pointer to the basic info about the local multiplayer session. The memory for the returned pointer will remain valid for the life of the XblMultiplayerSessionHandle object until it is closed.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
