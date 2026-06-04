---
author: annieabraham24
title: "XGameUiShowErrorDialogUiCallback"
description: "Signature for a XGameUiShowErrorDialogAsync callback."
kindex: XGameUiShowErrorDialogUiCallback
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiShowErrorDialogUiCallback

Signature for a XGameUiShowErrorDialogAsync callback.

## Syntax

```cpp
void CALLBACK XGameUiShowErrorDialogUiCallback(
     
     XGameUiCallbackHandle callbackHandle,
     XTaskQueueHandle queue,
     HRESULT errorCode,
     const char* serviceContext,
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

*errorCode*  
Type: HRESULT

Error code to display to the user.

*serviceContext*  
Type: const char*

The service defined error string to display for the error.

*context*  
Type: void*

Pointer to dev-provided context.

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  
[XGameUiSetUiCallbacks](xgameuisetuicallbacks.md)
