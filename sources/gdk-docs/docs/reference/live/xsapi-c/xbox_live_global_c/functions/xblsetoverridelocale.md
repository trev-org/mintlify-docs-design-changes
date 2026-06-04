---
author: XBL
title: "XblSetOverrideLocale"
description: "To override the locale used across XSAPI. If not set, the default is to use the OS locale"
kindex: XblSetOverrideLocale
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
permissioned-type: public
ms.date: 07/30/2024
---

# XblSetOverrideLocale  

To override the locale used across XSAPI. If not set, the default is to use the OS locale  

## Syntax  
  
```cpp
HRESULT XblSetOverrideLocale(  
         char overrideLocale  
)  
```  
  
### Parameters  
  
*overrideLocale* &nbsp;&nbsp;\_In\_  
Type: char  
  
Override locale to be used  
  
  
### Return value
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** xbox_live_global_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[xbox_live_global_c](../xbox_live_global_c_members.md)  
  
  
