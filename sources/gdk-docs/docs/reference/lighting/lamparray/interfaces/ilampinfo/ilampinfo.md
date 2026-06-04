---
author: tyduck
title: "ILampInfo (Interface contents)"
description: "A representation of a single addressable Lamp and its properties."
kindex: ILampInfo
ms.author: tyduck
ms.topic: article
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampInfo  

A representation of a single addressable Lamp and its properties. The methods on this object give information about the Lamp's relative position, color support, intended purposes, and associated keyboard scan code (if applicable).

## Syntax  
  
```cpp  
class ILampInfo : public IUnknown  
```  
  
  
## Methods  
  
| Method | Description |  
| --- | --- |  
| [GetBlueLevelCount](methods/ilampinfo_getbluelevelcount.md) | Returns the number of blue intensities settable for the Lamp. |  
| [GetFixedColor](methods/ilampinfo_getfixedcolor.md) | Returns whether a Lamp has a fixed color. |  
| [GetGainLevelCount](methods/ilampinfo_getgainlevelcount.md) | Returns the number of color independent intensities settable for this Lamp. |  
| [GetGreenLevelCount](methods/ilampinfo_getgreenlevelcount.md) | Returns the number of blue intensities settable for the Lamp. |  
| [GetIndex](methods/ilampinfo_getindex.md) | Returns the index in the LampArray at which the given lamp resides. |  
| [GetNearestSupportedColor](methods/ilampinfo_getnearestsupportedcolor.md) | Finds the nearest/closest matching color supported by this Lamp relative to the desired color. |  
| [GetPosition](methods/ilampinfo_getposition.md) | Returns the 3D position of the Lamp relative to the origin of the LampArray's bounding box. |  
| [GetPurposes](methods/ilampinfo_getpurposes.md) | Returns the set of purposes for which the Lamp is intended to be used. |  
| [GetRedLevelCount](methods/ilampinfo_getredlevelcount.md) | Returns the number of red intensities settable for the Lamp. |  
| [GetScanCode](methods/ilampinfo_getscancode.md) | Returns the keyboard scan code associated with this Lamp. |  
| [GetUpdateLatencyInMicroseconds](methods/ilampinfo_getupdatelatencyinmicroseconds.md) | Returns the amount of time between the LampArray receiving an update for a Lamp and the update emanating from the device. |  
  

## Requirements  
  
**Header:** LampArray.h
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../features/common/lighting/gc-lighting-toc.md)  
[Lighting Basics](../../../../../features/common/lighting/lighting-basics.md)  
[LampArray](../../lamparray_members.md)  