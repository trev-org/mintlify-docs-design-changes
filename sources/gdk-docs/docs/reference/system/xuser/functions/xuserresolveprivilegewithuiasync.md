---
author: M-Stahl
title: "XUserResolvePrivilegeWithUiAsync"
description: "Displays a resolution user interface for required user privileges."
kindex: XUserResolvePrivilegeWithUiAsync
ms.topic: reference
edited: 05/03/2022
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUserResolvePrivilegeWithUiAsync  

Displays a user interface to allow a user to resolve any issues related to the specified privilege.

## Syntax  
  
```cpp
HRESULT XUserResolvePrivilegeWithUiAsync(  
         XUserHandle user,  
         XUserPrivilegeOptions options,  
         XUserPrivilege privilege,  
         XAsyncBlock* async  
)  
```  
  
### Parameters  
  
*user* &nbsp;&nbsp;\_In\_  
Type: XUserHandle  

The user that we are displaying the resolution UI to.  

*options* &nbsp;&nbsp;\_In\_  
Type: [XUserPrivilegeOptions](../enums/xuserprivilegeoptions.md)  

User privilege options.  

*privilege* &nbsp;&nbsp;\_In\_  
Type: [XUserPrivilege](../enums/xuserprivilege.md)  

The required user privilege.  

*async* &nbsp;&nbsp;\_Inout\_  
Type: [XAsyncBlock*](../../xasync/structs/xasyncblock.md)  

An [XAsyncBlock](../../xasync/structs/xasyncblock.md) for polling for the call's status and retrieving call results.  

### Return value

Type: HRESULT
  
HRESULT success or error code.  
For a list of error codes, see [Error Codes](../../../errorcodes.md).

## Remarks

To retrieve the result of a call to XUserResolvePrivilegeWithUiAsync, call [XUserResolvePrivilegeWithUiResult](xuserresolveprivilegewithuiresult.md).

The following example shows how to use the XUserResolvePrivilegeWithUiAsync function.

 ```cpp
HRESULT hr = XUserResolvePrivilegeWithUiAsync(
   userHandle
   resolveUserPrivilegeOptions,
   privilegeToResolve,
   asyncBlock);
```

## Requirements  
  
**Header:** XUser.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Steam Deck, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XUser](../xuser_members.md)
  
[XUserResolvePrivilegeWithUiResult](xuserresolveprivilegewithuiresult.md)
