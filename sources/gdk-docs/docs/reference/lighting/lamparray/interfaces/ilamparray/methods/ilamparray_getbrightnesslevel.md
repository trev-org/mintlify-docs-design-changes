---
author: tyduck
title: "GetBrightnessLevel"
description: "Gets the overall brightness of the LampArray."
kindex: GetBrightnessLevel
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::GetBrightnessLevel  

Gets the overall brightness of the ILampArray, where 0.0 is completely off and 1.0 is maximum brightness.

## Syntax  
  
```cpp
double GetBrightnessLevel(
)
```  
  
### Parameters  

This method has no parameters.

### Return value  

Type: double  

The current brightness level of the ILampArray. Default is 1.0.
  
## Remarks  

Value is between 0.0 and 1.0 (inclusive).

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray::SetBrightnessLevel](ilamparray_setbrightnesslevel.md)  
[ILampArray](../ilamparray.md)  