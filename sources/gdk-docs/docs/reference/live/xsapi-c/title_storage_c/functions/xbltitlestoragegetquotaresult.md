---
author: joannaleecy
title: "XblTitleStorageGetQuotaResult"
description: "Get the result for a completed XblTitleStorageGetQuotaAsync operation."
kindex: XblTitleStorageGetQuotaResult
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblTitleStorageGetQuotaResult  

Get the result for a completed XblTitleStorageGetQuotaAsync operation.  

## Syntax  
  
```cpp
HRESULT XblTitleStorageGetQuotaResult(  
         XAsyncBlock* async,  
         size_t* usedBytes,  
         size_t* quotaBytes  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The same AsyncBlock that passed to XblTitleStorageGetQuotaAsync.  
  
*usedBytes* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
Passes back the number of bytes used in title storage of type StorageType.  
  
*quotaBytes* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
Passes back the maximum number of bytes that can be used in title storage of type StorageType. Note that this is a soft limit and the used bytes may actually exceed this value.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** title_storage_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[title_storage_c](../title_storage_c_members.md)  
  
  
