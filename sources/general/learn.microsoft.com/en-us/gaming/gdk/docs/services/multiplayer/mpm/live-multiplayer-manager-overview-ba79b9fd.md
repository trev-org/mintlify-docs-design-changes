# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpm/live-multiplayer-manager-overview?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpm/live-multiplayer-manager-overview?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Multiplayer Manager overview

Feedback

Summarize this article for me

This topic describes the high-level API for adding multiplayer functionality by managing sessions, matchmaking, and game invites. The API provides a state-based and an event-based programming model.

Xbox services provides extensive support for adding multiplayer functionality to your titles so that your game can connect Xbox members across the world. This includes rich matchmaking scenarios, the ability for a player to join a friend's game in progress, and more.

Implementing Xbox services multiplayer by using the Multiplayer APIs directly can be a complex task. It requires a large degree of design and testing to verify that you're following best practices and meeting certification requirements.

Multiplayer Manager makes it easy to add multiplayer functionality to your game by managing sessions and matchmaking, and by providing a state-based and an event-based programming model.

Multiplayer Manager is a set of APIs. They're designed to make it easy to implement multiplayer scenarios for Xbox services games with peer-hosted multiplayer designs.

Multiplayer Manager provides an API that's centered around common multiplayer scenarios such as playing multiplayer games with friends, handling game invites, handling join-in-progress, matchmaking, and more.

Multiplayer Manager supports multiple local users. It also makes it easier for your title to integrate with Multiplayer Session Directory (MPSD) if you're using a third-party matchmaking service. Many of these scenarios can be accomplished with just a few API calls.

## Key features

The main features of the Multiplayer Manager API are as follows.

- Easy session management and Xbox services matchmaking
- State-based and event-based programming model
- Ensures Xbox services best practices along with being Multiplayer XR-compliant
- Implements 2015 Multiplayer flowcharts

Important information about Multiplayer Manager API design is as follows.

- Large MPSD sessions (more than 100 members) aren't supported.
- Targets only peer-hosted multiplayer designs. Titles with dedicated servers should instead use the [Multiplayer Activity Service](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpa/live-mpa-overview?view=gdk-2604) or [Multiplayer Service APIs](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpsd/live-mpsd-overview?view=gdk-2604) and [service-to-service calls (NDA topic)](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/s2s-auth-calls/s2s-calls/live-title-service-calls-xbox-live?view=gdk-2604).

Important

To pass certification, your game must still implement the required events for online multiplayer.

## Overview

Multiplayer Manager is centered around the following key concepts.

- **Lobby session:** A persistent session that's used for managing users who are local to the device and the invited friends who want to play together.
 
 The group can play the game; for example, multiple rounds, maps, and levels. The lobby session tracks this core group of friends (including players local to the device). Typically, this group is formed while the host might be navigating through the menus and chatting with the group members to decide what game mode they want to play.
 
