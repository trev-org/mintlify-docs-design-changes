---
author: joannaleecy
title: "XblMultiplayerSessionCurrentUserSetMembersInGroup"
description: "Set a collection of members in the group. The member must first be joined to the session."
kindex: XblMultiplayerSessionCurrentUserSetMembersInGroup
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionCurrentUserSetMembersInGroup  

Set a collection of members in the group. The member must first be joined to the session.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionCurrentUserSetMembersInGroup(  
         XblMultiplayerSessionHandle session,  
         uint32_t* memberIds,  
         size_t memberIdsCount  
)  
```  
  
### Parameters  
  
*session* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*memberIds* &nbsp;&nbsp;\_In\_reads\_(memberIdsCount)  
Type: uint32_t*  
  
Array of memberIds that are in the local users group.  
  
*memberIdsCount* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
Size of the memberIds array.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
