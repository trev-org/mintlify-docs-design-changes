---
author: joannaleecy
title: "HCHttpCallResponseAppendResponseBodyBytes"
description: "Appends to the response body byte buffer of the HTTP call. If a custom write callback was previously set on this call handle using HCHttpCallResponseSetResponseBodyWriteFunction, this operation will fail as these are mutually exclusive."
kindex: HCHttpCallResponseAppendResponseBodyBytes
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallResponseAppendResponseBodyBytes  

Appends to the response body byte buffer of the HTTP call. If a custom write callback was previously set on this call handle using HCHttpCallResponseSetResponseBodyWriteFunction, this operation will fail as these are mutually exclusive.  

## Syntax  
  
```cpp
HRESULT HCHttpCallResponseAppendResponseBodyBytes(  
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
  
The data to append.  
  
*bodySize* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The length in bytes of the data.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, E_OUTOFMEMORY, or E_FAIL.
  
## Requirements  
  
**Header:** httpProvider.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpProvider](../httpprovider_members.md)  
  
  
