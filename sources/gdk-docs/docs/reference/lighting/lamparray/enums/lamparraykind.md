---
author: tyduck
title: "LampArrayKind Enumeration"
description: "Describes the general type of the physical device that this `ILampArray` is part of."
kindex: LampArrayKind enumeration
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 03/07/2024
---

# LampArrayKind Enumeration

Describes the general type of the physical device that this `ILampArray` is part of.

<a id="syntaxSection"></a>  

## Syntax

```cpp
enum class LampArrayKind : uint32_t
{
    Undefined       = 0,
    Keyboard        = 1,
    Mouse           = 2,
    GameController  = 3,
    Peripheral      = 4,
    Scene           = 5,
    Notification    = 6,
    Chassis         = 7,
    Wearable        = 8,
    Furniture       = 9,
    Art             = 10,
    Headset         = 11,
    Microphone      = 12,
    Speaker         = 13
};  
```  
  
<a id="constantsSection"></a>  

## Constants

| Constant | Description |
| --- | --- |
| `Undefined` | `LampArrayKind` is not specified for this device. |
| `Keyboard` | Is part of a keyboard or keypad. |
| `Mouse` | Is part of a mouse. |
| `GameController` | Is part of a game controller (for example, gamepad, flight stick, sailing simulation device). |
| `Peripheral` | Is part of a more general peripheral/accessory (for example, speakers, mousepad, microphone, webcam). |
| `Scene` | Illuminates a room/performance stage/area (for example, room light bulbs, spotlights, wash lights, strobe lights, booth-strips, billboard/sign, camera flash). |
| `Notification` | Is part of a notification device. |
| `Chassis` | Is part of an internal PC case component (for example, RAM stick, motherboard, fan). |
| `Wearable` | Is embedded in a wearable accessory (for example, audio headset, wristband, watch, shoes). |
| `Furniture` | Is embedded in a piece of furniture (for example, chair, desk, bookcase). |
| `Art` | Is embedded in an artwork (for example, painting, sculpture). |
| `Headset` | Is embedded in a wearable accessory designed specifically for the head (for example, headphones). This is a specialization of `Wearable`. |
| `Microphone` | `LampArray` is part of a standalone microphone. This is a specialization of `LampArrayKindPeripheral`. |
| `Speaker` | `LampArray` is part of a standalone speaker. This is a specialization of `LampArrayKindPeripheral`. |

<a id="remarksSection"></a>  

## Remarks

It's likely that this list will expand in the future. Avoid placing error checks that validate whether a LampArrayKind is within the current bounds. The preferred approach is to compare against the subset of LampArrayKinds that the application supports.  
  
<a id="requirementsSection"></a>  

## Requirements  

**Header:** Declared in LampArray.h.  

<a id="seealsoSection"></a>

## See also  

[Lighting API Overview](../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray::GetLampArrayKind](../interfaces/ilamparray/methods/ilamparray_getlamparraykind.md)  
