---
author: joannaleecy
title: "HCHttpCallCloseHandle"
description: "Decrements the reference count on the call object."
kindex: HCHttpCallCloseHandle
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallCloseHandle  

Decrements the reference count on the call object.  

## Syntax  
  
```cpp
HRESULT HCHttpCallCloseHandle(  
         HCCallHandle call  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: HCCallHandle  
  
The handle of the HTTP call  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, or E_FAIL.
  
## Remarks  
  
When the HCCallHandle ref count is 0, HCHttpCallCloseHandle() will free the memory associated with the HCCallHandle.
  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
