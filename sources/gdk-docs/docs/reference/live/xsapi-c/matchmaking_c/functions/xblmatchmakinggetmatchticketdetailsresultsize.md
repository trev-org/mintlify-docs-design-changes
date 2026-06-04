---
author: joannaleecy
title: "XblMatchmakingGetMatchTicketDetailsResultSize"
description: "Get the result size for an XblMatchmakingGetMatchTicketDetailsAsync call."
kindex: XblMatchmakingGetMatchTicketDetailsResultSize
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMatchmakingGetMatchTicketDetailsResultSize  

Get the result size for an XblMatchmakingGetMatchTicketDetailsAsync call.  

## Syntax  
  
```cpp
HRESULT XblMatchmakingGetMatchTicketDetailsResultSize(  
         XAsyncBlock* asyncBlock,  
         size_t* resultSizeInBytes  
)  
```  
  
### Parameters  
  
*asyncBlock* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
*resultSizeInBytes* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
The size in bytes required to store the Create Match Ticket result.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** matchmaking_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[matchmaking_c](../matchmaking_c_members.md)  
  
  
