# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-matchmaking?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-matchmaking?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Implement matchmaking in your game

Feedback

Summarize this article for me

This article provides a summary of the steps to implement matchmaking in your game. For detailed information, be sure to review the articles in the [See also](https://learn.microsoft.com/#see-also) section at the end of this article.

## Implement Matchmaking by using the Microsoft Azure PlayFab Lobby and Matchmaking SDK

The PlayFab Lobby and Matchmaking SDK is now part of the GDK.

1. Download and set up the [Azure PlayFab Lobby and Matchmaking SDK](https://learn.microsoft.com/en-us/gaming/playfab/multiplayer/lobby/lobby-matchmaking-sdks/lobby-matchmaking-sdks): download the C/C++ SDK for your platform, and then integrate the provided header and library files into your build.
2. [Authenticate the player](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-user-sign-in?view=gdk-2604): players must be authenticated with both Xbox services and Microsoft Azure PlayFab before using features that rely on these services in your games.
3. Initialize the PlayFab Multiplayer SDK: initialize the SDK by calling [PFMultiplayerInitialize](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmultiplayer/functions/pfmultiplayerinitialize). Set the entity key and token used by the library on behalf of your players by calling [PFMultiplayerSetEntityToken](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmultiplayer/functions/pfmultiplayersetentitytoken).
4. Configure matchmaking queues: match configuration centers around queues, which represent a place where tickets wait to be matched with each other. Each queue has some general configuration information about what's required for a match. In addition, a queue can contain a set of rules that provide further restrictions on how tickets are matched together. For specific information, see [Configuring matchmaking queues](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/matchmaking/config-queues).
5. Create a matchmaking ticket: create a matchmaking ticket by using [PFMultiplayerCreateMatchmakingTicket](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmultiplayercreatematchmakingticket). Specify all local players that want to be part of the match and any attributes you want associated with those players. There are three different scenarios for creating a matchmaking ticket:
 - Implement matchmaking with a single local player: call `PFMultiplayerCreateMatchmakingTicket` with a single `PFEntityKey` to start matchmaking for a single local player.
 - Implement matchmaking with a group of remote players.
 1. The leader creates the ticket by using `PFMultiplayerCreateMatchmakingTicket`. It specifies the other players in the group through the configuration parameter.
 2. Call [PFMatchmakingTicketGetTicketId](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmatchmakingticketgetticketid) to get the ticket ID.
 3. Send this ID to each other player by using an external mechanism, such as a networking mesh or a shared PlayFab Lobby. Have each client call [PFMultiplayerJoinMatchmakingTicketFromId](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmultiplayerjoinmatchmakingticketfromid) with the ticket ID to join the matchmaking ticket.
 4. The ticket status will be [PFMatchmakingTicketStatus::WaitingForPlayers](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/enums/pfmatchmakingticketstatus) while waiting for the specified players to join. The status changes to `PFMatchmakingTicketStatus::WaitingForMatch` after all the players have joined the ticket.
 - Implement matchmaking with multiple local players.
 1. Pass a list of `PFEntityKey` and a corresponding list of attributes for each player to the `PFMultiplayerCreateMatchmakingTicket` or `PFMultiplayerJoinMatchmakingTicketFromId` functions.
 2. Ensure each list entry position matches, so that the first entry in the attributes list corresponds to the first player in the [PFEntityKey](https://learn.microsoft.com/en-us/gaming/playfab/api-references/c/pftypes/structs/pfentitykey-c) list.
6. Check the status of the matchmaking ticket: check for updates to the ticket by calling [PFMultiplayerStartProcessingMatchmakingStateChanges](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmultiplayerstartprocessingmatchmakingstatechanges) to receive state changes. Call [PFMultiplayerFinishProcessingMatchmakingStateChanges](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmultiplayerfinishprocessingmatchmakingstatechanges) when you're done processing those state changes. The SDK returns a `TicketStatusChanged` state change whenever the status of the ticket changes and a `TicketCompleted` state change when matchmaking is done.
7. Get the match: after receiving the [PFMatchmakingStateChangeType::TicketCompleted](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/enums/pfmatchmakingstatechangetype) state change, call [PFMatchmakingTicketGetMatch](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmatchmakingticketgetmatch) to get the details of the match.
 - Get the information you need out of the [PFMatchmakingMatchDetails](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/structs/pfmatchmakingmatchdetails) struct. Destroy the ticket by using [PFMultiplayerDestroyMatchmakingTicket](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmultiplayerdestroymatchmakingticket).
8. Cancel a matchmaking ticket: to cancel the matchmaking process prior to the timeout set in the [PFMatchmakingTicketConfiguration](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/structs/pfmatchmakingticketconfiguration), call [PFMatchmakingTicketCancel](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/functions/pfmatchmakingticketcancel) with the ticket handle.
9. Connecting your players together into a lobby (optional): after the players have matched, they can join up together in a lobby. The [PFMatchmakingMatchDetails](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmatchmaking/structs/pfmatchmakingmatchdetails) from the matched ticket contains a `lobbyArrangementString` field, which can be used to join the players into the same lobby. This allows integration between the features. If you have your own technology, you can use it.
10. Allocating server functionality (optional): matchmaking includes an option that can automatically create a game server for the resulting match. The allocated server runs a build, which is configured in the queue's configuration file. On startup, the server is passed in the members of the match as the list of initial players. A matchmaking queue is tied to a single multiplayer server build or to a build alias. For specific information, see [Integrating with PlayFab Multiplayer Servers](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/matchmaking/multiplayer-servers).

## See also

The [PlayFab documentation](https://learn.microsoft.com/en-us/gaming/playfab/) is the best source of up-to-date information. For details, see the following articles and sample.

- [Matchmaking SDK quickstart](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/matchmaking/quickstart-client-sdk)
 
- [Matchmaking REST API quickstart](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/matchmaking/quickstart)
 
- [Matchmaking tutorials](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/matchmaking/tutorials)
 
- [Matchmaking scenario and configuration examples](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/matchmaking/config-examples)
 
- [Configuring matchmaking queues](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/matchmaking/config-queues)
 
- [Integrating with PlayFab Multiplayer Servers](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/matchmaking/multiplayer-servers)
 
- [Lobby and Matchmaking real-time notifications](https://learn.microsoft.com/en-us/gaming/playfab/multiplayer/lobby/lobby-and-matchmaking-real-time-notifications)
 
- [NetRumble Demo Game](https://github.com/PlayFab/PlayFabNetRumble)
 
 This is a simple multiplayer game that shows how to use the Microsoft Azure PlayFab Party and Multiplayer C++ SDKs and APIs in games.
 

---

## Feedback

Was this page helpful?

Yes No No

Need help with this topic?

Want to try using Ask Learn to clarify or guide you through this topic?

Ask Learn Ask Learn

Suggest a fix?

---

## Additional resources

---

- Last updated on 11/06/2025