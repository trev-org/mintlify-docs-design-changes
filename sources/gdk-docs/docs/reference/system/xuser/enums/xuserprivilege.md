---
author: M-Stahl
title: "XUserPrivilege"
description: "Specifies the privileges of a user."
kindex: XUserPrivilege
ms.topic: reference
edited: 05/03/2022
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUserPrivilege  

Specifies the privileges of a user.  

## Syntax  
  
```cpp
enum class XUserPrivilege  : uint32_t  
{  
    CrossPlay = 185,  
    Clubs = 188,  
    Sessions = 189,  
    Broadcast = 190,  
    ManageProfilePrivacy = 196,  
    GameDvr = 198,  
    MultiplayerParties = 203,  
    CloudManageSession = 207,  
    CloudJoinSession = 208,  
    CloudSavedGames = 209,  
    SocialNetworkSharing = 220,  
    UserGeneratedContent = 247,  
    Communications = 252,  
    Multiplayer = 254,  
    AddFriends = 255,  
}  
```  
  
## Constants  
  
| Constant             | Value | Description |
| -------------------- | ----- | --- |
| CrossPlay            | 185   | The user can play with people outside of Xbox. |  
| Clubs                | 188   | Create, join, and participate in clubs. |  
| Sessions             | 189   | Create and join non-interactive multiplayer sessions. |  
| Broadcast            | 190   | Broadcast live gameplay. |  
| ManageProfilePrivacy | 196   | Change settings to show real name. |  
| GameDvr              | 198   | Upload GameDVR. |  
| MultiplayerParties   | 203   | Join parties. |  
| CloudManageSession   | 207   | Allocate cloud compute resources for their session. |  
| CloudJoinSession     | 208   | Join cloud compute sessions. |  
| CloudSavedGames      | 209   | Save games on the cloud. |  
| SocialNetworkSharing | 220   | Share progress to social networks. |  
| UserGeneratedContent | 247   | Access user generated content in game. |  
| Communications       | 252   | Use real time voice and text communication. |  
| Multiplayer          | 254   | Join multiplayer sessions. |  
| AddFriends           | 255   | Add friends. |  
  
## Remarks

To see if a user has a specific privilege, call the [XUserCheckPrivilege](../functions/xusercheckprivilege.md) function.
To display a user interface that allows users to resolve privilege issues, call the [XUserResolvePrivilegeWithUiAsync](../functions/xuserresolveprivilegewithuiasync.md) function.  Both functions use an XUserPrivilege enumeration as an argument.

## Requirements  
  
**Header:** XUser.h
  
**Supported platforms:** Windows, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XUser](../xuser_members.md)
  
[XUserCheckPrivilege](../functions/xusercheckprivilege.md)

[XUserResolvePrivilegeWithUiAsync](../functions/xuserresolveprivilegewithuiasync.md)
