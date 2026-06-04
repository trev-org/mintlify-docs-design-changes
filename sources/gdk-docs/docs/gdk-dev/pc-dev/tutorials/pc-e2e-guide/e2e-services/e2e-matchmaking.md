---
author: sdgmiller
title: "Implement matchmaking in your game"
description: "Describes how to implement matchmaking in your game."
kindex:
- Player authentication and ownership
- Xbox services, Xbox account
- Xbox services, identity
- Xbox services, player authentication
ms.topic: article
edited: 06/03/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Implement matchmaking in your game

This article provides a summary of the steps to implement matchmaking in your game. For detailed information, be sure to review the articles in the [See also](#see-also) section at the end of this article.

## Implement Matchmaking by using the Microsoft Azure PlayFab Lobby and Matchmaking SDK

The PlayFab Lobby and Matchmaking SDK is now part of the GDK.

1. Download and set up the [Azure PlayFab Lobby and Matchmaking SDK](/gaming/playfab/multiplayer/lobby/lobby-matchmaking-sdks/lobby-matchmaking-sdks): download the C/C++ SDK for your platform, and then integrate the provided header and library files into your build.
1. [Authenticate the player](e2e-user-sign-in.md): players must be authenticated with both Xbox services and Microsoft Azure PlayFab before using features that rely on these services in your games.
1. Initialize the PlayFab Multiplayer SDK: initialize the SDK by calling [PFMultiplayerInitialize](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmultiplayer/functions/pfmultiplayerinitialize). Set the entity key and token used by the library on behalf of your players by calling [PFMultiplayerSetEntityToken](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmultiplayer/functions/pfmultiplayersetentitytoken).
1. Configure matchmaking queues: match configuration centers around queues, which represent a place where tickets wait to be matched with each other. Each queue has some general configuration information about what's required for a match. In addition, a queue can contain a set of rules that provide further restrictions on how tickets are matched together. For specific information, see [Configuring matchmaking queues](/gaming/playfab/features/multiplayer/matchmaking/config-queues).
1. Create a matchmaking ticket: create a matchmaking ticket by using [PFMultiplayerCreateMatchmakingTicket](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmultiplayercreatematchmakingticket). Specify all local players that want to be part of the match and any attributes you want associated with those players. There are three different scenarios for creating a matchmaking ticket:  
   * Implement matchmaking with a single local player: call `PFMultiplayerCreateMatchmakingTicket` with a single `PFEntityKey` to start matchmaking for a single local player.
   * Implement matchmaking with a group of remote players.
     1. The leader creates the ticket by using `PFMultiplayerCreateMatchmakingTicket`. It specifies the other players in the group through the configuration parameter.  
     1. Call [PFMatchmakingTicketGetTicketId](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmatchmakingticketgetticketid) to get the ticket ID.
     1. Send this ID to each other player by using an external mechanism, such as a networking mesh or a shared PlayFab Lobby. Have each client call [PFMultiplayerJoinMatchmakingTicketFromId](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmultiplayerjoinmatchmakingticketfromid) with the ticket ID to join the matchmaking ticket.
     1. The ticket status will be [PFMatchmakingTicketStatus::WaitingForPlayers](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/enums/pfmatchmakingticketstatus) while waiting for the specified players to join. The status changes to `PFMatchmakingTicketStatus::WaitingForMatch` after all the players have joined the ticket.
   * Implement matchmaking with multiple local players.
     1. Pass a list of `PFEntityKey` and a corresponding list of attributes for each player to the `PFMultiplayerCreateMatchmakingTicket` or `PFMultiplayerJoinMatchmakingTicketFromId` functions.
     1. Ensure each list entry position matches, so that the first entry in the attributes list corresponds to the first player in the [PFEntityKey](/gaming/playfab/api-references/c/pftypes/structs/pfentitykey-c) list.
1. Check the status of the matchmaking ticket: check for updates to the ticket by calling [PFMultiplayerStartProcessingMatchmakingStateChanges](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmultiplayerstartprocessingmatchmakingstatechanges) to receive state changes. Call [PFMultiplayerFinishProcessingMatchmakingStateChanges](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmultiplayerfinishprocessingmatchmakingstatechanges) when you're done processing those state changes. The SDK returns a `TicketStatusChanged` state change whenever the status of the ticket changes and a `TicketCompleted` state change when matchmaking is done.
1. Get the match: after receiving the [PFMatchmakingStateChangeType::TicketCompleted](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/enums/pfmatchmakingstatechangetype) state change, call [PFMatchmakingTicketGetMatch](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmatchmakingticketgetmatch) to get the details of the match. 
   * Get the information you need out of the [PFMatchmakingMatchDetails](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/structs/pfmatchmakingmatchdetails) struct. Destroy the ticket by using [PFMultiplayerDestroyMatchmakingTicket](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmultiplayerdestroymatchmakingticket).
1. Cancel a matchmaking ticket:  to cancel the matchmaking process prior to the timeout set in the [PFMatchmakingTicketConfiguration](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/structs/pfmatchmakingticketconfiguration), call [PFMatchmakingTicketCancel](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmatchmakingticketcancel) with the ticket handle.
1. Connecting your players together into a lobby (optional): after the players have matched, they can join up together in a lobby. The [PFMatchmakingMatchDetails](/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/structs/pfmatchmakingmatchdetails) from the matched ticket contains a `lobbyArrangementString` field, which can be used to join the players into the same lobby. This allows integration between the features. If you have your own technology, you can use it.
1. Allocating server functionality (optional): matchmaking includes an option that can automatically create a game server for the resulting match. The allocated server runs a build, which is configured in the queue's configuration file. On startup, the server is passed in the members of the match as the list of initial players. A matchmaking queue is tied to a single multiplayer server build or to a build alias. For specific information, see [Integrating with PlayFab Multiplayer Servers](/gaming/playfab/features/multiplayer/matchmaking/multiplayer-servers).

## See also 

The [PlayFab documentation](/gaming/playfab/) is the best source of up-to-date information. For details, see the following articles and sample.

* [Matchmaking SDK quickstart](/gaming/playfab/features/multiplayer/matchmaking/quickstart-client-sdk)

* [Matchmaking REST API quickstart](/gaming/playfab/features/multiplayer/matchmaking/quickstart)

* [Matchmaking tutorials](/gaming/playfab/features/multiplayer/matchmaking/tutorials)

* [Matchmaking scenario and configuration examples](/gaming/playfab/features/multiplayer/matchmaking/config-examples)

* [Configuring matchmaking queues](/gaming/playfab/features/multiplayer/matchmaking/config-queues)

* [Integrating with PlayFab Multiplayer Servers](/gaming/playfab/features/multiplayer/matchmaking/multiplayer-servers)

* [Lobby and Matchmaking real-time notifications](/gaming/playfab/multiplayer/lobby/lobby-and-matchmaking-real-time-notifications)

* [NetRumble Demo Game](https://github.com/PlayFab/PlayFabNetRumble)

   This is a simple multiplayer game that shows how to use the Microsoft Azure PlayFab Party and Multiplayer C++ SDKs and APIs in games. 
