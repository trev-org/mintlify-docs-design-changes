---
author: joannaleecy
title: "XblMultiplayerConnectionAddressDeviceTokenPair"
description: "A connection address/device token pair to run QoS measurements on."
kindex: XblMultiplayerConnectionAddressDeviceTokenPair
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerConnectionAddressDeviceTokenPair  

A connection address/device token pair to run QoS measurements on.  

## Syntax  
  
```cpp
typedef struct XblMultiplayerConnectionAddressDeviceTokenPair {  
    const char* connectionAddress;  
    XblDeviceToken deviceToken;  
} XblMultiplayerConnectionAddressDeviceTokenPair  
```
  
### Members  
  
*connectionAddress*  
Type: const char*  
  
The connection address.
  
*deviceToken*  
Type: [XblDeviceToken](../../multiplayer_c/structs/xbldevicetoken.md)  
  
The connection device token.
  
## Requirements  
  
**Header:** multiplayer_manager_c.h
  
## See also  
[multiplayer_manager_c](../multiplayer_manager_c_members.md)  
  
  
