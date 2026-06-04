---
author: joannaleecy
title: "XblTitleStorageBlobType"
description: "Defines values used to indicate title storage blob type."
kindex: XblTitleStorageBlobType
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblTitleStorageBlobType  

Defines values used to indicate title storage blob type.    

## Syntax  
  
```cpp
enum class XblTitleStorageBlobType  : uint32_t  
{  
    Unknown,  
    Binary,  
    Json,  
    Config  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| Unknown | Unknown blob type. |  
| Binary | Binary blob type. |  
| Json | JSON blob type. |  
| Config | Config blob type. |  
  
## Requirements  
  
**Header:** title_storage_c.h
  
## See also  
[title_storage_c](../title_storage_c_members.md)  
  
  
