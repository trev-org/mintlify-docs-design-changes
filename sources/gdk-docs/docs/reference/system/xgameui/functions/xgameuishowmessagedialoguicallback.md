---
author: annieabraham24
title: "XGameUiShowMessageDialogUiCallback"
description: "Signature for a XGameUiShowMessageDialogAsync callback."
kindex: XGameUiShowMessageDialogUiCallback
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiShowMessageDialogUiCallback

Signature for a XGameUiShowMessageDialogAsync callback.

## Syntax

```cpp
void CALLBACK XGameUiShowMessageDialogUiCallback(
    
    XGameUiCallbackHandle callbackHandle,
    XTaskQueueHandle queue,
    const char* titleText,
    const char* contentText,
    const char* firstButtonText,
    const char* secondButtonText,
    const char* thirdButtonText,
    XGameUiMessageDialogButton defaultButton,
    XGameUiMessageDialogButton cancelButton,
    void* context.
);
```

## Parameters

*callbackHandle*  
Type: XGameUiCallbackHandle

Handle for this callback invocation.

*queue*  
Type: XTaskQueueHandle

insert Handle to the task queue that the UI callback was executed on.

*titleText*  
Type: const char*

The text title of the message dialog.

*contentText*  
Type: const char*

The text displayed inside of the message dialog.

*firstButtonText*  
Type: const char*

The text displayed on the first button of the message dialog.

*secondButtonText*  
Type: const char*

The text displayed on the second button of the message dialog.

*thirdButtonText*  
Type: const char*

The text displayed on the third button of the message dialog.

*defaultButton*  
Type: XGameUiMessageDialogButton

Indicates which button is selected by default when the message dialog is first displayed.

*cancelButton*  
Type: XGameUiMessageDialogButton

Indicates which button represents the cancel action.

*context*  
Type: void*

Pointer to dev-provided context.

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  
[XGameUiSetUiCallbacks](xgameuisetuicallbacks.md)
