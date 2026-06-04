# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/multiplayer-intro?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/multiplayer-intro?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Multiplayer overview

Feedback

Summarize this article for me

Multiplayer games allow users to play together and have a shared experience in the world that you build.

When building multiplayer games, you would need a set of technologies that work seamlessly together to deliver a great experience.

At Microsoft, we have a suite of services that can be used together as an entire solution or used in conjunction with your studio's existing technology to build cross-platform multiplayer experiences. This means that you can continue to use whatever you have in combination with our services.

Our services are scalable and are designed to help you build a wide range of scenarios. Your multiplayer experience may be competitive in nature such as one versus one, team-based, or "battle royale" style. Or it may be cooperative in nature where you allow users to help one another out. It is suited to meet a range of needs—from an environment with set boundaries to a large open world in Massively Multiplayer Online (MMO) games.

This topic provides an overview of our technologies to support features such as dedicated server hosting, peer-to-peer, matchmaking, networking, invites and joins, game session management, and game chat.

## Features

Our technologies and services are grouped according to multiplayer features. Some features have multiple technologies or services to meet different needs.

For a high-level design using these services with other popular multiplayer features like friends, commerce, liveops, and game analytics, see [Xbox and PC multiplayer design guidance](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/multiplayer-design-guidance-xbox-pc-gdk?view=gdk-2604) and [Cross-platform multiplayer design guidanceAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/multiplayer-design-guidance-cross-platform?view=gdk-2604).

Expand table

| Area | Description | Technology/service | Introduction | SDK |
| --- | --- | --- | --- | --- |
| Networking | Game to game data communication | [PlayFab Party](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/) | Party is a secure cross-platform networking communication solution. It is provided to you at no cost when used in Xbox services&ndashenabled Xbox Console and PC Game Pass/Microsoft Store games. 
 
For PC, you are also free to use your own networking stack or utilize middleware solutions without any restrictions. Note that there is a fee for usage on other platforms. | [PlayFab Party SDK](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/party-sdks) |
| Chat | In-game voice and text chat among players | [PlayFab Party](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/) | Party is a cross-platform networking communication solution that includes both voice and text chat with accessibility options like text-to-speech, speech-to-text, and real-time translation. It is provided to you at no cost when used in Xbox services&ndashenabled Xbox Console and PC Game Pass/Microsoft Store games. Similarly, there is a fee for usage on other platforms. 
 
Party also provides an Xbox services Plugin to help you achieve Xbox requirements (XR) compliance and standard online safety communication. For PC, you are free to use your own voice chat technology or utilize middleware solutions. However, you must comply with the Xbox services user's online safety settings regardless of underlying voice technology for both PC and Xbox consoles. | [PlayFab Party SDK](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/networking/party-sdks) |
| | | [Game Chat 2](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/chat/game-chat2/game-chat-2-intro?view=gdk-2604) | Game Chat 2 enables cross network communication between Xbox Console and Windows 10 titles. When using this, you are required to provide your own network mesh. 
 
