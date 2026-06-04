---
author: joannaleecy
title: "XblLeaderboardGetLeaderboardResultSize"
description: "Get the result size for an XblLeaderboardGetLeaderboardAsync call."
kindex: XblLeaderboardGetLeaderboardResultSize
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblLeaderboardGetLeaderboardResultSize  

Get the result size for an XblLeaderboardGetLeaderboardAsync call.  

## Syntax  
  
```cpp
HRESULT XblLeaderboardGetLeaderboardResultSize(  
         XAsyncBlock* async,  
         size_t* resultSizeInBytes  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
*resultSizeInBytes* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
The size in bytes required to store the user statistics result.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** leaderboard_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[leaderboard_c](../leaderboard_c_members.md)  
  
  
