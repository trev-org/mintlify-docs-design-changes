---
author: joannaleecy
title: "XblPresenceRecordDuplicateHandle"
description: "Duplicates a XblPresenceRecordHandle."
kindex: XblPresenceRecordDuplicateHandle
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPresenceRecordDuplicateHandle  

Duplicates a XblPresenceRecordHandle.  

## Syntax  
  
```cpp
HRESULT XblPresenceRecordDuplicateHandle(  
         XblPresenceRecordHandle handle,  
         XblPresenceRecordHandle* duplicatedHandle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblPresenceRecordHandle](../handles/xblpresencerecordhandle.md)  
  
The presence record handle.  
  
*duplicatedHandle* &nbsp;&nbsp;\_Out\_  
Type: [XblPresenceRecordHandle*](../handles/xblpresencerecordhandle.md)  
  
Passe back the duplicated handle.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** presence_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[presence_c](../presence_c_members.md)  
  
  
