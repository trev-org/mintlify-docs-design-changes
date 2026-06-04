---
author: joannaleecy
title: "XblMultiplayerSearchHandleGetJoinRestriction"
description: "Get join restriction of the session associated with the search handle."
kindex: XblMultiplayerSearchHandleGetJoinRestriction
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSearchHandleGetJoinRestriction  

Get join restriction of the session associated with the search handle.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSearchHandleGetJoinRestriction(  
         XblMultiplayerSearchHandle handle,  
         XblMultiplayerSessionRestriction* joinRestriction  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSearchHandle](../handles/xblmultiplayersearchhandle.md)  
  
Handle to the search handle details.  
  
*joinRestriction* &nbsp;&nbsp;\_Out\_  
Type: [XblMultiplayerSessionRestriction*](../enums/xblmultiplayersessionrestriction.md)  
  
Passes back the join restriction of the associated session.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
