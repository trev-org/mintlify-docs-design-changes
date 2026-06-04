---
author: annieabraham24
title: "XGameUiShowTextEntryUiCallback"
description: "Signature for a XGameUiShowTextEntryAsync callback."
kindex: XGameUiShowTextEntryUiCallback
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiShowTextEntryUiCallback

Signature for a XGameUiShowTextEntryAsync callback.

## Syntax

```cpp
void CALLBACK XGameUiShowTextEntryUiCallback(
    
    XGameUiCallbackHandle callbackHandle,
    XTaskQueueHandle queue,
    const char* titleText,
    const char* descriptionText,
    const char* defaultText,
    XGameUiTextEntryInputScope inputScope,
    uint32_t maxTextLength,
    void* context
);
```

### Parameters

*callbackHandle*  
Type: XGameUiCallbackHandle

Handle for this callback invocation.

*queue*  
Type: XTaskQueueHandle

Insert Handle to the task queue that the UI callback was executed on.

*titleText*  
Type: const char*

The UTF-8 string to use for the title in the text entry UI.

*descriptionText*  
Type: const char*

The UTF-8 string to use for the description in the text entry UI.

*defaultText*  
Type: const char*

The UTF-8 string to initially populate the input in the text entry UI.

*inputScope*  
Type: XGameUiTextEntryInputScope

The input scope of the text entry, indicating the type of information that is allowed.

*maxTextLength*  
Type: uint32_t

The maximum allowable length of the UTF-8 string in characters.

*context*  
Type: void*

Pointer to dev-provided context.

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  
[XGameUiSetUiCallbacks](xgameuisetuicallbacks.md)
