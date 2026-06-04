---
author: joannaleecy
title: "XblMultiplayerSearchHandleGetSessionOwnerXuids"
description: "Get a pointer to an array of Xuids who own the session associated with the search handle."
kindex: XblMultiplayerSearchHandleGetSessionOwnerXuids
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSearchHandleGetSessionOwnerXuids  

Get a pointer to an array of Xuids who own the session associated with the search handle.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSearchHandleGetSessionOwnerXuids(  
         XblMultiplayerSearchHandle handle,  
         const uint64_t** xuids,  
         size_t* xuidsCount  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSearchHandle](../handles/xblmultiplayersearchhandle.md)  
  
Handle to the search handle details.  
  
*xuids* &nbsp;&nbsp;\_Out\_  
Type: uint64_t**  
  
Passes back a pointer to array of xuids. The memory for the pointer will remain valid for the life of the XblMultiplayerSessionHandle object until it is closed.  
  
*xuidsCount* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
Passes back the count of xuids in the array.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
