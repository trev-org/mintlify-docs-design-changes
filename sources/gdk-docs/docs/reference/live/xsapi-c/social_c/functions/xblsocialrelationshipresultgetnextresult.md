---
author: joannaleecy
title: "XblSocialRelationshipResultGetNextResult"
description: "Get the result from an XblSocialRelationshipResultGetNextAsync API call."
kindex: XblSocialRelationshipResultGetNextResult
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblSocialRelationshipResultGetNextResult  

Get the result from an XblSocialRelationshipResultGetNextAsync API call.  

## Syntax  
  
```cpp
HRESULT XblSocialRelationshipResultGetNextResult(  
         XAsyncBlock* async,  
         XblSocialRelationshipResultHandle* handle  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The same AsyncBlock that passed to [XblSocialRelationshipResultGetNextAsync](xblsocialrelationshipresultgetnextasync.md).  
  
*handle* &nbsp;&nbsp;\_Out\_  
Type: [XblSocialRelationshipResultHandle*](../handles/xblsocialrelationshipresulthandle.md)  
  
Passes back a XblSocialRelationshipResultHandle.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
When no longer using the XblSocialRelationshipResultHandle, make sure to call [XblSocialRelationshipResultCloseHandle](xblsocialrelationshipresultclosehandle.md). When all outstanding handles have been closed, the memory associated with the social relationship's results list will be freed. After calling this API, make sure to call [XblSocialRelationshipResultGetRelationships](xblsocialrelationshipresultgetrelationships.md) to get the results list to iterate over. Then call [XblSocialRelationshipResultHasNext](xblsocialrelationshipresulthasnext.md) to see if there are more results.
  
## Requirements  
  
**Header:** social_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[social_c](../social_c_members.md)  
  
  
