---
author: joannaleecy
title: "XblHttpCallGetResponseBodyBytes"
description: "Get the response body buffer of the HTTP call."
kindex: XblHttpCallGetResponseBodyBytes
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblHttpCallGetResponseBodyBytes  

Get the response body buffer of the HTTP call.  

## Syntax  
  
```cpp
HRESULT XblHttpCallGetResponseBodyBytes(  
         XblHttpCallHandle call,  
         size_t bufferSize,  
         uint8_t* buffer,  
         size_t* bufferUsed  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: [XblHttpCallHandle](../handles/xblhttpcallhandle.md)  
  
The handle of the HTTP call.  
  
*bufferSize* &nbsp;&nbsp;\_In\_  
Type: size_t  
  
The response body buffer size being passed in.  
  
*buffer* &nbsp;&nbsp;\_Out\_writes\_bytes\_to\_(bufferSize,*bufferUsed)  
Type: uint8_t*  
  
The buffer to be written to.  
  
*bufferUsed* &nbsp;&nbsp;\_Out\_opt\_  
Type: size_t*  
  
The actual number of bytes written to the buffer.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, or E_FAIL.
  
## Remarks  
  
This can only be called after calling [XblHttpCallPerformAsync](xblhttpcallperformasync.md) when the HTTP task is completed. This will only be valid if the responsetype passed to PerformAsync was Vector.
  
## Requirements  
  
**Header:** http_call_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[http_call_c](../http_call_c_members.md)  
  
  
