---
author: tyduck
title: "GetIndicesForPurposes"
description: "Populates a buffer of Lamp indices that support a given set of LampPurposes."
kindex: GetIndicesForPurposes
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::GetIndicesForPurposes  

Populates a buffer of Lamp indices that support a given set of LampPurposes. Prior to calling this method, the maximum buffer size should be obtained by calling [ILampArray::GetIndicesCountForPurposes](ilamparray_getindicescountforpurposes.md).

## Syntax  
  
```cpp
void GetIndicesForPurposes(
    LampPurposes lampPurposes,
    uint32_t lampIndicesCount,
    uint32_t * lampIndices)
```  
  
### Parameters  

*lampPurposes*
Type: [LampPurposes](../../../enums/lamppurposes.md)

The desired set of LampPurposes.

*lampIndicesCount*  
Type: uint32_t

The size of the buffer to populate.

*lampIndices*&nbsp;&nbsp;\_Out\_writes\_(lampIndicesCount)
Type: uint32_t*

The Lamp indices buffer. Indices written into the buffer are for Lamps that match all of the flags in lampPurposes.  

### Return value  

Type: void

## Remarks

The following code demonstrates how to set a color for all branding Lamps on an ILampArray:

```cpp
void UpdateBrandingLamps(ILampArray* lampArray)
{
    // Get the number of Branding lamps
    LampPurposes purposes = LampPurposes::Branding;
    uint32_t indicesCount = lampArray->GetIndicesCountForPurposes(purposes);

    // Allocate and populate a buffer with the indices of those Lamps
    std::vector<uint32_t> indicesBuffer(indicesCount);
    lampArray->GetIndicesForPurposes(purposes, indicesCount, indicesBuffer.data());

    // Set color for all Branding Lamps to red.
    std::vector<LampArrayColor> colorsBuffer(indicesCount);
    for (uint32_t i = 0; i < indicesCount; i++)
    {
        colorsBuffer[i] = { 0xFF /* r */, 0x0 /* g */, 0x0 /* b */, 0xFF /* a */ };
    }

    lampArray->SetColorsForIndices(indicesCount, indicesBuffer.data(), colorsBuffer.data());
}
```
  
## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray::GetIndicesCountForPurposes](ilamparray_getindicescountforpurposes.md)  
[ILampArray::SetColorsForIndices](ilamparray_setcolorsforindices.md)  
[ILampArray](../ilamparray.md)  