---
author: joannaleecy
title: "XblMultiplayerSessionConstantsSetCapabilities"
description: "Sets the capabilities constants for the session. This can only be set when creating a new session."
kindex: XblMultiplayerSessionConstantsSetCapabilities
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionConstantsSetCapabilities  

Sets the capabilities constants for the session. This can only be set when creating a new session.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionConstantsSetCapabilities(  
         XblMultiplayerSessionHandle handle,  
         XblMultiplayerSessionCapabilities capabilities  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*capabilities* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionCapabilities](../structs/xblmultiplayersessioncapabilities.md)  
  
A collection of MultiplayerSessionCapabilities flags that apply to the MultiplayerSessionConstant's capabilities JSON object.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
