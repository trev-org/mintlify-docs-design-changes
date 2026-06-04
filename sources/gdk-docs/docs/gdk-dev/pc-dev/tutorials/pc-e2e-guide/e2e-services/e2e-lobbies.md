---
author: sdgmiller
title: "Implement lobbies in your game"
description: "Describes how to set up lobbies in your game."
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

# Implement lobbies in your game

This article provides a summary of the steps to implement lobbies in your game. For detailed information, be sure to review the articles in the [See also](#see-also) section at the end of this article.

## Implement game lobbies by using Microsoft Azure PlayFab Lobby

Implementing game lobbies by using Microsoft Azure PlayFab APIs and services can be approached in several ways. The recommended method is to use the PlayFab Lobby API. Use the following steps to implement a game lobby.  

1. Download and set up the [Azure PlayFab Lobby and Matchmaking SDK](/gaming/playfab/features/multiplayer/lobby/lobby-matchmaking-sdks/lobby-matchmaking-sdks): setup the C/C++ SDK for your platform, and then integrate the provided header and library files into your build.  
1. [Authenticate the player](e2e-user-sign-in.md): players must be authenticated with both Xbox services and PlayFab before they use features that rely on these services in your games.
1. Initialize the PlayFab SDK: initialize the SDK by calling [PFMultiplayerInitialize](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmultiplayer/functions/pfmultiplayerinitialize). Set the entity key and token used by the library on behalf of your players by calling [PFMultiplayerSetEntityToken](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmultiplayer/functions/pfmultiplayersetentitytoken).
1. Create a lobby.
   1. Call [PFMultiplayerCreateAndJoinLobby](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pfmultiplayercreateandjoinlobby).
   1. Check for asynchronous completion by periodically polling [PFMultiplayerStartProcessingLobbyStateChanges](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pfmultiplayerstartprocessinglobbystatechanges) for [PFLobbyCreateAndJoinLobbyCompletedStateChange](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/structs/pflobbycreateandjoinlobbycompletedstatechange).
1. [Join a lobby by using in-game invites](/gaming/playfab/multiplayer/lobby/lobby-invites#joining-a-lobby-by-in-game-invites).  
   * A member of a lobby can invite another player to that lobby directly via the lobby service.
   * This invite shares the lobby's connection string with the invited player.
   * The invited player receives the invitation via [PFLobbyInviteReceivedStateChange](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/structs/pflobbyinvitereceivedstatechange) and can use the attached connection string to join the lobby.
   * These invites work cross-platform but only work in-game.
1. [Join a lobby by using platform invites](/gaming/playfab/multiplayer/lobby/lobby-invites#joining-a-lobby-by-platform-invites).
   * Members of the lobby can directly share the lobby's connection string with other players over platform-specific invite mechanisms.
   * These invites don't work cross-platform but can be received without the recipient already playing the game.
   * After the invited player receives the connection string via the platform mechanism, they can use the attached connection string to join the lobby.
1. [Integrate with Matchmaking](/gaming/playfab/multiplayer/lobby/lobby-and-matchmaking). 
   * PlayFab Lobby and Matchmaking work seamlessly together to create a cohesive multiplayer matchmaking experience for your game.
   * Matchmaking gathers a set of players together who want to participate in a game session.
   * After matchmaking has identified a set of players, PlayFab Lobby provides them with a communication medium to coordinate joining a game session together.  
1. Find a lobby: use [FindLobbies](/gaming/playfab/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pfmultiplayerfindlobbies) and  the filter parameter to restrict your query to return only search results that match some set of criteria based on the lobby's custom search properties.

### Integrating PlayFab Lobby and Matchmaking with the Microsoft Game Development Kit Multiplayer Activity

*Multiplayer Activity* (MPA) is a lightweight service to simplify Xbox services. To integrate MPA with PlayFab Lobby and Matchmaking or similar services, a game or game service must query the relevant information from the lobby state and then migrate this information into the MPA service. It's not intended for lobby or session state information.

For more information, see [Integration with PlayFab Lobby & Match](../../../../../services/multiplayer/mpa/concepts/live-mpa-playfab-integration.md).

In addition, to use Xbox services, the player must also be signed in with their Xbox account. For more information see [Implement player sign in in your game](e2e-user-sign-in.md).

## See also  

The [PlayFab documentation](/gaming/playfab/) is the best source of up-to-date information. For details, see the following articles and samples.

* [Lobby SDK Quickstart](/gaming/playfab/multiplayer/lobby/lobby-getting-started)

* [Create a lobby](/gaming/playfab/features/multiplayer/lobby/create-a-lobby)

* [Joining lobbies and connection strings](/gaming/playfab/features/multiplayer/lobby/join-lobbies)

* [Find lobbies](/gaming/playfab/features/multiplayer/lobby/find-lobbies)

* [Lobby properties](/gaming/playfab/features/multiplayer/lobby/lobby-properties)

* [Use Lobby and Matchmaking Together](/gaming/playfab/features/multiplayer/lobby/lobby-and-matchmaking)

* [NetRumble Demo Game](https://github.com/PlayFab/PlayFabNetRumble)

   This is a simple multiplayer game that shows how to use the Microsoft Azure PlayFab Party and Multiplayer C++ SDKs and APIs in games. 

* [SimpleMPA](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/SimpleMPA)

   This sample shows how to use the MPA for activities and invites.

