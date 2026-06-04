# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-optimizing-your-game?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-optimizing-your-game?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Optimizing your game for Xbox Game Streaming

Feedback

Summarize this article for me

Use this topic to optimize your title and avoid common pitfalls when game streaming. All games on the Xbox platform are able to be streamed whether from a local console with Xbox Remote Play or via the cloud with Xbox Game Streaming. While games are able to be streamed with no customizations, certain behaviors and small changes will improve the experience for players and help increase the engagement and play time with your title. The guidance below is a collection of best practices from user research, technical details on video streaming, and insights gained from studios partnering closely on streaming which have all shown to increase playability and enjoyment while using game streaming.

## Background & Game Streaming Internals

At its core, Xbox Game Streaming is composed of thousands of Xbox devices in a server configuration (Xbox Servers) in a global network of Azure Data Centers. At a high-level, setting up an Xbox Game Streaming session works as follows:

1. User selects a game they wish to play.
2. Xbox Game Streaming service assigns the user an Xbox server from a pool of available servers.
3. The service signs the user into the server, game save and PLS (Which does not roam between home consoles), launches the game, and starts the game streaming session.
4. After the user is finished playing, the game is quit, the saved game is data synchronized, PLS is uploaded, and the user is signed out.

## General

Certain in-game characteristics will negatively impact user experiences and may end a user session on Xbox Game Streaming. Ensure your game takes appropriate steps to mitigate these risks.

- **Know when your game is streaming.**
 
 First and foremost, it is simple to test your game in an a streaming environment. See [Setting up your Xbox Development Kit for streaming](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-setup-xbox-developer-kit?view=gdk-2604) for information on how to setup a Xbox Development Kit and contact your Microsoft Account Representative to gain access to a private cloud environment for your title.
 
 The most basic optimization is checking when the game is running in a streaming environment via a [Cloud Aware API call](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-am-i-streaming?view=gdk-2604). This provides an easy way to know when to alter behaviors for streaming.
 

Note

Many features and recommendations in this document may benefit players and increase accessibility regardless of game streaming.

- **Allow new users to launch and jump into the game as quickly as possible.**
 
 Streaming sessions are more varied in length and don't always allow for long play sessions. You can use automatic save points that can only be resumed and moved forward when the user is streaming.
 
- **Ensure that users aren't disconnected for being "idle" during long cutscenes.**
 
 Xbox Game Streaming ends user sessions when it detects users being idle. Developers should use the [XDisplayAcquireTimeoutDeferral](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xdisplay/functions/xdisplayacquiretimeoutdeferral?view=gdk-2604) API to avoid the session going to an idle state and disconnecting the user.
 

## Video

- **Adapt your heads up display (HUD) and UI layouts for the screen size.**
 
 Players are able to stream to a wide variety of devices with different form factors, viewing distances, and resolutions. While in game text and UI elements may be readable on a large screen TV, the elements may become difficult to read on smaller devices. The [XGameStreamingGetStreamPhysicalDimensions](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetstreamphysicaldimensions?view=gdk-2604) API can help ensure scalable UI elements are large enough for the specific device being streamed to.
 
 [Custom Resolution Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-custom-resolution-overview?view=gdk-2604) allows you to take this even further and utilize the full screen of a user's device, many of which do not match the traditional 16:9 resolution of a TV, providing a more immersive and natural experience. This also improves usability for games using native touch.
 
- **Avoid red text where possible**
 
 Due to video compression formats and the sensitivity of human eyes to the color red, this color is often perceived to be most impacted. Avoiding this color, particular with the harsh borders and fine lines in text, will lessen perceived compression artifacts.
 
- **Allow for configurable gamma and other video settings**
 
 Players are able to stream to a wide variety of devices with different form factors and screen characteristics. [XGameStreamingGetClients](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetclients?view=gdk-2604) can be used to obtain a unique identifier for each device being streamed to; use this identifier to save and restore video settings per device to account for differences in brightness across devices.
 
- **Reduce Video Latency**
 
 Ensuring your game is compatible with DirectCapture will significantly reduce the video latency for players, creating a more responsive and enjoyable experience. See [DirectCapture Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-directcapture-overview?view=gdk-2604) for more details.
 

