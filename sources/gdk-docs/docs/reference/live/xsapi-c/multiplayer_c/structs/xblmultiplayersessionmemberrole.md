---
author: joannaleecy
title: "XblMultiplayerSessionMemberRole"
description: "Represents a session member's role in the session."
kindex: XblMultiplayerSessionMemberRole
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerSessionMemberRole  

Represents a session member's role in the session.  

## Syntax  
  
```cpp
typedef struct XblMultiplayerSessionMemberRole {  
    const char* roleTypeName;  
    const char* roleName;  
} XblMultiplayerSessionMemberRole  
```
  
### Members  
  
*roleTypeName*  
Type: const char*  
  
Role type this role belongs to.
  
*roleName*  
Type: const char*  
  
Name of the role.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
