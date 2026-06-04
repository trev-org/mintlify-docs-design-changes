---
author: M-Stahl
title: "XUserPrivilegeDenyReason"
description: "Specifies the reason a user could not obtain a privilege."
kindex: XUserPrivilegeDenyReason
ms.topic: reference
edited: 05/02/2022
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUserPrivilegeDenyReason  

Specifies the reason a user could not obtain a privilege.  

## Syntax  
  
```cpp
enum class XUserPrivilegeDenyReason  : uint32_t  
{  
    None = 0,  
    PurchaseRequired = 1,  
    Restricted = 2,  
    Banned = 3,  
    Unknown = 0xFFFFFFFF  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| None | No reason. |  
| PurchaseRequired | The user must make a purchase. |  
| Restricted | Restrictions on the user exist. |  
| Banned | A ban on the user exists. |  
| Unknown | Unknown reason. |  
  
## Remarks

To check if a user has a specific privilege, call the [XUserCheckPrivilege](../functions/xusercheckprivilege.md) function. The function accepts a pointer to an XUserPrivilegeDenyReason enumeration as an argument. The function returns an [XUserPrivilege](xuserprivilege.md) enumeration.

>![alert](../../../../../media/public-images/caution.gif) **NOTE:**  The value returned in the *reason* argument is informational **only**, and may be inaccurate in many scenarios. This value **should not** be used to make decisions in your title.

## Requirements  
  
**Header:** XUser.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XUser](../xuser_members.md)
  
[XUserCheckPrivilege](../functions/xusercheckprivilege.md)

[XUserPrivilege](xuserprivilege.md)