- **Game session:** Tracks players who are playing a specific instance of the game.
 
 For example, a race, map, or level. You can create a new game session via [XblMultiplayerManagerJoinGameFromLobby](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerjoingamefromlobby?view=gdk-2604) that includes the members in the lobby session.
 
 When a member accepts an invite, they will be added to the lobby and the game session (if there's room).
 
 Additional players can be added to the game session if matchmaking is enabled, but those additional players aren't added to the lobby session. This means that when the game ends, the players in the lobby session are still together, while the extra players from matchmaking aren't.
 
- [XblMultiplayerManagerMember](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/structs/xblmultiplayermanagermember?view=gdk-2604): Represents an individual user signed in on a local or remote device.
 
- [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604): Ensures proper game state updates are maintained between the title and the Xbox services Multiplayer service.
 
 To ensure best performance, [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604) must be called frequently, such as once per frame.
 
 [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604) provides you with an array of [XblMultiplayerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/structs/xblmultiplayerevent?view=gdk-2604) callback events for the game to handle.
 

## State machine

The [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604) call is necessary to ensure that your state is kept fresh. For Multiplayer Manager to do its work, you must call the [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604) method regularly. The most reliable way to do this is to call it at least once per frame.

[XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604) returns quickly when it has no work to do, so there's no reason for concern about calling it too often.

### Threading

All objects returned by the Multiplayer Manager API shouldn't be considered thread-safe. However, it gives you control to do thread synchronization if you are calling it from multiple threads.

The library has internal multithreading protection. However, you still need to implement your own locking if you require one thread to access any values; for example, walking the members list while another thread might be invoking [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604).

### State-based model updating

Multiplayer Manager maintains a state-based model that updates the sessions in the background as players join, leave, or when sessions are updated. To help avoid thread synchronization problems between the UI thread and your game thread, Multiplayer Manager doesn't update the app-visible state of the sessions until you call the [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604) method.

Traditionally, you would receive notifications about events, such as session changes on a background thread, and then have to synchronize it with a UI thread to display these changes. With Multiplayer Manager, this behind-the-scenes work is done for you.

You can call [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604) on your main thread at the time of your choosing to get the latest snapshot of the state that Multiplayer Manager is buffering for you behind the scenes.

## Events and notifications

Multiplayer Manager defines a set of significant events (see [XblMultiplayerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/structs/xblmultiplayerevent?view=gdk-2604)) and notifies the title via the [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604) method when they happen. For example, events include remote players joining or leaving, member properties changing, or session state changing.

All Multiplayer Manager APIs are asynchronous. The [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604) method returns a list of events when these asynchronous operations are completed. Your title should handle these events appropriately for your situation. For more details, see the [XblMultiplayerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/structs/xblmultiplayerevent?view=gdk-2604) class documentation.

Each returned [XblMultiplayerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/structs/xblmultiplayerevent?view=gdk-2604) includes an `EventArgsHandle`, which you must use to get the appropriate `args` for the event type. For example, if the [XblMultiplayerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/enums/xblmultiplayereventtype?view=gdk-2604) is `MemberJoined`, you would could call [XblMultiplayerEventArgsMembersCount](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayereventargsmemberscount?view=gdk-2604) and [XblMultiplayerEventArgsMembers](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayereventargsmembers?view=gdk-2604).

The following example demonstrates using [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604) to handle events.

#### Flat C API

```
size_t eventCount{ 0 };
const XblMultiplayerEvent* events{ nullptr };
HRESULT hr = XblMultiplayerManagerDoWork(&events, &eventCount);
if (FAILED(hr))
{
    // Handle failure.
}

for (auto i = 0u; i < eventCount; ++i)
{
    switch (events[i].EventType)
    {
        case XblMultiplayerEventType::MemberJoined:
        {
            // Handle MemberJoined.
            size_t memberCount = 0;
            hr = XblMultiplayerEventArgsMembersCount(events[i].EventArgsHandle, &memberCount);
            assert(SUCCEEDED(hr));

            std::vector<XblMultiplayerManagerMember> members(memberCount);
            hr = XblMultiplayerEventArgsMembers(events[i].EventArgsHandle, memberCount, members.data());
            assert(SUCCEEDED(hr));
            ...

            break;
        }

        case XblMultiplayerEventType::SessionPropertyChanged:
        {
            // Handle SessionPropertyChanged.
            const char* changedProperty{ nullptr };
            hr = XblMultiplayerEventArgsPropertiesJson(events[i].EventArgsHandle, &changedProperty);
            assert(SUCCEEDED(hr));
            ...

            break;
        }
        ...
    }
}
```

For more information, see the following:

- [XblMultiplayerEvent](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/structs/xblmultiplayerevent?view=gdk-2604)
- [XblMultiplayerEventArgsMembers](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayereventargsmembers?view=gdk-2604)
- [XblMultiplayerEventArgsMembersCount](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayereventargsmemberscount?view=gdk-2604)
- [XblMultiplayerEventArgsPropertiesJson](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayereventargspropertiesjson?view=gdk-2604)
- [XblMultiplayerEventType](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/enums/xblmultiplayereventtype?view=gdk-2604)
- [XblMultiplayerManagerDoWork](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/functions/xblmultiplayermanagerdowork?view=gdk-2604)
- [XblMultiplayerManagerMember](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/structs/xblmultiplayermanagermember?view=gdk-2604)

## Scenarios

This section covers common scenarios and the APIs that you would call in each scenario. Some information about what Multiplayer Manager is doing behind the scenes is also provided.

- [Enable playing a multiplayer game with friends by using Multiplayer Manager](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpm/how-to/live-play-multiplayer-with-friends?view=gdk-2604)
- [Finding a multiplayer game by using SmartMatch using Multiplayer Manager](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpm/how-to/live-play-multiplayer-with-matchmaking?view=gdk-2604)
- [Sending game invites by using Multiplayer Manager](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpm/how-to/live-send-game-invites?view=gdk-2604)
- [Handling protocol activation to start a game by using Multiplayer Manager](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpm/how-to/live-handle-protocol-activation?view=gdk-2604)

For a high-level overview of the API, see [Multiplayer Manager API overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/multiplayer/mpm/concepts/live-multiplayer-manager-api-overview?view=gdk-2604).

## What Multiplayer Manager doesn't do

Multiplayer Manager makes it much easier to implement multiplayer scenarios and abstracts some of the data from you. However, Multiplayer Manager doesn't handle the following:

- Persistent online server games, such as massively multiplayer online (MMO) games or other game types that require large sessions (more than 100 players in a session)
- Server-to-server session management
- Throttling of MPSD calls to adhere to [Fine-Grained Rate Limiting](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/develop/best-practices/live-fine-grained-rate-limiting?view=gdk-2604)
- Mixing of Multiplayer service APIs and Multiplayer Manager APIs

Note

Multiplayer Manager isn't restricted to any specific network technology and should work with any network communication layer.

## Resources

For a working example of the API, see the [NetRumble Sample](https://aka.ms/gdkdl).

For API documentation, see [multiplayer\_manager\_c](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/live/xsapi-c/multiplayer_manager_c/multiplayer_manager_c_members?view=gdk-2604). You can also view the `multiplayer_manager_c.h` header file.

If you have questions, feedback, or have issues using Multiplayer Manager, contact your developer account manager (DAM) or post a support thread on the forums at [https://forums.xboxlive.com](https://forums.xboxlive.com).

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