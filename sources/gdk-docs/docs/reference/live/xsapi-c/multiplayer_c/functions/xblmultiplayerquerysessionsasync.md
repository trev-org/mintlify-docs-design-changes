---
author: joannaleecy
title: "XblMultiplayerQuerySessionsAsync"
description: "Retrieve a list of sessions with various filters."
kindex: XblMultiplayerQuerySessionsAsync
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerQuerySessionsAsync  

Retrieve a list of sessions with various filters.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerQuerySessionsAsync(  
         XblContextHandle xblContext,  
         const XblMultiplayerSessionQuery* sessionQuery,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*xblContext* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*sessionQuery* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionQuery*](../structs/xblmultiplayersessionquery.md)  
  
A session query object that defines the parameters for the query.  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## REST Call  
  
Calls V102 GET /serviceconfigs/{scid}/sessions or /serviceconfigs/{scid}/sessiontemplates/{session-template-name}/sessions
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
