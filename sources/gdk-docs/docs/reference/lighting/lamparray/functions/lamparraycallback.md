---
author: tyduck
title: "LampArrayCallback"
description: "Title defined callback for LampArray connected and disconnected events."
kindex: LampArrayCallback
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# LampArrayCallback  

Title defined callback for LampArray connected and disconnected events. This function is registered with [RegisterLampArrayCallback](registerlamparraycallback.md).  

## Syntax  
  
```cpp
typedef void (CALLBACK * LampArrayCallback)(
    void * context,
    bool isAttached,
    ILampArray * lampArray);  
```  

### Parameters  
  
*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  
  
A pointer to an object containing relevant information for the callback. This pointer was passed to [RegisterLampArrayCallback](registerlamparraycallback.md).

*isAttached*  
Type: bool  
  
Indicates whether the LampArray was attached to the system.

*lampArray* &nbsp;&nbsp;\_In\_  
Type: ILampArray*  
  
Device which triggered the callback.  

### Return value

Type: void
  
## Remarks  

This function's definition is determined by the developer, but the parameters of that function must match in order for the callback to occur. This function is used to define the LampArray device callback registered with [RegisterLampArrayCallback](registerlamparraycallback.md). It will define the function that is called whenever a LampArray is attached or removed from the system.  
  
## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  

## See also  

[Lighting API Overview](../../../../features/common/lighting/gc-lighting-toc.md)  
[Lighting Basics](../../../../features/common/lighting/lighting-basics.md)  
[RegisterLampArrayCallback](registerlamparraycallback.md)  
[UnregisterLampArrayCallback](unregisterlamparraycallback.md)  