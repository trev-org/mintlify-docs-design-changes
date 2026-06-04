---
author: joannaleecy
title: "XblContextCloseHandle"
description: "Closes the XblContextHandle."
kindex: XblContextCloseHandle
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblContextCloseHandle  

Closes the XblContextHandle.  

## Syntax  
  
```cpp
void XblContextCloseHandle(  
         XblContextHandle xboxLiveContextHandle  
)  
```  
  
### Parameters  
  
*xboxLiveContextHandle* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
The Xbox Live context handle.  
  
  
### Return value  
Type: void
  

  
## Remarks  
  
When all outstanding handles have been closed, XblContextCloseHandle() will free the memory associated with the handle.
  
## Requirements  
  
**Header:** xbox_live_context_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[xbox_live_context_c](../xbox_live_context_c_members.md)  
  
  
