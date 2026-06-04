---
author: joannaleecy
title: "XblCleanupAsync"
description: "Immediately reclaims all resources associated with the library."
kindex: XblCleanupAsync
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblCleanupAsync  

Immediately reclaims all resources associated with the library.  

## Syntax  
  
```cpp
HRESULT XblCleanupAsync(  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Remarks  
  
If you called XblMemSetFunctions(), call this before shutting down your app's memory manager. It is the responsibility of the game to wait for any outstanding Async calls to complete before calling XblCleanup. If there are background async tasks started by XSAPI pending, this API will wait for them to complete.
  
## Requirements  
  
**Header:** xbox_live_global_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[xbox_live_global_c](../xbox_live_global_c_members.md)  
  
  
