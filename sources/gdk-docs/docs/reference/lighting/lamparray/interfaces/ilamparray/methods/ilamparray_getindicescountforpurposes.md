---
author: tyduck
title: "GetIndicesCountForPurposes"
description: "Returns the number of Lamp indices that support the given set of LampPurposes."
kindex: GetIndicesCountForPurposes
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::GetIndicesCountForPurposes  

Returns the number of Lamp indices that support the given set of LampPurposes.

## Syntax  
  
```cpp
uint32_t GetIndicesCountForPurposes(
    LampPurposes lampPurposes)
``` 
  
### Parameters  

*lampPurposes*  
Type: [LampPurposes](../../../enums/lamppurposes.md)

The desired set of purposes to query.

### Return value  

Type: uint32_t

The number of Lamps on this ILampArray that support all values marked in LampPurposes.

## Remarks  

Call this method prior to using [ILampArray::GetIndicesForPurposes](ilamparray_getindicesforpurposes.md) to determine the maximum buffer size that function will support.

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray::GetIndicesForPurposes](ilamparray_getindicesforpurposes.md)  
[ILampArray](../ilamparray.md)  