## Input

- **Allow users to interact with the game in a way that is natural for their device.**
 
 Players are able to stream to a wide variety of devices with different form factors and input types like mouse & keyboard, touch screens, etc. Where possible support these other modalities. [Content Test Application (CTA) Stream Configuration Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-content-test-application-stream-config?view=gdk-2604) has more information on how test streaming with input types besides a controller.
 
 For more information about touch controls & native touch, see [Getting started with touch](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-getting-started-with-touch?view=gdk-2604).
 
- **Respond to the most recent input type**
 
 Players are able to resume games and continue playing while streaming across a variety of devices and may not always have a physical controller. In these cases, players expect to be able to seamlessly transition between contoller, touch, and mouse & keyboard input. Games can use a 'last one wins' policy to switch UX and prompts to the preferred input type of players. Where possible do not lock players into an input type or require use of a controller to switch modes to a different input type. See [Overview of GameInput](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/input/overviews/input-overview?view=gdk-2604) for more information on handling different input types.
 
- **Account for input latency**
 
 Latency is an unavoidable reality in streaming environments. While the platform attempts to minimize latency as much as possible, games can further understand and account for latency when interpreting inputs. See [Game streaming latency measurement](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-latency-measurement?view=gdk-2604) and [Game streaming latency compensation overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-latency-compensation-overview?view=gdk-2604) for more information on techniques available to reduce the precieved latency by players.
 

## Localization

- **Use Intelligent Delivery for content localization instead of multiple packages**
 
 Xbox Game Streaming will detect the physical region (aka country/region) where the user is connecting from. Additionally, Xbox Game Streaming will detect what locale the user has set on their local device. These detected values for region and locale are passed to the Xbox server to configure it to match. Xbox Game Streaming also ensures that the user will be served the game package that has been configured in Partner Center for the region.
 
 Given this, we recommend that developers submit a single package for their game containing all localized content utilizing [Intelligent Delivery language specifiers](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/packaging/intelligentdelivery-language?view=gdk-2604), rather than multiple packages with different sets of localized content. This ensures users will experience the game in their preferred language, regardless of what country/region they are playing from at the time.
 

## Storage

- **Avoid requiring a temporary drive to persist data between gameplay sessions**
 
 Xbox Game Streaming clears all data in the temporary drive between any sessions. Subsequent game sessions may occur on a different Xbox Server in a different data center. Games should not store any data needed between sessions on the temporary drive.
 
- **Avoid large uses of Persistent Local Storage (PLS)**
 
 Xbox Game Streaming roams [Persistent Local Storage](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/console/storage/local-storage?view=gdk-2604) between sessions; utilizing more than 4 GB of PLS increases time to launch your game on Xbox Game Streaming. For every additional 4 GB usage in PLS, expect a 20 second increase in load times.
 

## Networking

- **Expect different network latency and characteristics**
 
 Xbox Game Streaming runs Xbox consoles from Azure data centers. This means one user can play from multiple IP ranges and may have lower ping times than home console gamers.
 
- **Avoid port 9002**
 
 Xbox Game Streaming uses port 9002 for networking, so games developers should not use port 9002 either for TCP or UDP communications. See [Configuring development network access](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/dev-kits/settings/configure-dev-network?view=gdk-2604) for additional information on specific ports and networking configuration for your game.
 

Note

Port 9002 is now blocked on recent GDKs.

## Unsupported In-Game Scenarios

The following in-game scenarios are not supported during cloud streaming due to Xbox Game Streaming's design of limiting the user experience to just gameplay. Some of these scenarios may work, however, when a user streams their home console.

- **Avoid trying to launch other apps or games**
 
 Xbox Game Streaming does not support separate game/app launches aside from launching the Edge browser.
 
- **Avoid relying on web browsers to be on the same physical machine as the game being played**
 
 Protocol activations on Xbox Game Streaming to a web browser or system hosted web blend will cause that activation to launch on the local device the user is playing on. Developers should ensure that those experiences aren't dependent on the browser running on the same device as the game. Example: The game launching to a website that has a "back" button that attempts to protocol activate the game.
 
