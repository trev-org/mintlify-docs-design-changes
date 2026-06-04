---
author: joannaleecy
title: "HCHttpCallRequestSetRetryCacheId"
description: "ID number of this REST endpoint used to cache the Retry-After header for fast fail."
kindex: HCHttpCallRequestSetRetryCacheId
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallRequestSetRetryCacheId  

ID number of this REST endpoint used to cache the Retry-After header for fast fail.  

## Syntax  
  
```cpp
HRESULT HCHttpCallRequestSetRetryCacheId(  
         HCCallHandle call,  
         uint32_t retryAfterCacheId  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_opt\_  
Type: HCCallHandle  
  
The handle of the HTTP call. Pass nullptr to set the default for future calls.  
  
*retryAfterCacheId* &nbsp;&nbsp;\_In\_  
Type: uint32_t  
  
ID number of this REST endpoint used to cache the Retry-After header for fast fail. 1-1000 are reserved for XSAPI.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, or E_FAIL.
  
## Remarks  
  
This must be called prior to calling HCHttpCallPerformAsync.
  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
