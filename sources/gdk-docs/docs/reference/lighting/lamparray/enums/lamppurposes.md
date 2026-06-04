---
author: tyduck
title: "LampPurposes Enumeration"
description: "Describes a set of purposes for which a single Lamp is intended to be used."
kindex: LampPurposes enumeration
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# LampPurposes Enumeration

Describes a set of purposes for which a single Lamp is intended to be used.

<a id="syntaxSection"></a>  

## Syntax

```cpp
enum class LampPurposes : uint32_t
{
    Undefined       = 0x00,
    Control         = 0x01,
    Accent          = 0x02,
    Branding        = 0x04,
    Status          = 0x08,
    Illumination    = 0x10,
    Presentation    = 0x20
}; 

DEFINE_ENUM_FLAG_OPERATORS(LampPurposes);
```  
  
<a id="constantsSection"></a>  

## Constants

| Constant | Description |
| --- | --- |
| Undefined | LampPurposes are not specified for this Lamp. |
| Control | Lamp is associated with a control on the device (for example, button, key, slider). |
| Accent | Lamp is used for aesthetic accent purposes and doesn't interact with the user (for example, case fan LED, illuminated side panels on a keyboard). |
| Branding | Lamp is used for device branding (for example, manufacturer logo). |
| Status | Lamp is used to indicate system status information (for example, unread email, CPU temperature). |
| Illumination | Lamp illuminates an object that is outside of the LampArray (for example, stage spotlight, car headlights, camera flash). |
| Presentation | A lamp the user directly looks at (for example, within an artwork or costume). |

<a id="remarksSection"></a>  

## Remarks

It is likely this list will expand in the future, so avoid using error checks that validate whether a LampPurpose is within the current bounds. The preferred approach is to compare against the subset of LampPurposes the application supports.
  
<a id="requirementsSection"></a>  

## Requirements  

**Header:** Declared in LampArray.h.  

<a id="seealsoSection"></a>

## See also  

[Lighting API Overview](../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray::GetIndicesCountForPurposes](../interfaces/ilamparray/methods/ilamparray_getindicescountforpurposes.md)  
[ILampArray::GetIndicesForPurposes](../interfaces/ilamparray/methods/ilamparray_getindicesforpurposes.md)  
[ILampInfo::GetPurposes](../interfaces/ilampinfo/methods/ilampinfo_getpurposes.md)  