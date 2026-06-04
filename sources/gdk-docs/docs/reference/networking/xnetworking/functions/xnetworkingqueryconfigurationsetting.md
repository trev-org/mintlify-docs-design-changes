---
author: TBD
title: "XNetworkingQueryConfigurationSetting"
description: "Retrieves the specified networking configuration setting's numeric value."
kindex: XNetworkingQueryConfigurationSetting
ms.author: TBD
ms.topic: reference
applies-to: pc-gdk
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# XNetworkingQueryConfigurationSetting  

Retrieves the specified networking configuration setting's numeric value.    

## Syntax  
  
```cpp
HRESULT XNetworkingQueryConfigurationSetting(  
         XNetworkingConfigurationSetting configurationSetting,  
         uint64_t* value  
)  
```  
  
### Parameters  
  
*configurationSetting* &nbsp;&nbsp;\_In\_  
Type: [XNetworkingConfigurationSetting](../enums/xnetworkingconfigurationsetting.md)  
  
An enumerated value identifying the configuration setting to be retrieved.
  
*value* &nbsp;&nbsp;\_Out\_  
Type: uint64_t*  
  
A pointer indicating where to store the numeric value currently assigned to the configuration setting.
  
  
### Return value  
Type: HRESULT
  
S_OK if retrieving the parameter setting value was successful. E_NOTIMPL if retrieving the specified parameter setting isn't supported on the current platform. E_INVALIDARG if the specified setting isn't recognized by the Gaming Runtime.  
  
## Remarks  

Use [XNetworkingSetConfigurationSetting](xnetworkingsetconfigurationsetting.md) to alter a configuration setting's value from its current value.  

## Requirements

**Header:** XNetworking.h

**Library:** xgameruntime.lib
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  

  
## See also  
[XNetworking](../xnetworking_members.md)  
  
  