---
author: joannaleecy
title: "XblMultiplayerSessionConstantsSetMeasurementServerAddressesJson"
description: "The set of potential server connection strings that should be evaluated."
kindex: XblMultiplayerSessionConstantsSetMeasurementServerAddressesJson
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionConstantsSetMeasurementServerAddressesJson  

The set of potential server connection strings that should be evaluated.  

## Syntax  
  
```cpp
HRESULT XblMultiplayerSessionConstantsSetMeasurementServerAddressesJson(  
         XblMultiplayerSessionHandle handle,  
         const char* measurementServerAddressesJson  
)  
```  
  
### Parameters  
  
*handle* &nbsp;&nbsp;\_In\_  
Type: [XblMultiplayerSessionHandle](../handles/xblmultiplayersessionhandle.md)  
  
Handle to the multiplayer session.  
  
*measurementServerAddressesJson* &nbsp;&nbsp;\_In\_  
Type: char*  
  
The Json that represent the measurement server addresses. Example JSON: { "server farm a": { "secureDeviceAddress": "r5Y=" // Base-64 encoded secure-device-address }, "datacenter b" : { "secureDeviceAddress": "rwY=" } }  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
