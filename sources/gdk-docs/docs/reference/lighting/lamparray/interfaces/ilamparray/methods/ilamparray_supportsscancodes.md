---
author: tyduck
title: "SupportsScanCodes"
description: "Returns whether a LampArray supports targeting lamps using keyboard scan codes."
kindex: SupportsScanCodes
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::SupportsScanCodes  

Returns whether a ILampArray supports targeting individual lamps using keyboard scan codes. This will typically apply to ILampArrays whose [LampArrayKind](../../../enums/lamparraykind.md) is Keyboard.

## Syntax  
  
```cpp
bool SupportsScanCodes(
)
```  
  
### Parameters  

This method has no parameters.

### Return value  

Type: bool

Returns true if at least one Lamp is addressable by a keyboard scan code.
  
## Remarks  

If an ILampArray supports scan codes, colors on the device can be changed using [ILampArray::SetColorsForScanCodes](ilamparray_setcolorsforscancodes.md).

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray::SetColorsForScanCodes](ilamparray_setcolorsforscancodes.md)  
[ILampArray](../ilamparray.md)  