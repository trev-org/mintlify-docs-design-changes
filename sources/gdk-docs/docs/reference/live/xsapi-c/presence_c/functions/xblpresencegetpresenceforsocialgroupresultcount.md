---
author: joannaleecy
title: "XblPresenceGetPresenceForSocialGroupResultCount"
description: "Get result count for an XblPresenceGetPresenceForSocialGroupAsync call."
kindex: XblPresenceGetPresenceForSocialGroupResultCount
ms.topic: reference
edited: 10/26/2022
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPresenceGetPresenceForSocialGroupResultCount  

Get result count for an [XblPresenceGetPresenceForSocialGroupAsync](xblpresencegetpresenceforsocialgroupasync.md) call.

## Syntax  
  
```cpp
HRESULT XblPresenceGetPresenceForSocialGroupResultCount(  
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
[XblPresenceGetPresenceForSocialGroupResult](xblpresencegetpresenceforsocialgroupresult.md)  
[presence_c](../presence_c_members.md)  
  
  
