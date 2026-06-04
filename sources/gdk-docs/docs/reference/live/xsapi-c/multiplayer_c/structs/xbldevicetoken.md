---
author: joannaleecy
title: "XblDeviceToken"
description: "Token that represents a unique device participating in the session. It's a case-insensitive string that can be used for equality comparisons."
kindex: XblDeviceToken
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblDeviceToken  

Token that represents a unique device participating in the session. It's a case-insensitive string that can be used for equality comparisons.  

## Syntax  
  
```cpp
typedef struct XblDeviceToken {  
    char Value[XBL_MULTIPLAYER_DEVICE_TOKEN_MAX_LENGTH];  
} XblDeviceToken  
```
  
### Members  
  
*Value*  
Type: char[XBL_MULTIPLAYER_DEVICE_TOKEN_MAX_LENGTH]  
  
The unique device.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
