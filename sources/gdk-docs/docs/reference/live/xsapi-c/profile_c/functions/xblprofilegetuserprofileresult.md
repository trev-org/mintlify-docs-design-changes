---
author: joannaleecy
title: "XblProfileGetUserProfileResult"
description: "Get the result for a completed XblProfileGetUserProfileAsync operation."
kindex: XblProfileGetUserProfileResult
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblProfileGetUserProfileResult  

Get the result for a completed XblProfileGetUserProfileAsync operation.  

## Syntax  
  
```cpp
HRESULT XblProfileGetUserProfileResult(  
         XAsyncBlock* async,  
         XblUserProfile* profile  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The same AsyncBlock that was passed to XblProfileGetUserProfileAsync.  
  
*profile* &nbsp;&nbsp;\_Out\_  
Type: [XblUserProfile*](../structs/xbluserprofile.md)  
  
A caller allocated profile object to write the result to.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** profile_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[profile_c](../profile_c_members.md)  
  
  
