---
author: annieabraham24
title: "XGameUiShowPlayerPickerUiCallback"
description: "Signature for a XGameUiShowPlayerPickerAsync callback."
kindex: XGameUiShowPlayerPickerUiCallback
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiShowPlayerPickerUiCallback

Signature for a XGameUiShowPlayerPickerAsync callback.

## Syntax

```cpp
void CALLBACK XGameUiShowPlayerPickerUiCallback(
 XGameUiCallbackHandle callbackHandle,
 XTaskQueueHandle queue,
 XGameUiPlayerPickerInfo* info,
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

*info*  
Type: XGameUiPlayerPickerInfo*

Struct encapsulating data to be used by the player picker UI.

*context*  
Type: void*

Pointer to dev-provided context.

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  
[XGameUiSetUiCallbacks](xgameuisetuicallbacks.md)
