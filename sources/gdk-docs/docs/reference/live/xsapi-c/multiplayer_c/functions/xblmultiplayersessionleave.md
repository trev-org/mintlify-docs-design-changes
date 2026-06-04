---
author: joannaleecy
title: "XblMultiplayerSessionLeave"
description: "Call if the user who either created or got the session leaves the session."
kindex: XblMultiplayerSessionLeave
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionLeave  

Call if the user who either created or got the session leaves the session.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionLeave(  
         XblMultiplayerSessionHandle handle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
If the session is deleted as a result of this action, a 204 response will be returned.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
