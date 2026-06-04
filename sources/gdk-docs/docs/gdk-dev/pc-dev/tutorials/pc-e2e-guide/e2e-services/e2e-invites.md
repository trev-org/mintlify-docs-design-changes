---
author: sdgmiller
title: "Implement player invites and joins in your game"
description: "Describes how to set up invites in your game."
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

# Implement player invites and joins in your game

This article provides a summary of the steps involved in implementing player invites in your game. For more information, be sure to review the pages in the [See also (PlayFab)](#see-also-playfab) and [See also (GDK)](#see-also-gdk) sections.

## Implement player invites and joins by using the Microsoft Azure PlayFab Lobby feature

Inviting a player into a game by using PlayFab APIs and services involves a more flexible approach compared to platform-specific APIs, because PlayFab focuses on back-end logic. 

For invites and joins, ensure that you've integrated the [PlayFab Lobby](/gaming/playfab/features/multiplayer/lobby/lobby-invites) construct.

1. Download and set up the [Azure PlayFab Lobby and Matchmaking SDK](/gaming/playfab/features/multiplayer/lobby/lobby-matchmaking-sdks/lobby-matchmaking-sdks): download the C/C++ SDK for your platform, and then integrate the provided header and library files into your build. 
1. [Authenticate the player](e2e-user-sign-in.md): players must be authenticated with both Xbox services and PlayFab before they use features that rely on these services in your games.
1. Choose a lobby type:
   * By players: This creates a client-owned lobby. The local player becomes the lobby owner. Use the [PFMultiplayerCreateAndJoinLobby](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pfmultiplayercreateandjoinlobby) function to create this lobby.
   * By your game servers: This creates a server-owned lobby. Use the [PFMultiplayerCreateAndClaimServerLobby](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pfmultiplayercreateandclaimserverlobby) function to create this lobby. 
   * By matchmaking: This is created by a group of players that is formed after matchmaking. This also creates a client-owned lobby.

   These lobbies serve as the game session that players can join.
1. Implement event handling to receive notifications about invites.
   * Use [PFMultiplayerStartListeningForLobbyInvites](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pfmultiplayerstartlisteningforlobbyinvites) on the invite recipient to enable receiving in-game invites. 
   * Use the [PFLobbyInviteReceivedStateChange](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/structs/pflobbyinvitereceivedstatechange) event to handle incoming invites.
1. Join lobbies: players can join lobbies by providing the PlayFab Lobby service with a lobby's *connection string*, an opaque identifier that grants membership to the lobby. Players can join lobbies in the following ways.
   * Use in-game invites: A member of a lobby can invite another player to that lobby directly via the PlayFab Lobby service. This shares the lobby's connection string with the invited player. These invites work cross-platform but only work in-game. For more information, see [Lobby invites](/gaming/playfab/features/multiplayer/lobby/lobby-invites).
   * Use platform-provided invites: Members of the lobby can directly share the lobby's connection string with other players over platform-specific invite mechanisms. These invites don't work cross-platform but can be received without the recipient already playing the game.
   * Use the [PFLobbySendInvite](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pflobbysendinvite) function to send an invite to another PlayFab user via the PlayFab Lobby service. This function requires the lobby handle, the sender's entity key, and the receiver's entity key.
   * Search for available lobbies by using [FindLobbies](/gaming/playfab/features/multiplayer/lobby/find-lobbies) and join an available lobby.
   * Share the lobby's connection string via any out-of-band, custom discovery mechanism.

    When a player receives a connection string, they can join the lobby by using the [PFMultiplayerJoinLobby](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pfmultiplayerjoinlobby) function. This function requires the lobby connection string and the player's entity key. 
1.	Manage lobby state: use the [PFLobbyUpdatedStateChange](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/structs/pflobbyupdatedstatechange) function to manage the lobby state, including adding or removing players, updating lobby properties, and handling player readiness.
1. Manage lobby events: implement event handling to receive notifications about lobby state changes. Use the [PFMultiplayerStartProcessingLobbyStateChanges](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pfmultiplayerstartprocessinglobbystatechanges) function and [PFLobbyStateChange](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/structs/pflobbystatechange) event to manage changes in the lobby, such as players joining or leaving.

## See also (PlayFab) 

The [PlayFab documentation](/gaming/playfab/) is the best source of information. Use it as a primary source. For details see the following articles.

* [Create a lobby](/gaming/playfab/features/multiplayer/lobby/create-a-lobby)

* [Lobby invites](/gaming/playfab/features/multiplayer/lobby/lobby-invites)

* [Lobby and Matchmaking real-time notifications](/gaming/playfab/features/multiplayer/lobby/lobby-and-matchmaking-real-time-notifications)

* [Lobby SDK Quickstart](/gaming/playfab/features/multiplayer/lobby/lobby-getting-started)

* [Joining lobbies and connection strings](/gaming/playfab/features/multiplayer/lobby/join-lobbies)

## Implement player invites and joins by using Multiplayer Activity

Inviting a player into a game by using the Microsoft Game Development Kit (GDK) [Multiplayer Activity (MPA) APIs](../../../../../reference/live/xsapi-c/multiplayer_activity_c/multiplayer_activity_c_members.md) and Xbox services involves a multistep process using various API functions. 
1. Initialize Xbox services: ensure that Xbox services are properly initialized within your game. This involves setting up the necessary Xbox services context.
1. Get the local user's Xbox User ID (`XUID`): use the [XUserGetId](../../../../../reference/system/xuser/functions/xusergetid.md) function to retrieve the `XUID` of the local player who is initiating the invite. This `XUID` is essential for identifying the inviter.
1. Identify the target users: determine the `XUID`s of the players you want to invite. This can be done through the Xbox friends list, recent players list, or other ways.
1. Create a multiplayer activity: use the [XblMultiplayerActivitySetActivityAsync](../../../../../reference/live/xsapi-c/multiplayer_activity_c/functions/xblmultiplayeractivitysetactivityasync.md) function to create a multiplayer activity. This activity enables other players to see the player's activity and join the game in progress. For specific information about creating a multiplayer activity, see [Activities](../../../../../services/multiplayer/mpa/concepts/live-mpa-activities.md).
1. Send invites: use [XblMultiplayerActivitySendInvitesAsync](../../../../../reference/live/xsapi-c/multiplayer_activity_c/functions/xblmultiplayeractivitysendinvitesasync.md) to send invites to other players, requesting that they join the multiplayer experience.
1. Update the activity: use [XblMultiplayerActivitySetActivityAsync](../../../../../reference/live/xsapi-c/multiplayer_activity_c/functions/xblmultiplayeractivitysetactivityasync.md) to update the information as the activity properties change. 
1. Retrieve activities: use [XblMultiplayerActivityGetActivityAsync](../../../../../reference/live/xsapi-c/multiplayer_activity_c/functions/xblmultiplayeractivitygetactivityasync.md) to retrieve the activities of other players, displaying their activities in the in-game UI.
1. Manage recent players: use [XblMultiplayerActivityUpdateRecentPlayers](../../../../../reference/live/xsapi-c/multiplayer_activity_c/functions/xblmultiplayeractivityupdaterecentplayers.md) to update the player's recent players list with any players that they've had meaningful interactions with.
1. Delete the activity: when the player ends or leaves the multiplayer experience, delete the activity by using [XblMultiplayerActivityDeleteActivityAsync](../../../../../reference/live/xsapi-c/multiplayer_activity_c/functions/xblmultiplayeractivitydeleteactivityasync.md).

> [!NOTE]  
> The `connectionString` property is important when working with MPA lobby and invite solutions. This string serves as a unique identifier that contains essential information required for one player to connect to another. This string is created and understood only by the title, often containing details like server IP addresses, but it's left freeform to allow titles flexibility.
>
> When a player starts or joins a multiplayer experience, `connectionString` is passed to the activity in the [XblMultiplayerActivityInfo](../../../../../reference/live/xsapi-c/multiplayer_activity_c/structs/xblmultiplayeractivityinfo.md) structure. It's passed as a parameter to [XblMultiplayerActivitySetActivityAsync](../../../../../reference/live/xsapi-c/multiplayer_activity_c/functions/xblmultiplayeractivitysetactivityasync.md). This enables other players to join the game in progress. This property is also included in invites, allowing players to connect seamlessly. The `connectionString` ensures that players can join the correct session and facilitates smooth transitions between different multiplayer activities.

## See also (GDK)

The GDK documentation is the best source of up-to-date information. For details, see the following articles and samples.

* [Multiplayer Activity (MPA) feature overview](../../../../../services/multiplayer/mpa/live-mpa-overview.md)

* [Activities](../../../../../services/multiplayer/mpa/concepts/live-mpa-activities.md)

* [Send a request for another player to join a multiplayer experience.](../../../../../services/multiplayer/mpa/concepts/live-mpa-invites.md)

* [Example code for Multiplayer Activity](../../../../../services/multiplayer/mpa/how-to/live-mpa-client-how-to.md)

* [Multiplayer Activity (MPA) APIs](../../../../../reference/live/xsapi-c/multiplayer_activity_c/multiplayer_activity_c_members.md)

* [NetRumble Demo Game](https://github.com/PlayFab/PlayFabNetRumble)

   This is a simple multiplayer game that shows how to use the Microsoft Azure PlayFab Party and Multiplayer C++ SDKs and APIs in games. 

* [SimpleMPA](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/SimpleMPA)

  This sample shows how to use the MPA for activities and invites.
