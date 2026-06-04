---
author: joannaleecy
title: "XblHttpCallGetStatusCode"
description: "Get the HTTP status code of the HTTP call response."
kindex: XblHttpCallGetStatusCode
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblHttpCallGetStatusCode  

Get the HTTP status code of the HTTP call response.  

## Syntax  
  
```cpp
HRESULT XblHttpCallGetStatusCode(  
         XblHttpCallHandle call,  
         uint32_t* statusCode  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: [XblHttpCallHandle](../handles/xblhttpcallhandle.md)  
  
The handle of the HTTP call.  
  
*statusCode* &nbsp;&nbsp;\_Out\_  
Type: uint32_t*  
  
the HTTP status code of the HTTP call response.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation.
  
## Remarks  
  
This can only be called after calling [XblHttpCallPerformAsync](xblhttpcallperformasync.md) when the HTTP task is completed.
  
## Requirements  
  
**Header:** http_call_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[http_call_c](../http_call_c_members.md)  
  
  
