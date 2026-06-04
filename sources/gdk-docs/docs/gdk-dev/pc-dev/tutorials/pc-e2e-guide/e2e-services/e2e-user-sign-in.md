---
author: sdgmiller
title: "Implement player sign-in in your game"
description: "Describes how to implement user sign-in."
kindex:
- User authentication and ownership
- Xbox services, Xbox account
- Xbox services, identity
- Xbox services, user authentication
ms.topic: article
edited: 06/03/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Implement player sign-in in your game

This article describes three scenarios to implement player sign-in for games that use both Xbox services and PlayFab services. When your game uses these services together, players must be signed in to both their Xbox services account and their linked PlayFab user account.

## Implement player sign-in by using the Microsoft Game Development Kit and Xbox services

Xbox service accounts are tied to various Xbox services, such as achievements, game saves, in-game purchases, multiplayer sessions, and player statistics. 

If you're porting your game from a different game engine, we recommend using the [Simplified User Model](../../../../../features/common/user/gamecore-user-models.md#default-user-required---simplified-user-model). It ensures that before a game is launched, you have a default user who is signed in. This is the simplest method for signing in a player. There is also an [Advanced User Model](../../../../../features/common/user/gamecore-user-models.md#default-user-not-required---advanced-user-model) that doesn't require a default user to be signed in. 

The workflow for signing a player in to Xbox services by using the Simplified User Model is as follows.

1. [Initialize the Microsoft Game Development Kit (GDK) environment](e2e-initialize-gdk.md).
1. [Opt into the default user in MicrosoftGame.config](../../../../../features/common/user/users-opting-into-simplified-model.md).
1. Use [XUserRegisterForChangeEvent](../../../../../reference/system/xuser/functions/xuserregisterforchangeevent.md) to register for player state changes. 
1. Call `XUserAddAsync` to add a player to the game. This method returns an `XUserHandle` that represents the signed-in user.

You'll need to manage the `XUserHandle` instances and sign-out events after the player successfully signs in.

## See also (GDK)

For more information about signing players in with the GDK, see the following articles.

* [User identity and XUser](../../../../../features/common/user/player-identity-xuser.md)

* [Account authentication and access overview](../../../../../services/fundamentals/identity/auth/live-authentication-overview.md) 

* [Xbox services authentication for title services](../../../../../services/fundamentals/s2s-auth-calls/service-authentication/live-title-service-authentication.md)

* [Player sign in concepts](../../../../../services/playfab-integration/gdk-playfab-player-sign-in-concepts.md)

* [Establishing the Default User for the Game](../../../../../features/common/user/users-establishing-default-user.md)

* [Changing the Default User for the Game](../../../../../features/common/user/users-changing-default-user.md)

## Implement player sign-in by using PlayFab

PlayFab supports multiple ways of account authentication through its own authentication services and those from Microsoft. When your game uses PlayFab and Xbox services together, players must sign in to both their Xbox services account and their PlayFab user account. 

We recommend using the PlayFab Services SDK for all games that use any PlayFab services. However, if Microsoft Azure PlayFab Party is the only PlayFab service your game uses and your game only uses Xbox services as an authentication provider, use the PlayFab Party Xbox Live Helper Library.

### Implement player sign-in by using the PlayFab Services SDK

The PlayFab Services SDK includes the [PFAuthenticationLoginWithXUserAsync](/gaming/playfab/api-references/c/pfauthentication/functions/pfauthenticationloginwithxuserasync) function to authenticate Xbox players with PlayFab. 

1. [Download and install the GDK](../../../../get-started/get-started-home.md).
1. Add the PlayFab.Services.C Gaming Extension Library to your game project.
1. Sign players in to their Xbox accounts by using [XUserAddAsync](../../../../../reference/system/xuser/functions/xuseraddasync.md). For details, see [XUser](../../../../../reference/system/xuser/xuser_members.md).
1. Use `PFAuthenticationLoginWithXUserAsync` from the PlayFab Services SDK to sign players in to PlayFab with `XUserHandle` from `XUserAddAsync`.

> [!NOTE]
> PlayFab makes a distinction between authenticating as a player and authenticating as a title entity. Some PlayFab APIs are not available to player entities. For example to prevent cheating, a player entity is able to read statistics but updating statistics requires being authenticated as a title.
> Authentication as a title uses `PFAuthenticationGetEntityWithSecretKeyAsync` and your title specific secret key. For more information, see [Accessing PlayFab with a title entity](/gaming/playfab/sdks/c/server#accessing-playfab-with-a-title-entity)

## See also (PlayFab)

The [PlayFab](/gaming/playfab/) documentation is the best source of information about player sign-ins. Use it as a primary source. 

For more information about signing players in with PlayFab, see the following articles.

* [Login basics and best practices](/gaming/playfab/features/authentication/login/login-basics-best-practices)

* [Handling multiple PlayFab logins](/gaming/playfab/features/authentication/login/multiple-logins)

* [Account linking quickstart](/gaming/playfab/features/authentication/login/quickstart)

* [Platform-Specific Authentication](/gaming/playfab/identity/player-identity/platform-specific-authentication/)

* [Account Authentication for PlayFab Game Manager](/gaming/playfab/identity/dev-identity/authentication/aad-authentication)
