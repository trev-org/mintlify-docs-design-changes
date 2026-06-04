---
author: joannaleecy
title: "XblMultiplayerInviteHandle"
description: "A handle that corresponds to an outstanding invite that has been sent."
kindex: XblMultiplayerInviteHandle
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerInviteHandle  

A handle that corresponds to an outstanding invite that has been sent.  

## Syntax  
  
```cpp
typedef struct XblMultiplayerInviteHandle {  
    char Data[XBL_GUID_LENGTH];  
} XblMultiplayerInviteHandle  
```
  
### Members  
  
*Data*  
Type: char[XBL_GUID_LENGTH]  
  
The outstanding invite GUID.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
