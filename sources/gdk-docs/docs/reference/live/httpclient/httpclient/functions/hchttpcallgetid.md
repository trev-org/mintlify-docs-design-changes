---
author: joannaleecy
title: "HCHttpCallGetId"
description: "Returns a unique uint64_t which identifies this HTTP call object."
kindex: HCHttpCallGetId
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallGetId  

Returns a unique uint64_t which identifies this HTTP call object.  

## Syntax  
  
```cpp
uint64_t HCHttpCallGetId(  
         HCCallHandle call  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: HCCallHandle  
  
The handle of the HTTP call.  
  
  
### Return value  
Type: uint64_t
  
Returns a unique uint64_t which identifies this HTTP call object or 0 if invalid.
  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
