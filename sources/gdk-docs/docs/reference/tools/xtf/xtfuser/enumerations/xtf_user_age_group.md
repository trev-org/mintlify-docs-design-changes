---
author: TBD
title: "XTF_USER_AGE_GROUP"
description: "Specifies the age group of a simulated user."
kindex: XTF_USER_AGE_GROUP
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# XTF_USER_AGE_GROUP  

Specifies the age group of a simulated user.    

## Syntax  
  
```cpp
typedef enum XTF_USER_AGE_GROUP    
{  
    XTF_USER_AGE_GROUP_UNKNOWN = 0,
    XTF_USER_AGE_GROUP_ADULT = ( XTF_USER_AGE_GROUP_UNKNOWN + 1 ) ,
    XTF_USER_AGE_GROUP_TEEN = ( XTF_USER_AGE_GROUP_ADULT + 1 ) ,
    XTF_USER_AGE_GROUP_CHILD = ( XTF_USER_AGE_GROUP_TEEN + 1 ) 
} XTF_USER_AGE_GROUP  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| XTF_USER_AGE_GROUP_UNKNOWN | User's age is unknown.  |  
| XTF_USER_AGE_GROUP_ADULT | User is an adult.   |  
| XTF_USER_AGE_GROUP_TEEN | User is a teenager.   |  
| XTF_USER_AGE_GROUP_CHILD | User is a child.   |  
  
## Requirements  
  
**Header:** XtfUser.h
  
**Supported platforms:** Windows (for Xbox console tools)  
  
## See also  
[XtfUser](../xtfuser-xbox-windows-n.md)  
  