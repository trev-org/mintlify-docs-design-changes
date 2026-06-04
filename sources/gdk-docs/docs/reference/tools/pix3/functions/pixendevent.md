---
author: aablackm
title: "PIXEndEvent()"
description: "Defines the end of a user-defined event."
kindex:
- PIXEndEvent
- PIX, PIXEndEvent
ms.author: mattployhar
ms.topic: reference
edited: 06/13/2019
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# PIXEndEvent reference
  
Defines the end of a user-defined event.   

## Syntax  
  
```cpp
void PIXEndEvent(  
)  
```  
  
### Parameters  
  
  
### Return value  
  
Type: void  
  
  
## Remarks  
  
Each call to `PIXEndEvent` must be paired with a corresponding call to [PIXBeginEvent](pixbeginevent.md). The paired calls to [PIXBeginEvent](pixbeginevent.md) and `PIXEndEvent` must occur on the same thread.  In the event of mismatched markers, PIX will throw a warning in a timing capture. Mismatched markers will cause an unexpected or unusable rendering of the PIX timeline. 
In a worst case scenario, mismatched event calls may cause PIX to crash.  
  
## Requirements  
  
**Header:** pix3.h
  
**Library:** pixevt.lib
  
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  
  
[PIXBeginEvent](pixbeginevent.md)  
[PIXEndEvent_2](pixendevent_2.md)  
[PIX3](../pix3_members.md)  
[PIX (NDA topic)](../../../../tools/tools-console/pix/pix.md)  