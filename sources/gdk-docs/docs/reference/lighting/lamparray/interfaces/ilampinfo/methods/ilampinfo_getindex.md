---
author: tyduck
title: "GetIndex"
description: "Returns the index in the LampArray at which the given lamp resides."
kindex: GetIndex
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampInfo::GetIndex  

Returns the index in the LampArray at which the given lamp resides.

## Syntax  
  
```cpp
uint32_t GetIndex(
)
```  
  
### Parameters  

This method has no parameters.

### Return value  

Type: uint32_t

The index in the LampArray for the Lamp.
  
## Remarks  

Valid lamp indices are in the range of 0 to [ILampArray::GetLampCount](../../ilamparray/methods/ilamparray_getlampcount.md) - 1.

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray::GetLampInfo](../../ilamparray/methods/ilamparray_getlampinfo.md)  
[ILampInfo](../ilampinfo.md)  