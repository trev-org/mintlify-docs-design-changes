---
author: M-Stahl
title: "XPackageMount"
description: "This function is now deprecated. Use XPackageMountWithUiAsync instead."
kindex: XPackageMount
ms.author: brianpe
ms.topic: reference
edited: 05/18/2019
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# [DEPRECATED] XPackageMount  

> [!NOTE]
> This function is now deprecated. Use [XPackageMountWithUiAsync](xpackagemountwithuiasync.md) instead.  

Mounts the installation of specified content, and returns a mount handle to it.  

## Syntax  
  
```cpp
HRESULT XPackageMount(  
         const char* packageIdentifier,  
         XPackageMountHandle* mount  
)  
```  

## Requirements  
  
**Header:** XPackage.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also  
[XPackageMountWithUiAsync](xpackagemountwithuiasync.md)