---
author: joannaleecy
title: "HCHttpCallRequestSetSSLValidation"
description: "Enables or disables SSL server certificate validation for this specific HTTP call."
kindex: HCHttpCallRequestSetSSLValidation
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallRequestSetSSLValidation  

Enables or disables SSL server certificate validation for this specific HTTP call.  

## Syntax  
  
```cpp
HRESULT HCHttpCallRequestSetSSLValidation(  
         HCCallHandle call,  
         bool sslValidation  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: HCCallHandle  
  
The handle of the HTTP call.  
  
*sslValidation* &nbsp;&nbsp;\_In\_  
Type: bool  
  
Boolean indicating whether to enable or disable certificate validation for the HTTP call.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, or E_FAIL.
  
## Remarks  
  
Only implemented for Win32. Not available in the GDK. The default is true Optional, call prior to calling HCHttpCallPerformAsync.
  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
