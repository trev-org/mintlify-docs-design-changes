---
author: joannaleecy
title: "XblSocialRelationshipResultCloseHandle"
description: "Closes the XblSocialRelationshipResultHandle."
kindex: XblSocialRelationshipResultCloseHandle
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblSocialRelationshipResultCloseHandle  

Closes the XblSocialRelationshipResultHandle.  

## Syntax  
  
```cpp
void XblSocialRelationshipResultCloseHandle(  
         XblSocialRelationshipResultHandle handle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblSocialRelationshipResultHandle](../handles/xblsocialrelationshipresulthandle.md)  
  
The XblSocialRelationshipResultHandle to close.  
  
  
### Return value  
Type: void
  

  
## Remarks  
  
When all outstanding handles have been closed, the memory associated with the social relationship's results list will be freed.
  
## Requirements  
  
**Header:** social_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[social_c](../social_c_members.md)  
  
  
