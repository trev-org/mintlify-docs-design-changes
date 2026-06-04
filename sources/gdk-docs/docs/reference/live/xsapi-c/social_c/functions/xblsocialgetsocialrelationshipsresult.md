---
author: joannaleecy
title: "XblSocialGetSocialRelationshipsResult"
description: "Get the result handle from an XblSocialGetSocialRelationshipsAsync API call."
kindex: XblSocialGetSocialRelationshipsResult
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblSocialGetSocialRelationshipsResult  

Get the result handle from an XblSocialGetSocialRelationshipsAsync API call.  

## Syntax  
  
```cpp
HRESULT XblSocialGetSocialRelationshipsResult(  
         XAsyncBlock* async,  
         XblSocialRelationshipResultHandle* handle  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The same AsyncBlock that was passed to [XblSocialGetSocialRelationshipsAsync](xblsocialgetsocialrelationshipsasync.md).  
  
*handle* &nbsp;&nbsp;\_Out\_  
Type: [XblSocialRelationshipResultHandle*](../handles/xblsocialrelationshipresulthandle.md)  
  
Passes back an XblSocialRelationshipResultHandle.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
When no longer using the XblSocialRelationshipResultHandle, make sure to call [XblSocialRelationshipResultCloseHandle](xblsocialrelationshipresultclosehandle.md). When all outstanding handles have been closed, the memory associated with the social relationship's results list will be freed. After calling this API, make sure to call [XblSocialRelationshipResultGetRelationships](xblsocialrelationshipresultgetrelationships.md) to get the results list to iterate over. Then call [XblSocialRelationshipResultHasNext](xblsocialrelationshipresulthasnext.md) to check if there are additional pages of results.
  
## Requirements  
  
**Header:** social_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[social_c](../social_c_members.md)  
  
  
