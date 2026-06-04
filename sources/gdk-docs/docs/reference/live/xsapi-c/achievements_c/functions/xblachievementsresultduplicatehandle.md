---
author: joannaleecy
title: "XblAchievementsResultDuplicateHandle"
description: "Duplicates a XblAchievementsResultHandle."
kindex: XblAchievementsResultDuplicateHandle
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementsResultDuplicateHandle  

Duplicates a XblAchievementsResultHandle.  

## Syntax  
  
```cpp
HRESULT XblAchievementsResultDuplicateHandle(  
         XblAchievementsResultHandle handle,  
         XblAchievementsResultHandle* duplicatedHandle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblAchievementsResultHandle](../handles/xblachievementsresulthandle.md)  
  
The XblAchievementsResultHandle to duplicate.  
  
*duplicatedHandle* &nbsp;&nbsp;\_Out\_  
Type: [XblAchievementsResultHandle*](../handles/xblachievementsresulthandle.md)  
  
The duplicated handle.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** achievements_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[achievements_c](../achievements_c_members.md)  
  
  
