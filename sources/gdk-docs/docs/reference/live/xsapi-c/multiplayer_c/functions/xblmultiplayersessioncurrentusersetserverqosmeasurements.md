---
author: joannaleecy
title: "XblMultiplayerSessionCurrentUserSetServerQosMeasurements"
description: "Sets measurements JSON for the servers. This is only useful when the title is manually managing QoS. (If the platform is automatically performing QoS, this does not need to be called)"
kindex: XblMultiplayerSessionCurrentUserSetServerQosMeasurements
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionCurrentUserSetServerQosMeasurements  

Sets measurements JSON for the servers. This is only useful when the title is manually managing QoS. (If the platform is automatically performing QoS, this does not need to be called)  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionCurrentUserSetServerQosMeasurements(  
         XblMultiplayerSessionHandle handle,  
         const char* measurements  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*measurements* &nbsp;&nbsp;\_In\_z\_  
Type: char*  
  
The JSON that represents the server measurements. Example Json: { "server farm a": { "latency": 233 // Milliseconds } }  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
