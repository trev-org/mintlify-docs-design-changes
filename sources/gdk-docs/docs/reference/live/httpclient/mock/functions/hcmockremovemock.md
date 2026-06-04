---
author: joannaleecy
title: "HCMockRemoveMock"
description: "Removes and cleans up the mock."
kindex: HCMockRemoveMock
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# HCMockRemoveMock  

Removes and cleans up the mock.  

## Syntax  
  
```cpp
HRESULT HCMockRemoveMock(  
         HCMockCallHandle call  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_In\_  
Type: HCMockCallHandle  
  
The matched mock.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, or E_FAIL.
  
## Requirements  
  
**Header:** mock.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[mock](../mock_members.md)  
  
  
