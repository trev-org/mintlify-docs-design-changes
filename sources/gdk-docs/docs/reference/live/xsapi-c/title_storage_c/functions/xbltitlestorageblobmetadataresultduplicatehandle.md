---
author: joannaleecy
title: "XblTitleStorageBlobMetadataResultDuplicateHandle"
description: "Duplicates a XblTitleStorageBlobMetadataResultHandle."
kindex: XblTitleStorageBlobMetadataResultDuplicateHandle
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblTitleStorageBlobMetadataResultDuplicateHandle  

Duplicates a XblTitleStorageBlobMetadataResultHandle.  

## Syntax  
  
```cpp
HRESULT XblTitleStorageBlobMetadataResultDuplicateHandle(  
         XblTitleStorageBlobMetadataResultHandle handle,  
         XblTitleStorageBlobMetadataResultHandle* duplicatedHandle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblTitleStorageBlobMetadataResultHandle](../handles/xbltitlestorageblobmetadataresulthandle.md)  
  
The XblTitleStorageBlobMetadataResultHandle to duplicate.  
  
*duplicatedHandle* &nbsp;&nbsp;\_Out\_  
Type: [XblTitleStorageBlobMetadataResultHandle*](../handles/xbltitlestorageblobmetadataresulthandle.md)  
  
Passes back the duplicated handle.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** title_storage_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[title_storage_c](../title_storage_c_members.md)  
  
  
