---
author: joannaleecy
title: "XblPresenceStopTrackingAdditionalTitles"
description: "Configures the list of titles for which real-time title presence will be tracked. Title presence updates for the specified titles will no longer be received."
kindex: XblPresenceStopTrackingAdditionalTitles
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPresenceStopTrackingAdditionalTitles  

Configures the list of titles for which real-time title presence will be tracked. Title presence updates for the specified titles will no longer be received.  

## Syntax  
  
```cpp
HRESULT XblPresenceStopTrackingAdditionalTitles(  
         XblContextHandle xblContextHandle,  
         const uint32_t* titleIds,  
         size_t titleIdsCount  
)  
```  
  
### Parameters  
  
*xblContextHandle* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context for the local user.  
  
*titleIds* &nbsp;&nbsp;\_In\_  
Type: uint32_t*  
  
Array of title IDs to remove from the list of tracked titles.  
  
*titleIdsCount* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
Length of the titleIds array.    
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** presence_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[presence_c](../presence_c_members.md)  
  
  
