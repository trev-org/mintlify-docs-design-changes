---
author: tyduck
title: "SetBrightnessLevel"
description: "Sets the overall brightness of the ILampArray."
kindex: GetBrightnessLevel
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::SetBrightnessLevel  

Sets the overall brightness of the ILampArray, where 0.0 is completely off and 1.0 is maximum brightness.

This brightness level will be applied to the entire device. Every Lamp will be scaled equally by the brightness value.

## Syntax  
  
```cpp
void SetBrightnessLevel(
    double brightnessLevel)
```  
  
### Parameters  

*brightnessLevel*  
Type: double  

The desired brightness level to set.

### Return value  

Type: void
  
## Remarks  

Parameter values outside the supported brightness range (from 0.0 to 1.0 inclusive) will be clamped.

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray::GetBrightnessLevel](ilamparray_getbrightnesslevel.md)  
[ILampArray](../ilamparray.md)  