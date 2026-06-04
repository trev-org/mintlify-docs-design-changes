---
author: annieabraham24
title: "XUserPlatformRemoteConnectClosePromptEventHandler"
description: "Close prompt for remote authentication event handler."
kindex: XUserPlatformRemoteConnectClosePromptEventHandler
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/20/2025'
permissioned-type: public
---

# XUserPlatformRemoteConnectClosePromptEventHandler

Close prompt for remote authentication event handler.

## Syntax

```cpp
typedef void (XUserPlatformRemoteConnectClosePromptEventHandler)(
    _In_opt_ void* context,
    _In_ uint32_t userIdentifier,
    _In_ XUserPlatformOperation operation
);
```

### Parameters

*context*  &nbsp;&nbsp;\_In\_opt\_  
Type: void*

Optional pointer to data used by the event handler.

*userIdentifier*  &nbsp;&nbsp;\_In\_  
Type: uint32_t

The user identifier that was passed to XUser when the user was added.

*operation*  &nbsp;&nbsp;\_In\_  
Type: XUserPlatformOperation

The handle for this operation.

### Return value

## Remarks

This event is raised when the remote connect authentication process has been completed and the prompt is no longer necessary. This event will always be called with the same operation as a previous [`XUserPlatformRemoteConnectShowPromptEventHandler`](xuserplatformremoteconnectshowprompteventhandler.md) event.

 All arguments are owned by the caller (except context).

## Requirements

**Header:** XUser.h  

**Library:** xgameruntime.lib  

**Supported platforms:** Supported on Steam Deck

## See also

[`XUserPlatformRemoteConnectEventHandlers`](../structs/xuserplatformremoteconnecteventhandlers.md)

[`XUserPlatformRemoteConnectSetEventHandlers`](xuserplatformremoteconnectseteventhandlers.md)

[`XUserPlatformRemoteConnectShowPromptEventHandler`](xuserplatformremoteconnectshowprompteventhandler.md)

[`XUserPlatformRemoteConnectCancelPrompt`](xuserplatformremoteconnectcancelprompt.md)
