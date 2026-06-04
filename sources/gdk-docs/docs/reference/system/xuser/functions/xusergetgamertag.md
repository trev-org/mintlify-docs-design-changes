---
author: M-Stahl
title: "XUserGetGamertag"
description: "Retrieves the gamertag for a specific user."
kindex: XUserGetGamertag
ms.topic: reference
edited: 03/18/2022
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUserGetGamertag  

Retrieves the gamertag for a specific user.  

## Syntax  
  
```cpp
HRESULT XUserGetGamertag(  
         XUserHandle user,
         XUserGamertagComponent gamertagComponent,
         size_t gamertagSize,  
         char* gamertag,  
         size_t* gamertagUsed  
)  
```  
  
### Parameters  
  
*user* &nbsp;&nbsp;\_In\_  
Type: XUserHandle  

A handle to the user to retrieve the gamertag for.  

*gamertagComponent* &nbsp;&nbsp;\_In\_  
Type: [XUserGamertagComponent](../enums/xusergamertagcomponent.md)  

Type of gamertag to retrieve.

*gamertagSize* &nbsp;&nbsp;\_In\_  
Type: size_t  

Size in bytes of the buffer in the *gamertag* parameter.

*gamertag* &nbsp;&nbsp;\_Out\_writes\_bytes\_to\_(gamertagSize,*gamertagUsed)  
Type: char*  

Contains the gamertag for a specific user.  

*gamertagUsed* &nbsp;&nbsp;\_Out\_opt\_  
Type: size_t*  

Contains the amount of the buffer for holding the gamertag.  

### Return value

Type: HRESULT
  
HRESULT success or error code.  

| Return Code           | Description             |
|-----------------------|-------------------------|
| S_OK                  | The operation succeeded. |
| E_GAMEUSER_RESOLVE_USER_ISSUE_REQUIRED | The user must use a UI to resolve the issue. Call [XUserResolveIssueWithUiAsync](xuserresolveissuewithuiasync.md) to display the UI to the user. |
| E_INSUFFICIENT_BUFFER | The size of the buffer indicated by *gamertagSize* is not large enough to hold the requested component.
| E_INVALIDARG | Invalid *gamertagComponent* provided.

For a list of error codes, see [Error Codes](../../../errorcodes.md).  
  
## Remarks

To retrieve the user ID for a specific user, call [XUserGetId](xusergetid.md).

To retrieve the state of a specific user, call [XUserGetState](xusergetstate.md).

To retrieve the age group for a specific user, call [XUserGetAgeGroup](xusergetagegroup.md).

## Requirements  
  
**Header:** XUser.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Steam Deck, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XUser](../xuser_members.md)
  
[XUserGetId](xusergetid.md)

[XUserGetState](xusergetstate.md)

[XUserGetAgeGroup](xusergetagegroup.md)
