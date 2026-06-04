---
author: tyduck
title: "SetIsEnabled"
description: "Sets the enabled state of an ILampArray for the current process."
kindex: SetIsEnabled
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::SetIsEnabled  

Sets the enabled state of an ILampArray for the current process.

## Syntax  
  
```cpp
void SetIsEnabled(
    bool isEnabled)
```
  
### Parameters  

*isEnabled*  
Type: bool

The desired enabled state of the ILampArray.

### Return value  

Type: void

## Remarks  

When disabled, state for Lamps can be set internally, but will not be sent to the device. When set back to enabled, modified Lamp state is flushed to the device.

By default, ILampArrays are always enabled.
  
## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray::GetIsEnabled](ilamparray_getisenabled.md)  
[ILampArray](../ilamparray.md)  