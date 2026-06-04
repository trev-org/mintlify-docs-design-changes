---
author: joannaleecy
title: "HCMockCallCreate"
description: "Creates a mock HTTP call handle."
kindex: HCMockCallCreate
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# HCMockCallCreate  

Creates a mock HTTP call handle.  

## Syntax  
  
```cpp
HRESULT HCMockCallCreate(  
         HCMockCallHandle* call  
)  
```  
  
### Parameters  
  
*call* &nbsp;&nbsp;\_Out\_  
Type: HCMockCallHandle*  
  
The handle of the mock HTTP call.  
  
  
### Return value  
Type: HRESULT
  
Result code for this API operation. Possible values are S_OK, E_INVALIDARG, or E_FAIL.
  
## Remarks  
  
First create a HTTP handle using HCMockCallCreate(). Then call HCMockResponseSet*() to prepare the HC_MOCK_CALL_HANDLE. Then call HCMockAddMock() to add it to the system.
  
## Requirements  
  
**Header:** mock.h
  
**Library:** libHttpClient.GDK.lib
  
## See also  
[mock](../mock_members.md)  
  
  
