---
author: annieabraham24
title: "XUserPlatformSpopPromptEventHandler"
description: "Show prompt for SPOP operation event handler"
kindex: XUserPlatformSpopPromptEventHandler
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/19/2025'
permissioned-type: public
---
 
# XUserPlatformSpopPromptEventHandler

Show prompt for SPOP operation event handler

## Syntax

```cpp
typedef void (XUserPlatformSpopPromptEventHandler)(
    _In_opt_ void* context,
    _In_ uint32_t userIdentifier,
    _In_ XUserPlatformOperation operation,
    _In_z_ char const* modernGamertag,
    _In_opt_z_ char const* modernGamertagSuffix
);
```

## Parameters

*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*

Optional pointer to data used by the event handler.

*userIdentifier* &nbsp;&nbsp;\_In\_  
Type: uint32_t

The user identifier that was passed to XUser when the user was added.

*operation* &nbsp;&nbsp;\_In\_  
Type: XUserPlatformOperation

The handle for this operation.

*modernGamertag* &nbsp;&nbsp;\_In\_z\_  
Type: char const*

The modern gamertag of the user.

*modernGamertagSuffix* &nbsp;&nbsp;\_In\_opt\_z\_  
Type: char const*

The modern gamertag suffix, if present. May be null for certain users.

### Return value

### Remarks

This event is raised when the user is already signed in on a different device and therefore hits an SPOP veto. XUser needs to prompt the user to decide whether they want to sign-out the other session and sign-in on the current device. This will only occur as a response to a call to XUserAddUserWithUiAsync that resulted in an SPOP veto.

The modern gamertag suffix might be null for certain users.

All arguments are owned by the caller (except context).

## Requirements

**Header:** XUser.h  

**Library:** xgameruntime.lib  

**Supported platforms:** Supported on Steam Deck

## See also

[XUser](../xuser_members.md)

[XUserPlatformSpopPromptSetEventHandlers](xuserplatformspoppromptseteventhandlers.md)

[XUserPlatformSpopPromptClearEventHandler](xuserplatformspoppromptcleareventhandler.md)

[XUserPlatformSpopPromptComplete](xuserplatformspoppromptcomplete.md)

[XUserPlatformSpopOperationResult](../enums/xuserplatformspopoperationresult.md)
