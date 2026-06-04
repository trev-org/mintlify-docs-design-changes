---
author: joannaleecy
title: "HCHttpCallDuplicateHandle"
description: "Duplicates the HCCallHandle object."
kindex: HCHttpCallDuplicateHandle
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallDuplicateHandle  

Duplicates the HCCallHandle object.  

## Syntax  
  
```cpp
HCCallHandle HCHttpCallDuplicateHandle(  
         HCCallHandle call  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: HCCallHandle  
  
The handle of the HTTP call.  
  
  
### Return value  
Type: HCCallHandle
  
Returns the duplicated handle.
  
## Remarks  
  
Use HCHttpCallCloseHandle to close it.
  
## Requirements  
  
**Header:** httpClient.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpClient](../httpclient_members.md)  
  
  
