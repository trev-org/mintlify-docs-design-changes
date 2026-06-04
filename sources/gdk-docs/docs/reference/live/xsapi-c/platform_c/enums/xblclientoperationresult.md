---
author: joannaleecy
title: "XblClientOperationResult"
description: "Enum defining the results of a client operation."
kindex: XblClientOperationResult
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblClientOperationResult  

Enum defining the results of a client operation.    

## Syntax  
  
```cpp
enum class XblClientOperationResult  : uint32_t  
{  
    Success,  
    Failure  
}  
```  
  
## Constants  
  
| Constant | Description |
| --- | --- |
| Success | Client completed the requested operation sucessfully. |  
| Failure | Client was not able to complete the requested operation for any reason. |  
  
## Requirements  
  
**Header:** platform_c.h
  
## See also  
[platform_c](../platform_c_members.md)  
  
  
