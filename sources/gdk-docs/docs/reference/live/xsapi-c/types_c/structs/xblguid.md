---
author: joannaleecy
title: "XblGuid"
description: "Generic Guid struct. Used by various Xbox live services."
kindex: XblGuid
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblGuid  

Generic Guid struct. Used by various Xbox live services.  

## Syntax  
  
```cpp
typedef struct XblGuid {  
    char value[XBL_GUID_LENGTH];  
} XblGuid  
```
  
### Members  
  
*value*  
Type: char[XBL_GUID_LENGTH]  
  
The stored Guid.
  
## Requirements  
  
**Header:** types_c.h
  
## See also  
[types_c](../types_c_members.md)  
  
  
