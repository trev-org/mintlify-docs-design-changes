---
author: joannaleecy
title: "XblHttpCallGetRequestUrl"
description: "Gets the request url for the HTTP call."
kindex: XblHttpCallGetRequestUrl
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblHttpCallGetRequestUrl  

Gets the request url for the HTTP call.  

## Syntax  
  
```cpp
HRESULT XblHttpCallGetRequestUrl(  
         XblHttpCallHandle call,  
         const char** url  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: [XblHttpCallHandle](../handles/xblhttpcallhandle.md)  
  
The handle of the HTTP call.  
  
*url* &nbsp;&nbsp;\_Out\_  
Type: char**  
  
The UTF-8 encoded url body string of the HTTP call. The memory for the returned string pointer remains valid for the life of the XblHttpCallHandle object until XblHttpCallCloseHandle() is called on it.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation.
  
## Requirements  
  
**Header:** http_call_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[http_call_c](../http_call_c_members.md)  
  
  
