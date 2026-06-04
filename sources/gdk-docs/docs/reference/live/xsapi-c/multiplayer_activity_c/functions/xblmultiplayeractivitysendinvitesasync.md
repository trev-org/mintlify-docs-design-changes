---
author: joannaleecy
title: "XblMultiplayerActivitySendInvitesAsync"
description: "Sends invites to Xbox user IDs to join the caller's current activity."
kindex: XblMultiplayerActivitySendInvitesAsync
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerActivitySendInvitesAsync  

Sends invites to Xbox user IDs to join the caller's current activity.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerActivitySendInvitesAsync(  
         XblContextHandle xblContext,  
         const uint64_t* xuids,  
         size_t xuidsCount,  
         bool allowCrossPlatformJoin,  
         const char* connectionString,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*xblContext* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox Live context for the local user.  
  
*xuids* &nbsp;&nbsp;\_In\_  
Type: uint64_t*  
  
List of Xbox user IDs to invite.  
  
*xuidsCount* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
Size of the `xuids` array.  
  
*allowCrossPlatformJoin* &nbsp;&nbsp;\_In\_  
Type: bool  
  
If the title is configured for cross-platform invites, setting this parameter to true sends an invite to all platform endpoints that the title supports. If set to false, the invite is sent to the sender's platform only. If cross-platform invites are not configured, the invite is always sent to the sender's platform only.  
  
*connectionString* &nbsp;&nbsp;\_In\_opt\_z\_  
Type: char*  
  
(Optional) Connection string that the peer uses to join the game.  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The `XAsyncBlock` for this operation.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
To get the result of the asynchronous operation, call [XAsyncGetStatus](../../../../system/xasync/functions/xasyncgetstatus.md) inside the `XAsyncBlock` callback or after `XAsyncBlock` is complete. <br /><br /> To see how this function is used, see "Sending invites" in the [Invites](../../../../../services/multiplayer/mpa/how-to/live-mpa-client-how-to.md#invites) section of [Example code for Multiplayer Activity](../../../../../services/multiplayer/mpa/how-to/live-mpa-client-how-to.md). <br /><br /> For more information about multiplayer activities, see [Activities](../../../../../services/multiplayer/mpa/concepts/live-mpa-activities.md).
  
## REST Call  
  
Calls POST /titles/{titleId}/invites

## Requirements  
  
**Header:** multiplayer_activity_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_activity_c](../multiplayer_activity_c_members.md)  
  
  