- **Avoid requiring the user to manually restart the game at any point**
 
 This includes scenarios where a game updates itself and requires the user to manually restart the game. Xbox Game Streaming ends user sessions once the game has closed, hence restarting a game ends the stream.
 
- **Avoid unduly punishing users who idle for too long**
 
 Xbox Game Streaming keeps a user session alive for 5-10 minutes after they have unexpectedly disconnected from a session. Therefore, if games punish idle users, they will unnecessarily hurt Xbox Game Streaming users. Games can use the [XGameStreamingGetClients](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetclients?view=gdk-2604) API to specifically detect a GameStreaming client disconnection.
 

## Game Services

Xbox Game Streaming makes games available to a wider audience through Xbox Servers in data centers, and this has implications for game services that utilize device characteristics such as ping time or device IDs to alter game behavior.

- **Avoid utilizing the Xbox services Security Token (XSTS) for banning/fraud detection**
 
 Xbox Game Streaming users get a new Xbox server each session, so it's entirely expected to see many separate user sessions coming from the same device. Additionally, Game services should not ban these devices in this case. To know that these sessions originate from an Xbox Server, developers can use the XGameStreamingGetServerLocationName GDK API in their game. You can also detect this from the XSTS token; see [Referencing Xbox Game Streaming Servers in Xbox services Security Token (XSTS) Claims](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-referencing-xcloud-servers-in-xsts-claims?view=gdk-2604) for more information on handling device identity in your gaming services.
 
- **Avoid banning users from playing if too many people play on the same Xbox server**
 
 Individual Xbox Servers will be used by multiple gamers at different times; if your game bans such instances this will hurt the experience for Xbox Game Streaming gamers. (E.g., if the game has issues when too many game sessions originate from the same IP address or device id.)
 
- **Avoid game services flagging numerous sessions coming from the same IP address as suspicious**
 
 Several Xbox Servers in a data center may share the same public IP address for outgoing and incoming communications. Ensure your game services can handle 100+ distinct Xbox consoles with the same IP address.
 
- **Avoid using logic that is dependent on the IP address of where the game is running to make policy decisions concerning the user**
 
 Xbox Servers are not necessarily in the same country/region that users are based in. Usage of IP address for in-game play decision making will degrade user experience. ~The [XGameStreamingGetClientIPAddress](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetclientipaddress?view=gdk-2604) function can be used to determine the IP address of the streaming client and is more suitable for game play logic.~
 
 Important
 
 **`XGameStreamingGetClientIPAddress` is deprecated** as of the 2604 GDK release and will be removed in a future release. To determine the user's location, use XSTS token claims instead. See [Referencing Xbox Game Streaming servers in XSTS claims](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-referencing-xcloud-servers-in-xsts-claims?view=gdk-2604) for details.
 
- **Avoid game or game services breaking/penalizing users when latency checks reveal gamers have very low latency**
 
 Due to data center configuration, ping times for Xbox Game Streaming users will always be lower than users on local consoles. Although you may receive a ping time of 0ms, it is important to not use ping times to degrade/ban users. Do not remove/adjust any internal game/server logic based on ping times.
 

## See also

[Cloud Aware API calls](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-am-i-streaming?view=gdk-2604)

[XGameStreamingGetStreamPhysicalDimensions](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetstreamphysicaldimensions?view=gdk-2604)

[XGameStreamingGetClientIPAddress](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetclientipaddress?view=gdk-2604)

[XGameStreamingGetClients](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xgamestreaming/functions/xgamestreaminggetclients?view=gdk-2604)

[Getting started with touch](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-getting-started-with-touch?view=gdk-2604)

[DirectCapture Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-directcapture-overview?view=gdk-2604)

[Custom Resolution Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-custom-resolution-overview?view=gdk-2604)

[Referencing Xbox Game Streaming Servers in Xbox services Security Token (XSTS) Claims](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-streaming/game-streaming-referencing-xcloud-servers-in-xsts-claims?view=gdk-2604)

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