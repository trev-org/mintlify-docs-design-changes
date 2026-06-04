---
author: tyduck
title: "Setting colors on a LampArray"
description: "Describes how to change Lamp colors using ILampArray methods."
kindex: Setting Colors on a LampArray
ms.author: tyduck
ms.topic: article
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# Setting colors on a LampArray

All color update functions on ILampArray use the [LampArrayColor](../../../reference/lighting/lamparray/structs/lamparraycolor.md) struct to represent an RGBA color value.

The alpha value (LampArrayColor::a) represents the relative transparency of a color, where zero is fully transparent and 0xFF is fully opaque. If an alpha value other than 0xFF is used, the color will undergo an additional blending step against black. To avoid this blending step, don't pass an alpha value other than 0xFF when setting colors.  

ILampArray SetColor APIs are designed to be called from a single thread for best performance and Lamp state consistency.

## Updating all Lamps

The [ILampArray::SetColor](../../../reference/lighting/lamparray/interfaces/ilamparray/methods/ilamparray_setcolor.md) method changes all Lamps on the device to match the desired color.

The following example registers a LampArray callback and sets the color of each attached device.  

```cpp
const LampArrayColor greenColor = { 0x0 /* r */, 0xFF /* g */, 0x0 /* b */, 0xFF /* a */};
std::vector<Microsoft::WRL::ComPtr<ILampArray>> lampArrays;

void MyLampArrayStatusCallback(
    _In_opt_ void* context,
    LampArrayStatus currentStatus,
    LampArrayStatus previousStatus,
    _In_ ILampArray* lampArray)
{
    const bool wasAttached = (previousStatus & LampArrayStatus::Connected) == LampArrayStatus::Connected;
    const bool isAttached = (currentStatus & LampArrayStatus::Connected) == LampArrayStatus::Connected;
    if (wasAttached != isAttached)
    {
        if (isAttached)
        {
            lampArray->SetColor(greenColor);
            lampArrays.push_back(lampArray);
        }
        else
        {
            for (auto iter = lampArrays.begin(); iter != lampArrays.end(); )
            {
                if (iter->Get() == lampArray)
                {
                    lampArrays.erase(iter);
                }
                else
                {
                    iter++;
                }
            }
        }
    }
}

void MainLoop(
    _In_ volatile bool & cancelMonitoring) noexcept
{
    LampArrayCallbackToken token = LAMPARRAY_INVALID_CALLBACK_TOKEN_VALUE;
    if (SUCCEEDED(RegisterLampArrayStatusCallback(
        MyLampArrayStatusCallback,
        LampArrayEnumerationKind::Async,
        nullptr /* context */,
        &token)))
    {
        while (!cancelMonitoring)
        {
            Sleep(100);
        }

        UnregisterLampArrayCallback(token, 5000);
    }
}
```

## Targeting individual Lamps or Lamp Groups

[ILampArray::SetColorsForIndices](../../../reference/lighting/lamparray/interfaces/ilamparray/methods/ilamparray_setcolorsforindices.md) is used to update one or more Lamps of a LampArray. The Lamp indices passed into this API can be in any order.

The following example illustrates how to set alternating colors on all Lamps of a LampArray.  

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

## Targeting Lamps using keyboard scan codes

[ILampArray::SetColorsForScanCodes](../../../reference/lighting/lamparray/interfaces/ilamparray/methods/ilamparray_setcolorsforscancodes.md) provides an easy way to set Lamp colors of specific keys on a LampArray keyboard. This can be useful for helping to teach users which keys to press in a tutorial setting, for example, or in showing game state related information on the keyboard.  

The following example illustrates how to change the Lamp color of the WASD keys on a LampArray keyboard:  

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

## See also  

[Lighting API Overview](gc-lighting-toc.md)  
[ILampArray Reference](../../../reference/lighting/lamparray/interfaces/ilamparray/ilamparray.md)  
[LampArrayColor](../../../reference/lighting/lamparray/structs/lamparraycolor.md)  
[ILampArray::SetColor](../../../reference/lighting/lamparray/interfaces/ilamparray/methods/ilamparray_setcolor.md)  
[ILampArray::SetColorsForIndices](../../../reference/lighting/lamparray/interfaces/ilamparray/methods/ilamparray_setcolorsforindices.md)  
[ILampArray::SetColorsForScanCodes](../../../reference/lighting/lamparray/interfaces/ilamparray/methods/ilamparray_setcolorsforscancodes.md)  