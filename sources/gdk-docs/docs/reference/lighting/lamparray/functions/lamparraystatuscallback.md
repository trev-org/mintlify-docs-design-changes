---
author: tyduck
title: "LampArrayStatusCallback"
description: "Title defined callback for LampArray status changed events."
kindex: LampArrayStatusCallback
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 03/07/2024
---

# LampArrayStatusCallback  

Title defined callback for LampArray status changed events. This function is registered with [RegisterLampArrayStatusCallback](registerlamparraystatuscallback.md).  

## Syntax  
  
```cpp
typedef void (CALLBACK * LampArrayStatusCallback)(
    _In_opt_ void * context,
    LampArrayStatus currentStatus,
    LampArrayStatus previousStatus,
    _In_ ILampArray * lampArray);
```  

### Parameters  
  
*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  
  
A pointer to an object containing relevant information for the callback. This pointer was passed to [RegisterLampArrayStatusCallback](registerlamparraystatuscallback.md).

*currentStatus*  
Type: [LampArrayStatus](../enums/lamparraystatus.md)  

The new status of the LampArray.  

*previousStatus*  
Type: [LampArrayStatus](../enums/lamparraystatus.md)  

The previous status of the LampArray.  

*lampArray* &nbsp;&nbsp;\_In\_  
Type: [ILampArray*](../interfaces/ilamparray/ilamparray.md)  
  
Device which triggered the callback.  

### Return value

Type: void
  
## Remarks  

This function's definition is determined by the developer, but the parameters of that function must match in order for the callback to occur. This function is used to define the LampArray device callback registered with [RegisterLampArrayStatusCallback](registerlamparraystatuscallback.md). It will define the function that is called whenever the LampArray status changes.  
  
## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  

## See also  

[Lighting API Overview](../../../../features/common/lighting/gc-lighting-toc.md)  
[Lighting Basics](../../../../features/common/lighting/lighting-basics.md)  
[RegisterLampArrayStatusCallback](registerlamparraystatuscallback.md)  
[UnregisterLampArrayCallback](unregisterlamparraycallback.md)  