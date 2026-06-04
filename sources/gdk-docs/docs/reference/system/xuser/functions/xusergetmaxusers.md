---
author: M-Stahl
title: "XUserGetMaxUsers"
description: "Retrieves the maximum number of users that a game session allows on the current platform."
kindex: XUserGetMaxUsers
ms.topic: reference
edited: '09/07/2022'
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUserGetMaxUsers  

Retrieves the maximum number of users that a game session allows on the current platform.

## Syntax  
  
```cpp
HRESULT XUserGetMaxUsers(  
         uint32_t* maxUsers  
)  
```  
  
### Parameters  
  
*maxUsers* &nbsp;&nbsp;\_Out\_  
Type: uint32_t*  

Contains the maximum number of users that a game session allows on the current platform.

### Return value

Type: HRESULT
  
HRESULT success or error code.  
For a list of error codes, see [Error Codes](../../../errorcodes.md).

## Remarks

To retrieve the user ID for a specific user, call [XUserGetId](xusergetid.md).

To retrieve the state of a specific user, call [XUserGetState](xusergetstate.md).

To retrieve the age group for a specific user, call [XUserGetAgeGroup](xusergetagegroup.md).

To retrieve the max user size of a multiplayer session, call [XblMultiplayerManagerGameSessionConstants](../../../live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagergamesessionconstants.md).

## Requirements  
  
**Header:** XUser.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Steam Deck, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XUser](../xuser_members.md)
  
[XUserGetId](xusergetid.md)  

[XUserGetState](xusergetstate.md)

[XUserGetAgeGroup](xusergetagegroup.md)
