---
author: joannaleecy
title: "XblMatchmakingCreateMatchTicketResult"
description: "Get the result for an XblMatchmakingCreateMatchTicketAsync call."
kindex: XblMatchmakingCreateMatchTicketResult
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMatchmakingCreateMatchTicketResult  

Get the result for an XblMatchmakingCreateMatchTicketAsync call.  

## Syntax  
  
```cpp
HRESULT XblMatchmakingCreateMatchTicketResult(  
         XAsyncBlock* asyncBlock,  
         XblCreateMatchTicketResponse* resultPtr  
)  
```  
  
### Parameters  
  
*asyncBlock* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
*resultPtr* &nbsp;&nbsp;\_Out\_  
Type: [XblCreateMatchTicketResponse*](../structs/xblcreatematchticketresponse.md)  
  
A caller allocated struct to be filled with the match ticket results.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** matchmaking_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[matchmaking_c](../matchmaking_c_members.md)  
  
  
