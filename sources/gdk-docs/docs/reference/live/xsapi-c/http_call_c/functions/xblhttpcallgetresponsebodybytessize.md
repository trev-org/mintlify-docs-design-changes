---
author: joannaleecy
title: "XblHttpCallGetResponseBodyBytesSize"
description: "Get the response body buffer size of the HTTP call."
kindex: XblHttpCallGetResponseBodyBytesSize
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblHttpCallGetResponseBodyBytesSize  

Get the response body buffer size of the HTTP call.  

## Syntax  
  
```cpp
HRESULT XblHttpCallGetResponseBodyBytesSize(  
         XblHttpCallHandle call,  
         size_t* bufferSize  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: [XblHttpCallHandle](../handles/xblhttpcallhandle.md)  
  
The handle of the HTTP call.  
  
*bufferSize* &nbsp;&nbsp;\_Out\_  
Type: size_t*  
  
The response body buffer size of the HTTP call.  
  
  
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
  
  
