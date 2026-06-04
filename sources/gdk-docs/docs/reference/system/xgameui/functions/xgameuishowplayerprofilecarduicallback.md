---
author: annieabraham24
title: "XGameUiShowPlayerProfileCardUiCallback"
description: "Signature for a XGameUiShowPlayerProfileCardAsync callback."
kindex: XGameUiShowPlayerProfileCardUiCallback
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiShowPlayerProfileCardUiCallback

Signature for a XGameUiShowPlayerProfileCardAsync callback.

## Syntax

```cpp
void CALLBACK XGameUiShowPlayerProfileCardUiCallback(
XGameUiCallbackHandle callbackHandle,
XTaskQueueHandle queue,
XUserHandle requestingUser,
uint64_t targetPlayer,
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

*targetPlayer*  
Type: uint64_t

User ID of the player whose profile card is being shown.

*context*  
Type: void*

Pointer to dev-provided context.

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  
[XGameUiSetUiCallbacks](xgameuisetuicallbacks.md)
