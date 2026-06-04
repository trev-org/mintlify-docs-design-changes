---
author: tyduck
title: "LampArrayEnumerationKind Enumeration"
description: "Describes the desired device enumeration behavior of a newly registered LampArrayStatusCallback function."
kindex: LampArrayEnumerationKind enumeration
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 03/07/2024
---

# LampArrayEnumerationKind Enumeration

Describes the desired device enumeration behavior of a newly registered LampArrayStatusCallback function. Used with [RegisterLampArrayStatusCallback](../functions/registerlamparraystatuscallback.md), this behavior will apply only to LampArrays that are connected at the time of the registration.

<a id="syntaxSection"></a>  

## Syntax

```cpp
enum class LampArrayEnumerationKind : uint32_t
{
    Async       = 1,
    Blocking    = 2
};
```  
  
<a id="constantsSection"></a>  

## Constants

| Constant | Description |
| --- | --- |
| Async | The call to [RegisterLampArrayStatusCallback](../functions/registerlamparraystatuscallback.md) should return immediately, and enumeration of connected LampArrays should occur asynchronously on the dedicated LampArray callback worker thread. |
| Blocking | The call to [RegisterLampArrayStatusCallback](../functions/registerlamparraystatuscallback.md) should block until all connected LampArrays have been enumerated. |

<a id="remarksSection"></a>  

## Remarks  

The **LampArrayEnumerationKind** parameter of [RegisterLampArrayStatusCallback](../functions/registerlamparraystatuscallback.md) allows the caller to specify how it should receive callbacks for any LampArray devices that are attached at the time of the call. If **LampArrayEnumerationKind::Blocking** is selected, the RegisterLampArrayStatusCallback function will block until that callback is invoked for each attached device (meaning the callback will be invoked on the calling thread).  

When the first callback is registered, the LampArray API starts a worker thread to handle **ILampArray** device status notifications. These events are infrequent, and the worker thread otherwise remains in a wait state. After the registration call returns, all subsequent LampArrayStatusCallbacks will be invoked sequentially on this worker thread.  

If **LampArrayEnumerationKind::Async** is specified, the registration call will return immediately, and any LampArrays connected at the time of the call will be enumerated on the aforementioned LampArray callback worker thread.  
  
<a id="requirementsSection"></a>  

## Requirements  

**Header:** Declared in LampArray.h.  

<a id="seealsoSection"></a>

## See also  

[Lighting API Overview](../../../../features/common/lighting/gc-lighting-toc.md)  
[RegisterLampArrayStatusCallback](../functions/registerlamparraystatuscallback.md)  
