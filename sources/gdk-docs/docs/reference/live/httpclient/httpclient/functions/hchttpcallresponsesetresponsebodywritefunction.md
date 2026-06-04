---
author: joannaleecy
title: "HCHttpCallResponseSetResponseBodyWriteFunction"
description: "Sets a custom callback function that will be used to write the response body when the HTTP call is performed. Using a custom write callback will cause subsequent calls to HCHttpCallResponseGetResponseBodyBytesSize, HCHttpCallResponseGetResponseBodyBytes, and HCHttpCallGetResponseBodyString to fail as these are mutually exclusive."
kindex: HCHttpCallResponseSetResponseBodyWriteFunction
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallResponseSetResponseBodyWriteFunction  

Sets a custom callback function that will be used to write the response body when the HTTP call is performed. Using a custom write callback will cause subsequent calls to HCHttpCallResponseGetResponseBodyBytesSize, HCHttpCallResponseGetResponseBodyBytes, and HCHttpCallGetResponseBodyString to fail as these are mutually exclusive.  

## Syntax  
  
```cpp
HRESULT HCHttpCallResponseSetResponseBodyWriteFunction(  
         HCCallHandle call,  
         HCHttpCallResponseBodyWriteFunction writeFunction,  
         void* context  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: HCCallHandle  
  
The handle of the HTTP call.  
  
*writeFunction* &nbsp;&nbsp;\_In\_  
Type: HCHttpCallResponseBodyWriteFunction  
  
The response body write function this call should use.  
  
*context* &nbsp;&nbsp;\_In\_opt\_  
Type: void*  
  
The context to associate with this write function.  
  
  
### Return value  
Type: HRESULT
  
Result code of this API operation. Possible values are S_OK or E_INVALIDARG.
  
## Remarks  
  
This must be called prior to calling HCHttpCallPerformAsync.
  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
