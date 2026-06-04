---
author: M-Stahl
title: "XUser (API contents)"
description: "Reference material for XUser APIs."
kindex: XUser
ms.topic: article
edited: 9/19/2025
applies-to: pc-gdk
ms.date: '08/01/2022'
permissioned-type: public
---

# XUser

Reference material for XUser APIs.

## Functions

| Function | Description |
| --- | --- |
| [XUserAddAsync](functions/xuseraddasync.md) | Asynchronously adds a user to a game session. |
| [XUserAddByIdWithUiAsync](functions/xuseraddbyidwithuiasync.md) | Asynchronously adds a user to a game session based on a XUID from a game invite. This function should only be used in response to a game invite. |
| [XUserAddByIdWithUiResult](functions/xuseraddbyidwithuiresult.md) | Retrieves a handle to the user that XUserAddByIdWithUiAsync creates. This function should only be used in response to a game invite. |
| [XUserAddResult](functions/xuseraddresult.md) | Retrieves a handle to a user that XUserAddAsync creates. |
| [XUserChangeEventCallback](functions/xuserchangeeventcallback.md) | A callback that an application defines for a user change event. |
| [XUserCheckPrivilege](functions/xusercheckprivilege.md) | Determines if a user has a specific privilege. |
| [XUserCloseHandle](functions/xuserclosehandle.md) | Closes a specific user handle. |
| [XUserCloseSignOutDeferralHandle](functions/xuserclosesignoutdeferralhandle.md) | Closes a specific user sign out deferral handle. |
| [XUserCompare](functions/xusercompare.md) | Compares two user handles for equality. |
| [XUserDefaultAudioEndpointUtf16ChangedCallback](functions/xuserdefaultaudioendpointutf16changedcallback.md) | A callback that an application defines and invokes when the default audio endpoint for a user changes. |
| [XUserDeviceAssociationChangedCallback](functions/xuserdeviceassociationchangedcallback.md) | A callback that invokes when the user-device association changes. |
| [XUserDuplicateHandle](functions/xuserduplicatehandle.md) | Duplicates a user handle. |
| [XUserFindControllerForUserWithUiAsync](functions/xuserfindcontrollerforuserwithuiasync.md) | Shows a dialog that will prompt the user to turn on and identify which controller they want to use. |
| [XUserFindControllerForUserWithUiResult](functions/xuserfindcontrollerforuserwithuiresult.md) | Retrieves the application local device ID (APP_LOCAL_DEVICE_ID) that a user has chosen to use. |
| [XUserFindForDevice](functions/xuserfindfordevice.md) | Retrieves the user ID for a specific device ID. |
| [XUserFindUserById](functions/xuserfinduserbyid.md) | Retrieves the XBox User ID (XUID) for a local user. |
| [XUserFindUserByLocalId](functions/xuserfinduserbylocalid.md) | Retrieves a handle to the user for a specific local user ID. |
| [XUserGetAgeGroup](functions/xusergetagegroup.md) | Returns the age group of a user. |
| [XUserGetDefaultAudioEndpointUtf16](functions/xusergetdefaultaudioendpointutf16.md) | Retrieves the default audio endpoint for a specific user. |
| [XUserGetGamerPictureAsync](functions/xusergetgamerpictureasync.md) | Asynchronously retrieves the gamer picture for a specific user. |
| [XUserGetGamerPictureResult](functions/xusergetgamerpictureresult.md) | Retrieves the result of a call to XUserGetGamerPictureAsync. |
| [XUserGetGamerPictureResultSize](functions/xusergetgamerpictureresultsize.md) | Returns the buffer size that [XUserGetGamerPictureResult](functions/xusergetgamerpictureresult.md) requires to retrieve the gamer picture that ]XUserGetGamerPictureAsync](functions/xusergetgamerpictureasync.md) returns. |
| [XUserGetGamertag](functions/xusergetgamertag.md) | Retrieves the gamertag for a specific user. |
| [XUserGetId](functions/xusergetid.md) | Gets the user ID for a specific user. |
| [XUserGetIsGuest](functions/xusergetisguest.md) | Returns a boolean indicating if a user is a guest. |
| [XUserGetLocalId](functions/xusergetlocalid.md) | Retrieves a unique game session id for a user. |
| [XUserGetMaxUsers](functions/xusergetmaxusers.md) | Retrieves the maximum number of users that a game session allows on the current platform. |
| [XUserGetMsaTokenSilentlyAsync](functions/xusergetmsatokensilentlyasync.md) | This function is now deprecated. |
| [XUserGetMsaTokenSilentlyResult](functions/xusergetmsatokensilentlyresult.md) | This function is now deprecated. |
| [XUserGetMsaTokenSilentlyResultSize](functions/xusergetmsatokensilentlyresultsize.md) | This function is now deprecated. |
| [XUserGetSignOutDeferral](functions/xusergetsignoutdeferral.md) | Retrieves a handle to the sign out deferral. |
| [XUserGetState](functions/xusergetstate.md) | Retrieves the state of a user. |
| [XUserGetTokenAndSignatureAsync](functions/xusergettokenandsignatureasync.md) | Asynchronously retrieves xtokens and signatures for web requests. |
| [XUserGetTokenAndSignatureResult](functions/xusergettokenandsignatureresult.md) | Gets the result of a call to XUserGetTokenAndSignatureAsync. |
| [XUserGetTokenAndSignatureResultSize](functions/xusergettokenandsignatureresultsize.md) | Gets the buffer size for holding the results of a call to XUserGetTokenAndSignatureAsync. |
| [XUserGetTokenAndSignatureUtf16Async](functions/xusergettokenandsignatureutf16async.md) | Asynchronously retrieves Unicode xtokens and signatures for web requests. |
| [XUserGetTokenAndSignatureUtf16Result](functions/xusergettokenandsignatureutf16result.md) | Gets the result of a call to XUserGetTokenAndSignatureUtf16Async. |
| [XUserGetTokenAndSignatureUtf16ResultSize](functions/xusergettokenandsignatureutf16resultsize.md) | Gets the buffer size for holding the results of a call to XUserGetTokenAndSignatureUtf16Async. |
| [XUserIsStoreUser](functions/xuserisstoreuser.md) | Checks if the XUser MSA is the same as the MSA signed into the Microsoft Store. |
| [XUserRegisterForChangeEvent](functions/xuserregisterforchangeevent.md) | Registers a callback for a user change event. |
| [XUserRegisterForDefaultAudioEndpointUtf16Changed](functions/xuserregisterfordefaultaudioendpointutf16changed.md) | Registers a callback that the application defines and invokes when the default audio endpoint changes. |
| [XUserRegisterForDeviceAssociationChanged](functions/xuserregisterfordeviceassociationchanged.md) | Registers a callback for user device association change events. |
| [XUserResolveIssueWithUiAsync](functions/xuserresolveissuewithuiasync.md) | Displays a system User Interface for solving token issues with a non-unicode URL. |
| [XUserResolveIssueWithUiResult](functions/xuserresolveissuewithuiresult.md) | Retrieves the result of a call to XUserResolveIssueWithUiAsync. |
| [XUserResolveIssueWithUiUtf16Async](functions/xuserresolveissuewithuiutf16async.md) | Displays a system User Interface for solving token issues with a specific unicode URL. |
| [XUserResolveIssueWithUiUtf16Result](functions/xuserresolveissuewithuiutf16result.md) | Retrieves the result of a call to XUserResolveIssueWithUiUtf16Async. |
| [XUserResolvePrivilegeWithUiAsync](functions/xuserresolveprivilegewithuiasync.md) | Displays a resolution user interface for required user privileges. |
| [XUserResolvePrivilegeWithUiResult](functions/xuserresolveprivilegewithuiresult.md) | Retrieves the result of a call to XUserResolvePrivilegeWithUiAsync. |
| [XUserUnregisterForChangeEvent](functions/xuserunregisterforchangeevent.md) | Unregisters a previously registered user change callback. |
| [XUserUnregisterForDefaultAudioEndpointUtf16Changed](functions/xuserunregisterfordefaultaudioendpointutf16changed.md) | Unregisters a previously-registered default audio endpoint change callback. |
| [XUserUnregisterForDeviceAssociationChanged](functions/xuserunregisterfordeviceassociationchanged.md) | Unregisters a previously registered user device association change callback. |
| [xUserPlatformRemoteConnectSetEventHandlers](functions/xuserplatformremoteconnectseteventhandlers.md) | Sets the remote connect event handlers |
| [XUserPlatformRemoteConnectCancelPrompt](functions/xuserplatformremoteconnectcancelprompt.md) | Signal to XUser that the remote connect prompt has been dismissed by the user. |
| [XUserPlatformRemoteConnectShowPromptEventHandler](functions/xuserplatformremoteconnectshowprompteventhandler.md) | Show prompt for remote connect authentication event handler. |
| [XUserPlatformRemoteConnectClosePromptEventHandler](functions/xuserplatformremoteconnectcloseprompteventhandler.md) | Close prompt for remote authentication event handler. |
| [XUserPlatformSpopPromptEventHandler](functions/xuserplatformspopprompteventhandler.md) | Show prompt for SPOP operation event handler |
| [XUserPlatformSpopPromptSetEventHandlers](functions/xuserplatformspoppromptseteventhandlers.md) | Sets the SPOP prompt event handler. |
| [XUserPlatformSpopPromptClearEventHandler](functions/xuserplatformspoppromptcleareventhandler.md) | Clears the SPOP prompt event handler in XUser. |
| [XUserPlatformSpopPromptComplete](functions/xuserplatformspoppromptcomplete.md) | Signal to XUser that the user finished interacting with the SPOP prompt. |

