---
author: joannaleecy
title: "XblMultiplayerSetTransferHandleResult"
description: "Gets the result of a XblMultiplayerSetTransferHandleAsync operation."
kindex: XblMultiplayerSetTransferHandleResult
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSetTransferHandleResult  

Gets the result of a XblMultiplayerSetTransferHandleAsync operation.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSetTransferHandleResult(  
         XAsyncBlock* async,  
         XblMultiplayerSessionHandleId* handleId  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
*handleId* &nbsp;&nbsp;\_Out\_  
Type: [XblMultiplayerSessionHandleId*](../structs/xblmultiplayersessionhandleid.md)  
  
Passes back the multiplayer session handle ID. This handle holds the unique ID for a MPSD transfer handle.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
