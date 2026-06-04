---
author: aablackm
title: "PIXBeginEvent"
description: "Starts a user-defined event for a timing capture of CPU activity, to be displayed in the System Timing Capture feature of PIX."
kindex:
- PIXBeginEvent
- PIX, PIXBeginEvent
ms.author: mattployhar
ms.topic: article
edited: 10/16/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# PIXBeginEvent Function  
  
Starts a user-defined event for a timing capture of CPU activity, to be displayed in the System Timing Capture feature of PIX.  Calls to `PIXBeginEvent` must have a corresponding call to [PIXEndEvent](pixendevent.md).  Both calls must be made from the same thread.  
  
<a id="overloadsSection"></a>
  
## Overload list
  
| Name| Description |  
| --- | --- |  
| [PIXBeginEvent (UINT64, PCSTR, ...)](pixbeginevent.md) | Starts a user-defined event for a timing capture of CPU activity, to be displayed in the System Timing Capture feature of PIX. |  
| [PIXBeginEvent (UINT64, PCWSTR, ...)](pixbeginevent_2.md) | Starts a user-defined event for a timing capture of CPU activity, to be displayed in the System Timing Capture feature of PIX. |  
| [PIXBeginEvent (void\*, UINT64, PCSTR, ...)](pixbeginevent_3.md) | Starts a user-defined event for a timing capture of CPU activity, to be displayed in the System Timing Capture feature of PIX. |  
| [PIXBeginEvent (void\*, UINT64, PCWSTR, ...)](pixbeginevent_4.md) | Starts a user-defined event for a timing capture of CPU activity, to be displayed in the System Timing Capture feature of PIX. |  
| [PIXBeginRetailEvent (void\*, UINT64, PCSTR, ...)](pixbeginretailevent.md) | Starts a user-defined retail event. |  
| [PIXBeginRetailEvent (void\*, UINT64, PCWSTR, ...)](pixbeginretailevent_2.md) | Starts a user-defined retail event. |  
  
<a id="seealsoSection"></a>
  
## See also  
  
[PIXEndEvent](pixendevent.md)  
[PIX3](../pix3_members.md)  
[PIX (NDA topic)](../../../../tools/tools-console/pix/pix.md)  
  