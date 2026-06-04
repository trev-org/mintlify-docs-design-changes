---
author: joannaleecy
title: "XblAchievementsManagerAddLocalUser"
description: "Generate a local cache of achievements for a user."
kindex: XblAchievementsManagerAddLocalUser
ms.topic: reference
edited: 02/16/2024
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XblAchievementsManagerAddLocalUser  

Initialize the Achievements Manager and generate a local cache of achievements for a user.  

## Syntax  
  
```cpp
HRESULT XblAchievementsManagerAddLocalUser(  
         XblUserHandle user,  
         XTaskQueueHandle queue  
)  
```  
  
### Parameters  
  
*user* &nbsp;&nbsp;\_In\_  
Type: XblUserHandle  
  
Xbox Live User to fetch achievements for.  
  
*queue* &nbsp;&nbsp;\_In\_opt\_  
Type: XTaskQueueHandle  
  
Queue to be used for background operation for this user (Optional).  
   
### Return value  
Type: HRESULT
  
HRESULT return code for this API operation.
 
## Remarks 
Because `XblAchievementsManagerAddLocalUser` requires an internet connection to correctly track user info, it should only be called while connected to the internet. Using [XNetworkingRegisterConnectivityHintChanged](../../../../networking/xnetworking/functions/xnetworkingregisterconnectivityhintchanged.md) is a good way to check for a connection. 

If the Achievements Manager is not initialized, calls to [XblAchievementsManagerUpdateAchievement](xblachievementsmanagerupdateachievement.md) will fail. In this case, calls to [XblAchievementsUpdateAchievementAsync](../../achievements_c/functions/xblachievementsupdateachievementasync.md) should be made instead as achievement conditions are met to ensure that progression is still tracked. Here is an example of how this can be implemented: 
 
```cpp
HRESULT hr = XblAchievementsManagerUpdateAchievement(xuid, "2", 3);
if (FAILED(hr))
{
    XAsyncBlock async{};
    hr = XblAchievementsUpdateAchievementAsync(m_xblContext, xuid, "2", 3, &async);
    if (SUCCEEDED(hr))
    {
        // this simple example is thread blocking. 
        // replace with whatever async pattern used by other XAsync calls in title
        XAsyncGetStatus(&async, true); 
    }
}
``` 
 
## Requirements  
  
**Header:** achievements_manager_c.h
  
**Library:** Microsoft.Xbox.Services.14x.GDK.C.lib
  
## See also  
[achievements_manager_c](../achievements_manager_c_members.md)  
  
  
