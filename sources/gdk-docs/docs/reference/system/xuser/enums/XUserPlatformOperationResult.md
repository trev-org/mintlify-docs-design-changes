---
author: annieabraham24
title: "XUserPlatformOperationResult"
description: Defining the results of a client operation
kindex: XUserPlatformOperationResult
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/20/2025'
permissioned-type: public
---

# XUserPlatformOperationResult

Enum defining the results of a client operation

## Syntax

```cpp
enum class XUserPlatformOperationResult : uint32_t
{
    Success = 0,
    Failure = 1,
    Canceled = 2
};
```

## Constants

| Constant | Description |
| --- | --- |
| Success | Successful client operation. |
| Failure | Failed client operation. |
| Canceled | Canceled client operation. |

## Remarks

## Requirements

**Header:** XUser.h

**Supported platforms:** Supported on Steam Deck

## See also
    
[XUser](../xuser_members.md)

[`XUserPlatformRemoteConnectShowPromptEventHandler`](../functions/xuserplatformremoteconnectshowprompteventhandler.md)

[`XUserPlatformRemoteConnectClosePromptEventHandler`](../functions/xuserplatformremoteconnectcloseprompteventhandler.md)

[`XUserPlatformRemoteConnectSetEventHandlers`](../functions/xuserplatformremoteconnectseteventhandlers.md)

[`XUserPlatformRemoteConnectCancelPrompt`](../functions/xuserplatformremoteconnectcancelprompt.md)

[`XUserPlatformRemoteConnectEventHandlers`](../structs/xuserplatformremoteconnecteventhandlers.md)