However, platform APIs provided by Game Chat 2 automatically enable your titles adhere to any communication, privacy, or security related Xbox requirements (XRs). This is because the APIs are tightly coupled to Xbox services identity. Game Chat 2 also provides built-in accessible chat features such as Text-To-Speech (TTS) and Speech-To-Text (STT). | [GDK](https://aka.ms/gdkdl) (Game Chat 2) |
| Invites/Join | Out-of-game invite and join behavior | [Xbox Multiplayer Manager (MPM)](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpm/live-multiplayer-manager-overview?view=gdk-2604) | Xbox Multiplayer Manager (MPM) is a client side API. This means that it can be used only if you have a client-host architecture. It enables you to add capabilities like sending game invites, accepting invites to join a game, and display recent players to your game. 
 
Players are able to send out-of-game invite toasts or join their friends via Game Bar or Xbox App. You can use both system provided UI known as Title Callable User Interface (TCUI) or your own custom UI to display multiplayer options, status, and progress. 
 
MPM is designed to enable common multiplayer scenarios that follows best practices quickly. So it handles many Xbox Requirements (XRs) that your game must implement in order to pass certification. 
 
MPM works best for games with up to 8 players. Games with higher player counts need to use Xbox Multiplayer Session Directory (MPSD) API directly. | [GDK](https://aka.ms/gdkdl) |
| | | [Xbox Multiplayer Session Directory (MPSD)](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpsd/live-mpsd-overview?view=gdk-2604) | Xbox Multiplayer Session Directory (MPSD) is selected and used by many titles because of its highly customizable functionalities, scalability and importantly, reliability. MPSD APIs have MPM capabilities and more. One difference is that MPSD can be used for server-client architecture and provides advanced features with more customization. 
 
MPSD offers managed initialization for servers. This means that it can work with SmartMatch to help determine Quality of Service (QoS) during server requests and manage allocation/deallocation. It also has more session management features like game session metadata storage and synchronization of updates. Plus, you can use service-to-service (S2S) call patterns to efficiently manage multiple users through single service calls. 
 
For games with eight or more players, make sure that you use MPSD instead of MPM. For games with hundred or more players like Massive Multiplayer Online (MMO) games, use MPSD XSAPI S2S. | [GDK](https://aka.ms/gdkdl) |
| | | [Xbox Multiplayer Activity (MPA)](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpa/live-mpa-overview?view=gdk-2604) | Available from 20.06+, GDK now includes Xbox Multiplayer Activity (MPA). This is our latest service with simplified APIs designed for developers who have their own matchmaking and session services. 
 
It is used to implement out-of-game invite and join behavior, to comply with Xbox requirements (XRs), with your own session management solution. You can call MPA directly from your own services via MPA's S2S APIs. You do not need to integrate with MPM/MPSD. | [GDK](https://aka.ms/gdkdl) |
| | | [PlayFab Lobby](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/) | The PlayFab Lobby component of PlayFab Multiplayer supports members inviting others players to their lobby directly via the lobby service. These invites work cross-platform when used in-game. 
 
Players may also share the lobby's connection string over out-of-game platform-specific invite mechanisms. | [PlayFab Multiplayer Client SDK](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/lobby-matchmaking-sdks/lobby-matchmaking-sdks/) |
| Matchmaking | Match individuals and teams for gameplay based on various rules | [Xbox SmartMatch](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/matchmaking/live-matchmaking-overview?view=gdk-2604) | Xbox SmartMatch technology supports custom matchmaking based on a set of specifications and rules. It is able to provide simple matchmaking or more complex ranked multiplayer options in your game. 
 
While SmartMatch supports cross-device play between your game on the Xbox Console and your Xbox services game on PC, it does not support matchmaking across games using other identities such as Steam or PlayStation. 
 
You are also free to utilize your own matchmaking service but would need to integrate with MPA to support Xbox invite and join behaviors, as mentioned above, to meet Xbox compliance requirements. Consider using PlayFab Matchmaking for cross-platform and cross-identity matchmaking. | [GDK](https://aka.ms/gdkdl) |
| | | [PlayFab Matchmaking](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/matchmaking/) | PlayFab Matchmaking offers an identity and platform agnostic matchmaking service at no cost when users are signed in using Xbox services identity. It provides you the ability to create matchmaking logic through match attributes and queue configurations. 
 
For ease of use, the service also scales automatically to handle matchmaking workloads. It also manages common error handling and backfills. It can also be used together with PlayFab Servers to request, allocate, and deallocate multiplayer game servers automatically for you. 
 
To help you predict trends and optimize loads, it also offers matchmaking statistics and queue analytics. PlayFab Matchmaking is available for use but is in preview as we are still developing capabilities such as real-time notifications and lobby. | [PlayFab Multiplayer Client SDK](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/lobby-matchmaking-sdks/lobby-matchmaking-sdks/) |
| Session browse | Maintain list of players in a game session and/or browse players looking for online play | [Xbox Multiplayer Session Directory (MPSD)](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpsd/live-mpsd-overview?view=gdk-2604) | Multiplayer Session Directory (MPSD) provides you the capability to maintain a list of multiplayer game sessions and offer users a different method to join multiplayer games—enabling search for available games based on input parameters. 
 
MPSD can only be used for Xbox services&ndashenabled titles developed for Xbox consoles and PC. If you want to create session browse with a list that includes users on other platforms/identity, you would need a custom session service or utilize other middleware solutions. | [GDK](https://aka.ms/gdkdl) |
| | | [PlayFab Lobby](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/) | The PlayFab Multiplayer client SDK includes a cross-platform scalable session service with support for real-time push notifications. It is a highly customizable grouping mechanism for players to find and play games together. 
 
PlayFab Lobby and Matchmaking work seamlessly together to create cohesive multiplayer experiences for your title. | [PlayFab Multiplayer Client SDK](https://learn.microsoft.com/en-us/gaming/playfab/features/multiplayer/lobby/lobby-matchmaking-sdks/lobby-matchmaking-sdks/) |

"PlayStation" is a registered trademark or trademark of Sony Interactive Entertainment Inc.

## Next step

Learn how you can use our technology as a complete suite or in combination with your custom solution/other middleware solutions.

- For Xbox and PC title development, see [Xbox and PC multiplayer design guidance](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/multiplayer-design-guidance-xbox-pc-gdk?view=gdk-2604).
- For cross-platform title development, see [Cross-platform multiplayer design guidanceAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/multiplayer-design-guidance-cross-platform?view=gdk-2604).

## See also

- [Multiplayer concepts overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/concepts/live-multiplayer-concepts?view=gdk-2604)
- [Common multiplayer scenarios](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/overviews/live-common-multiplayer-scenarios?view=gdk-2604)

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