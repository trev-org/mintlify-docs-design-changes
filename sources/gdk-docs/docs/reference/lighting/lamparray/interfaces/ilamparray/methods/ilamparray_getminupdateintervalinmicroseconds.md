---
author: tyduck
title: "GetMinUpdateIntervalInMicroseconds"
description: "Returns the minimal interval at which the device is capable of updating its Lamp state, as reported by the device."
kindex: GetMinUpdateIntervalInMicroseconds
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::GetMinUpdateIntervalInMicroseconds  

Returns the minimal interval at which the device is capable of updating its Lamp state, as reported by the device. This is comparable to the effective device refresh rate.

## Syntax  
  
```cpp
uint64_t GetMinUpdateIntervalInMicroseconds(
)
```
  
### Parameters  

This method has no parameters.

### Return value  

Type: uint64_t

The minimum time interval between updates for the device's Lamp state, measured in microseconds.

## Remarks

The device and system impose no restrictions on the frequency of SetColor API calls based on this value. The update interval is provided to help the title optimize how often to update device state.  

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray](../ilamparray.md)  