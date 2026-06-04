---
author: TBD
title: "ListUsersEx"
description: "Returns a list of all users currently associated with this console."
kindex:
- ListUsersEx
- IXtfUserClient::ListUsersEx
ms.author: TBD
ms.topic: reference
edited: 00/00/0000
permissioned-type: public
ms.date: 11/07/2023
---

# IXtfUserClient::ListUsersEx  

Returns a list of all users currently associated with this console.    

## Syntax  
  
```cpp
HRESULT ListUsersEx(  
         XTF_USER_DATA_V2 **ppUserData,  
         UINT32 *pCount  
)  
```  
  
### Parameters  
  
***ppUserData* &nbsp;&nbsp;  
Type: [XTF_USER_DATA_V2](../../../structures/xtf_user_data_v2.md)  
  
On successful return, points to an array of [XTF_USER_DATA_V2](../../../structures/xtf_user_data_v2.md) objects describing users currently associated with the console.      
  
**pCount* &nbsp;&nbsp;  
Type: UINT32  
  
On successful return, the count of elements in the *ppUserData* array.      
  
  
### Return value  
Type: HRESULT
  
HRESULT success or error code.  
  
## Requirements  
  
**Header:** xtfuser.h  

**Library:** xtfuser.lib  

**Supported platforms:** Windows (for Xbox console tools)  
  
## See also  
[IXtfUserClient interface](../ixtfuserclient-xtfuser-xbox-windows-t.md)  
  
  