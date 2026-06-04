---
author: joannaleecy
title: "XblTitleStorageBlobMetadataResultCloseHandle"
description: "Closes the XblTitleStorageBlobMetadataResultHandle."
kindex: XblTitleStorageBlobMetadataResultCloseHandle
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblTitleStorageBlobMetadataResultCloseHandle  

Closes the XblTitleStorageBlobMetadataResultHandle.  

## Syntax  
  
```cpp
void XblTitleStorageBlobMetadataResultCloseHandle(  
         XblTitleStorageBlobMetadataResultHandle handle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblTitleStorageBlobMetadataResultHandle](../handles/xbltitlestorageblobmetadataresulthandle.md)  
  
The XblTitleStorageBlobMetadataResultHandle to close.  
  
  
### Return value  
Type: void
  

  
## Remarks  
  
When all outstanding handles have been closed, the memory associated with the title storage blob metadata result will be freed.
  
## Requirements  
  
**Header:** title_storage_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[title_storage_c](../title_storage_c_members.md)  
  
  
