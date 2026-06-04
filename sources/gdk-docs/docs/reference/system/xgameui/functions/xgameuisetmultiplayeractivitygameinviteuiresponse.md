---
author: yungcomputerchair
title: "XGameUiSetMultiplayerActivityGameInviteUiResponse"
description: "Completes the call to XGameUiShowMultiplayerActivityGameInviteAsync."
kindex: XGameUiSetMultiplayerActivityGameInviteUiResponse
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '11/18/2025'
permissioned-type: public
---

# XGameUiSetMultiplayerActivityGameInviteUiResponse

Completes the call to XGameUiShowMultiplayerActivityGameInviteAsync.

## Syntax

```cpp
STDAPI  XGameUiSetMultiplayerActivityGameInviteUiResponse(
     XGameUiCallbackHandle callbackHandle
) noexcept;
```

### Parameters

*callbackHandle*  
Type: XGameUiCallbackHandle

The handle for this callback invocation.

### Return value

Type: STDAPI

HRESULT success or error code of the call.

## Requirements

**Header:** XGameUi.h

**Supported platforms:** Supported only on Steam Deck

## See also

[XGameUI](../xgameui_members.md)  

[XGameUiShowMultiplayerActivityGameInviteAsync](xgameuishowmultiplayeractivitygameinviteasync.md)
