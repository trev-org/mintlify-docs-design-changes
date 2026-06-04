---
author: joannaleecy
title: "Player sign in concepts"
description: "Describes sign in concepts for Microsoft Game Development Kit (GDK) titles using PlayFab."
kindex:
- PlayFab
- GDK
- sign in
- authentication
- log in
- Xbox services
ms.topic: article
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# Player sign in concepts

This article describes concepts that will help you implement player sign in for Microsoft Game Development Kit (GDK) titles that use PlayFab. 

Players must be authenticated with both Xbox services and PlayFab before using features that rely on their services in your titles. For example, players need to be signed in to a PlayFab account associated with your title before they are able to start chatting using PlayFab Party.

If you're already familiar with the Xbox/PlayFab sign in concepts and want to start coding, see [Implement player sign in](gdk-playfab-player-sign-in-steps.md).

## PlayFab Titles

Before your game can interact with PlayFab services, you must create a title in the PlayFab developer portal ([Game Manager](https://developer.playfab.com)). After doing so, you will be assigned a PlayFab TitleId. This will be a 4-6 hex-digit string that identifies your title uniguely in PlayFab. **This is not the same as your Xbox title id.** PlayFab account and title creation is free for all developers, but launching a game can incur additional costs. Please see [PlayFab Pricing](https://playfab.com/pricing/) for details.

## Understand Xbox and PlayFab user accounts

Xbox services and PlayFab accounts are two different user accounts. While Xbox services accounts are player-facing, PlayFab accounts are used behind the scenes to identify the player with PlayFab services and are linked to a player's Xbox services account within the context of your title.

When your title is using Xbox and PlayFab services, players have to be signed in to both their Xbox services account and the linked PlayFab user account.

To facilitate this, your title needs to be prepared to provision a PlayFab account linked to the player's Xbox services account.

By the end of the sign in process:

* Each player needs to have a PlayFab user account provisioned within the context of your title.
* The player's Xbox services and PlayFab accounts must also be linked with each other.
* The player is authenticated with both services.

## Sign players in to PlayFab

There are two ways to sign players in to PlayFab accounts. The PlayFab Service SDK is the recommended route for all titles using any PlayFab services. 

However, if PlayFab Party is the only PlayFab service your title uses and your title only uses Xbox services as an authentication provider, then use PlayFab Party's Xbox Live Helper Library.

* [PlayFab Services SDK](gdk-playfab-player-sign-in-steps.md#playfab-services-sdk)
* [PlayFab Party Xbox Live Helper Library](gdk-playfab-player-sign-in-steps.md#playfab-party-xbox-live-helper-library)

### Guidance for cross-platform titles 

PlayFab supports multiple platform authentication providers. When developing cross-platform titles that include other platforms such as other consoles or mobile (Android and iOS), provision linked PlayFab accounts using their preferred platform-specific player authentication workflows. This would mean for users playing on Android, provide a Google Play Games sign in option. For users playing on iOS devices, provide an Apple ID sign in option.

To learn more, see [Platform-specific PlayFab authentication](/gaming/playfab/features/authentication/platform-specific-authentication/), [PlayFab SDK](/gaming/playfab/sdks/playfab-sdk-intro), and their specific user sign in developer documentation for latest guidance.

## See also

* [User identity and XUser](../../features/common/user/player-identity-xuser.md)
* [PlayFab Services SDK Quickstart](/gaming/playfab/sdks/gdk/quickstart)
* [Microsoft Store in-app purchase set up (NDA topic)](gdk-playfab-microsoft-store.md)
