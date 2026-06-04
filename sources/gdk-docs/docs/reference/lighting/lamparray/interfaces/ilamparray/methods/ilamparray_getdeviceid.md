---
author: tyduck
title: "GetDeviceId"
description: "Returns the system-generated ID for the ILampArray."
kindex: GetDeviceId
ms.author: tyduck
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# ILampArray::GetDeviceId  

Returns the system-generated ID for the ILampArray.

## Syntax  
  
```cpp
void GetDeviceId(
    APP_LOCAL_DEVICE_ID* deviceId)
```
  
### Parameters  

*deviceId*&nbsp;&nbsp;\_Out\_
Type: APP_LOCAL_DEVICE_ID*

A pointer to an APP_LOCAL_DEVICE_ID struct, into which the device ID will be copied.

### Return value  

Type: void
  
## Remarks  

The _application-local device ID_ is a special 32-byte value that uniquely identifies the device, even across restarts of the application or reboots of the system. This ID is also stable across disconnects and reconnects of wireless devices, and wired USB devices as long as they are plugged back into the same USB port.

For the initial release, this function will populate an all-zero value.

## Requirements  
  
**Header:** LampArray.h  

**Library:** xgameplatform.lib  

**Supported platforms:** Xbox One family consoles and Xbox Series consoles  
  
## See also  

[Lighting API Overview](../../../../../../features/common/lighting/gc-lighting-toc.md)  
[ILampArray](../ilamparray.md)  