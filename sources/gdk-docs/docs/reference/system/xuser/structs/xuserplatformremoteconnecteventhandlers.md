---
author: annieabraham24
title: "XUserPlatformRemoteConnectEventHandlers"
description: "Encapsulates the remote connect event handlers"
kindex: XUserPlatformRemoteConnectEventHandlers
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/20/2025'
permissioned-type: public
---


# XUserPlatformRemoteConnectEventHandlers

Encapsulates the remote connect event handlers

## Syntax

```cpp
typedef struct XUserPlatformRemoteConnectEventHandlers {
    XUserPlatformRemoteConnectShowPromptEventHandler* show;
    XUserPlatformRemoteConnectClosePromptEventHandler* close;
    void* context;
} XUserPlatformRemoteConnectEventHandlers;
```

### Members

*show*
Type: XUserPlatformRemoteConnectShowPromptEventHandler*

Shows the prompt handler

*close*
Type: XUserPlatformRemoteConnectClosePromptEventHandler*

Closes the prompt handler

*context*
Type: void*

Optional pointer to data used by the event handlers.

## Remarks

Both handlers must be set at the same time.

## Requirements

**Header:** XUser.h

**Supported platforms:** Supported on Steam Deck

## See also

[XUser](../xuser_members.md)

[XUserPlatformRemoteConnectShowPromptEventHandler](../functions/xuserplatformremoteconnectshowprompteventhandler.md)

[XUserPlatformRemoteConnectClosePromptEventHandler](../functions/xuserplatformremoteconnectcloseprompteventhandler.md)

[XUserPlatformRemoteConnectSetEventHandlers](../functions/xuserplatformremoteconnectseteventhandlers.md)

[XUserPlatformRemoteConnectCancelPrompt](../functions/xuserplatformremoteconnectcancelprompt.md)
