---
author: annieabraham24
title: "XUserPlatformSpopOperationResult"
description: "Enum defining the results of a client operation."
kindex: XUserPlatformSpopOperationResult
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XUserPlatformSpopOperationResult  

Enum defining the results of a client operation.

## Syntax  
  
```cpp
typedef enum XUserPlatformSpopOperationResult {
    XUserPlatformSpopOperationResult_SignInHere = 0,
    XUserPlatformSpopOperationResult_SwitchAccount = 1,
    XUserPlatformSpopOperationResult_Failure = 2,
    XUserPlatformSpopOperationResult_Canceled = 3,
} XUserPlatformSpopOperationResult;
```
  
## Constants  
  
| Constant                                       | Value | Description |
| ---------------------------------------------- | ----- | ----------- |
| XUserPlatformSpopOperationResult_SignInHere    | 0     | User agreed to sign-out the existing session and sign-in on the current device. |
| XUserPlatformSpopOperationResult_SwitchAccount | 1     | User selected a "switch account" option. |
| XUserPlatformSpopOperationResult_Failure       | 2     | Unrecoverable failure in client operation. |
| XUserPlatformSpopOperationResult_Canceled      | 3     | Canceled client operation. |

## Remarks

## Requirements  
  
**Header:** XUser.h  

**Supported platforms:** Supported on Steam Deck

## See also

[XUser](../xuser_members.md)

[XUserPlatformSpopPromptEventHandler](../functions/xuserplatformspopprompteventhandler.md)

[XUserPlatformSpopPromptSetEventHandlers](../functions/xuserplatformspoppromptseteventhandlers.md)

[XUserPlatformSpopPromptClearEventHandler](../functions/xuserplatformspoppromptcleareventhandler.md)

[XUserPlatformSpopPromptComplete](../functions/xuserplatformspoppromptcomplete.md)
