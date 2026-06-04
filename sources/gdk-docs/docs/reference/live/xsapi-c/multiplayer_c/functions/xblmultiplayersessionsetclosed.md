---
author: joannaleecy
title: "XblMultiplayerSessionSetClosed"
description: "If set to true, makes the session \"closed\", meaning that new users will not be able to join unless they already have a reservation."
kindex: XblMultiplayerSessionSetClosed
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionSetClosed  

If set to true, makes the session "closed", meaning that new users will not be able to join unless they already have a reservation.  

## Syntax  
  
```cpp
void XblMultiplayerSessionSetClosed(  
         XblMultiplayerSessionHandle handle,  
         bool closed  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*closed* &nbsp;&nbsp;\_In\_  
Type: bool  
  
True if the session should be closed, false otherwise.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
