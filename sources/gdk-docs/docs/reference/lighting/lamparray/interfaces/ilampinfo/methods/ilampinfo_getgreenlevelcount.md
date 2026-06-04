---
author: tyduck
title: "GetGreenLevelCount"
description: "Returns the number of blue intensities settable for the Lamp."
kindex: GetGreenLevelCount
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampInfo::GetGreenLevelCount  

Returns the number of green intensities settable for the Lamp.

## Syntax  
  
```cpp
uint32_t GetGreenLevelCount(
)
```  
  
### Parameters  

This method has no parameters.

### Return value  

Type: uint32_t

The number of distinct green levels.
  
## Remarks  

If the Lamp has a fixed color (see [ILampInfo::GetFixedColor](ilampinfo_getfixedcolor.md)), this will return 0.

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampInfo](../ilampinfo.md)  