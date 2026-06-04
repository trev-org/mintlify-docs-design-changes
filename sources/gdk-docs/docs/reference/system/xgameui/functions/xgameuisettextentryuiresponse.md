---
author: annieabraham24
title: "XGameUiSetTextEntryUiResponse"
description: "Sets the resulting text length & text to be returned by XGameUiShowTextEntryAsync."
kindex: XGameUiSetTextEntryUiResponse
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiSetTextEntryUiResponse

Sets the resulting text length and text to be returned by XGameUiShowTextEntryAsync

## Syntax

```cpp
STDAPI  XGameUiSetTextEntryUiResponse(
     XGameUiCallbackHandle callbackHandle,
     const char* response
) noexcept;
```

### Parameters

*callbackHandle*  
Type: XGameUiCallbackHandle

The handle for this callback invocation.

*response*  
Type: const char*

The UTF-8 string to be returned by XGameUiShowTextEntryResult for the corresponding invocation of XGameUiShowTextEntryAsync. The length of the string, in characters, will be returned by XGameUiShowTextEntryResultSize.

### Return value

Type: STDAPI

HRESULT success or error code of the call.

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  

[XGameUiShowTextEntryAsync](xgameuishowtextentryasync.md)
