---
author: joannaleecy
title: "XblContextSettingsSetUseCrossPlatformQosServers"
description: "Controls whether we use cross platform QoS endpoints or not. In some case if you are shipping with TV_API enabled, you want to be able to choose."
kindex: XblContextSettingsSetUseCrossPlatformQosServers
ms.topic: reference
edited: 00/00/0000
applies-to: pc-gdk
quality: good
ms.date: '08/01/2022'
permissioned-type: public
---

# XblContextSettingsSetUseCrossPlatformQosServers  

Controls whether we use cross platform QoS endpoints or not. In some case if you are shipping with TV_API enabled, you want to be able to choose.  

## Syntax  
  
```cpp
HRESULT XblContextSettingsSetUseCrossPlatformQosServers(  
         XblContextHandle context,  
         bool value  
)  
```  
  
### Parameters  
  
*context* &nbsp;&nbsp;\_In\_  
Type: [XblContextHandle](../../types_c/handles/xblcontexthandle.md)  
  
Xbox live context that the settings are associated with.  
  
*value* &nbsp;&nbsp;\_In\_  
Type: bool  
  
True if the cross platform QoS servers should be used, false otherwise.  
  
  
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
  
## Requirements  
  
**Header:** xbox_live_context_settings_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[xbox_live_context_settings_c](../xbox_live_context_settings_c_members.md)  
  
  
