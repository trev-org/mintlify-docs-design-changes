---
author: tyduck
title: "LampArrayStatus Enumeration"
description: "Enumeration of the possible states of a LampArray."
kindex: LampArrayStatus enumeration
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 03/07/2024
---

# LampArrayStatus Enumeration

Enumeration of the possible states of a LampArray.

<a id="syntaxSection"></a>  

## Syntax

```cpp
enum class LampArrayStatus : uint32_t
{
    None            = 0x00000000,
    Connected       = 0x00000001,
    Available       = 0x00000002
};
```  
  
<a id="constantsSection"></a>  

## Constants

| Constant | Description |
| --- | --- |
| None | The LampArray has no status. |
| Connected | The LampArray is connected to the system. |
| Available | The calling process has been granted control of lighting on the LampArray. |

<a id="remarksSection"></a>  

  
<a id="requirementsSection"></a>  

## Requirements  

**Header:** Declared in LampArray.h.  

<a id="seealsoSection"></a>

## See also  

[Lighting API Overview](../../../../features/common/lighting/gc-lighting-toc.md)  
[LampArrayStatusCallback](../functions/lamparraystatuscallback.md)  
