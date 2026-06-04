---
author: annieabraham24
title: "XGameUiShowSendGameInviteUiCallback"
description: "Signature for a XGameUiShowSendGameInviteAsync callback."
kindex: XGameUiShowSendGameInviteUiCallback
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiShowSendGameInviteUiCallback

Signature for a XGameUiShowSendGameInviteAsync callback.

## Syntax

```cpp
void CALLBACK XGameUiShowSendGameInviteUiCallback(
    XGameUiCallbackHandle callbackHandle,
    XTaskQueueHandle queue,
    XUserHandle requestingUser,
    const char* sessionConfigurationId,
    const char* sessionTemplateName,
    const char* sessionId,
    const char* invitationText,
    const char* customActivationContext,
    void* context
);
```

### Parameters

*callbackHandle*  
Type: XGameUiCallbackHandle

Handle for this callback invocation.

*queue*  
Type: XTaskQueueHandle

Handle to the task queue that the UI callback was executed on.

*requestingUser*  
Type: XUserHandle

Handle for the user invoking the UI.

*sessionConfigurationId*  
Type: const char*

Specifies a string that indicates the title's service configuration ID.

*sessionTemplateName*  
Type: const char*

Specifies a string that indicates the name of the multiplayer session template.

*sessionId*  
Type: const char*

Specifies a string that indicates the ID of the multiplayer session to invite people to.

*invitationText*  
Type: const char*

Specifies a string that indicates the custom invitation string ID. See XGameUiShowSendGameInviteAsync.

*customActivationContext*  
Type: const char*

The custom activation context that is available to the invitee in the activation URI for an invite. See XGameUiShowSendGameInviteAsync.

*context*  
Type: void*

Pointer to dev-provided context.

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  
[XGameUiSetUiCallbacks](xgameuisetuicallbacks.md)
