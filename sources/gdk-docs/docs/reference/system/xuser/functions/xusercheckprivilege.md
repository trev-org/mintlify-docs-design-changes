---
author: M-Stahl
title: "XUserCheckPrivilege"
description: "Determines if a user has a specific privilege."
kindex: XUserCheckPrivilege
ms.topic: reference
edited: 05/02/2022
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUserCheckPrivilege  

Determines if a user has a specific privilege.  

## Syntax  
  
```cpp
HRESULT XUserCheckPrivilege(  
         XUserHandle user,  
         XUserPrivilegeOptions options,  
         XUserPrivilege privilege,  
         bool* hasPrivilege,  
         XUserPrivilegeDenyReason* reason  
)  
```  
  
### Parameters  
  
*user* &nbsp;&nbsp;\_In\_  
Type: XUserHandle  

A handle to the user whose privilege we are checking.  

*options* &nbsp;&nbsp;\_In\_  
Type: [XUserPrivilegeOptions](../enums/xuserprivilegeoptions.md)  

User privilege options.  

*privilege* &nbsp;&nbsp;\_In\_  
Type: [XUserPrivilege](../enums/xuserprivilege.md)  

The privilege to check for.  

*hasPrivilege* &nbsp;&nbsp;\_Out\_  
Type: bool*  

True if the user has the specific privilege, false otherwise.

*reason* &nbsp;&nbsp;\_Out\_opt\_  
Type: [XUserPrivilegeDenyReason*](../enums/xuserprivilegedenyreason.md)  

The reason the user does not have the requested privilege.  This value is informational **only**, and
may be inaccurate in many scenarios.  This value **should not** be used to make decisions in your title.  Instead,
use the [XUserResolvePrivilegeWithUiAsync](xuserresolveprivilegewithuiasync.md) to resolve any and all privilege issues.

### Return value

Type: HRESULT
  
HRESULT success or error code.

| Return Code           | Description             |
|-----------------------|-------------------------|
| S_OK                  | The operation succeeded. |
| E_GAMEUSER_RESOLVE_USER_ISSUE_REQUIRED | The user must use a UI to resolve the issue. Call [XUserResolveIssueWithUiAsync](xuserresolveissuewithuiasync.md) to display the UI to the user. |

## Remarks

Determines whether the user has a given [XUserPrivilege](../enums/xuserprivilege.md).

>![alert](../../../../../media/public-images/caution.gif) **NOTE:**  The value returned in the *reason* argument is informational **only**, and may be inaccurate in many scenarios. This value **should not** be used to make decisions in your title.

If a privilege is denied (i.e. *hasPrivilege* is false), the game can give the player an opportunity to resolve the privilege by calling [XUserResolvePrivilegeWithUiAsync](xuserresolveprivilegewithuiasync.md) with the same *privilege* value.

If this method returns **E_GAMEUSER_RESOLVE_USER_ISSUE_REQUIRED**, the game can give the player an opportunity to resolve the issue by calling [XUserResolveIssueWithUiAsync](xuserresolveissuewithuiasync.md).

## Requirements  
  
**Header:** XUser.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Steam Deck, Xbox One family consoles and Xbox Series consoles  
  
## See also

[Client-side use of Xbox Live user privileges](../../../../services/fundamentals/identity/privileges/concepts/live-user-privileges-client.md)

[XUser](../xuser_members.md)

[XUserResolvePrivilegeWithUiAsync](xuserresolveprivilegewithuiasync.md)
