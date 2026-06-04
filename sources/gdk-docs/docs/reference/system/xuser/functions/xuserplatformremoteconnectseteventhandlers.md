---
author: annieabraham24
title: "XUserPlatformRemoteConnectSetEventHandlers"
description: "Sets the remote connect event handlers"
kindex: XUserPlatformRemoteConnectSetEventHandlers
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/20/2025'
permissioned-type: public
---

# XUserPlatformRemoteConnectSetEventHandlers

Sets the remote connect event handlers

## Syntax

```cpp
HRESULT XUserPlatformRemoteConnectSetEventHandlers(
    _In_opt_ XTaskQueueHandle queue,
    _In_ XUserPlatformRemoteConnectEventHandlers* handlers
) noexcept;
```

### Parameters

*queue*  
Type: `XTaskQueueHandle` (optional)

The async queue on which the callbacks should be invoked.

*handlers*  
Type: [`XUserPlatformRemoteConnectEventHandlers`](../structs/xuserplatformremoteconnecteventhandlers.md)

The event handlers.

### Return value

Type: HRESULT

Result code for this API operation.

## Remarks

## Requirements

**Header:** XUser.h  

**Library:** xgameruntime.lib  

**Supported platforms:** Supported on Steam Deck

## See also

[`XUserPlatformRemoteConnectEventHandlers`](../structs/xuserplatformremoteconnecteventhandlers.md)

[`XUserPlatformRemoteConnectShowPromptEventHandler`](xuserplatformremoteconnectshowprompteventhandler.md)

[`XUserPlatformRemoteConnectClosePromptEventHandler`](xuserplatformremoteconnectcloseprompteventhandler.md)

[`XUserPlatformRemoteConnectCancelPrompt`](xuserplatformremoteconnectcancelprompt.md)
