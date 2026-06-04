---
author: tyduck
title: "GetScanCode"
description: "Returns the keyboard scan code associated with this Lamp."
kindex: GetScanCode
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampInfo::GetScanCode  

Returns the keyboard scan code associated with this Lamp.

## Syntax  
  
```cpp
uint32_t GetScanCode(
)
```  
  
### Parameters  

This method has no parameters.

### Return value  

Type: uint32_t

The keyboard scan code associated with this Lamp. Returns 0 if this Lamp is not addressable by a keyboard scan code.
  
## Remarks  

This method will return 0 if the LampArray does not support scan codes (see [ILampArray::SupportsScanCodes](../../ilamparray/methods/ilamparray_supportsscancodes.md)).

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[Windows Keyboard Input Reference - Scan Codes](/windows/win32/inputdev/about-keyboard-input#scan-codes)  
[ILampInfo](../ilampinfo.md)  