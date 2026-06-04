---
author: joannaleecy
title: "XblPresenceGetPresenceForMultipleUsersAsync"
description: "Gets presence info for multiple users."
kindex: XblPresenceGetPresenceForMultipleUsersAsync
ms.topic: reference
edited: 10/26/2022
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPresenceGetPresenceForMultipleUsersAsync  

Gets presence info for multiple users.  

## Syntax  
  
```cpp
HRESULT XblPresenceGetPresenceForMultipleUsersAsync(  
         XblContextHandle xblContextHandle,  
         uint64_t* xuids,  
         size_t xuidsCount,  
         XblPresenceQueryFilters* filters,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*xblContextHandle* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*xuids* &nbsp;&nbsp;\_In\_  
Type: uint64_t*  
  
The Xbox User IDs of the users to get presence for.  
  
*xuidsCount* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
Size of the xuids array.  
  
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

To retrieve the result of calling XblPresenceGetPresenceForMultipleUsersAsync, call [XblPresenceGetPresenceForMultipleUsersResult](xblpresencegetpresenceformultipleusersresult.md).

To retrieve the required buffer size to hold the results of calling XblPresenceGetPresenceForMultipleUsersAsync, call [XblPresenceGetPresenceForMultipleUsersResultCount](xblpresencegetpresenceformultipleusersresultcount.md).

## Requirements  
  
**Header:** presence_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[presence_c](../presence_c_members.md)  
  
  
