---
author: joannaleecy
title: "XblMultiplayerSessionDeleteCustomPropertyJson"
description: "Deletes a session custom property."
kindex: XblMultiplayerSessionDeleteCustomPropertyJson
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionDeleteCustomPropertyJson  

Deletes a session custom property.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionDeleteCustomPropertyJson(  
         XblMultiplayerSessionHandle handle,  
         const char* name  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*name* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
The name of the property to delete.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
