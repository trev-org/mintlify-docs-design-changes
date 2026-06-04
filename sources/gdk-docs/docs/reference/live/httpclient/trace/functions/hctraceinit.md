---
author: XBL
title: "HCTraceInit"
description: "Initialize tracing for the library."
kindex: HCTraceInit
ms.author: tculotta
ms.topic: reference
security: public
edited: 00/00/0000
applies-to: pc-gdk
---

# HCTraceInit  

Initialize tracing for the library.  

## Syntax  
  
```cpp
void HCTraceInit(  
)  
```  
  
### Parameters  
  
  
### Return value  
Type: void
  
TBD  
  
## Remarks  
  
This function is implicitly called during HCInitialize. Initialization is reference counted, and multiple calls to HCTraceInit and HCTraceCleanup are supported as long as each call to HCTraceInit is paired with exactly one call to HCTraceCleanup. Client callbacks will all be cleared each time HCTraceCleanup is called.
  
## Requirements  
  
**Header:** trace.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[trace](../trace_members.md)  
  
  
