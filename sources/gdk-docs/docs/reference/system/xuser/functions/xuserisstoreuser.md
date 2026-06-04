---
author: jgup
title: "XUserIsStoreUser"
description: "Checks if the XUser MSA is the same as the MSA signed into the Microsoft Store."
kindex: XUserIsStoreUser
ms.author: jgup
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: 05/17/2023
permissioned-type: public
---

# XUserIsStoreUser  

Checks if the XUser MSA is the same as the MSA signed into the Microsoft Store.

## Syntax  
  
```cpp
bool XUserIsStoreUser(  
         XUserHandle user
)  
```  
  
### Parameters  
  
*user* &nbsp;&nbsp;\_In\_opt\_  
Type: XUserHandle  

User handle.

### Return value

Type: bool
  
Always returns true on console. On PC, it will return true only if the MSA of the XUser is same as the MSA signed into 
the Microsoft Store. On PC, if nobody is signed into the Microsoft Store, or if the two different MSA are signed in as 
the XUser and the Microsoft Store, it will return false.
  
## Remarks

For details on how to properly use this function, refer to 
[Handling mismatched store account scenarios on PC](../../../../store/commerce/pc-specific-considerations/xstore-handling-mismatched-store-accounts.md).

## Requirements  
  
**Header:** XUser.h
  
**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XUser](../xuser_members.md)

[Handling mismatched store account scenarios on PC](../../../../store/commerce/pc-specific-considerations/xstore-handling-mismatched-store-accounts.md)