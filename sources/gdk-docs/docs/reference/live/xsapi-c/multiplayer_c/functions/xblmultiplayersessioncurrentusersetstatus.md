---
author: joannaleecy
title: "XblMultiplayerSessionCurrentUserSetStatus"
description: "Set the current user to active or inactive. The member must first be joined to the session."
kindex: XblMultiplayerSessionCurrentUserSetStatus
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionCurrentUserSetStatus  

Set the current user to active or inactive. The member must first be joined to the session.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionCurrentUserSetStatus(  
         XblMultiplayerSessionHandle handle,  
         XblMultiplayerSessionMemberStatus status  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*status* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionMemberStatus](../enums/xblmultiplayersessionmemberstatus.md)  
  
Indicates the current user status.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
You cannot set the user to reserved or ready in this manner. Use [XblMultiplayerSessionAddMemberReservation](xblmultiplayersessionaddmemberreservation.md) to add a member reservation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
