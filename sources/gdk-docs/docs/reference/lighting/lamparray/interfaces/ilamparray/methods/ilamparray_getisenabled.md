---
author: tyduck
title: "GetIsEnabled"
description: "Gets the enabled state of an ILampArray for the current process."
kindex: GetIsEnabled
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::GetIsEnabled  

Gets the enabled state of an ILampArray for the current process.

## Syntax  
  
```cpp
bool GetIsEnabled(
)
```
  
### Parameters  

This method has no parameters.

### Return value  

Type: bool

The enabled state of the ILampArray: true if the device is enabled, otherwise false. By default, ILampArrays are enabled.
  
## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray::SetIsEnabled](ilamparray_setisenabled.md)  
[ILampArray](../ilamparray.md)  