---
author: joannaleecy
title: "XblMultiplayerSearchHandleGetId"
description: "Get the Id for the search handle object."
kindex: XblMultiplayerSearchHandleGetId
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSearchHandleGetId  

Get the Id for the search handle object.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSearchHandleGetId(  
         XblMultiplayerSearchHandle handle,  
         const char** id  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSearchHandle](../handles/xblmultiplayersearchhandle.md)  
  
Handle to the search handle details.  
  
*id* &nbsp;&nbsp;\_Out\_  
Type: char**  
  
Passes back a search handle Id. The memory for the pointer will remain valid for the life of the XblMultiplayerSessionHandle object until it is closed.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
