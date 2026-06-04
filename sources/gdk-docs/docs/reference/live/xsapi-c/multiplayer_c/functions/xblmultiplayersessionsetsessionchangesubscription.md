---
author: joannaleecy
title: "XblMultiplayerSessionSetSessionChangeSubscription"
description: "Configures the set of session changes that this client will be subscribed to."
kindex: XblMultiplayerSessionSetSessionChangeSubscription
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionSetSessionChangeSubscription  

Configures the set of session changes that this client will be subscribed to.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionSetSessionChangeSubscription(  
         XblMultiplayerSessionHandle handle,  
         XblMultiplayerSessionChangeTypes changeTypes  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*changeTypes* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionChangeTypes](../enums/xblmultiplayersessionchangetypes.md)  
  
Or'd set of XblMultiplayerSessionChangeType enum values representing the change types to subscribe to.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
Set to MultiplayerSessionChangeTypes::None to clear the subscription.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
