---
author: joannaleecy
title: "XblProfileGetUserProfilesResult"
description: "Gets the result for a completed XblProfileGetUserProfilesAsync operation."
kindex: XblProfileGetUserProfilesResult
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblProfileGetUserProfilesResult  

Gets the result for a completed XblProfileGetUserProfilesAsync operation.  

## Syntax  
  
```cpp
HRESULT XblProfileGetUserProfilesResult(  
         XAsyncBlock* async,  
         size_t profilesCount,  
         XblUserProfile* profiles  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The same AsyncBlock that was passed to XblProfileGetUserProfilesAsync.  
  
*profilesCount* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The size of the caller allocated profiles array. Use [XblProfileGetUserProfilesResultCount](xblprofilegetuserprofilesresultcount.md) to get the count required.  
  
*profiles* &nbsp;&nbsp;\_Out\_writes\_(profilesCount)  
Type: [XblUserProfile*](../structs/xbluserprofile.md)  
  
A caller allocated array that passes back the user profile results.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** profile_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[profile_c](../profile_c_members.md)  
  
  
