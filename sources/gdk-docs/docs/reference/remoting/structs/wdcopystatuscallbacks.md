---
author: Timberhofmandi
title: "WdCopyStatusCallbacks"
description: "Contains callback function pointers and settings for receiving copy status updates."
kindex: WdCopyStatusCallbacks
ms.topic: reference
edited: 02/26/2026
applies-to: pc-gdk
ms.date: '02/26/2026'
permissioned-type: public
---

# WdCopyStatusCallbacks  

Contains callback function pointers and settings for receiving copy status updates.  

## Syntax  
  
```cpp
struct WdCopyStatusCallbacks
{
    WdCopyFilesStatusCallback copyFilesStatusCallback;
    uint32_t refreshRateMs;
    WdCopyErrorCallback copyErrorCallback;
    void* context;
};
```  
  
### Members  
  
`copyFilesStatusCallback`  
Type: **[WdCopyFilesStatusCallback](../callbacks/wdcopyfilesstatuscallback.md)**  

A callback function that is invoked to report file copy progress. Set to `nullptr` if file progress updates are not needed.  

`refreshRateMs`  
Type: **uint32_t**  

The minimum interval in milliseconds between callback invocations for the `copyFilesStatusCallback`. If not specified or set to `0`, the default refresh rate is 500ms.  

`copyErrorCallback`  
Type: **[WdCopyErrorCallback](../callbacks/wdcopyerrorcallback.md)**  

An optional callback function that receives diagnostic messages from the copy operation, such as errors or warnings. Set to `nullptr` if diagnostic messages are not needed.

`context`  
Type: **void\***  

An optional user-defined context pointer that is passed to both callback functions. Set to `nullptr` if no context is needed.  

## Remarks  

Pass this structure to [WdRemoteCopy](../functions/wdremotecopy.md) via the `statusCallbacks` parameter to receive progress updates and diagnostic messages during a copy operation. The `refreshRateMs` member controls how frequently the `copyFilesStatusCallback` is invoked. If not specified or set to `0`, the default refresh rate is 500ms. The `context` pointer is passed through to both callbacks unchanged, allowing you to associate the callbacks with application-specific state.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdRemoteCopy](../functions/wdremotecopy.md)  
- [WdCopyFilesStatusCallback](../callbacks/wdcopyfilesstatuscallback.md)  
- [WdCopyErrorCallback](../callbacks/wdcopyerrorcallback.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)
