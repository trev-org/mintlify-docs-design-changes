---
author: joannaleecy
title: "XblPresenceGetPresenceAsync"
description: "Gets presence info for a specific Xbox User Id."
kindex: XblPresenceGetPresenceAsync
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPresenceGetPresenceAsync  

Gets presence info for a specific Xbox User Id.  

## Syntax  
  
```cpp
HRESULT XblPresenceGetPresenceAsync(  
         XblContextHandle xblContextHandle,  
         uint64_t xuid,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*xblContextHandle* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*xuid* &nbsp;&nbsp;\_In\_  
Type: uint64_t  
  
The Xbox User ID of the user to get presence for.  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** presence_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[presence_c](../presence_c_members.md)  
  
  
