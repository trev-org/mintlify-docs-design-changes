---
author: tyduck
title: "GetNearestSupportedColor"
description: "Finds the nearest/closest matching color supported by this Lamp relative to the desired color."
kindex: GetNearestSupportedColor
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampInfo::GetNearestSupportedColor  

Finds the nearest/closest matching color supported by this Lamp relative to the desired color.

## Syntax  
  
```cpp
LampArrayColor GetNearestSupportedColor(
    LampArrayColor desiredColor)
```  
  
### Parameters  

*desiredColor*  
Type: [LampArrayColor](../../../structs/lamparraycolor.md)

The color to approximate.

### Return value  

Type: [LampArrayColor](../../../structs/lamparraycolor.md)

The nearest/closest color supported by this Lamp.
  
## Remarks  

Not every Lamp on a LampArray is guaranteed to support true 24-bit RGB color (support is dependent on device capabilities). Based on the available color levels for the Lamp (including red, blue, green and gain), the nearest color supported by the Lamp is determined, assuming that each channel is linearly scaled over the available levels.  

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampInfo](../ilampinfo.md)
[ILampInfo::GetRedLevelCount](ilampinfo_getredlevelcount.md)  
[ILampInfo::GetBlueLevelCount](ilampinfo_getbluelevelcount.md)  
[ILampInfo::GetGreenLevelCount](ilampinfo_getgreenlevelcount.md)  
[ILampInfo::GetGainLevelCount](ilampinfo_getgainlevelcount.md)  