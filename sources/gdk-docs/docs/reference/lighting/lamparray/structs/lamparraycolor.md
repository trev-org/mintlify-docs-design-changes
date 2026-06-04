---
author: tyduck
title: "LampArrayColor"
description: "Describes a color in terms of red, green, blue and alpha channels."
kindex: LampArrayColor
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# LampArrayColor  

Describes a color in terms of red, green, blue and alpha channels.

<a id="syntaxSection"></a>

## Syntax  
  
```cpp
struct LampArrayColor
{
    uint8_t r;
    uint8_t g;
    uint8_t b;
    uint8_t a;
};
```
  
<a id="membersSection"></a>

### Members  
  
*r*  
Type: uint8_t  
  
The red channel value of the color.
  
*g*  
Type: uint8_t  
  
The green channel value of the color.  

*b*  
Type: uint8_t  
  
The blue channel value of the color.
  
*a*  
Type: uint8_t  
  
The alpha channel value of the color. This represents the relative transparency of the color, where zero is fully transparent and 0xFF is fully opaque. If an alpha value other than 0xFF is used, the color will undergo an additional blending step against black. To avoid this blending step, do not pass in any alpha value other than 0xFF when setting colors.  

<a id="requirementsSection"></a>

## Requirements  
  
**Header:** LampArray.h
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
<a id="seealsoSection"></a>

## See also  

[Lighting API Overview](../../../../features/common/lighting/gc-lighting-toc.md)  
[Setting Colors on a LampArray](../../../../features/common/lighting/lighting-colors.md)  
  