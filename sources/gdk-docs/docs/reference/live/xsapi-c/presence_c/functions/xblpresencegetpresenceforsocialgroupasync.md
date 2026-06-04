---
author: XBL
title: "XblPresenceGetPresenceForSocialGroupAsync"
description: "Gets presence info for a specific group of users."
kindex: XblPresenceGetPresenceForSocialGroupAsync
ms.author: tculotta
ms.topic: reference
security: public
edited: 00/00/0000
applies-to: pc-gdk
---

# XblPresenceGetPresenceForSocialGroupAsync  

Gets presence info for a specific group of users.  

## Syntax  
  
```cpp
HRESULT XblPresenceGetPresenceForSocialGroupAsync(  
         XblContextHandle xblContextHandle,  
         const char* socialGroupName,  
         uint64_t* socialGroupOwnerXuid,  
         XblPresenceQueryFilters* filters,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*xblContextHandle* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*socialGroupName* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
The name of the group of users to get presence for. This can be either "Favorites" to retrieve information about favorites, "People" to retrieve information about mutual friends and people a user follows, or "Friends" to retrieve information about mutual friends.  
  
*socialGroupOwnerXuid* &nbsp;&nbsp;\_In\_opt\_  
Type: uint64_t*  
  
The user whose group should be targeted. If the input is null, current user will be used.  
  
*filters* &nbsp;&nbsp;\_In\_opt\_  
Type: [XblPresenceQueryFilters*](../structs/xblpresencequeryfilters.md)  
  
Optional filters struct to filter results.  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
To retrieve the result of calling XblPresenceGetPresenceForSocialGroupAsync, call [XblPresenceGetPresenceForSocialGroupResult](xblpresencegetpresenceforsocialgroupresult.md). To retrieve the required buffer size to hold the results of calling XblPresenceGetPresenceForSocialGroupAsync, call [XblPresenceGetPresenceForSocialGroupResultCount](xblpresencegetpresenceforsocialgroupresultcount.md).
  
## Requirements  
  
**Header:** presence_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[presence_c](../presence_c_members.md)  
  
  
