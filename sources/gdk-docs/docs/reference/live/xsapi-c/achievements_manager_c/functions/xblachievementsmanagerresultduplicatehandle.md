---
author: joannaleecy
title: "XblAchievementsManagerResultDuplicateHandle"
description: "Duplicates a XblAchievementsManagerResultHandle."
kindex: XblAchievementsManagerResultDuplicateHandle
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementsManagerResultDuplicateHandle  

Duplicates a XblAchievementsManagerResultHandle.  

## Syntax  
  
```cpp
HRESULT XblAchievementsManagerResultDuplicateHandle(  
         XblAchievementsManagerResultHandle handle,  
         XblAchievementsManagerResultHandle* duplicatedHandle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblAchievementsManagerResultHandle](../handles/xblachievementsmanagerresulthandle.md)  
  
The XblAchievementsManagerResultHandle to duplicate.  
  
*duplicatedHandle* &nbsp;&nbsp;\_Out\_  
Type: [XblAchievementsManagerResultHandle*](../handles/xblachievementsmanagerresulthandle.md)  
  
The duplicated handle.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** achievements_manager_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[achievements_manager_c](../achievements_manager_c_members.md)  
  
  
