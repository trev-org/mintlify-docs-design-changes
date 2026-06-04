---
author: joannaleecy
title: "XblMultiplayerSessionHostCandidates"
description: "Host candidates are an ordered list of device tokens, ordered by preference as specified by XblMultiplayerMetrics in the session constants."
kindex: XblMultiplayerSessionHostCandidates
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionHostCandidates  

Host candidates are an ordered list of device tokens, ordered by preference as specified by XblMultiplayerMetrics in the session constants.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionHostCandidates(  
         XblMultiplayerSessionHandle handle,  
         const XblDeviceToken** deviceTokens,  
         size_t* deviceTokensCount  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*deviceTokens* &nbsp;&nbsp;\_Out\_  
Type: [XblDeviceToken**](../structs/xbldevicetoken.md)  
  
Passes back a pointer to the array of candidate device tokens. The memory for the pointer will remain valid for the life of the XblMultiplayerSessionHandle object until it is closed.  
  
*deviceTokensCount* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
Passes back the size of the deviceTokens array.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
