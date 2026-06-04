---
author: joannaleecy
title: "XblMultiplayerGetActivitiesForUsersResultCount"
description: "Gets the number of XblMultiplayerActivityDetails objects returned."
kindex: XblMultiplayerGetActivitiesForUsersResultCount
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerGetActivitiesForUsersResultCount  

Gets the number of [XblMultiplayerActivityDetails](../structs/xblmultiplayeractivitydetails.md) objects returned.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerGetActivitiesForUsersResultCount(  
         XAsyncBlock* async,  
         size_t* activityCount  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The `XAsyncBlock` for this operation.  
  
*activityCount* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
The number of activity objects returned.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
