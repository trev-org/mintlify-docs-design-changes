---
author: joannaleecy
title: "XblTitleStorageGetBlobMetadataResult"
description: "Get the result for a completed XblTitleStorageGetBlobMetadataAsync operation."
kindex: XblTitleStorageGetBlobMetadataResult
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblTitleStorageGetBlobMetadataResult  

Get the result for a completed XblTitleStorageGetBlobMetadataAsync operation.  

## Syntax  
  
```cpp
HRESULT XblTitleStorageGetBlobMetadataResult(  
         XAsyncBlock* async,  
         XblTitleStorageBlobMetadataResultHandle* result  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The same AsyncBlock that passed to XblTitleStorageGetBlobMetadataAsync.  
  
*result* &nbsp;&nbsp;\_Out\_  
Type: [XblTitleStorageBlobMetadataResultHandle*](../handles/xbltitlestorageblobmetadataresulthandle.md)  
  
Passes back the title storage blob metadata result handle.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** title_storage_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[title_storage_c](../title_storage_c_members.md)  
  
  
