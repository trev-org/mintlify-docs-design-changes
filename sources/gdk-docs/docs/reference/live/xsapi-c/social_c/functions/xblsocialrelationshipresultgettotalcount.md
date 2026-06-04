---
author: joannaleecy
title: "XblSocialRelationshipResultGetTotalCount"
description: "Gets the total number of results for an XblSocialRelationshipResultHandle."
kindex: XblSocialRelationshipResultGetTotalCount
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblSocialRelationshipResultGetTotalCount  

Gets the total number of results for an XblSocialRelationshipResultHandle.  

## Syntax  
  
```cpp
HRESULT XblSocialRelationshipResultGetTotalCount(  
         XblSocialRelationshipResultHandle resultHandle,  
         size_t* totalCount  
)  
```  
  
### Parameters  
  
*resultHandle* &nbsp;&nbsp;\_In\_  
Type: [XblSocialRelationshipResultHandle](../handles/xblsocialrelationshipresulthandle.md)  
  
The XblSocialRelationshipResultHandle from [XblSocialGetSocialRelationshipsResult](xblsocialgetsocialrelationshipsresult.md).  
  
*totalCount* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
Passes back the total number of results for the query.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
Note that this is only the total number of results requested by [XblSocialGetSocialRelationshipsAsync](xblsocialgetsocialrelationshipsasync.md) and may be different from the maximum number of result items.
  
## Requirements  
  
**Header:** social_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[social_c](../social_c_members.md)  
  
  
