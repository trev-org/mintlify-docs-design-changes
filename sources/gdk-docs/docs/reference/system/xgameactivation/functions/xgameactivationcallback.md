---
author: elroyc
title: "XGameActivationCallback"
description: "A callback an application defines for activation events."
kindex: XGameActivationCallback
ms.topic: reference
ms.author: elroyc
edited: 03/30/2026
applies-to: pc-gdk
ms.date: '03/30/2026'
permissioned-type: public
---

# XGameActivationCallback  

A callback an application defines for activation events.  

## Syntax  
  
```cpp
void CALLBACK XGameActivationCallback(  
         void* context,  
         const XGameActivationInfo* activationInfo  
)  
```  
  
### Parameters  
  
*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  

The context passed to [XGameActivationRegisterForEvent](xgameactivationregisterforevent.md).  

*activationInfo* &nbsp;&nbsp;\_In\_  
Type: [XGameActivationInfo](../structs/xgameactivationinfo.md)\*  

A pointer to an [XGameActivationInfo](../structs/xgameactivationinfo.md) structure that contains the activation information. The `type` field indicates the kind of activation, and the corresponding union field contains the relevant data.  

### Return value

Type: void

## Remarks  
  
To register a callback for activation events, call [XGameActivationRegisterForEvent](xgameactivationregisterforevent.md). The function uses a pointer to an **XGameActivationCallback** as an argument.

To unregister a callback for activation events, call [XGameActivationUnregisterForEvent](xgameactivationunregisterforevent.md).

The callback receives an [XGameActivationInfo](../structs/xgameactivationinfo.md) structure. Check the `type` field to determine the kind of activation and handle each type appropriately.

> [!NOTE]
> This callback replaces both `XGameProtocolActivationCallback` and `XGameInviteEventCallback`. See [XGameActivation](../xgameactivation_members.md) for migration guidance.  

The following code sample registers for an activation callback and handles all activation types.

```cpp
#include <XTaskQueue.h>
#include <XGameActivation.h>

XTaskQueueHandle g_taskQueue;
XTaskQueueRegistrationToken g_activationToken;

void CALLBACK OnActivation(void* context, const XGameActivationInfo* activationInfo)
{
    switch (activationInfo->type)
    {
    case XGameActivationType::Protocol:
        // Perform your game action based on activationInfo->protocolUri
        HandleProtocolActivation(activationInfo->protocolUri);
        return;

    case XGameActivationType::File:
        // e.g. Load the game file; activationInfo->file
        HandleFileActivation(activationInfo->file);
        return;

    case XGameActivationType::PendingGameInvite:
        // Game has received a game invite. Handle it by giving the user the option to
        // accept or reject the invite via UI.
        {
            bool userAcceptsInvite = HandlePendingGameInviteWithUI(activationInfo->inviteUri);
            if (userAcceptsInvite)
            {
                XGameActivationAcceptPendingInvite(activationInfo->inviteUri);
            }
        }
        return;

    case XGameActivationType::AcceptedGameInvite:
        // e.g. Join the game session that we are invited to
        HandleGameInvite(activationInfo->inviteUri);
        return;

    default:
        // Other unknown activation types. Just ignore.
        return;
    }
}

void InitializeGame()
{
    XGameActivationRegisterForEvent(g_taskQueue, nullptr, OnActivation, &g_activationToken);
}

void ShutdownGame()
{
    XGameActivationUnregisterForEvent(g_activationToken, true);
}
```
  
## Requirements  
  
**Header:** XGameActivation.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XGameActivation](../xgameactivation_members.md)
  
[XGameActivationRegisterForEvent](xgameactivationregisterforevent.md)

[XGameActivationUnregisterForEvent](xgameactivationunregisterforevent.md)

[XGameActivationInfo](../structs/xgameactivationinfo.md)

[XGameActivationType](../enums/xgameactivationtype.md)
