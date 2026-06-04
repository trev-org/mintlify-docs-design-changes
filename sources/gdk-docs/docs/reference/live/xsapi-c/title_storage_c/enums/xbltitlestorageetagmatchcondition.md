---
author: joannaleecy
title: "XblTitleStorageETagMatchCondition"
description: "Defines values used to indicate the ETag match condition used when downloading, uploading or deleting title storage data."
kindex: XblTitleStorageETagMatchCondition
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblTitleStorageETagMatchCondition  

Defines values used to indicate the ETag match condition used when downloading, uploading or deleting title storage data.    

## Syntax  
  
```cpp
enum class XblTitleStorageETagMatchCondition  : uint32_t  
{  
    NotUsed,  
    IfMatch,  
    IfNotMatch  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| NotUsed | There is no match condition. |  
| IfMatch | Perform the request if the Etag value specified matches the service value. |  
| IfNotMatch | Perform the request if the Etag value specified does not match the service value. |  
  
## Requirements  
  
**Header:** title_storage_c.h
  
## See also  
[title_storage_c](../title_storage_c_members.md)  
  
  
