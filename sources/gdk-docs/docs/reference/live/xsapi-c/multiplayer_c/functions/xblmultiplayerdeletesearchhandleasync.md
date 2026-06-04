---
author: joannaleecy
title: "XblMultiplayerDeleteSearchHandleAsync"
description: "Delete a search handle from the MPSD service."
kindex: XblMultiplayerDeleteSearchHandleAsync
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerDeleteSearchHandleAsync  

Delete a search handle from the MPSD service.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerDeleteSearchHandleAsync(  
         XblContextHandle xblContext,  
         const char* handleId,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*xblContext* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*handleId* &nbsp;&nbsp;\_In\_  
Type: char*  
  
Id of the search handle to delete. Obtained from either the search handle or session handle.  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
Note that this will not destroy local search handle objects; the lifetime of those objects is still managed by XblMultiplayerSearchHandleCloseHandle. Once the search handle object is deleted from service, the associated session will no longer be searchable.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
