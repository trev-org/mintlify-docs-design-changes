---
author: joannaleecy
title: "XblMultiplayerActivityDeleteActivityAsync"
description: "Clears the multiplayer activity for the local user."
kindex: XblMultiplayerActivityDeleteActivityAsync
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerActivityDeleteActivityAsync  

Clears the multiplayer activity for the local user.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerActivityDeleteActivityAsync(  
         XblContextHandle xblContext,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*xblContext* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox Live context for the local user.  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The `XAsyncBlock` for this operation.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
Titles should delete the activity for a user as soon as they leave the multiplayer activity. <br /><br /> If the title does not delete a user's activity, it is automatically cleared by a presence check. <br /><br /> To get the result of the asynchronous operation, call [XAsyncGetStatus](../../../../system/xasync/functions/xasyncgetstatus.md) inside the `XAsyncBlock` callback or after `XAsyncBlock` is complete. <br /><br /> To see how this function is used, see "Deleting an activity" in the [Activities](../../../../../services/multiplayer/mpa/how-to/live-mpa-client-how-to.md#activities) section of [Example code for Multiplayer Activity](../../../../../services/multiplayer/mpa/how-to/live-mpa-client-how-to.md). <br /><br /> For more information about multiplayer activities, see [Activities](../../../../../services/multiplayer/mpa/concepts/live-mpa-activities.md).

## REST Call  
  
Calls DELETE /titles/{titleId}/users/{xuid}/activites

## Requirements  
  
**Header:** multiplayer_activity_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_activity_c](../multiplayer_activity_c_members.md)  
  
  
