---
author: annieabraham24
title: "XUserPlatformSpopPromptSetEventHandlers"
description: "Sets the SPOP prompt event handler."
kindex: XUserPlatformSpopPromptSetEventHandlers
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---

# XUserPlatformSpopPromptSetEventHandlers

Sets the SPOP prompt event handler.

## Syntax

```cpp
STDAPI  XUserPlatformSpopPromptSetEventHandlers(
    _In_opt_ XTaskQueueHandle queue,
    _In_ XUserPlatformSpopPromptEventHandler* handler,
    _In_opt_ void* context
) noexcept;
```

### Parameters

*queue* &nbsp;&nbsp;\_In\_opt\_  
Type: XTaskQueueHandle

*handler* &nbsp;&nbsp;\_In\_  
Type: XUserPlatformSpopPromptEventHandler

The event handler to set for SPOP prompts. See [XUserPlatformSpopPromptEventHandler](xuserplatformspopprompteventhandler.md)

*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*

### Return value

Type: STDAPI

Result code for this API operation.

## Remarks

Must be called before XUserInitialize.

## Requirements

**Header:** XUser.h  

**Library:** xgameruntime.lib  

**Supported platforms:** Supported on Steam Deck

## See also

[XUser](../xuser_members.md)

[XUserPlatformSpopPromptEventHandler](xuserplatformspopprompteventhandler.md)

[XUserPlatformSpopPromptClearEventHandler](xuserplatformspoppromptcleareventhandler.md)

[XUserPlatformSpopPromptComplete](xuserplatformspoppromptcomplete.md)

[XUserPlatformSpopOperationResult](../enums/xuserplatformspopoperationresult.md)
