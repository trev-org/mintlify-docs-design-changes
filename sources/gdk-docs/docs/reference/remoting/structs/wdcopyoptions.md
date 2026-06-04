---
author: Timberhofmandi
title: "WdCopyOptions"
description: "Specifies the direction and common root alias for a copy operation."
kindex: WdCopyOptions
ms.topic: reference
edited: 02/26/2026
applies-to: pc-gdk
ms.date: '02/26/2026'
permissioned-type: public
---

# WdCopyOptions  

Specifies the direction and common root alias for a copy operation.  

## Syntax  
  
```cpp
struct WdCopyOptions
{
    WdCopyDirection copyDirection;
    const char* commonRootAlias;
};
```  
  
### Members  
  
`copyDirection`  
Type: **[WdCopyDirection](../enums/wdcopydirection.md)**  

The direction of the copy operation. Use `CopyTo` to push files from the local PC to the remote device, or `CopyFrom` to pull files from the remote device to the local PC. `WdCopyDirection::CopyTo` is the default value if not specified.  

`commonRootAlias`  
Type: **const char\***  

An optional alias for a common root directory on the remote device (UTF-8). If `destinationPath` is an absolute path, `commonRootAlias` will be ignored.  

## Remarks  

Pass this structure to [WdRemoteCopy](../functions/wdremotecopy.md) to control the copy behavior. If `nullptr` is passed for the `copyOptions` parameter of `WdRemoteCopy`, the copy direction defaults to `CopyTo` and the default common root location is used if the destination path is relative.  

Common roots allow users to use pre-configured known locations where games are copied to or launched from, and refer to them by alias instead of full path.  

## Requirements  

| Requirement | Value |  
| --- | --- |  
| **Header** | WdRemoteIteration.h |  
| **Library** | wdremoteapi.lib |  
| **Supported OS** | Windows 11 and later |  
| **Supported architectures** | x64, ARM64 |  

## See also  

- [WdRemoteCopy](../functions/wdremotecopy.md)  
- [WdCopyDirection](../enums/wdcopydirection.md)  
- [Xbox PC Remote Iteration API](../remoteiteration_members.md)
