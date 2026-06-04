---
author: annieabraham24
title: "XUserPlatformRemoteConnectShowPromptEventHandler"
description: "Show prompt for remote connect authentication event handler."
kindex: XUserPlatformRemoteConnectShowPromptEventHandler
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '09/20/2025'
permissioned-type: public
---

# XUserPlatformRemoteConnectShowPromptEventHandler

Show prompt for remote connect authentication event handler.

## Syntax

```cpp
typedef void (XUserPlatformRemoteConnectShowPromptEventHandler)(
    _In_opt_ void* context,
    _In_ uint32_t userIdentifier,
    _In_ XUserPlatformOperation operation,
    _In_z_ char const* url,
    _In_z_ char const* code,
    _In_ size_t qrCodeSize,
    _In_reads_bytes_(qrCodeSize) void const* qrCode
);
```

### Parameters

*context*  &nbsp;&nbsp;\_In\_opt\_  
Type: void*

Optional pointer to data used by the event handler.

*userIdentifier*  &nbsp;&nbsp;\_In\_  
Type: uint32_t

The user identifier that was passed to XUser when the user was added.

*operation* &nbsp;&nbsp;\_In\_  
Type: XUserPlatformOperation

The handle for this operation.

*url*  &nbsp;&nbsp;\_In\_z\_  
Type: char const*

The URL to show in the prompt.

*code*  &nbsp;&nbsp;\_In\_z\_  
Type: char const*

The code to show in the prompt.

*qrCodeSize*  &nbsp;&nbsp;\_In\_  
Type: size_t

Size of the qrCode buffer.

*qrCode*  &nbsp;&nbsp;\_In\_reads\_bytes\_  
Type: void const*

A pointer to a buffer containing the QR code for the URL as PNG.

### Return value

## Remarks

This event is raised when XUser needs to prompt the user to perform the remote connect authentication process.

The prompt ui should be displayed until XUserPlatformRemoteConnectClosePromptEventHandler is called or it is dismissed by the user.

Game should still render the URL and code that it got back in case the user can’t scan the QR code. The QR code will also not contain the code embedded into it.

All arguments are owned by the caller (except context).

## Requirements

**Header:** XUser.h  

**Library:** xgameruntime.lib  

**Supported platforms:** Supported on Steam Deck

## See also

[`XUserPlatformRemoteConnectEventHandlers`](../structs/xuserplatformremoteconnecteventhandlers.md)

[`XUserPlatformRemoteConnectSetEventHandlers`](xuserplatformremoteconnectseteventhandlers.md)

[`XUserPlatformRemoteConnectClosePromptEventHandler`](xuserplatformremoteconnectcloseprompteventhandler.md)

[`XUserPlatformRemoteConnectCancelPrompt`](xuserplatformremoteconnectcancelprompt.md)
