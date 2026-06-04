---
author: tyduck
title: "SetColor"
description: "Sets the color of every Lamp on the ILampArray."
kindex: SetColor
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::SetColor  

Sets every Lamp on the ILampArray to the desired color.

## Syntax  
  
```cpp
void SetColor(
    LampArrayColor desiredColor)
```  
  
### Parameters 

*desiredColor*
Type: [LampArrayColor](../../../structs/lamparraycolor.md)

The desired color to set.  

### Return value  

Type: void
  
## Remarks  

Black (a zero-filled LampArrayColor) is equivalent to a Lamp being 'off'.

The alpha value (LampArrayColor::a) represents the relative transparency of a color, where zero is fully transparent and 0xFF is fully opaque. If an alpha value other than 0xFF is used, the color will undergo an additional blending step against black. To avoid this blending step, do not pass in any alpha value other than 0xFF when setting colors.  

Lamp state will not be flushed to the device if the ILampArray is disabled for the current process (see [ILampArray::SetIsEnabled](ilamparray_setisenabled.md)).

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[Setting Colors on a LampArray](../../../../../../features/common/lighting/lighting-colors.md)  
[LampArrayColor](../../../structs/lamparraycolor.md)  
[ILampArray::SetColorsForIndices](ilamparray_setcolorsforindices.md)  
[ILampArray::SetColorsForScanCodes](ilamparray_setcolorsforscancodes.md)  
[ILampArray](../ilamparray.md)  