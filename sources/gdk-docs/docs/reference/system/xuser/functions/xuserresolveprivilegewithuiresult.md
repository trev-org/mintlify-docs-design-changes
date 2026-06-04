---
author: M-Stahl
title: "XUserResolvePrivilegeWithUiResult"
description: "Retrieves the result of a call to XUserResolvePrivilegeWithUiAsync."
kindex: XUserResolvePrivilegeWithUiResult
ms.topic: reference
edited: 05/03/2022
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUserResolvePrivilegeWithUiResult  

Retrieves the result of a call to [XUserResolvePrivilegeWithUiAsync](xuserresolveprivilegewithuiasync.md).  

## Syntax  
  
```cpp
HRESULT XUserResolvePrivilegeWithUiResult(
         XAsyncBlock* async
)
```  
  
### Parameters  
  
*async* &nbsp;&nbsp;\_Inout\_
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)

An [XAsyncBlock](../../xasync/structs/xasyncblock.md) for polling for the call's status and retrieving call results.

### Return value

Type: HRESULT
  
HRESULT success or error code.

| Return Code                  | Description             |
|------------------------------|-------------------------|
| S_OK                         | The operation succeeded |
| E_ABORT                      | The user canceled the operation |
| E_GAMEUSER_FAILED_TO_RESOLVE | Failed to resolve the given privilege |
| E_GAMEUSER_NO_AUTH_USER      | The game should call [XUserResolvePrivilegeWithUiAsync](xuserresolveprivilegewithuiasync.md) again. |

## Remarks

>![alert](../../../../../media/public-images/caution.gif) **NOTE:** If **XUserResolvePrivilegeWithUiAsync** is called shortly after 
network connectivity is established, **XUserResolvePrivilegeWithUiResult** might return 
E_GAMEUSER_NO_AUTH_USER even though you have a signed in user. Games hitting this issue should try
calling [XUserResolvePrivilegeWithUiAsync](xuserresolveprivilegewithuiasync.md) again.

To display a user interface that allows a user to resolve privilege issues, call [XUserResolvePrivilegeWithUiAsync](xuserresolveprivilegewithuiasync.md).

The following example shows how to use the **XUserResolvePrivilegeWithUiResult** function.

```cpp
HRESULT hr = XUserResolvePrivilegeWithUiResult(asyncBlock);

if (SUCCEEDED(hr))
{
    OutputDebugStringA(""Successfully resolved privilege\n"");
}
else
{
    OutputDebugStringA(""Failed to resolved privilege\n"");
}
```

## Requirements  
  
**Header:** XUser.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Steam Deck, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XUser](../xuser_members.md)
  
[XUserResolvePrivilegeWithUiAsync](xuserresolveprivilegewithuiasync.md)
