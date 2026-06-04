---
author: tyduck
title: "GetGainLevelCount"
description: "Returns the number of color independent intensities settable for this Lamp."
kindex: GetGainLevelCount
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampInfo::GetGainLevelCount  

Returns the number of color independent intensities settable for this Lamp.

## Syntax  
  
```cpp
uint32_t GetGainLevelCount(
)
```  
  
### Parameters  

This method has no parameters.

### Return value  

Type: uint32_t

The intensity value settable for the Lamp.
  
## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampInfo](../ilampinfo.md)  