---
author: tyduck
title: "LampArray API members"
description: "LampArray API members"
kindex: LampArray
ms.author: tyduck
ms.topic: article
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# LampArray

LampArray APIs allow callers to gain awareness of connected RGB lighting peripherals, inspect the properties of those devices, and change color and brightness values for the associated lights.

  
## Interfaces  
  
| Interface | Description |  
| --- | --- |  
| [ILampArray](interfaces/ilamparray/ilamparray.md) | Represents a lighting-enabled device. |  
| [ILampInfo](interfaces/ilampinfo/ilampinfo.md) | A representation of a single addressable Lamp and its properties. |  
  
## Functions  
  
| Function | Description |  
| --- | --- |  
| [LampArrayCallback](functions/lamparraycallback.md) | Title defined callback for LampArray connected and disconnected events. |  
| [RegisterLampArrayCallback](functions/registerlamparraycallback.md) | RegisterLampArrayCallback API reference |  
| [TrySetLampArrayWorkerThreadAffinityMask](functions/trysetlamparrayworkerthreadaffinitymask.md) | TrySetLampArrayWorkerThreadAffinityMask API reference |  
| [UnregisterLampArrayCallback](functions/unregisterlamparraycallback.md) | UnregisterLampArrayCallback API reference |  
  
## Structures  
  
| Structure | Description |  
| --- | --- |  
| [LampArrayColor](structs/lamparraycolor.md) | Describes a color in terms of red, green, blue and alpha channels. |  
| [LampArrayPosition](structs/lamparrayposition.md) | Represents a measurement in 3D space from a given origin point. |  
  
## Enumerations  
  
| Enumeration | Description |  
| --- | --- |  
| [LampArrayKind Enumeration](enums/lamparraykind.md) | Describes the general type of the physical device this ILampArray is part of. |  
| [LampPurposes Enumeration](enums/lamppurposes.md) | Describes a set of purposes for which a single Lamp is intended to be used. |  