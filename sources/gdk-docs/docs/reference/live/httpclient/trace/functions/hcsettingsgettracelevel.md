---
author: joannaleecy
title: "HCSettingsGetTraceLevel"
description: "Gets the trace level for the library."
kindex: HCSettingsGetTraceLevel
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCSettingsGetTraceLevel  

Gets the trace level for the library.  

## Syntax  
  
```cpp
HRESULT HCSettingsGetTraceLevel(  
         HCTraceLevel* traceLevel  
)  
```  
  
### Parameters  
  
*traceLevel* &nbsp;&nbsp;\_Out\_  
Type: [HCTraceLevel*](../enums/hctracelevel.md)  
  
Trace level.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, or E_FAIL.
  
## Requirements  
  
**Header:** trace.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[trace](../trace_members.md)  
  
  
