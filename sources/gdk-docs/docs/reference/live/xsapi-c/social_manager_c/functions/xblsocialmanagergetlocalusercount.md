---
author: joannaleecy
title: "XblSocialManagerGetLocalUserCount"
description: "Get the number of local users currently tracked by SocialManager."
kindex: XblSocialManagerGetLocalUserCount
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblSocialManagerGetLocalUserCount  

Get the number of local users currently tracked by SocialManager.  

## Syntax  
  
```cpp
size_t XblSocialManagerGetLocalUserCount(  
)  
```  
  
### Parameters  
  
  
### Return value  
Type: size_t
  
The number of local users currently tracked by SocialManager.
  
## Remarks  
  
To add local users to be tracked, call [XblSocialManagerAddLocalUser](xblsocialmanageraddlocaluser.md). To remove local users from being tracked, call [XblSocialManagerRemoveLocalUser](xblsocialmanagerremovelocaluser.md). This function must be called before calling [XblSocialManagerGetLocalUsers](xblsocialmanagergetlocalusers.md).
  
## Requirements  
  
**Header:** social_manager_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[social_manager_c](../social_manager_c_members.md)  
  
  
