---
author: joannaleecy
title: "XblPresenceGetPresenceResult"
description: "Get result for an XblPresenceGetPresenceAsync call."
kindex: XblPresenceGetPresenceResult
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPresenceGetPresenceResult  

Get result for an XblPresenceGetPresenceAsync call.  

## Syntax  
  
```cpp
HRESULT XblPresenceGetPresenceResult(  
         XAsyncBlock* async,  
         XblPresenceRecordHandle* presenceRecordHandle  
)  
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_In\_  
Type: XAsyncBlock*  
  
The AsyncBlock for this operation.  
  
*presenceRecordHandle* &nbsp;&nbsp;\_Out\_  
Type: [XblPresenceRecordHandle*](../handles/xblpresencerecordhandle.md)  
  
Returned handle to a presence record. The associated presence record must be released with [XblPresenceRecordCloseHandle](xblpresencerecordclosehandle.md) when it is no longer needed.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** presence_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[presence_c](../presence_c_members.md)  
  
  
