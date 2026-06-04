---
author: joannaleecy
title: "HCHttpCallResponseSetResponseBodyBytes"
description: "Set the response body byte buffer of the HTTP call. If a custom write callback was previously set on this call handle using HCHttpCallResponseSetResponseBodyWriteFunction, this operation will fail as these are mutually exclusive."
kindex: HCHttpCallResponseSetResponseBodyBytes
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallResponseSetResponseBodyBytes  

Set the response body byte buffer of the HTTP call. If a custom write callback was previously set on this call handle using HCHttpCallResponseSetResponseBodyWriteFunction, this operation will fail as these are mutually exclusive.  

## Syntax  
  
```cpp
HRESULT HCHttpCallResponseSetResponseBodyBytes(  
         HCCallHandle call,  
         const uint8_t* bodyBytes,  
         size_t bodySize  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: HCCallHandle  
  
The handle of the HTTP call.  
  
*bodyBytes* &nbsp;&nbsp;\_In\_reads\_bytes\_(bodySize)  
Type: uint8_t*  
  
The response body bytes of the HTTP call.  
  
*bodySize* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The length in bytes of the body being set.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, E_OUTOFMEMORY, or E_FAIL.
  
## Requirements  
  
**Header:** httpProvider.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpProvider](../httpprovider_members.md)  
  
  
