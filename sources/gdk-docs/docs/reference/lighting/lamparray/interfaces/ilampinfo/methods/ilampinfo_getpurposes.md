---
author: tyduck
title: "GetPurposes"
description: "Returns the set of purposes for which the Lamp is intended to be used."
kindex: GetPurposes
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampInfo::GetPurposes  

Returns the set of purposes for which the Lamp is intended to be used.

## Syntax  
  
```cpp
LampPurposes GetPurposes(
)
```  
  
### Parameters  

This method has no parameters.

### Return value  

Type: [LampPurposes](../../../enums/lamppurposes.md)

A set of flags indicating the purposes for which the Lamp is intended to be used.

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampInfo](../ilampinfo.md)  