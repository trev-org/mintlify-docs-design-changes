---
author: joannaleecy
title: "HCHttpCallGetContext"
description: "Gets the context pointer attached to this call object."
kindex: HCHttpCallGetContext
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallGetContext  

Gets the context pointer attached to this call object.  

## Syntax  
  
```cpp
HRESULT HCHttpCallGetContext(  
         HCCallHandle call,  
         void** context  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: HCCallHandle  
  
The handle of the HTTP call.  
  
*context* &nbsp;&nbsp;\_In\_  
Type: void**  
  
the context pointer attached to this call object.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, or E_FAIL.
  
## Requirements  
  
**Header:** httpProvider.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpProvider](../httpprovider_members.md)  
  
  
