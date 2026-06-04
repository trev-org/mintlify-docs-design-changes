---
author: tyduck
title: "GetFixedColor"
description: "Returns whether a Lamp has a fixed color."
kindex: GetFixedColor
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampInfo::GetFixedColor  

Returns whether a Lamp has a fixed color.

## Syntax  
  
```cpp
bool GetFixedColor(
    LampArrayColor* fixedColor)
```  
  
### Parameters

*fixedColor* &nbsp;&nbsp;\_Out\_  
Type: LampArrayColor*

A pointer to the fixed color value supported by the Lamp. If this function returns false, fixedColor should be ignored.  

### Return value  

Type: bool

Returns true if the Lamp has a fixed color, and false otherwise.
  
## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampInfo](../ilampinfo.md)  