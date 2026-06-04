---
author: XBL
title: "HCTraceSetClientCallback"
description: "Set a client callback for tracing. Note that once a trace callback is set, it may be called until HCTraceCleanup is called."
kindex: HCTraceSetClientCallback
ms.author: tculotta
ms.topic: reference
security: public
edited: 00/00/0000
applies-to: pc-gdk
---

# HCTraceSetClientCallback  

Set a client callback for tracing. Note that once a trace callback is set, it may be called until HCTraceCleanup is called.  

## Syntax  
  
```cpp
void HCTraceSetClientCallback(  
         HCTraceCallback* callback  
)  
```  
  
### Parameters  
  
*callback* &nbsp;&nbsp;\_In\_opt\_  
Type: HCTraceCallback*  
  
Trace callback.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** trace.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[trace](../trace_members.md)  
  
  
