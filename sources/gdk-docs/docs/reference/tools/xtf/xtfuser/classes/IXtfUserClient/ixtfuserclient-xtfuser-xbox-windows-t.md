---
author: aablackm
title: "IXtfUserClient Interface (Interface contents)"
description: "Represents an Xbox Tools Framework (XTF) user client."
ms.assetid: T:Windows.Xbox.xtfuser.IXtfUserClient
kindex: IXtfUserClient interface, about
ms.author: stevenpr
ms.topic: article
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# IXtfUserClient Interface
Represents an Xbox Tools Framework (XTF) user client.
<a id="syntaxSection"></a>



## Syntax  

```cpp
interface IXtfUserClient : public IUnknown  
```

  
## Methods  
  
| Method | Description |  
| --- | --- |  
| [AddSponsoredUser](methods/addsponsoreduser-ixtfuserclient-xtfuser-xbox-windows-m.md) | Adds a guest user. |  
| [AddUser](methods/adduser-ixtfuserclient-xtfuser-xbox-windows-m.md) | Adds a user without signing them in. |  
| [DeleteAllUsers](methods/deleteallusers-ixtfuserclient-xtfuser-xbox-windows-m.md) | Removes all users from this console. |  
| [DeleteUser](methods/deleteuser-ixtfuserclient-xtfuser-xbox-windows-m.md) | Removes a user, specified by email address, from the console. |  
| [DeleteUserId](methods/deleteuserid-ixtfuserclient-xtfuser-xbox-windows-m.md) | Removes a user, specified by user ID, from the console. |  
| [ListUsers](methods/listusers-ixtfuserclient-xtfuser-xbox-windows-m.md) | Returns a list of all users currently associated with this console. |  
| [ListUsersEx](methods/ixtfuserclient_listusersex.md) | Returns a list of all users currently associated with this console. |  
| [PairControllerWithUser](methods/paircontrollerwithuser-ixtfuserclient-xtfuser-xbox-windows-m.md) | Pairs the user with given email address, to the controller with given controller ID. |  
| [PairControllerWithUserId](methods/paircontrollerwithuserid-ixtfuserclient-xtfuser-xbox-windows-m.md) | Pairs the user with given user ID, to the controller with given controller ID. |  
| [SigninUser](methods/signinuser-ixtfuserclient-xtfuser-xbox-windows-m.md) | Signs in a user, specified by email address, and adds the user to the console if necessary. |  
| [SigninUserId](methods/signinuserid-ixtfuserclient-xtfuser-xbox-windows-m.md) | Signs in a user, specified by user ID, and adds the user to the console if necessary. |  
| [SignoutUser](methods/signoutuser-ixtfuserclient-xtfuser-xbox-windows-m.md) | Signs out a user, specified by email address. |  
| [SignoutUserId](methods/signoutuserid-ixtfuserclient-xtfuser-xbox-windows-m.md) | Signs out a user, specified by user ID. |  


<a id="requirements"></a>



## Requirements  

**Header:** xtfuser.h  

**Library:** xtfuser.lib  
  
**Supported platforms:** Windows (for Xbox console tools)  
  
<a id="ID4EZ"></a>



## See also  

<a id="ID4E2"></a>



##### Reference  

[XtfUser](../../xtfuser-xbox-windows-n.md)