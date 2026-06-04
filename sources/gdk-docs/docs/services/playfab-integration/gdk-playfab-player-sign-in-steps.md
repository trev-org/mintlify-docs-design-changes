---
author: joannaleecy
title: "Implement player sign in"
description: "Describes how to sign players in for Microsoft Game Development Kit (GDK) titles using PlayFab."
kindex:
- PlayFab
- GDK
- sign in
- authentication
- log in
- Xbox services, PlayFab sign in
- Xbox services, PlayFab authentication
- Xbox services, PlayFab log in
- Xbox services, GDK PlayFab sign in
- Xbox services, GDK PlayFab authentication
- Xbox services, GDK PlayFab log in
ms.topic: article
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# Implement player sign in

This section describes two approaches to implement player sign in for titles that use **both** Xbox services and PlayFab services.

**Important:**
Before starting, make sure you understand [Xbox/PlayFab user accounts and sign in concepts](gdk-playfab-player-sign-in-concepts.md).

There are two ways to sign players in to their PlayFab accounts. The PlayFab Services SDK is the recommended route for all titles using any PlayFab services. 

However, if PlayFab Party is the only PlayFab service your title uses and your title only uses Xbox services as an authentication provider, then use PlayFab Party's Xbox Live Helper Library.

* [PlayFab Services SDK](#playfab-services-sdk)
* [PlayFab Party Xbox Live Helper Library](#playfab-party-xbox-live-helper-library)

<a id="playfab-services-sdk"></a>

## PlayFab Services SDK

The PlayFab Services SDK is now part of the GDK. It includes the __PFAuthenticationLoginWithXUserAsync__ function to authenticate Xbox players with PlayFab. The function has a __createAccount__ parameter that enables you to automatically provision a PlayFab account for the player. 

### Set up

* Download and install [GDK](https://aka.ms/gdkdl).
* Add the __PlayFab.Services.C__ Gaming Extension Library to your game project.
    * Open your project in Visual Studio. Go to __Project__ > __Properties__ to open the project configuration window.
    * If you have the GDK properly installed, you'll see __Gaming Desktop__ under __Configuration Properties__ on the left.
    * Go to __Gaming Desktop__ > __General__, select __Gaming Extension Libraries__. In the pop-up window, select __PlayFab.Services.C__ to add it to your project.

### Recommended flow to use Xbox services as the authentication provider

This is the recommended flow for all titles using the PlayFab Services SDK to sign players into a PlayFab account.

* Sign players in to their Xbox accounts using [XUserAddAsync](../../reference/system/xuser/functions/xuseraddasync.md). For details, see [XUser](#xuser).
* Sign players in to PlayFab using the XUserHandle returned from __XUserAddAsync__. This is achieved using __PFAuthenticationLoginWithXUserAsync__ in the PlayFab Services SDK.
    * Provide the __XUserHandle__ in the __user__ parameter.
    * Set the __createAccount__ flag to __TRUE__ to ensure a new PlayFab user account is provisioned if needed.

To learn more about how to get started with PlayFab in the GDK, please see the [PlayFab Services SDK Quickstart](/gaming/playfab/sdks/gdk/quickstart)

## PlayFab Party Xbox Live Helper Library

**NOTE:** This approach is used if PlayFab Party is the only PlayFab service your title uses and your title only uses Xbox services as an authentication provider. Otherwise, follow the recommended flows under [PlayFab SDK approach](#playfab-services-sdk). The PlayFab SDK approach supports more authentication providers and a wider range of service calls to PlayFab.

The __PlayFab Party Xbox services Helper Library__ retrieves the Xbox Services token (also known as Xbox services token) and use it to sign players in to their PlayFab accounts. It also automatically creates a PlayFab account if the player doesn't have one yet.

### Set up

* Download and install [GDK](https://aka.ms/gdkdl).
* Use the [PlayFab Party SDK and PlayFab Party Xbox Live Helper Library](/gaming/playfab/features/multiplayer/networking/party-sdks) included in the [GDK](https://aka.ms/gdkdl).
* For developers using Unreal and Unity game engines, go to [GDK Download Site](https://aka.ms/gdkdl) and select __Add-ins__ to download the Microsoft GDK Unity plugin and PlayFab Party Online Subsystem.

### Flow

The flow below describes how to sign a player into their Xbox account and PlayFab account using PlayFab Party's Xbox Live Helper Library.

* Sign players in to their Xbox accounts using __XUserAddAsync__. For more details, see [XUser](#xuser).
* Then retrieve their Xbox User ID (XUID) using __XUserGetId__ when chat is first initiated. 
* Create a __PartyXblLocalChatUser__ using [PartyXblManager::CreateLocalChatUser](/gaming/playfab/features/multiplayer/networking/xblreference/classes/partyxblmanager/methods/partyxblmanager_createlocalchatuser) with the XUID retrieved in the previous step.
* Pass this newly created user object to __PartyXblManager::LoginToPlayFab__.
    * For Xbox (XDK and GDK) and PC (GDK) titles, __PartyXblManager::LoginToPlayFab__ kicks off other necessary requests in the background to fetch the Xbox services tokens and use them to sign in to the player's PlayFab account using their Xbox services credentials. If the player's Xbox account doesn't have an associated PlayFab account, the API will automatically create a new PlayFab account and associate it with their Xbox account. When PlayFab accounts are created in this manner, no email or username will be associated with it.
    * For non-Microsoft Game Development Kit (GDK) and non-XDK titles like PC (Win32), you'll receive [PartyXblTokenAndSignatureRequestedStateChange](/gaming/playfab/features/multiplayer/networking/xblreference/partyxboxlive_members) instead. This state change signals that you're required to fetch the Xbox Services token on your own. Once the token is fetched by the title, pass it to service using [PartyXblManager::CompleteGetTokenAndSignatureRequest](/gaming/playfab/features/multiplayer/networking/xblreference/classes/partyxblmanager/methods/partyxblmanager_completegettokenandsignaturerequest) which will complete the login request.
* If all goes well, the result is a [PartyXblLoginToPlayFabCompletedStateChange](/gaming/playfab/features/multiplayer/networking/xblreference/partyxboxlive_members) with your signed in PlayFab credentials (Entity ID and PlayFab token).

**Note:** For remote users, use [CreateRemoteChatUser](/gaming/playfab/features/multiplayer/networking/xblreference/classes/partyxblmanager/methods/partyxblmanager_createremotechatuser). There won't be any authentication or tokens involved in the remote user flow.

<a id="xuser"></a>

## XUser

The [XUser](../../reference/system/xuser/xuser_members.md) class, which is part of the system API, handles user identity and sign in for Microsoft Game Development Kit (GDK) titles.

* To sign users in, use [XUserAddAsync](../../reference/system/xuser/functions/xuseraddasync.md).
* To retrieve Xbox Services token (also known as Xbox services token), use [XUserGetTokenAndSignatureUtf16Async](../../reference/system/xuser/functions/xusergettokenandsignatureutf16async.md).

To learn more about XUser and sign in best practices, see the following resources.

* [User identity and XUser](../../features/common/user/player-identity-xuser.md)
* [GDK user models (NDA topic)](../../features/common/user/gamecore-user-models.md)
* [Sign-in best practices](../../features/common/user/xuser_howto_best_practice_signing_in.md)
* [XUser API reference overview](../../reference/system/xuser/xuser_members.md)

## See also

* [PlayFab Services SDK Quickstart](/gaming/playfab/sdks/gdk/quickstart)
* [Microsoft Store in-app purchase set up (NDA topic)](gdk-playfab-microsoft-store.md)
* [User identity and XUser](../../features/common/user/player-identity-xuser.md)
