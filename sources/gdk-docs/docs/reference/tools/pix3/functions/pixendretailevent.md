---
author: aablackm
title: "PIXEndRetailEvent"
description: "Defines the end of a user-defined retail event."
kindex: PIXEndRetailEvent
ms.author: mattployhar
ms.topic: reference
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# PIXEndRetailEvent  

Defines the end of a user-defined retail event.  

## Syntax  
  
```cpp
void PIXEndRetailEvent(  
         void* context  
)  
```  
  
### Parameters  
  
*context* &nbsp;&nbsp;  
Type: void*  
  
Context for the event, accepts `ID3D12GraphicsCommandList\*`, `ID3D12GraphicsCommandList\*`, and `ID3D12XboxDmaCommandList\*` (Xbox only).  
The *context* associates the PIX marker with the D3D12 object it is set on.  

### Return value
Type: void
  
  
## Remarks  
  
With a debug or instrumented device, `PIXEndERetailEvent` behaves identically to [PIXEndEvent](pixendevent.md). For a retail device, the events will be included in HIX files for GPU hang debugging.

Each call to `PIXEndERetailEvent` must be paired with a corresponding call to [PIXBeginRetailEvent](pixbeginretailevent.md). 
In a worst case scenario, mismatched event calls may cause PIX to crash.  
  
## Requirements  
  
**Header:** pix3.h
  
**Library:** pixevt.lib
**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  
[PIXBeginRetailEvent](pixbeginretailevent.md)  
[pix3](../pix3_members.md)  
[PIX (NDA topic)](../../../../tools/tools-console/pix/pix.md)  
  
  