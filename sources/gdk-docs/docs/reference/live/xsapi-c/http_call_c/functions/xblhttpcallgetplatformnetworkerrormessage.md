---
author: joannaleecy
title: "XblHttpCallGetPlatformNetworkErrorMessage"
description: "Get the platform network error message of the HTTP call."
kindex: XblHttpCallGetPlatformNetworkErrorMessage
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblHttpCallGetPlatformNetworkErrorMessage  

Get the platform network error message of the HTTP call.  

## Syntax  
  
```cpp
HRESULT XblHttpCallGetPlatformNetworkErrorMessage(  
         XblHttpCallHandle call,  
         const char** platformNetworkErrorMessage  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: [XblHttpCallHandle](../handles/xblhttpcallhandle.md)  
  
The handle of the HTTP call.  
  
*platformNetworkErrorMessage* &nbsp;&nbsp;\_Out\_  
Type: char**  
  
The platform specific network error message of the HTTP call to be used for tracing / debugging.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, or E_FAIL.
  
## Remarks  
  
This can only be called after calling [XblHttpCallPerformAsync](xblhttpcallperformasync.md) when the HTTP task is completed.
  
## Requirements  
  
**Header:** http_call_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[http_call_c](../http_call_c_members.md)  
  
  
