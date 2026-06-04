---
author: joannaleecy
title: "XblMultiplayerSearchHandleGetSessionReference"
description: "Get the session reference for the session the search handle is associated with."
kindex: XblMultiplayerSearchHandleGetSessionReference
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSearchHandleGetSessionReference  

Get the session reference for the session the search handle is associated with.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSearchHandleGetSessionReference(  
         XblMultiplayerSearchHandle handle,  
         XblMultiplayerSessionReference* sessionRef  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSearchHandle](../handles/xblmultiplayersearchhandle.md)  
  
Handle to the search handle details.  
  
*sessionRef* &nbsp;&nbsp;\_Out\_  
Type: [XblMultiplayerSessionReference*](../structs/xblmultiplayersessionreference.md)  
  
Passes back the associated session reference.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
