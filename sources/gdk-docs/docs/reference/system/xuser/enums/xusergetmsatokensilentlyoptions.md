---
author: M-Stahl
title: "XUserGetMsaTokenSilentlyOptions"
description: "Options for XUserGetMsaTokenSilentlyOptions."
kindex: XUserGetMsaTokenSilentlyOptions
ms.author: v-sahain
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUserGetMsaTokenSilentlyOptions  

Options for [XUserGetMsaTokenSilentlyAsync](../functions/xusergetmsatokensilentlyasync.md).  

## Syntax  
  
```cpp
enum class XUserGetMsaTokenSilentlyOptions  : uint32_t  
{  
    None = 0x00,   
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| None | No options. |  
  
## Remarks

The [XUserGetMsaTokenSilentlyAsync](../functions/xusergetmsatokensilentlyasync.md) function uses an XUserGetMsaTokenSilentlyOptions enumeration argument to asynchronously retrieve an MSA token for a given user.
 
## Requirements  
  
**Header:** XUser.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also
[XUser](../xuser_members.md)
  
[XUserGetMsaTokenSilentlyAsync](../functions/xusergetmsatokensilentlyasync.md)