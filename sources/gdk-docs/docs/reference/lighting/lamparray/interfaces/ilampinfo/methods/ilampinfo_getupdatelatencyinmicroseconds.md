---
author: tyduck
title: "GetUpdateLatencyInMicroseconds"
description: "Returns the amount of time between the LampArray receiving an update for a Lamp and the update emanating from the device."
kindex: GetUpdateLatencyInMicroseconds
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampInfo::GetUpdateLatencyInMicroseconds  

Returns the amount of time between the LampArray receiving an update for a Lamp and the update emanating from the device.

## Syntax  
  
```cpp
uint64_t GetUpdateLatencyInMicroseconds(
)
```  
  
### Parameters  

This method has no parameters.

### Return value  

Type: uint64_t

The amount of time between the LampArray receiving an update for a Lamp and the update emanating from the device, measured in microseconds.

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampInfo](../ilampinfo.md)  