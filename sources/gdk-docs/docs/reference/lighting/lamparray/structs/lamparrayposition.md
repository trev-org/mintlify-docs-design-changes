---
author: tyduck
title: "LampArrayPosition"
description: "Represents a measurement in 3D space from a given origin point."
kindex: LampArrayPosition
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# LampArrayPosition  

Represents a measurement in 3D space from a given origin point.

<a id="syntaxSection"></a>

## Syntax  
  
```cpp
struct LampArrayPosition
{
    float xInMeters;
    float yInMeters;
    float zInMeters;
};
```
  
<a id="membersSection"></a>

### Members  
  
*xInMeters*  
Type: float  
  
The distance from the origin point in the x dimension, measured in meters.
   
*yInMeters*  
Type: float  
  
The distance from the origin point in the y dimension, measured in meters.

*zInMeters*  
Type: float  
  
The distance from the origin point in the z dimension, measured in meters.
  
<a id="requirementsSection"></a>

## Requirements  
  
**Header:** LampArray.h
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
<a id="seealsoSection"></a>

## See also  

[Lighting API Overview](../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray::GetBoundingBox](../interfaces/ilamparray/methods/ilamparray_getboundingbox.md)  
[ILampInfo::GetPosition](../interfaces/ilampinfo/methods/ilampinfo_getposition.md)  
  