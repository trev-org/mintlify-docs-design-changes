---
author: annieabraham24
title: "XUserPlatformSpopPromptClearEventHandler"
description: "Clears the SPOP prompt event handler in XUser."
kindex: XUserPlatformSpopPromptClearEventHandler
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---
# XUserPlatformSpopPromptClearEventHandler

Clears the SPOP prompt event handler in XUser.

## Syntax

```cpp
STDAPI  XUserPlatformSpopPromptClearEventHandler();
```

### Return value

Type: STDAPI

Result code for this API operation.

## Remarks

 Must be called before XUserInitialize or after XUserCleanupAsync completes.

## Requirements

**Header:** XUser.h  

**Library:** xgameruntime.lib  

**Supported platforms:** Supported on Steam Deck

## See also

[XUser](../xuser_members.md)

[XUserPlatformSpopPromptEventHandler](xuserplatformspopprompteventhandler.md)

[XUserPlatformSpopPromptSetEventHandlers](xuserplatformspoppromptseteventhandlers.md)

[XUserPlatformSpopPromptComplete](xuserplatformspoppromptcomplete.md)

[XUserPlatformSpopOperationResult](../enums/xuserplatformspopoperationresult.md)
