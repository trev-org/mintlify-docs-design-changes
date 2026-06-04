---
author: TBD
title: "XNetworkingSetConfigurationSetting"
description: "Modifies a specified networking configuration setting to the provided numeric value."
kindex: XNetworkingSetConfigurationSetting
ms.author: TBD
ms.topic: reference
applies-to: pc-gdk
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# XNetworkingSetConfigurationSetting  

Modifies a specified networking configuration setting to the provided numeric value.    

## Syntax  
  
```cpp
HRESULT XNetworkingSetConfigurationSetting(  
         XNetworkingConfigurationSetting configurationParameter,  
         uint64_t value  
)  
```  
  
### Parameters  
  
*configurationParameter* &nbsp;&nbsp;\_In\_  
Type: [XNetworkingConfigurationSetting](../enums/xnetworkingconfigurationsetting.md)  
  
The enumerated value identifying the configuration setting to be modified.   
  
*value* &nbsp;&nbsp;\_In\_  
Type: uint64_t  
  
The new value for the networking configuration setting.    
  
  
### Return value  
Type: HRESULT
  
S_OK if configuration was successful. E_NOTIMPL if configuring the specified setting isn't supported on the current platform. E_INVALIDARG if the specified setting isn't recognized by the Gaming Runtime. 
  
## Remarks  

*XNetworkingSetConfigurationSetting* allows games to adjust certain networking-related system configuration values to better suit their specific requirements. Typically any such modification is done during startup immediately after the Gaming Runtime is initialized, but entering or exiting online or multiplayer modes may also be appropriate for altering settings that support being modified at other times.  
The current value for a configuration setting can be retrieved using the corresponding [XNetworkingQueryConfigurationSetting](xnetworkingqueryconfigurationsetting.md) function.  

## Requirements  

**Header:** XNetworking.h  

**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

  
## See also  
[XNetworking](../xnetworking_members.md)  
[XNetworkingQueryConfigurationSetting](xnetworkingqueryconfigurationsetting.md)  
  
  