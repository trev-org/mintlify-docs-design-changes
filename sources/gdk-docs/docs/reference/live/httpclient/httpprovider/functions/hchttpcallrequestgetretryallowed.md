---
author: joannaleecy
title: "HCHttpCallRequestGetRetryAllowed"
description: "Gets if retry is allowed for this HTTP call."
kindex: HCHttpCallRequestGetRetryAllowed
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCHttpCallRequestGetRetryAllowed  

Gets if retry is allowed for this HTTP call.  

## Syntax  
  
```cpp
HRESULT HCHttpCallRequestGetRetryAllowed(  
         HCCallHandle call,  
         bool* retryAllowed  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_opt\_  
Type: HCCallHandle  
  
The handle of the HTTP call. Pass nullptr to get the default for future calls.  
  
*retryAllowed* &nbsp;&nbsp;\_Out\_  
Type: bool*  
  
If retry is allowed for this HTTP call.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, or E_FAIL.
  
## Remarks  
  
Defaults to true.
  
## Requirements  
  
**Header:** httpProvider.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[httpProvider](../httpprovider_members.md)  
  
  
