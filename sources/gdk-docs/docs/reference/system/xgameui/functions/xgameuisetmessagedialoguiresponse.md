---
author: annieabraham24
title: "XGameUiSetMessageDialogUiResponse"
description: "Sets the result XGameUiMessageDialogButton value to be returned by XGameUiShowMessageDialogResult."
kindex: XGameUiSetMessageDialogUiResponse
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiSetMessageDialogUiResponse

Sets the result XGameUiMessageDialogButton value to be returned by XGameUiShowMessageDialogResult.

## Syntax

```cpp
HRESULT XGameUiSetMessageDialogUiResponse(
     XGameUiCallbackHandle callbackHandle,
     XGameUiMessageDialogButton response
) noexcept;
```

### Parameters

*callbackHandle*  
Type: XGameUiCallbackHandle

The handle for this callback invocation.

*response**  
Type: XGameUiMessageDialogButton

The value to return from XGameUiShowMessageDialogResult for the corresponding invocation of XGameUiShowMessageDialogAsync.

### Return value

Type: STDAPI

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

See also

[XGameUI](../xgameui_members.md)  
[XGameUiShowMessageDialogAsync](xgameuishowmessagedialogasync.md)
