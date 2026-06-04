---
author: tyduck
title: "LampArray Effects"
description: "TODO"
kindex: LampArray Effects
ms.author: tyduck
ms.topic: article
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# LampArray Effects

Call [ILampArray](../../../reference/lighting/lamparray/interfaces/ilamparray/ilamparray.md) color functions within the game loop to produce effects and animations. This page shows a few examples.

For simplicity, these examples will use [ILampArray::SetColor](../../../reference/lighting/lamparray/interfaces/ilamparray/methods/ilamparray_setcolor.md) where possible to apply colors to every Lamp on a device. Effects can be produced on individual Lamps or sets of Lamps by using [ILampArray::SetColorsForIndices](../../../reference/lighting/lamparray/interfaces/ilamparray/methods/ilamparray_setcolorsforindices.md).

## Fading and Blinking

Fade lamps in or out by multiplying a color's RGB values by an increasing or decreasing percentage over a time interval. Create blinking, breathing or flashing effects by repeatedly fading lamps in and out.  

The following example blinks all Lamps of a LampArray on and off:  

```cpp
uint32_t currentFrame = 0;

// The total number of frames in one blink
const float blinkFrameCount = 90;

const float blinkFadeFrameCount = blinkFrameCount / 2;

// The color to fade in and out. In this example we'll use red.
const LampArrayColor mainColor = {0xFF /* r */, 0x0 /* g */, 0x0 /* b */, 0xFF /* a */};

Microsoft::WRL::ComPtr<ILampArray> lampArray;

void BlinkUpdateFrame(ILampArray* lampArrayToUpdate)
{
    LampArrayColor currentFrameColor = mainColor;

    float colorScale = 1.0;

    if (currentFrame < blinkFadeFrameCount)
    {
        // Fade out to black
        colorScale = (blinkFadeFrameCount - currentFrame) / blinkFadeFrameCount;
    }
    else
    {
        // Fade in to full color value
        colorScale = (currentFrame - blinkFadeFrameCount) / blinkFadeFrameCount;
    }

    currentFrameColor.r = static_cast<uint8_t>(mainColor.r * colorScale);
    currentFrameColor.g = static_cast<uint8_t>(mainColor.g * colorScale);
    currentFrameColor.b = static_cast<uint8_t>(mainColor.b * colorScale);

    // Apply the color
    lampArrayToUpdate->SetColor(currentFrameColor);

    // Increment our current frame, accounting for overflow
    if (++currentFrame > blinkFrameCount)
    {
        currentFrame = 0;
    }
}

void MainLoop(
    _In_ volatile bool& terminateLoop)
{
    color.a = 0xFF;

    while (!terminateLoop)
    {
        Sleep(50);

        BlinkUpdateFrame(lampArray.Get());
    }
} 
```

## Color Cycles

Create color cycles by gradually increasing and decreasing a color's red, green, and blue values. This will blend between a wide range colors on the RGB spectrum.

The following example performs an RGB color cycle on a LampArray.  

```cpp  
uint32_t currentFrame = 0;

// The total number of frames in one cycle
const float cycleFrameCount = 180;

// The size of each "ramp" of the cycle (blending from one color to the next)
const float rampIntervalFrameCount = cycleFrameCount / 6;

// The color to set in each frame
LampArrayColor color = {};

Microsoft::WRL::ComPtr<ILampArray> lampArray;

void CycleUpdateFrame(ILampArray* lampArrayToUpdate)
{
    // Calculate the color for the current frame.
    if (currentFrame < rampIntervalFrameCount)
    {
        // Red -> yellow: increase g
        color.r = 0xFF;
        color.g = static_cast<BYTE>(0xFF * (currentFrame / rampIntervalFrameCount));
    }
    else if (currentFrame < (2 * rampIntervalFrameCount))
    {
        // Yellow -> green: decrease r
        color.r = static_cast<BYTE>(0xFF * (((2 * rampIntervalFrameCount) - currentFrame) / rampIntervalFrameCount));
        color.g = 0xFF;
    }
    else if (currentFrame < (3 * rampIntervalFrameCount))
    {
        // Green -> cyan: increase b
        color.g = 0xFF;
        color.b = static_cast<BYTE>(0xFF * ((currentFrame - (2 * rampIntervalFrameCount)) / rampIntervalFrameCount));
    }
    else if (currentFrame < (4 * rampIntervalFrameCount))
    {
        // Cyan -> blue: decrease g
        color.g = static_cast<BYTE>(0xFF * (((4 * rampIntervalFrameCount) - currentFrame) / rampIntervalFrameCount));
        color.b = 0xFF;
    }
    else if (currentFrame < (5 * rampIntervalFrameCount))
    {
        // Blue -> magenta: increase r
        color.r = static_cast<BYTE>(0xFF * ((currentFrame - (4 * rampIntervalFrameCount)) / rampIntervalFrameCount));
        color.b = 0xFF;
    }
    else
    {
        // Magenta -> red: decrease b
        color.r = 0xFF;
        color.b = static_cast<BYTE>(0xFF * ((cycleFrameCount - currentFrame) / rampIntervalFrameCount));
    }

    // Apply the color
    lampArrayToUpdate->SetColor(color);

    // Increment our current frame, accounting for overflow
    if (++currentFrame > cycleFrameCount)
    {
        currentFrame = 0;
    }
}

void MainLoop(
    _In_ volatile bool& terminateLoop)
{
    color.a = 0xFF;

    while (!terminateLoop)
    {
        Sleep(50);

        CycleUpdateFrame(lampArray.Get());
    }
}
```  

