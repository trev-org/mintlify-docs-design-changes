---
author: joannaleecy
title: "XblMultiplayerSessionDuplicateHandle"
description: "Increments the reference count to a local session object."
kindex: XblMultiplayerSessionDuplicateHandle
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionDuplicateHandle  

Increments the reference count to a local session object.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionDuplicateHandle(  
         XblMultiplayerSessionHandle handle,  
         XblMultiplayerSessionHandle* duplicatedHandle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*duplicatedHandle* &nbsp;&nbsp;\_Out\_  
Type: [XblMultiplayerSessionHandle*](../handles/xblmultiplayersessionhandle.md)  
  
Passes back the duplicated handle.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
