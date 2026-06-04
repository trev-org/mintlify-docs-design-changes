---
author: annieabraham24
title: "XGameUiShowMultiplayerActivityGameInviteUiCallback"
description: "Signature for a XGameUiShowMultiplayerActivityGameInviteAsync callback."
kindex: XGameUiShowMultiplayerActivityGameInviteUiCallback
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiShowMultiplayerActivityGameInviteUiCallback

Signature for a XGameUiShowMultiplayerActivityGameInviteAsync callback.

## Syntax

```cpp
void CALLBACK XGameUiShowMultiplayerActivityGameInviteUiCallback(
 XGameUiCallbackHandle callbackHandle,
 XTaskQueueHandle queue,
 XUserHandle requestingUser
 void* context,
);
```

### Parameters

*callbackHandle*  
Type: XGameUiCallbackHandle

Handle for this callback invocation.

*queue*  
Type: XTaskQueueHandle

insert Handle to the task queue that the UI callback was executed on.

*requestingUser*  
Type: XUserHandle

Handle for the user invoking the UI.

*context*  
Type: void*

Pointer to dev-provided context.

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  
[XGameUiSetUiCallbacks](xgameuisetuicallbacks.md)
