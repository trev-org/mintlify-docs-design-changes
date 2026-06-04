---
author: joannaleecy
title: "XblMultiplayerSearchHandleGetCustomSessionPropertiesJson"
description: "Get the custom session properties for the associated session."
kindex: XblMultiplayerSearchHandleGetCustomSessionPropertiesJson
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSearchHandleGetCustomSessionPropertiesJson  

Get the custom session properties for the associated session.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSearchHandleGetCustomSessionPropertiesJson(  
         XblMultiplayerSearchHandle handle,  
         const char** customPropertiesJson  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSearchHandle](../handles/xblmultiplayersearchhandle.md)  
  
Handle to the search handle details.  
  
*customPropertiesJson* &nbsp;&nbsp;\_Out\_  
Type: char**  
  
Passes back the custom properties JSON string. The memory for the returned pointer will remain valid for the life of the XblMultiplayerSessionHandle object until it is closed.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
