---
author: joannaleecy
title: "XblProfileGetUserProfilesForSocialGroupResultCount"
description: "Gets the number of profiles from a completed XblProfileGetUserProfilesForSocialGroupAsync operation."
kindex: XblProfileGetUserProfilesForSocialGroupResultCount
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblProfileGetUserProfilesForSocialGroupResultCount  

Gets the number of profiles from a completed XblProfileGetUserProfilesForSocialGroupAsync operation.  

## Syntax  
  
```cpp
HRESULT XblProfileGetUserProfilesForSocialGroupResultCount(  
         XAsyncBlock* async,  
         size_t* profileCount  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The same AsyncBlock that was passed to XblProfileGetUserProfilesForSocialGroupAsync.  
  
*profileCount* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
Passes back the number of profiles.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** profile_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[profile_c](../profile_c_members.md)  
  
  
