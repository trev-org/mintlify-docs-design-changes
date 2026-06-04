---
author: joannaleecy
title: "XblPresenceGetPresenceForMultipleUsersResultCount"
description: "Get result count for an XblPresenceGetPresenceForMultipleUsersAsync call."
kindex: XblPresenceGetPresenceForMultipleUsersResultCount
ms.topic: reference
edited: 10/26/2022
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPresenceGetPresenceForMultipleUsersResultCount  

Get result count for an [XblPresenceGetPresenceForMultipleUsersAsync](xblpresencegetpresenceformultipleusersasync.md) call.  

## Syntax  
  
```cpp
HRESULT XblPresenceGetPresenceForMultipleUsersResultCount(  
         XAsyncBlock* async,  
         size_t* resultCount  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
*resultCount* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
Passes back the number of presence records.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** presence_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[XblPresenceGetPresenceForMultipleUsersResult](xblpresencegetpresenceformultipleusersresult.md)  
[presence_c](../presence_c_members.md)  
  
  
