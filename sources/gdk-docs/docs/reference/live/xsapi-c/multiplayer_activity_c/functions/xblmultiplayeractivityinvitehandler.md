---
author: joannaleecy
title: "XblMultiplayerActivityInviteHandler"
description: "Event handler for multiplayer activity invites."
kindex: XblMultiplayerActivityInviteHandler
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerActivityInviteHandler  

Event handler for multiplayer activity invites.  

## Syntax  
  
```cpp
void XblMultiplayerActivityInviteHandler(  
         const XblMultiplayerActivityInviteData* data,  
         void* context  
)  
```  
  
### Parameters  
  
*data* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerActivityInviteData*](../structs/xblmultiplayeractivityinvitedata.md)  
  
Data needed by the invitee to respond to a game invite.  
  
*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  
  
Client context provided when the handler was added.  
  
  
### Return value  
Type: void
  

  
## Remarks  
  
The lifetime of the [XblMultiplayerActivityInviteData](../structs/xblmultiplayeractivityinvitedata.md) object is limited to the callback. <br /><br /> For more information about multiplayer activities, see [Activities](../../../../../services/multiplayer/mpa/concepts/live-mpa-activities.md).
  
## Requirements  
  
**Header:** multiplayer_activity_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_activity_c](../multiplayer_activity_c_members.md)  
  
  
