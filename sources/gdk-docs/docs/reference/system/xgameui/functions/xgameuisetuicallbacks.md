---
author: annieabraham24
title: "XGameUiSetUiCallbacks"
description: "Sets the UI callbacks defined by the developer."
kindex: XGameUiSetUiCallbacks
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiSetUiCallbacks

Sets the UI callbacks defined by the developer.

## Syntax

```cpp
STDAPI  XGameUiSetUiCallbacks(
    const XGameUiUiCallbacks* callbacks,
    bool useSystemUiIfAvailable
) noexcept;
```

### Parameters

*callbacks*  
Type: const XGameUiUiCallbacks*

Pointer to the struct containing the handlers and contexts for each UI the developer would like to handle.

*useSystemUiIfAvailable*  
Type: bool

Whether system UI should be used instead of developer callbacks if available.

### Return value

Type: STDAPI

## Remarks

All callbacks are set at the same time and override whatever ones may have been previously set.

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  
[XGameUiUiCallbacks](../structs/xgameuiuicallbacks.md)
