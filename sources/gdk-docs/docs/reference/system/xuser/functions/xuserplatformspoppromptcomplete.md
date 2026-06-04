---
author: annieabraham24
title: "XUserPlatformSpopPromptComplete"
description: "Signal to XUser that the user finished interacting with the SPOP prompt."
kindex: XUserPlatformSpopPromptComplete
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XUserPlatformSpopPromptComplete

Signal to XUser that the user finished interacting with the SPOP prompt.

## Syntax

```cpp
STDAPI  XUserPlatformSpopPromptComplete(
    _In_ XUserPlatformOperation operation,
    _In_ XUserPlatformSpopOperationResult result
) noexcept;
```

### Parameters

*operation* &nbsp;&nbsp;\_In\_  
Type: XUserPlatformOperation

The handle for this operation.

*result* &nbsp;&nbsp;\_In\_  
Type: UserPlatformSpopOperationResult

The result of the user interaction

### Return value

Type: HRESUSTDAPI LT

Result code for this API operation.

## Remarks

This should be called after a XUserPlatformSpopPromptEventHandler when the user makes a choice or if a failure occurs.

## Requirements

**Header:** XUser.h  

**Library:** xgameruntime.lib  

**Supported platforms:** Supported on Steam Deck

## See also

[XUser](../xuser_members.md)

[XUserPlatformSpopPromptEventHandler](xuserplatformspopprompteventhandler.md)

[XUserPlatformSpopPromptSetEventHandlers](xuserplatformspoppromptseteventhandlers.md)

[XUserPlatformSpopPromptClearEventHandler](xuserplatformspoppromptcleareventhandler.md)

[XUserPlatformSpopOperationResult](../enums/xuserplatformspopoperationresult.md)
