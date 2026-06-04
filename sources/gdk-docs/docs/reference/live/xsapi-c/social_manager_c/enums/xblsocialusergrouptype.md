---
author: joannaleecy
title: "XblSocialUserGroupType"
description: "Identifies type of social user group created."
kindex: XblSocialUserGroupType
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblSocialUserGroupType  

Identifies type of social user group created.    

## Syntax  
  
```cpp
enum class XblSocialUserGroupType  : uint32_t  
{  
    FilterType,  
    UserListType  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| FilterType | Social user group based off of filters. |  
| UserListType | Social user group based off of list of users. |  
  
## Argument of
  
[XblSocialManagerUserGroupGetType](../functions/xblsocialmanagerusergroupgettype.md)
  
## Requirements  
  
**Header:** social_manager_c.h
  
## See also  
[social_manager_c](../social_manager_c_members.md)  
  
  
