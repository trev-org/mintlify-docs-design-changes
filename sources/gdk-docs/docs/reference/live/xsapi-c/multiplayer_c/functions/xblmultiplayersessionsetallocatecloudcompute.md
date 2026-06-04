---
author: joannaleecy
title: "XblMultiplayerSessionSetAllocateCloudCompute"
description: "If this property is set an allocation of the 'cloudComputePackage' will be attempted."
kindex: XblMultiplayerSessionSetAllocateCloudCompute
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionSetAllocateCloudCompute  

If this property is set an allocation of the 'cloudComputePackage' will be attempted.  

## Syntax  
  
```cpp
void XblMultiplayerSessionSetAllocateCloudCompute(  
         XblMultiplayerSessionHandle handle,  
         bool allocateCloudCompute  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*allocateCloudCompute* &nbsp;&nbsp;\_In\_  
Type: bool  
  
True if a cloud compute package should be allocated and false otherwise.  
  
  
### Return value  
Type: void
  

  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
