---
author: joannaleecy
title: "XblLocalStorageWriteMode"
description: "Write mode for a local storage write operation."
kindex: XblLocalStorageWriteMode
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblLocalStorageWriteMode  

Write mode for a local storage write operation.    

## Syntax  
  
```cpp
enum class XblLocalStorageWriteMode  : uint32_t  
{  
    Append,  
    Truncate  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| Append | Appends new data to the end of any existing data. |  
| Truncate | Overwrite any existing data. |  
  
## Requirements  
  
**Header:** platform_c.h
  
## See also  
[platform_c](../platform_c_members.md)  
  
  
