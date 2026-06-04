---
author: joannaleecy
title: "XblMultiplayerSessionSessionProperties"
description: "Get the properties associated with the session. Any player can modify these properties."
kindex: XblMultiplayerSessionSessionProperties
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionSessionProperties  

Get the properties associated with the session. Any player can modify these properties.  

## Syntax  
  
```cpp
const XblMultiplayerSessionSessionProperties(  
         XblMultiplayerSessionHandle handle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
  
### Return value  
Type: const
  
A pointer to the set of properties associated with this session.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
