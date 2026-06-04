---
author: elroyc
title: "XGameActivationAcceptPendingInvite"
description: "Accepts a pending game invite."
kindex: XGameActivationAcceptPendingInvite
ms.topic: reference
ms.author: elroyc
edited: 03/30/2026
applies-to: pc-gdk
ms.date: '03/30/2026'
permissioned-type: public
---

# XGameActivationAcceptPendingInvite

Accepts a pending game invite.  

## Syntax  
  
```cpp
HRESULT XGameActivationAcceptPendingInvite(  
         const char* inviteUri  
)  
```  
  
### Parameters  
  
*inviteUri* &nbsp;&nbsp;\_In\_z\_  
Type: const char\*  

The invite URI received from an [XGameActivationCallback](xgameactivationcallback.md) with an activation type of `XGameActivationType::PendingGameInvite`.  

### Return value

Type: HRESULT
  
HRESULT success or error code.  
For a list of error codes, see [Error Codes](../../../errorcodes.md).  
  
## Remarks  
  
Call **XGameActivationAcceptPendingInvite** after the user has accepted a pending game invite. When a `PendingGameInvite` activation is received through the [XGameActivationCallback](xgameactivationcallback.md), the game should present UI to allow the user to accept or reject the invite. If the user accepts, call this function with the `inviteUri` from the [XGameActivationInfo](../structs/xgameactivationinfo.md) structure. This triggers a subsequent activation callback with the `AcceptedGameInvite` type.

For an example of handling pending invites, see the remarks section of the [XGameActivationCallback](xgameactivationcallback.md#remarks) topic.  

## Requirements  
  
**Header:** XGameActivation.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameActivation](../xgameactivation_members.md)
  
[XGameActivationCallback](xgameactivationcallback.md)
