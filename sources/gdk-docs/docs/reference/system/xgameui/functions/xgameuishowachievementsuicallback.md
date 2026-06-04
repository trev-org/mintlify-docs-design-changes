---
author: annieabraham24
title: "XGameUiShowAchievementsUiCallback"
description: "Signature for a XGameUiShowAchievementsAsync callback."
kindex: XGameUiShowAchievementsUiCallback
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiShowAchievementsUiCallback

Signature for a XGameUiShowAchievementsAsync callback.

## Syntax

```cpp
void CALLBACK XGameUiShowAchievementsUiCallback(
 XGameUiCallbackHandle callbackHandle,
 XTaskQueueHandle queue, 
 XUserHandle requestingUser,
 uint32_t titleId,
 void* context
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

*titleId*  
Type: uint32_t

The ID of the title that the player is requesting achievements for.

*context*  
Type: void*

Pointer to dev-provided context.

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  
[XGameUiSetUiCallbacks](xgameuisetuicallbacks.md)
