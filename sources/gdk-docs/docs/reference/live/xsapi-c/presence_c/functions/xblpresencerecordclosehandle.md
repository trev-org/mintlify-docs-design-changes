---
author: joannaleecy
title: "XblPresenceRecordCloseHandle"
description: "Closes a XblPresenceRecordHandle."
kindex: XblPresenceRecordCloseHandle
ms.topic: reference
edited: 10/26/2022
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblPresenceRecordCloseHandle  

Closes a XblPresenceRecordHandle.  

## Syntax  
  
```cpp
void XblPresenceRecordCloseHandle(  
         XblPresenceRecordHandle handle  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblPresenceRecordHandle](../handles/xblpresencerecordhandle.md)  
  
The presence record handle.  
  
  
### Return value  
Type: void
  

  
## Remarks  
  
When all outstanding handles have been closed, XblPresenceRecordCloseHandle will free the memory associated with the presence record handle.
  
## Requirements  
  
**Header:** presence_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[XblPresenceGetPresenceForMultipleUsersResult](xblpresencegetpresenceformultipleusersresult.md)  
[XblPresenceGetPresenceForSocialGroupResult](xblpresencegetpresenceforsocialgroupresult.md)  
[presence_c](../presence_c_members.md)  
  
  
