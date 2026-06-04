# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-lobbies?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-lobbies?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Implement lobbies in your game

Feedback

Summarize this article for me

This article provides a summary of the steps to implement lobbies in your game. For detailed information, be sure to review the articles in the [See also](https://learn.microsoft.com/#see-also) section at the end of this article.

## Implement game lobbies by using Microsoft Azure PlayFab Lobby

Implementing game lobbies by using Microsoft Azure PlayFab APIs and services can be approached in several ways. The recommended method is to use the PlayFab Lobby API. Use the following steps to implement a game lobby.

1. Download and set up the [Azure PlayFab Lobby and Matchmaking SDK](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/lobby-matchmaking-sdks/lobby-matchmaking-sdks): setup the C/C++ SDK for your platform, and then integrate the provided header and library files into your build.
2. [Authenticate the player](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-user-sign-in?view=gdk-2604): players must be authenticated with both Xbox services and PlayFab before they use features that rely on these services in your games.
3. Initialize the PlayFab SDK: initialize the SDK by calling [PFMultiplayerInitialize](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmultiplayer/functions/pfmultiplayerinitialize). Set the entity key and token used by the library on behalf of your players by calling [PFMultiplayerSetEntityToken](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pfmultiplayer/functions/pfmultiplayersetentitytoken).
4. Create a lobby.
 1. Call [PFMultiplayerCreateAndJoinLobby](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pfmultiplayercreateandjoinlobby).
 2. Check for asynchronous completion by periodically polling [PFMultiplayerStartProcessingLobbyStateChanges](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pfmultiplayerstartprocessinglobbystatechanges) for [PFLobbyCreateAndJoinLobbyCompletedStateChange](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/structs/pflobbycreateandjoinlobbycompletedstatechange).
5. [Join a lobby by using in-game invites](https://learn.microsoft.com/en-us/gaming/playfab/multiplayer/lobby/lobby-invites#joining-a-lobby-by-in-game-invites).
 - A member of a lobby can invite another player to that lobby directly via the lobby service.
 - This invite shares the lobby's connection string with the invited player.
 - The invited player receives the invitation via [PFLobbyInviteReceivedStateChange](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/structs/pflobbyinvitereceivedstatechange) and can use the attached connection string to join the lobby.
 - These invites work cross-platform but only work in-game.
6. [Join a lobby by using platform invites](https://learn.microsoft.com/en-us/gaming/playfab/multiplayer/lobby/lobby-invites#joining-a-lobby-by-platform-invites).
 - Members of the lobby can directly share the lobby's connection string with other players over platform-specific invite mechanisms.
 - These invites don't work cross-platform but can be received without the recipient already playing the game.
 - After the invited player receives the connection string via the platform mechanism, they can use the attached connection string to join the lobby.
7. [Integrate with Matchmaking](https://learn.microsoft.com/en-us/gaming/playfab/multiplayer/lobby/lobby-and-matchmaking).
 - PlayFab Lobby and Matchmaking work seamlessly together to create a cohesive multiplayer matchmaking experience for your game.
 - Matchmaking gathers a set of players together who want to participate in a game session.
 - After matchmaking has identified a set of players, PlayFab Lobby provides them with a communication medium to coordinate joining a game session together.
8. Find a lobby: use [FindLobbies](https://learn.microsoft.com/en-us/gaming/playfab/multiplayer/lobby/playfabmultiplayerreference-cpp/pflobby/functions/pfmultiplayerfindlobbies) and the filter parameter to restrict your query to return only search results that match some set of criteria based on the lobby's custom search properties.

### Integrating PlayFab Lobby and Matchmaking with the Microsoft Game Development Kit Multiplayer Activity

_Multiplayer Activity_ (MPA) is a lightweight service to simplify Xbox services. To integrate MPA with PlayFab Lobby and Matchmaking or similar services, a game or game service must query the relevant information from the lobby state and then migrate this information into the MPA service. It's not intended for lobby or session state information.

For more information, see [Integration with PlayFab Lobby & Match](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpa/concepts/live-mpa-playfab-integration?view=gdk-2604).

In addition, to use Xbox services, the player must also be signed in with their Xbox account. For more information see [Implement player sign in in your game](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-user-sign-in?view=gdk-2604).

## See also

The [PlayFab documentation](https://learn.microsoft.com/en-us/gaming/playfab/) is the best source of up-to-date information. For details, see the following articles and samples.

- [Lobby SDK Quickstart](https://learn.microsoft.com/en-us/gaming/playfab/multiplayer/lobby/lobby-getting-started)
 
- [Create a lobby](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/create-a-lobby)
 
- [Joining lobbies and connection strings](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/join-lobbies)
 
- [Find lobbies](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/find-lobbies)
 
- [Lobby properties](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/lobby-properties)
 
- [Use Lobby and Matchmaking Together](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/lobby-and-matchmaking)
 
- [NetRumble Demo Game](https://github.com/PlayFab/PlayFabNetRumble)
 
 This is a simple multiplayer game that shows how to use the Microsoft Azure PlayFab Party and Multiplayer C++ SDKs and APIs in games.
 
- [SimpleMPA](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/SimpleMPA)
 
 This sample shows how to use the MPA for activities and invites.
 

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