## Position-Based Effects

Use [ILampInfo::GetPosition](../../../reference/lighting/lamparray/interfaces/ilampinfo/methods/ilampinfo_getposition.md) and [ILampArray::GetBoundingBox](../../../reference/lighting/lamparray/interfaces/ilamparray/methods/ilamparray_getboundingbox.md) when creating effects that appear to travel across the device, such as ripples or waves.  

The following example will create a wave of fading out Lamps moving from left to right across the device. Notice that we incorporate the scaling concepts from the "Fading and Blinking" section, but on a per-Lamp basis.  

```cpp
Microsoft::WRL::ComPtr<ILampArray> lampArray;

uint32_t currentFrame = 0;

// The total number of frames in one wave
const uint32_t waveFrameCount = 30;

// The number of frames it takes for each Lamp to fade out
const uint32_t fadeDurationInFrames = 10;

// Helper class for per-Lamp effect state information
struct LampContext
{
    uint32_t lampIndex;

    // How far to the right this Lamp is located compared to the total length of the device.
    float xPercentage;

    // The number of frames left in this Lamp's fade-out
    uint32_t fadeFramesRemaining;
};

std::vector<LampContext> lampContexts;

// The Lamp indices for the device, in sorted order by position from left to right
std::vector<uint32_t> indices;

// The colors to set in each frame
std::vector<LampArrayColor> colors;

// The index in the sorted array representing the peak of the wave
uint32_t lastUpdatedIndex = 0;

// The base color to use in the wave effect
const LampArrayColor mainColor = {0xFF /* r */, 0x0 /* g */, 0x0 /* b */, 0xFF /* a */};

void WaveUpdateFrame(ILampArray* lampArrayToUpdate)
{
    float framePercentage = (float)currentFrame / (float)myFrameCount;

    const uint32_t lampCount = lampArrayToUpdate->GetLampCount();
    for (uint32_t i = 0; i < lampCount; i++)
    {
        auto& lampContext = lampContexts[i];

        // Mark any Lamps for which we should start a new fade-out.
        // Use lastUpdatedIndex to track which Lamps we've started in this wave.
        if (i >= lastUpdatedIndex && lampContext.xPercentage <= framePercentage)
        {
            lastUpdatedIndex = i;

            // This Lamp should start at full brightness on this frame.
            lampContext.fadeFramesRemaining = fadeDurationInFrames + 1;
        }

        // Process fade-outs for any Lamps that have fade-out frames remaining
        if (lampContext.fadeFramesRemaining > 0)
        {
            lampContext.fadeFramesRemaining--;

            // Optimization: use the full strength color for the first fade-out frame (without scaling)
            if (lampContext.fadeFramesRemaining == fadeDurationInFrames)
            {
                colors[i] = mainColor;
            }
            else
            {
                // Scale the main color down based on how many fade-out frames are remaining for this Lamp.
                float scaleFactor = (float)lampContext.fadeFramesRemaining / (float)fadeDurationInFrames;

                auto& lampColor = colors[i];
                lampColor.r = static_cast<BYTE>(scaleFactor * mainColor.r);
                lampColor.g = static_cast<BYTE>(scaleFactor * mainColor.g);
                lampColor.b = static_cast<BYTE>(scaleFactor * mainColor.b);
            }
        }
    }

    // Apply the color
    lampArrayToUpdate->SetColorsForIndices(lampCount, indices.data(), colors.data());

    // Increment our current frame, accounting for overflow
    if (++currentFrame > waveFrameCount)
    {
        currentFrame = 0;

        // The peak of the wave also needs to wrap around
        lastUpdatedIndex = 0;
    }
}

HRESULT MainLoop(
    _In_ volatile bool& terminateLoop)
{
    color.a = 0xFF;

    // Set up contexts
    const uint32_t lampCount = lampArray->GetLampCount();
    for (uint32_t i = 0; i < lampCount; i++)
    {
        LampContext context = {};
        context.lampIndex = i;

        Microsoft::WRL::ComPtr<ILampInfo> lampInfo;
        RETURN_IF_FAILED(lampArray->GetLampInfo(i, &lampInfo));

        LampArrayPosition lampPosition = {};
        lampInfo->GetPosition(&lampPosition);

        // Our position values will be relative to the total length of the device.
        context.xPercentage = (float)lampPosition.xInMeters / (float)boundingBox.xInMeters;

        lampContexts.push_back(context);
    }

    // Sort the contexts by position from left to right
    std::sort(lampContexts.begin(),
        lampContexts.end(),
        [](LampContext const& a, LampContext const& b)
        {
            return a.xPercentage < b.xPercentage;
        });

    // Set up our indices buffer in sorted order
    for (uint32_t i = 0; i < lampCount; i++)
    {
        indices[i] = lampContexts[i].lampIndex;
    }

    colors.resize(lampCount);

    // Animation loop for the sample
    while (!terminateLoop)
    {
        Sleep(33);
        WaveUpdateFrame(lampArray.Get());
    }

    return S_OK;
}
```

## See also

[Lighting API Overview](gc-lighting-toc.md)  
[ILampArray Reference](../../../reference/lighting/lamparray/interfaces/ilamparray/ilamparray.md)  