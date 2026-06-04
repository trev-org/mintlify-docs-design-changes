---
author: joannaleecy
title: "HCTraceSetPlatformCallbacks"
description: "Sets the Platform Callbacks."
kindex: HCTraceSetPlatformCallbacks
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# HCTraceSetPlatformCallbacks  

Sets the Platform Callbacks.  

## Syntax  
  
```cpp
HRESULT HCTraceSetPlatformCallbacks(  
         HCTracePlatformThisThreadIdCallback* threadIdCallback,  
         void* threadIdContext,  
         HCTracePlatformWriteMessageToDebuggerCallback* writeToDebuggerCallback,  
         void* writeToDebuggerContext  
)  
```  
  
### Parameters  
  
*threadIdCallback* &nbsp;&nbsp;\_In\_  
Type: HCTracePlatformThisThreadIdCallback*  
  
The thread ID callback.  
  
*threadIdContext* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  
  
The thread ID context.  
  
*writeToDebuggerCallback* &nbsp;&nbsp;\_In\_  
Type: HCTracePlatformWriteMessageToDebuggerCallback*  
  
The write to debbugger callback.  
  
*writeToDebuggerContext* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  
  
The write to debbugger context.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, or E_HC_NOT_INITIALISED.
  
## Requirements  
  
**Header:** trace.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[trace](../trace_members.md)  
  
  