## Structures

| Structure | Description |
| --- | --- |
| [APP_LOCAL_DEVICE_ID](structs/app_local_device_id.md) | Specifies the root ID of a local input device. |
| [XUserDeviceAssociationChange](structs/xuserdeviceassociationchange.md) | Specifies the old and new device associations when a device association changes. |
| [XUserGetTokenAndSignatureData](structs/xusergettokenandsignaturedata.md) | Specifies the xtokens and signatures that we retrieve for web requests. |
| [XUserGetTokenAndSignatureHttpHeader](structs/xusergettokenandsignaturehttpheader.md) | Specifies the HTTP header for a web request. |
| [XUserGetTokenAndSignatureUtf16Data](structs/xusergettokenandsignatureutf16data.md) | Contains Unicode xtokens and signatures for web requests. |
| [XUserGetTokenAndSignatureUtf16HttpHeader](structs/xusergettokenandsignatureutf16httpheader.md) | Contains a Unicode HTTP header for a web request. |
| [XUserLocalId](structs/xuserlocalid.md) | Specifies a game session ID for a user. |
| [XUserPlatformRemoteConnectEventHandlers](structs/xuserplatformremoteconnecteventhandlers.md) | Encapsulates the remote connect event handlers |

## Enumerations

| Enumeration | Description |
| --- | --- |
| [XUserAddOptions](enums/xuseraddoptions.md) | Specifies the options for adding a user. |
| [XUserAgeGroup](enums/xuseragegroup.md) | Specifies the age group of a user. |
| [XUserChangeEvent](enums/xuserchangeevent.md) | Specifies the type of user change event. |
| [XUserDefaultAudioEndpointKind](enums/xuserdefaultaudioendpointkind.md) | Specifies whether the user's default audio endpoint renders or captures audio. |
| [XUserGamerPictureSize](enums/xusergamerpicturesize.md) | Specifies the size of the gamer picture in pixels. |
| [XUserGamertagComponent](enums/xusergamertagcomponent.md) | Specifies the type (or component) of gamertag to fetch. |
| [XUserGetMsaTokenSilentlyOptions](enums/xusergetmsatokensilentlyoptions.md) | Options for XUserGetMsaTokenSilentlyOptions. |
| [XUserGetTokenAndSignatureOptions](enums/xusergettokenandsignatureoptions.md) | Options for GetUserTokenAndSignatureAsync. |
| [XUserPrivilege](enums/xuserprivilege.md) | Specifies the privileges of a user. |
| [XUserPrivilegeDenyReason](enums/xuserprivilegedenyreason.md) | Specifies the reason a user could not obtain a privilege. |
| [XUserPrivilegeOptions](enums/xuserprivilegeoptions.md) | Specifies the user privilege options. |
| [XUserState](enums/xuserstate.md) | Specifies the current state of the user. |
| [XUserPlatformOperationResult](enums/xuserplatformoperationresult.md) | Enum defining the results of a client operation |
| [XUserPlatformSpopOperationResult](enums/xuserplatformspopoperationresult.md) | Enum defining the results of a client operation. |

## See also

[System API reference](../gc-reference-system-toc.md)
