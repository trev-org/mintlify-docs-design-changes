---
author: TBD
title: "XPackageMountWithUiResult"
description: "Gets the results of a call to XPackageMountWithUIAsync."
kindex: XPackageMountWithUiResult
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XPackageMountWithUiResult  

Gets the results of a call to [XPackageMountWithUIAsync](xpackagemountwithuiasync.md).  

## Syntax  

```cpp
HRESULT XPackageMountWithUiResult(
  XAsyncBlock * async,
  XPackageMountHandle * mount
) noexcept;
```

### Parameters  

*async*&nbsp;&nbsp;\_Inout\_  
Type: XAsyncBlock *  

The XAsyncBlock that was used in the call to [XPackageMountWithUIAsync](xpackagemountwithuiasync.md).  

*mount*&nbsp;&nbsp;\_Out\_  
Type: XPackageMountHandle *  

On return, contains a handle to the mount.    

### Return value  
Type: HRESULT  
  
HRESULT success or error code.    



## Requirements  

**Header:** XPackage.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

## See also  

[XPackage members](../xpackage_members.md)  