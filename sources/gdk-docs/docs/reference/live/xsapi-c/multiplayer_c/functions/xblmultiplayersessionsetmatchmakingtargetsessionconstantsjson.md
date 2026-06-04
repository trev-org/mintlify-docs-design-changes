---
author: joannaleecy
title: "XblMultiplayerSessionSetMatchmakingTargetSessionConstantsJson"
description: "Sets the properties of the matchmaking. This should only be set by a client acting as a matchmaking service."
kindex: XblMultiplayerSessionSetMatchmakingTargetSessionConstantsJson
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionSetMatchmakingTargetSessionConstantsJson  

Sets the properties of the matchmaking. This should only be set by a client acting as a matchmaking service.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionSetMatchmakingTargetSessionConstantsJson(  
         XblMultiplayerSessionHandle handle,  
         const char* matchmakingTargetSessionConstantsJson  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*matchmakingTargetSessionConstantsJson* &nbsp;&nbsp;\_In\_  
Type: char*  
  
A JSON string representing the target session constants.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
