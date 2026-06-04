---
author: yungcomputerchair
title: "XGameUiSetAchievementsUiResponse"
description: "Completes the call to XGameUiShowAchievementsAsync."
kindex: XGameUiSetAchievementsUiResponse
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '11/18/2025'
permissioned-type: public
---

# XGameUiSetAchievementsUiResponse

Completes the call to XGameUiShowAchievementsAsync.

## Syntax

```cpp
STDAPI  XGameUiSetAchievementsUiResponse(
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

[XGameUiShowAchievementsAsync](xgameuishowachievementsasync.md)
