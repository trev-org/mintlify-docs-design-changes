---
author: tyduck
title: "SetColorsForIndices"
description: "Sets the color for one or more Lamps."
kindex: SetColorsForIndices
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::SetColorsForIndices  

Sets the color for one or more Lamps. Position within each array maps Lamp index to desired color.

## Syntax  
  
```cpp
void SetColorsForIndices(
    uint32_t lampIndicesCount,
    const uint32_t* lampIndices,
    const LampArrayColor* desiredColors)
```  
  
### Parameters  

*lampIndicesCount*
Type: uint32_t

The size of the color and Lamp index buffers.

*lampIndices*&nbsp;&nbsp;\_In\_reads\_(scanCodesCount)
Type: uint32_t*

The array of Lamp indices for which color updates are being applied.

*desiredColors*&nbsp;&nbsp;\_In\_reads\_(scanCodesCount)
Type: [LampArrayColor*](../../../structs/lamparraycolor.md)

The array of corresponding Lamp colors.

### Return value  

Type: void
  
## Remarks  

Lamp indices buffer and desired colors buffer are implied to be the same size. The Lamp indices passed into this API can be in any order.

Black (a zero-filled LampArrayColor) is equivalent to a Lamp being 'off'.

The alpha value (LampArrayColor::a) represents the relative transparency of a color, where zero is fully transparent and 0xFF is fully opaque. If an alpha value other than 0xFF is used, the color will undergo an additional blending step against black. To avoid this blending step, do not pass in any alpha value other than 0xFF when setting colors.  

Lamp state will not be flushed to the device if the ILampArray is disabled for the current process (see [ILampArray::SetIsEnabled](ilamparray_setisenabled.md)).

If a Lamp index does not exist on the device, it is ignored and the remaining indices are still applied.

If a Lamp index is used multiple times in the same buffer, the API will overwrite the previous state of the Lamp at that index.  

The following sample shows how to set alternating colors for each Lamp in an ILampArray.

```cpp
void SetAlternatingColors(ILampArray* lampArray)
{
    const LampArrayColor blueColor = { 0x0 /* r */, 0x0 /* g */, 0xFF /* b */, 0xFF /* a */};
    const LampArrayColor redColor = { 0xFF /* r */, 0x0 /* g */, 0x0 /* b */, 0xFF /* a */};

    const uint32_t lampCount = lampArray->GetLampCount();

    // Set up our index and color buffers
    std::vector<uint32_t> indicesBuffer(lampCount);
    std::vector<LampArrayColor> colorsBuffer(lampCount);

    // Populate the buffers
    for (uint32_t i = 0; i < lampCount; i++)
    {
        // We will use all the Lamps for this update.
        indicesBuffer[i] = i;

        // Odd numbered indices will be red, even numbered indices will be blue
        if (i % 2 != 0)
        {
            colorsBuffer[i] = redColor;
        }
        else
        {
            colorsBuffer[i] = blueColor;
        }
    }

    // Apply the colors to the LampArray
    lampArray->SetColorsForIndices(lampCount, indicesBuffer.data(), colorsBuffer.data());
}
```

The following example shows how to update colors for individual Lamps or groups of Lamps on a LampArray.

```cpp
void MyCustomColorUpdate(ILampArray* lampArray)
{
    const LampArrayColor greenColor = { 0x0 /* r */, 0xFF /* g */, 0x0 /* b */, 0xFF /* a */};
    const LampArrayColor yellowColor = { 0xFF /* r */, 0xFF /* g */, 0x0 /* b */, 0xFF /* a */};
    const LampArrayColor whiteColor = { 0xFF /* r */, 0xFF /* g */, 0xFF /* b */, 0xFF /* a */};

    const uint32_t lampCount = lampArray->GetLampCount();

    // Set custom colors for a single lamp at index 4
    const uint32_t index = 4;
    lampArray->SetColorsForIndices(1, &index, &greenColor);

    // Simultaneously make Lamp 1 yellow and Lamp 3 white
    std::vector<uint32_t> indicesBuffer = { 1, 3 };
    std::vector<LampArrayColor> colorsBuffer = { yellowColor, whiteColor };

    // Apply the colors to the LampArray
    lampArray->SetColorsForIndices(static_cast<uint32_t>(indicesBuffer.size()), indicesBuffer.data(), colorsBuffer.data());
}
```

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[Setting Colors on a LampArray](../../../../../../features/common/lighting/lighting-colors.md)  
[LampArrayColor](../../../structs/lamparraycolor.md)  
[ILampArray::SetColor](ilamparray_setcolor.md)  
[ILampArray::SetColorsForScanCodes](ilamparray_setcolorsforscancodes.md)  
[ILampArray](../ilamparray.md)  