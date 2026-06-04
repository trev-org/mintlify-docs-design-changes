---
author: TBD
title: "XTF_USER_DATA_V2"
description: "Describes a simulated user and the user's age."
kindex: XTF_USER_DATA_V2
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# XTF_USER_DATA_V2  

Describes a simulated user and the user's age.    

## Syntax  
  
```cpp
typedef struct XTF_USER_DATA_V2 {  
    XTF_USER_DATA userData;  
    XTF_USER_AGE_GROUP userAgeGroup;  
} XTF_USER_DATA_V2  
```
  
### Members  
  
*userData*  
Type: [XTF_USER_DATA](XTF_USER_DATA-xtfuser-xbox-windows-t.md)  
  
A structure describing a simulated user.  
  
*userAgeGroup*  
Type: [XTF_USER_AGE_GROUP](../enumerations/xtf_user_age_group.md)  
  
An enumeration specifying the age group of the simulated user.  
  
## Requirements  
  
**Header:** xtfuser.h  

**Library:** xtfuser.lib  

**Supported platforms:** Windows (for Xbox console tools)  

## See also  
[XtfUser](../xtfuser-xbox-windows-n.md)  
  
  