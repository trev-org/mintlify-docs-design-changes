---
author: elroyc
title: "XGameActivation (API contents)"
description: "Reference material for XGameActivation APIs."
kindex: XGameActivation
ms.topic: article
ms.author: elroyc
edited: 03/30/2026
applies-to: pc-gdk
ms.date: '03/30/2026'
permissioned-type: public
---

# XGameActivation  
  
Reference material for XGameActivation APIs.  
  
> [!NOTE]
> The **XGameActivation** APIs replace the deprecated [XGameProtocol](../xgameprotocol/xgameprotocol_members.md) and [XGameInvite](../xgameinvite/xgameinvite_members.md) APIs. New games should use **XGameActivation** for protocol activation, file activation, and game invite handling. For migration guidance, see [Remarks](#remarks).  
  
  
## Functions  
  
| Function | Description |  
| --- | --- |  
| [XGameActivationCallback](functions/xgameactivationcallback.md) | A callback an application defines for activation events. |  
| [XGameActivationRegisterForEvent](functions/xgameactivationregisterforevent.md) | Registers a callback for activation events. |  
| [XGameActivationUnregisterForEvent](functions/xgameactivationunregisterforevent.md) | Unregisters a callback for activation events. |  
| [XGameActivationAcceptPendingInvite](functions/xgameactivationacceptpendinginvite.md) | Accepts a pending game invite. |  
  
  
## Structures  
  
| Structure | Description |  
| --- | --- |  
| [XGameActivationInfo](structs/xgameactivationinfo.md) | Contains the activation information passed to the activation callback. |  
  
  
## Enumerations  
  
| Enumeration | Description |  
| --- | --- |  
| [XGameActivationType](enums/xgameactivationtype.md) | Specifies the type of activation that occurred. |  
  
  
<a id="remarks"></a>  

## Remarks  
  
The **XGameActivation** APIs provide a unified callback mechanism for all forms of game activation, including protocol activation, file activation, and game invite handling. This replaces the need to separately register with [XGameProtocolRegisterForActivation](../xgameprotocol/functions/xgameprotocolregisterforactivation.md) and [XGameInviteRegisterForEvent](../xgameinvite/functions/xgameinviteregisterforevent.md).  
  
### Migrating from XGameProtocol and XGameInvite  
  
| Deprecated API | Replacement |  
| --- | --- |  
| `XGameProtocolRegisterForActivation` | [XGameActivationRegisterForEvent](functions/xgameactivationregisterforevent.md) |  
| `XGameProtocolUnregisterForActivation` | [XGameActivationUnregisterForEvent](functions/xgameactivationunregisterforevent.md) |  
| `XGameInviteRegisterForEvent` | [XGameActivationRegisterForEvent](functions/xgameactivationregisterforevent.md) |  
| `XGameInviteUnregisterForEvent` | [XGameActivationUnregisterForEvent](functions/xgameactivationunregisterforevent.md) |  
| `XGameInviteRegisterForPendingEvent` | [XGameActivationRegisterForEvent](functions/xgameactivationregisterforevent.md) |  
| `XGameInviteUnregisterForPendingEvent` | [XGameActivationUnregisterForEvent](functions/xgameactivationunregisterforevent.md) |  
| `XGameInviteAcceptPendingInvite` | [XGameActivationAcceptPendingInvite](functions/xgameactivationacceptpendinginvite.md) |  
  
  
## See also  
[System API reference](../gc-reference-system-toc.md)  
[Protocol activation](../../../gdk-dev/overviews/protocolactivation.md)  
[File type activation](../../../gdk-dev/overviews/filetypeactivation.md)
