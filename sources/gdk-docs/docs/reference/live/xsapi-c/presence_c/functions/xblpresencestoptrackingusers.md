---
author: joannaleecy
title: "XblPresenceStopTrackingUsers"
description: "Configures the list of users for whom real-time device and title presence updates will be tracked. Presence updates for the specified Users will no longer be received."
kindex: XblPresenceStopTrackingUsers
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPresenceStopTrackingUsers  

Configures the list of users for whom real-time device and title presence updates will be tracked. Presence updates for the specified Users will no longer be received.  

## Syntax  
  
```cpp
HRESULT XblPresenceStopTrackingUsers(  
         XblContextHandle xblContextHandle,  
         const uint64_t* xuids,  
         size_t xuidsCount  
)  
```  
  
### Parameters  
  
*xblContextHandle* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*xuids* &nbsp;&nbsp;\_In\_  
Type: uint64_t*  
  
Array of XboxUserIDs to remove from the list of tracked Users.  
  
*xuidsCount* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
Length of xuids array.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** presence_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[presence_c](../presence_c_members.md)  
  
  
