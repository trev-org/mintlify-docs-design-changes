---
author: annieabraham24
title: "XUserPlatformRemoteConnectCancelPrompt"
description: "Signal to XUser that the remote connect prompt has been dismissed by the user."
kindex: XUserPlatformRemoteConnectCancelPrompt
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/20/2025'
permissioned-type: public
---

# XUserPlatformRemoteConnectCancelPrompt

Signal to XUser that the remote connect prompt has been dismissed by the user.

## Syntax

```cpp
STDAPI  XUserPlatformRemoteConnectCancelPrompt(
    _In_ XUserPlatformOperation operation
) noexcept;
```

### Parameters

*operation*  
Type: XUserPlatformOperation

The handle for this operation

### Return value

Type: HRESULT

Result code for this API operation

## Remarks

This should be called after a XUserPlatformRemoteConnectShowPromptEventHandler if the user dismisses the prompt.

The whole remote connect process will be cancelled and the starting XUserAdd operation will complete with E_ABORT.

TheXUserPlatformRemoteConnectClosePromptEventHandler will be called as normal.

## Requirements

**Header:** XUser.h  

**Library:** xgameruntime.lib  

**Supported platforms:** Supported on Steam Deck

## See also

[`XUserPlatformRemoteConnectShowPromptEventHandler`](xuserplatformremoteconnectshowprompteventhandler.md)

[`XUserPlatformRemoteConnectClosePromptEventHandler`](xuserplatformremoteconnectcloseprompteventhandler.md)

[`XUserPlatformRemoteConnectSetEventHandlers`](xuserplatformremoteconnectseteventhandlers.md)

[`XUserPlatformRemoteConnectEventHandlers`](../structs/xuserplatformremoteconnecteventhandlers.md)
