---
author: elroyc
title: "XGameActivationInfo"
description: "Contains the activation information passed to the activation callback."
kindex: XGameActivationInfo
ms.topic: reference
ms.author: elroyc
edited: 03/30/2026
applies-to: pc-gdk
ms.date: '03/30/2026'
permissioned-type: public
---

# XGameActivationInfo  
  
Contains the activation information passed to the activation callback.  
  
## Syntax  
  
```cpp
struct XGameActivationInfo  
{  
    XGameActivationType type;  
    union  
    {  
        const char* protocolUri;  
        const char* file;  
        const char* inviteUri;  
    };  
};  
```  
  
### Members  
  
*type*  
Type: [XGameActivationType](../enums/xgameactivationtype.md)  
  
The type of activation that occurred. Determines which field of the union contains valid data.  
  
*protocolUri*  
Type: const char\*  
  
The protocol URI that activated the game. Valid when `type` is `XGameActivationType::Protocol`.  
  
*file*  
Type: const char\*  
  
The file path that activated the game. Valid when `type` is `XGameActivationType::File`.  
  
*inviteUri*  
Type: const char\*  
  
The invite URI for the game session. Valid when `type` is `XGameActivationType::PendingGameInvite` or `XGameActivationType::AcceptedGameInvite`.  
  
## Remarks  
  
The **XGameActivationInfo** structure is passed to the [XGameActivationCallback](../functions/xgameactivationcallback.md) when an activation event occurs. The `type` field indicates the kind of activation, and the corresponding union field contains the relevant data.  
  
When the activation type is `PendingGameInvite`, the game should present UI to allow the user to accept or reject the invite. If the user accepts, call [XGameActivationAcceptPendingInvite](../functions/xgameactivationacceptpendinginvite.md) with the `inviteUri`. This triggers a subsequent callback with the `AcceptedGameInvite` type.  
  
## Requirements  
  
**Header:** XGameActivation.h  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
  
[XGameActivation](../xgameactivation_members.md)  
[XGameActivationType](../enums/xgameactivationtype.md)  
[XGameActivationCallback](../functions/xgameactivationcallback.md)  
[XGameActivationAcceptPendingInvite](../functions/xgameactivationacceptpendinginvite.md)  
