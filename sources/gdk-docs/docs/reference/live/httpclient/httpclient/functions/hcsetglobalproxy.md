---
author: joannaleecy
title: "HCSetGlobalProxy"
description: "Manually sets an explicit proxy address."
kindex: HCSetGlobalProxy
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCSetGlobalProxy  

Manually sets an explicit proxy address.  

## Syntax  
  
```cpp
HRESULT HCSetGlobalProxy(  
         const char* proxyUri  
)  
```  
  
### Parameters  
  
*proxyUri* &nbsp;&nbsp;\_In\_  
Type: char*  
  
The proxy address to use in the "[ip]:[port]" format.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_HC_NOT_INITIALISED, or E_FAIL.
  
## Remarks  
  
If it is passed a null proxy, it will reset to default. Does not include proxying web socket traffic.
  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
