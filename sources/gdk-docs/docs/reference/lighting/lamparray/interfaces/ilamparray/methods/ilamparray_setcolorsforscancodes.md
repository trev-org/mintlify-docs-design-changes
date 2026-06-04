---
author: tyduck
title: "SetColorsForScanCodes"
description: "Sets the color of one or more Lamps, corresponding to keyboard scan codes."
kindex: SetColorsForScanCodes
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::SetColorsForScanCodes  

Sets the color of one or more Lamps, corresponding to keyboard scan codes. Position within each array maps keys to desired colors.

## Syntax  
  
```cpp
void SetColorsForScanCodes(
    uint32_t scanCodesCount,
    const uint32_t * scanCodes,
    const LampArrayColor * desiredColors)
```  
  
### Parameters  

*scanCodesCount*
Type: uint32_t

The size of the color and scan code buffers.

*scanCodes*&nbsp;&nbsp;\_In\_reads\_(scanCodesCount)
Type: uint32_t*

The array of scan codes for which color updates are being applied.

*desiredColors*&nbsp;&nbsp;\_In\_reads\_(scanCodesCount)
Type: [LampArrayColor*](../../../structs/lamparraycolor.md)

The array of corresponding Lamp colors.

### Return value  

Type: void
  
## Remarks  

Scan codes buffer and desired colors buffer are implied to be the same size.

Black (a zero-filled LampArrayColor) is equivalent to a Lamp being 'off'.

The alpha value (LampArrayColor::a) represents the relative transparency of a color, where zero is fully transparent and 0xFF is fully opaque. If an alpha value other than 0xFF is used, the color will undergo an additional blending step against black. To avoid this blending step, do not pass in any alpha value other than 0xFF when setting colors.  

Lamp state will not be flushed to the device if the ILampArray is disabled for the current process (see [ILampArray::SetIsEnabled](ilamparray_setisenabled.md)).

If a scan code is not bound to any Lamp on the device, it is ignored and the remaining scan codes are still applied.

If a scan code is used multiple times in the same buffer, the API will overwrite the previous state of any Lamps corresponding to that scan code.  

If [ILampArray::SupportsScanCodes](ilamparray_supportsscancodes.md) returns false, this function will have no effect.

The following sample shows how to set Lamp colors for the WASD keys on the keyboard.

```cpp
#define SC_W    0x11
#define SC_A    0x1E
#define SC_S    0x1F
#define SC_D    0x20

void UpdateWASDKeys(ILampArray* lampArray)
{
    const LampArrayColor blueColor = { 0x0 /* r */, 0x0 /* g */, 0xFF /* b */, 0xFF /* a */};
    const LampArrayColor yellowColor = { 0xFF /* r */, 0xFF /* g */, 0x0 /* b */, 0xFF /* a */};

    // Set the color for all lamps. We will override the WASD keys below.
    lampArray->SetColor(blueColor);

    // Set up the buffer of scan codes for the Lamps we want to target
    std::vector<uint32_t> scanCodesBuffer = { SC_W, SC_A, SC_S, SC_D };

    // Create a matching buffer of LampArrayColors. In this example, we will set all of the WASD keys to yellow.
    std::vector<LampArrayColor> colorsBuffer;
    for (size_t i = 0; i < scanCodesBuffer.size(); i++)
    {
        colorsBuffer.push_back(yellowColor);
    }

    // Set the color for the WASD keys
    lampArray->SetColorsForScanCodes(static_cast<uint32_t>(scanCodesBuffer.size()), scanCodesBuffer.data(), colorsBuffer.data());
}
```  

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[Setting Colors on a LampArray](../../../../../../features/common/lighting/lighting-colors.md)  
[Windows Keyboard Input Reference - Scan Codes](/windows/win32/inputdev/about-keyboard-input#scan-codes)  
[LampArrayColor](../../../structs/lamparraycolor.md)  
[ILampArray::SetColor](ilamparray_setcolor.md)  
[ILampArray::SetColorsForIndices](ilamparray_setcolorsforindices.md)  
[ILampArray](../ilamparray.md)  