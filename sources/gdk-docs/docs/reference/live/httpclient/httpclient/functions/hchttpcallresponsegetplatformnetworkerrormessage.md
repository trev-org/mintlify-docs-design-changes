---
author: joannaleecy
title: "HCHttpCallResponseGetPlatformNetworkErrorMessage"
description: "Get the platform network error message of the HTTP call."
kindex: HCHttpCallResponseGetPlatformNetworkErrorMessage
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallResponseGetPlatformNetworkErrorMessage  

Get the platform network error message of the HTTP call.  

## Syntax  
  
```cpp
HRESULT HCHttpCallResponseGetPlatformNetworkErrorMessage(  
         HCCallHandle call,  
         const char** platformNetworkErrorMessage  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: HCCallHandle  
  
The handle of the HTTP call.  
  
*platformNetworkErrorMessage* &nbsp;&nbsp;\_Out\_  
Type: char**  
  
The platform specific network error message of the HTTP call to be used for tracing / debugging.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, or E_FAIL.
  
## Remarks  
  
This can only be called after calling HCHttpCallPerformAsync when the HTTP task is completed.
  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
