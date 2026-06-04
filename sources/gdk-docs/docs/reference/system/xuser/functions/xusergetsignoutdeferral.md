---
author: M-Stahl
title: "XUserGetSignOutDeferral"
description: "Retrieves a handle to the sign out deferral."
kindex: XUserGetSignOutDeferral
ms.topic: reference
edited: 00/00/0000
quality: good
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUserGetSignOutDeferral  

Retrieves a handle to the sign out deferral. This API is not supported on PC and will return
E_GAMEUSER_DEFERRAL_NOT_AVAILABLE.

## Syntax  
  
```cpp
HRESULT XUserGetSignOutDeferral(  
         XUserSignOutDeferralHandle* deferral  
)  
```  
  
### Parameters  
  
*deferral* &nbsp;&nbsp;\_Out\_  
Type: XUserSignOutDeferralHandle*  

Contains a handle to the sign out deferral.  

### Return value

Type: HRESULT
  
HRESULT success or error code.  

| Return Code                     | Description |
|---------------------------------|-------------|
| S_OK                            | The operation succeeded. |
| E_GAMEUSER_DEFERRAL_NOT_AVAILABLE | Could not provide a signout deferral. |

## Remarks

> [!NOTE]
> This API is not supported on PC if the game has a configVersion of "0" 
in their microsoftgame.config and will return E_GAMEUSER_DEFERRAL_NOT_AVAILABLE. Starting with the 
June 2022 GDK, this API is supported on PC if the microsoftgame.config has all of the following:
- configVersion equal to 1
- Specifies a title ID
- Specifies an MSA App ID

To obtain a sign out deferral, call [XUserChangeEventCallback](xuserchangeeventcallback.md) when the [XUserChangeEvent](../enums/xuserchangeevent.md) is [XUserChangeEvent::SigningOut](../enums/xuserchangeevent.md). Deferrals may not be available during a **SigningOut** event. Once you obtain a deferral, the user remains signed in until all deferrals complete or a timeout elapses.
  
The following example demonstrates how to handle user change events.  
  
```cpp
HRESULT RegisterForChanges()
{
    RETURN_HR_IF(E_UNEXPECTED, _token.token != 0);
    RETURN_IF_FAILED(XUserRegisterForChangeEvent(
        _queue,
        this,
        UserChangeEventHandler,
        &_token));
    return S_OK;
}

void UnregisterForChanges()
{
    XUserUnregisterForChangeEvent(_token, false);
    _token.token = 0;
}

void UserChangeEventHandler(
    XUserLocalId userLocalId,
    XUserChangeEvent event)
{
    auto iter = std::find_if(
        _users.begin(),
        _users.end(),
        [&userLocalId](const User& candidate)
    {
        XUserLocalId candidateUserLocalId;
        XUserGetLocalId(candidate.Handle(), &candidateUserLocalId);
        return candidateUserLocalId == userLocalId;
    });

    // User not known
    if (iter == _users.end())
    {
        return;
    }

    auto handle = iter->Handle();

    // If a guest gets signed out, immediately close the handle
    bool isGuest;
    if (SUCCEEDED_LOG(XUserGetIsGuest(handle, &isGuest)) &&
        isGuest &&
        event == XUserChangeEvent::SignedOut)
    {
        _users.erase(iter);
    }

    if (event == XUserChangeEvent::SigningOut)
    {
        // Delay the user signing out just for fun
        XUserSignOutDeferralHandle deferral;
        if (SUCCEEDED_LOG(XUserGetSignOutDeferral(&deferral)))
        {
            // Hold the deferral for 5 seconds then close it
            std::thread completeDeferralThread(
                [deferral]()
            {
                std::this_thread::sleep_for(std::chrono::milliseconds(5000));
                XUserCloseSignOutDeferralHandle(deferral);
            });

            completeDeferralThread.detach();
        }
    }

    if (event == XUserChangeEvent::GamerPicture)
    {
        iter->LoadGamerPicAsync(_queue);
    }
}
```
  
  
## Requirements  
  
**Header:** XUser.h
  
**Library:** xgameruntime.lib  
  
**Supported platforms:** Windows, Steam Deck, Xbox One family consoles and Xbox Series consoles  
  
## See also

[XUser](../xuser_members.md)
  
[XUserChangeEventCallback](xuserchangeeventcallback.md)

[XUserChangeEvent](../enums/xuserchangeevent.md)
