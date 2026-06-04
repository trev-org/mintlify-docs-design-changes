---
author: annieabraham24
title: "XGameUiSetPlayerPickerUiResponse"
description: "Sets the results to be returned by XGameUiShowPlayerPickerResultCount and XGameUiShowPlayerPickerResult."
kindex: XGameUiSetPlayerPickerUiResponse
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XGameUiSetPlayerPickerUiResponse

Sets the results to be returned by XGameUiShowPlayerPickerResultCount and XGameUiShowPlayerPickerResult.

## Syntax

```cpp
STDAPI  XGameUiSetPlayerPickerUiResponse(
     XGameUiCallbackHandle callbackHandle,
     uint32_t playerCount,
     const uint64_t* players
) noexcept;
```

### Parameters

*callbackHandle*  
Type: XGameUiCallbackHandle

The handle for this callback invocation.

*playerCount*  
Type: uint32_t

The number of player IDs, to be returned by XGameUiShowPlayerPickerResultCount for the corresponding invocation of XGameUiShowPlayerPickerAsync.

*players*  
Type: const uint64_t*

Array of player IDs, of length `playerCount`, to be returned by XGameUiShowPlayerPickerResult.

### Return value

Type: STDAPI

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  
[XGameUiShowPlayerPickerAsync](xgameuishowplayerpickerasync.md)
