---
author: joannaleecy
title: "XblMultiplayerRole"
description: "Represents role info for a multiplayer role."
kindex: XblMultiplayerRole
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblMultiplayerRole  

Represents role info for a multiplayer role.  

## Syntax  
  
```cpp
typedef struct XblMultiplayerRole {  
    XblMultiplayerRoleType* RoleType;  
    const char* Name;  
    uint64_t* MemberXuids;  
    uint32_t MemberCount;  
    uint32_t TargetCount;  
    uint32_t MaxMemberCount;  
} XblMultiplayerRole  
```
  
### Members  
  
*RoleType*  
Type: [XblMultiplayerRoleType*](xblmultiplayerroletype.md)  
  
The role type that this role belongs too.
  
*Name*  
Type: const char*  
  
Name of the role. Unique with a role type.
  
*MemberXuids*  
Type: uint64_t*  
  
Member xbox_user_ids currently assigned for this role.
  
*MemberCount*  
Type: uint32_t  
  
Number of slots occupied for this role.
  
*TargetCount*  
Type: uint32_t  
  
Number of target slots assigned for this role.
  
*MaxMemberCount*  
Type: uint32_t  
  
Maximum number of slots available for this role.
  
## Requirements  
  
**Header:** multiplayer_c.h
  
## See also  
[multiplayer_c](../multiplayer_c_members.md)  
  
  
