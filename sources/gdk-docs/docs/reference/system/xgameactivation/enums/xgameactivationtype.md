---
author: elroyc
title: "XGameActivationType"
description: "Specifies the type of activation that occurred."
kindex: XGameActivationType
ms.topic: reference
ms.author: elroyc
edited: 03/30/2026
applies-to: pc-gdk
ms.date: '03/30/2026'
permissioned-type: public
---

# XGameActivationType  
  
Specifies the type of activation that occurred.  
  
## Syntax  
  
```cpp
enum class XGameActivationType : uint32_t  
{  
    Protocol = 0,  
    File = 1,  
    PendingGameInvite = 2,  
    AcceptedGameInvite = 3  
}  
```  
  
## Constants  
  
| Constant | Description |  
| -------- | ----------- |  
| Protocol | The game was activated via a custom protocol URI. The `protocolUri` field of [XGameActivationInfo](../structs/xgameactivationinfo.md) contains the activation URI. For more information, see [Protocol activation](../../../../gdk-dev/overviews/protocolactivation.md). |  
| File | The game was activated via a file association. The `file` field of [XGameActivationInfo](../structs/xgameactivationinfo.md) contains the file path. For more information, see [File type activation](../../../../gdk-dev/overviews/filetypeactivation.md). |  
| PendingGameInvite | The game received a game invite that hasn't yet been accepted. The `inviteUri` field of [XGameActivationInfo](../structs/xgameactivationinfo.md) contains the invite URI. The game should present UI to the user to accept or reject the invite, and call [XGameActivationAcceptPendingInvite](../functions/xgameactivationacceptpendinginvite.md) if the user accepts. |  
| AcceptedGameInvite | The game was activated because the user accepted a game invite. The `inviteUri` field of [XGameActivationInfo](../structs/xgameactivationinfo.md) contains the invite URI. |  
  
## Remarks  
  
**XGameActivationType** is used by the [XGameActivationInfo](../structs/xgameactivationinfo.md) structure to indicate what kind of activation triggered the [XGameActivationCallback](../functions/xgameactivationcallback.md). The activation type determines which field of the `XGameActivationInfo` union contains valid data.  
  
This enum is designed to be extensible. Future GDK releases may add additional activation types. Games should handle unknown values gracefully by ignoring them.  
  
## Requirements  
  
**Header:** XGameActivation.h  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
  
[XGameActivation](../xgameactivation_members.md)  
[XGameActivationInfo](../structs/xgameactivationinfo.md)  
[XGameActivationCallback](../functions/xgameactivationcallback.md)  
