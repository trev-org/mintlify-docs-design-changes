---
author: joannaleecy
title: "XblMultiplayerSessionSetRawServersJson"
description: "Sets the JSON string containing a collection of servers for this multiplayer session."
kindex: XblMultiplayerSessionSetRawServersJson
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionSetRawServersJson  

Sets the JSON string containing a collection of servers for this multiplayer session.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionSetRawServersJson(  
         XblMultiplayerSessionHandle handle,  
         const char* rawServersJson  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*rawServersJson* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
Json describing the session servers.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
