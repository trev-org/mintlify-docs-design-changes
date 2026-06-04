---
author: joannaleecy
title: "XblMultiplayerSessionConstantsSetVisibility"
description: "Sets the visibility of this session."
kindex: XblMultiplayerSessionConstantsSetVisibility
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionConstantsSetVisibility  

Sets the visibility of this session.  

## Syntax  
  
```cpp
void XblMultiplayerSessionConstantsSetVisibility(  
         XblMultiplayerSessionHandle handle,  
         XblMultiplayerSessionVisibility visibility  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*visibility* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionVisibility](../enums/xblmultiplayersessionvisibility.md)  
  
New visibility value.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
