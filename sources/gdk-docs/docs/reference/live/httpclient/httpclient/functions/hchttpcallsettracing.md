---
author: joannaleecy
title: "HCHttpCallSetTracing"
description: "Enables or disables tracing for this specific HTTP call."
kindex: HCHttpCallSetTracing
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallSetTracing  

Enables or disables tracing for this specific HTTP call.  

## Syntax  
  
```cpp
HRESULT HCHttpCallSetTracing(  
         HCCallHandle call,  
         bool traceCall  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: HCCallHandle  
  
The handle of the HTTP call.  
  
*traceCall* &nbsp;&nbsp;\_In\_  
Type: bool  
  
Trace this call.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, or E_FAIL.
  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
