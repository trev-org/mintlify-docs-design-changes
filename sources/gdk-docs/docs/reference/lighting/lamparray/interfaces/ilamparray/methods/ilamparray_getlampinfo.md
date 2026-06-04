---
author: tyduck
title: "GetLampInfo"
description: "Returns an ILampInfo for the Lamp at the given index."
kindex: GetLampInfo
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::GetLampInfo  

Returns an ILampInfo for the Lamp at the given index.

## Syntax  
  
```cpp
HRESULT GetLampInfo(
    uint32_t lampIndex,
    ILampInfo** lampInfo)
```  
  
### Parameters  

*lampIndex*  
Type: uint32_t

The desired index in the ILampArray for which to obtain an ILampInfo.

*lampInfo*&nbsp;&nbsp;\_COM\_Outptr\_  
Type: ILampInfo**

The ILampInfo corresponding to lampIndex. This will be null if lampIndex is greater than or equal to [ILampArray::GetLampCount](ilamparray_getlampcount.md);

### Return value  

Type: HRESULT

Function result.
  
## Remarks  

The [ILampInfo](../../ilampinfo/ilampinfo.md) contains properties about a Lamp at a given index in the ILampArray.

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray](../ilamparray.md)  
[ILampInfo](../../ilampinfo/ilampinfo.md)  