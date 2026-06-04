---
title: "Moving from MPSD to PlayFab Multiplayer and MPA"
description: "A high level guide for developers looking to move from MPSD to PlayFab Multiplayer and MPA."
kindex: Moving from MPSD to PlayFab Multiplayer and MPA
author: amartz
ms.topic: article
ms.localizationpriority: medium
edited: 04/13/2024
permissioned-type: public
ms.date: 04/13/2024
---

# Moving from MPSD to PlayFab Multiplayer and MPA

## Introduction

This document is intended for game developers who are currently using MPSD and want to move to using PlayFab Multiplayer and MPA for their multiplayer games. The document will cover the most common multiplayer scenarios and provide code snippets that show how to use PlayFab Multiplayer with MPA.

### Multiplayer Session Directory (MPSD) Overview

* Fully featured session service for sharing information needed to connect a group of users
* Integrated with Xbox UI for invites and join functionality
* Fully integrates with SmartMatch matchmaking
* Sessions are derived from pre-defined session templates
* Integrated functionality for connectivity detection and session flow
* Available as service-to-service

### Multiplayer Activity Service (MPA) Overview

* Lightweight service to simplify Xbox Live integration for player activities, invites, and recent players
* Coordinates with the shell and console operating system in sending/accepting invites and being joined
* No session management or matchmaking
* Available as service-to-service

### PlayFab Multiplayer Overview

* Full multiplayer lobby service that includes lobby search and browse functionality
* Cross-platform, real-time service notifications with transparent API integration
* Full matchmaking service that supports real-time notifications
  
## Initialization

The following table shows a list of comparable functions used by MPSD and PlayFab Multiplayer for initialization.

| MPSD                                          | PlayFab Multiplayer           |
|-----------------------------------------------|-------------------------------|
| `XblMultiplayerAddSubscriptionLostHandler`    | `PFMultiplayerInitialize`     |
| `XblMultiplayerAddConnectionIdChangedHandler` | `PFMultiplayerSetEntityToken` |
| `XblMultiplayerSetSubscriptionsEnabled`       |                               |
| `XblMultiplayerSessionCurrentUserSetStatus`   |                               |

### Initialization - Example Code

Initialize the library with your PlayFab titleID and set the entity token that was received during PlayFab service login.

```cpp
PFMultiplayerHandle pfmHandle{};
HRESULT hr = PFMultiplayerInitialize(pfTitleId, &pfmHandle);
if (FAILED(hr))
{
    //...
}

hr = PFMultiplayerSetEntityToken(pfmHandle, &entityKey, entityToken);
if (FAILED(hr))
{
    //...
}
```

## Lobby State Changes

The following table shows a list of comparable functions used by MPSD and PlayFab Multiplayer for handling events related to sessions/lobbies.

| MPSD                                           | PlayFab Multiplayer                              |
|------------------------------------------------|--------------------------------------------------|
| `XblMultiplayerSessionSubscribedChangeTypes`   | `PFMultiplayerStartProcessingLobbyStateChanges`  |
| `XblMultiplayerSessionChangedHandler`          | `PFMultiplayerFinishProcessingLobbyStateChanges` |
| `XblMultiplayerSessionSubscriptionLostHandler` |                                                  |

### Lobby State Changes - Example Code

Notify the library that you are starting to process state changes. Handle each queued state changes then notify that you are done processing state changes.

```cpp
HRESULT hr = PFMultiplayerStartProcessingLobbyStateChanges(MultiplayerHandle, &StateChangeCount, &StateChanges);
if (FAILED(hr))
{
    //...
}

for (uint32_t i = 0; i < StateChangeCount; ++i)
{
    const PFLobbyStateChange& Change = *StateChanges[i];

    switch (Change.stateChangeType)
    {
    case PFLobbyStateChangeType::CreateAndJoinLobbyCompleted:        /*...*/ break;
    case PFLobbyStateChangeType::JoinLobbyCompleted:                 /*...*/ break;
    case PFLobbyStateChangeType::MemberAdded:                        /*...*/ break;
    case PFLobbyStateChangeType::AddMemberCompleted:                 /*...*/ break;
    case PFLobbyStateChangeType::MemberRemoved:                      /*...*/ break;
    case PFLobbyStateChangeType::ForceRemoveMemberCompleted:         /*...*/ break;
    case PFLobbyStateChangeType::LeaveLobbyCompleted:                /*...*/ break;
    case PFLobbyStateChangeType::Updated:                            /*...*/ break;
    case PFLobbyStateChangeType::PostUpdateCompleted:                /*...*/ break;
    case PFLobbyStateChangeType::Disconnecting:                      /*...*/ break;
    case PFLobbyStateChangeType::Disconnected:                       /*...*/ break;
    case PFLobbyStateChangeType::JoinArrangedLobbyCompleted:         /*...*/ break;
    case PFLobbyStateChangeType::FindLobbiesCompleted:               /*...*/ break;
    case PFLobbyStateChangeType::InviteReceived:                     /*...*/ break;
    case PFLobbyStateChangeType::InviteListenerStatusChanged:        /*...*/ break;
    case PFLobbyStateChangeType::SendInviteCompleted:                /*...*/ break;
    case PFLobbyStateChangeType::CreateAndClaimServerLobbyCompleted: /*...*/ break;
    case PFLobbyStateChangeType::ClaimServerLobbyCompleted:          /*...*/ break;
    case PFLobbyStateChangeType::ServerPostUpdateCompleted:          /*...*/ break;
    case PFLobbyStateChangeType::ServerDeleteLobbyCompleted:         /*...*/ break;
    }
}

hr = PFMultiplayerFinishProcessingLobbyStateChanges(MultiplayerHandle, StateChangeCount, StateChanges);
if (FAILED(hr))
{
    //...
}
```

## Create Lobby

The following table shows a list of comparable functions used by MPSD and PlayFab Multiplayer for creating and joining a session/lobby.

| MPSD                                                | PlayFab Multiplayer               |
|-----------------------------------------------------|-----------------------------------|
| `XblMultiplayerSessionReferenceCreate`              | `PFMultiplayerCreateAndJoinLobby` |
| `XblMultiplayerSessionCreateHandle`                 |                                   |
| `XblMultiplayerSessionJoin`                         |                                   |
| `XblMultiplayerAddSessionChangedHandler`            |                                   |
| `XblMultiplayerSessionSetSessionChangeSubscription` |                                   |
| `XblMultiplayerSessionSetHostDeviceToken`           |                                   |
| `XblMultiplayerWriteSessionAsync`                   |                                   |

> [!NOTE]
> No additional setup or configuration in PlayFab Game Manager is required to create a lobby. All configuration can be done in code.

### Create Lobby - Example Code

Configure the lobby and set any initial lobby properties or member properties then create and join the lobby.

```cpp
PFLobbyCreateConfiguration createConfig{};
createConfig.maxMemberCount = 4;
createConfig.ownerMigrationPolicy = PFLobbyOwnerMigrationPolicy::Automatic;
createConfig.accessPolicy = PFLobbyAccessPolicy::Public;

const char* memberPropertyKeys[] { "favoriteColor" };
const char* memberPropertyValues[] { "blue" };

PFLobbyJoinConfiguration joinConfig{};
joinConfig.memberPropertyCount = 1;
joinConfig.memberPropertyKeys = memberPropertyKeys;
joinConfig.memberPropertyValues = memberPropertyValues;

PFLobbyHandle myLobby{};

HRESULT hr = PFMultiplayerCreateAndJoinLobby(
    pfmHandle,           // PFMultiplayerHandle
    &localUserEntityKey, // local user 
    &createConfig,       // create config
    &joinConfig,         // join config
    nullptr,             // async context (optional)   
    &myLobby);           // lobby handle

if (FAILED(hr))
{
    //...
}
```

## Find Lobbies

The following table shows a list of comparable functions used by MPSD and PlayFab Multiplayer to search for sessions/lobbies.

| MPSD                                                       | PlayFab Multiplayer        |
|------------------------------------------------------------|----------------------------|
| `XblMultiplayerGetSearchHandlesAsync`                      | `PFMultiplayerFindLobbies` |
| `XblMultiplayerSearchHandleGetId`                          |                            |
| `XblMultiplayerSearchHandleGetCustomSessionPropertiesJson` |                            |
| `XblMultiplayerSearchHandleGetMemberCounts`                |                            |
| `XblMultiplayerSearchHandleGetSessionClosed`               |                            |

### Find Lobbies - Example Code

Set the search configuration then search for lobbies.

```cpp
PFLobbySearchConfiguration searchConfiguration{};
searchConfiguration.filterString = filterString.c_str(); // filtering
searchConfiguration.sortString = sortString.c_str();     // sorting
searchConfiguration.clientSearchResultCount = 50;        // limits the number of results
searchConfiguration.friendsFilter;                       // return only lobbies with friends in them

HRESULT hr = PFMultiplayerFindLobbies(
    pfmHandle,          // PFMultiplayerHandle
    &localUserEntityKey,  // local user
    &searchConfiguration, // search config
    nullptr);             // async context (optional)

if (FAILED(hr))
{
    //...
} 
```

Then, once the state change for the event is returned, process any of the search results.

```cpp
const auto& stateChange = static_cast<const PFLobbyFindLobbiesCompletedStateChange&>(change);
if (SUCCEEDED(stateChange.result))
{
    for (uint32_t i = 0; i < stateChange.searchResultCount; ++i)
    {
        const PFLobbySearchResult& searchResult = stateChange.searchResults[i];
        searchResult.lobbyId;            // lobby id
        searchResult.connectionString;   // connection string
        searchResult.ownerEntity;        // lobby host
        searchResult.maxMemberCount;     // lobby size
        searchResult.currentMemberCount; // players in lobby
        
        for (uint32_t j = 0; j < searchResult.searchPropertyCount; ++j) 
        {
            const char* searchPropertyKey = searchResult.searchPropertyKeys[j];
            const char* searchPropertyValue = searchResult.searchPropertyValues[j];
            /*...*/
        }
        
        for (uint32_t k = 0; k < searchResult.friendCount; ++k) 
        {
            PFEntityKey friendEntityKey = searchResult.friends[k];
            /*...*/
        }
    }
}
else
{
    //...
}
```

## Lobby Search Keys

Only a restricted set of keys are allowed to be used when defining custom search properties.

* For string properties, the following keys are supported: string_key1, string_key2, [...] string_key30
* For numeric properties, the following keys are supported: number_key1, number_key2, [...] number_key30

## Lobby Search Operators

Query strings for the __FindLobbies__ APIs are structured in an OData-like syntax. The maximum size for the filter string is 600 characters. 

These OData operators can be used to compose query strings. The operators are case sensitive. 

| Operators  | Meaning                  | Example                                               |
|------------|--------------------------|-------------------------------------------------------|
| eq         | equal to                 | string_key1 eq 'CaptureTheFlag'                       |
| lt         | less than                | number_key2 lt 10                                     |
| le         | less than or equal to    | number_key2 le 10                                     |
| gt         | greater than             | number_key3 gt 100                                    |
| ge         | greater than or equal to | number_key3 ge 100                                    |
| ne         | not equal to             | string_key1 ne 'CaptureTheFlag'                       |
| and        | and                      | string_key1 eq 'CaptureTheFlag' and number_key2 lt 10 |

> [!NOTE]
> When comparing string properties, be sure to wrap the compared value in single quotes. For example, "string_key1 eq __'SOME STRING VALUE'__". Numeric properties don't need to be wrapped.

There are also predefined operators available to use. They must be prefixed by "lobby/" when specifying.

| Operators            | Meaning                                                                              | Example                            |
|----------------------|--------------------------------------------------------------------------------------|------------------------------------|
| memberCount          | number of players in a lobby                                                         | lobby/memberCount eq 5             |
| maxMemberCount       | maximum number of players allowed in a lobby                                         | lobby/maxMemberCount gt 10         |
| memberCountRemaining | remaining number of players who can join the lobby                                   | lobby/memberCountRemaining gt 0    |
| membershipLock       | lock status of lobbies, must equal 'Unlocked' or 'Locked'                            | lobby/membershipLock eq 'Unlocked' |
| amOwner              | lobbies which you are the owner, required to equal 'true'                            | lobby/amOwner eq 'true'            |
| amMember             | lobbies which you are a member, required to equal 'true'                             | lobby/amMember eq 'true'           |
| amServer             | lobbies which the server has joined client-owned lobbies, required to equal 'true'   | lobby/amServer eq 'true'           |

## Sorting Search Results

OData style string that contains sorting for this query in either ascending ("asc") or descending ("desc") order. OrderBy clauses can be used for any of the search number keys or the predefined search keys that are numeric. To sort by closest to a number, a moniker distance can be used to sort by distance from the given number search key. You cannot use ascending or descending with the distance sort. This field only supports either one sort clause or one distance clause. If no sort is provided or if a tiebreak is needed for the given sort, the default sort would be descending based on creation time.

|Example                      | Meaning                                           |
|-----------------------------|---------------------------------------------------|
| number_key1 asc             | order by number search key ascending              |
| lobby/memberCount desc      | order by number search key descending             |
| distance(number_key1 = 5)   | sort on distance from the given number            |
|                             | order by creation time descending                 |

### Sorting and Filtering Search Results - Example Code

```cpp
PFLobbySearchConfiguration searchConfiguration{};​
​
PFLobbySearchFriendsFilter friendsFilter{};    ​
friendsFilter.includeXboxFriendsToken = MyGame::GetLocalUserXboxToken();​
searchConfiguration.friendsFilter = &friendsFilter;​

// Create filter string for ranked deathmatch with skill between 10-20​
std::string filterString;​
filterString +=  "string_key1 eq DeathMatch and ";​ 
filterString +=  "string_key2 eq Ranked and ";​
filterString +=  "number_key1 -ge 10 and ";​
filterString +=  "number_key1 -le 20";​
​
// Create sort string based on skill level​
std::string sortString;​
sortString += std::string("distance{number_key1=" + std::to_string(playerSkill.c_str()) + "}";​

searchConfiguration.filterString = filterString.c_str();​
searchConfiguration.sortString = sortString.c_str();​
searchConfiguration.clientSearchResultCount = 10;        // limits the number of results​
```

## Join Lobby

The following table shows a list of comparable functions used by MPSD and PlayFab Multiplayer for joining sessions/lobbies.

| MPSD                                                | PlayFab Multiplayer      |
|-----------------------------------------------------|--------------------------|
| `XblMultiplayerGetSessionByHandleAsync`             | `PFMultiplayerJoinLobby` |
| `XblMultiplayerSessionJoin`                         |                          |
| `XblMultiplayerAddSessionChangedHandler`            |                          |
| `XblMultiplayerSessionSetSessionChangeSubscription` |                          |
| `XblMultiplayerSessionCurrentUserSetStatus`         |                          |
| `XblMultiplayerWriteSessionByHandleAsync`           |                          |
| `XblMultiplayerSessionCloseHandle`                  |                          |

> [!NOTE]
> Joining a lobby requires a connection string. Typically, the host of the lobby will set this connection string on their activity or send it through an invite. To get the connection string you have to call `PFLobbyGetConnectionString`.

### Join Lobby - Example Code

Set the initial join configuration and then join the lobby.

```cpp
const char* memberPropertyKeys[] { "number", "name"};
const char* memberPropertyValues[] { "8675309", "Jenny"};

PFLobbyJoinConfiguration joinConfig{};
joinConfig.memberPropertyCount = 2;
joinConfig.memberPropertyKeys = memberPropertyKeys;
joinConfig.memberPropertyValues = memberPropertyValues;

PFLobbyHandle myLobby{};

HRESULT hr = PFMultiplayerJoinLobby(
    pfmHandle,             // PFMultiplayerHandle
    &localUserEntityKey,   // local user
    lobbyConnectionString, // connection string
    &joinConfig,           // join config
    nullptr,               // async context (optional)
    &myLobby);             // handle to the lobby

if (FAILED(hr))
{
    //...
} 
```

## Update Lobby

The following table shows a list of comparable functions used by MPSD and PlayFab Multiplayer for updating a session/lobby.

| MPSD                                      | PlayFab Multiplayer |
|-------------------------------------------|---------------------|
| `XblMultiplayerGetSessionByHandleAsync`   | `PFLobbyPostUpdate` |
| `XblMultiplayerWriteSessionByHandleAsync` |                     |
| `XblMultiplayerSessionCloseHandle`        |                     |

> [!NOTE]
> `PFLobbyPostUpdate` can be used to update both lobby properties as well as member properties. You can update one or both types of properties with a single call to the function.

### Update Lobby - Example Code (Lobby Properties)

```cpp
const char* lobbyPropertyKeys[] { "exampleKey_1", "exampleKey_2" };
const char* lobbyPropertyValues[] { "exampleValue_1234", "exampleValue_ABCD" };

PFLobbyDataUpdate lobbyUpdateData{};
lobbyUpdateData.lobbyPropertyCount = 2;
lobbyUpdateData.lobbyPropertyKeys = lobbyPropertyKeys;
lobbyUpdateData.lobbyPropertyValues = lobbyPropertyValues;

HRESULT hr = PFLobbyPostUpdate(
    myLobby,             // handle to the lobby
    &localUserEntityKey, // local user
    &lobbyUpdateData,    // update data for the lobby
    nullptr,             // update data for a member
    nullptr);            // async context (optional)

if (FAILED(hr))
{
    //...
} 
```

### Update Lobby - Example Code (Member Properties)

```cpp
const char* memberPropertyKeys[] { "favoriteColor" };
const char* memberPropertyValues[] { "yellow" };

PFLobbyMemberDataUpdate memberUpdateData{};
memberUpdateData.lobbyPropertyCount = 1;
memberUpdateData.lobbyPropertyKeys = memberPropertyKeys;
memberUpdateData.lobbyPropertyValues = memberPropertyKeys;

HRESULT hr = PFLobbyPostUpdate(
    myLobby,             // handle to the lobby
    &localUserEntityKey, // local user
    nullptr,             // update data for the lobby
    & memberUpdateData   // update data for a member
    nullptr);            // async context (optional)

if (FAILED(hr))
{
    //...
}
```

## Matchmaking

PlayFab Multiplayer's matchmaking APIs are relatively similar to MPSD's matchmaking APIs.

| MPSD                                       | PlayFab Multiplayer                            |
|--------------------------------------------|------------------------------------------------|
| Configuration through Smartmatch Hoppers   | Based on Matchmaking Queues                    |
| Hopper is bound to MPSD session template   | Matchmaking rules apply on Queue               |
| Matchmaking rules apply on Hopper          | Matchmaking starts through match ticket        |
| Matchmaking requires existing MPSD session | Matchmaking result is new PlayFab lobby        |
| Matchmaking result is new MPSD session     | Supports PlayFab Multiplayer server allocation |

> [!NOTE]
> Matchmaking Queues must be configured via PlayFab Game Manager.

## Matchmaking State Changes

The following table shows a list of comparable functions used by MPSD and PlayFab Multiplayer for handling events related to matchmaking.

| MPSD                                           | PlayFab Multiplayer                                    |
|------------------------------------------------|--------------------------------------------------------|
| `XblMultiplayerSessionSubscribedChangeTypes`   | `PFMultiplayerStartProcessingMatchmakingStateChanges`  |
| `XblMultiplayerSessionChangedHandler`          | `PFMultiplayerFinishProcessingMatchmakingStateChanges` |
| `XblMultiplayerSessionSubscriptionLostHandler` |                                                        |

### Matchmaking State Changes - Example Code

Notify the library that you are starting to process state changes. Handle each queued state changes then notify that you are done processing state changes.

```cpp
uint32_t stateChangeCount = 0;
const PFMatchmakingStateChange* const* stateChanges = nullptr;

HRESULT hr = PFMultiplayerStartProcessingMatchmakingStateChanges(pfmHandle, &stateChangeCount, &stateChanges);
if (FAILED(hr))
{
    //...
}

for (uint32 i = 0; i < stateChangeCount; ++i)
{
    const PFMatchmakingStateChange& change = *stateChanges[i];
    
    switch (change.stateChangeType)
    {
    case PFMatchmakingStateChangeType::TicketStatusChanged: /*...*/ break;
    case PFMatchmakingStateChangeType::TicketCompleted:     /*...*/ break;
    }
}

hr = PFMultiplayerFinishProcessingMatchmakingStateChanges(pfmHandle, stateChangeCount, stateChanges);
if (FAILED(hr))
{
    //...
}
```

## Start Matchmaking

| MPSD                                     | PlayFab Multiplayer                        |
|------------------------------------------|--------------------------------------------|
| Create MPSD session calls...             | `PFMultiplayerCreateMatchmakingTicket`     |
| `XblMatchmakingCreateMatchTicketAsync`   | `PFMultiplayerJoinMatchmakingTicketFromId` |
| `XblMatchmakingCreateMatchTicketResult`  | `PFMatchmakingTicketGetStatus`             |
| `XblMultiplayerSessionMatchmakingServer` | `PFMatchmakingTicketGetMatch`              |
| Join MPSD session calls...               | `PFMultiplayerJoinArrangedLobby`           |

### Start Matchmaking - Example Code

```cpp
PFMatchmakingTicketConfiguration matchTicketConfig{};
matchTicketConfig.timeoutInSeconds;        // how long to attempt matchmaking
matchTicketConfig.queueName;               // matchmaking queue name
matchTicketConfig.membersToMatchWithCount; // num remote players to go into matchmaking with
matchTicketConfig.membersToMatchWith;      // remote players to go into matchmaking with

HRESULT hr = PFMultiplayerCreateMatchmakingTicket(
    pfmHandle,                   // PFMultiplayerHandle
    1,                           // local user count
    &currentUserEntityKey,       // local users
    nullptr,                     // local user attributes (optional)
    &ticketConfig,               // ticket config
    nullptr,                     // async context (optional)
    &m_activeMatchmakingTicket); // matchmaking ticket

if (FAILED(hr))
{
    //...
} 

hr = PFMultiplayerJoinMatchmakingTicketFromId(
    pfmHandle,                   // PFMultiplayerHandle
    1,                           // local user count
    &currentUserEntityKey,       // local users
    nullptr,                     // local user attributes (optional)
    ticketId,                    // matchmaking ticket to join
    queueName,                   // matchmaking queue name
    nullptr,                     // async context (optional)
    &m_activeMatchmakingTicket); // matchmaking ticket

if (FAILED(hr))
{
    //...
}
```

> [!NOTE]
> Matchmaking will not start until all specified in the `membersToMatchWith` field have joined.

Then, once a match has been found and the state change is returned, join the arranged lobby.

```cpp
const auto& stateChange = static_cast<const PFMatchmakingTicketCompletedStateChange&>(change);
if (SUCCEEDED(stateChange.result))
{
    PFMatchmakingTicketStatus status{};
    HRESULT hr = PFMatchmakingTicketGetStatus(stateChange.ticket, &status);
    if (SUCCEEDED(hr))
    {
        if (status == PFMatchmakingTicketStatus::Matched)
        {
            const PFMatchmakingMatchDetails* matchDetails = nullptr;
            hr = PFMatchmakingTicketGetMatch(stateChange.ticket, &matchDetails);
            if (SUCCEEDED(hr))
            {
                const char* memberPropertyKeys[] { "favoriteCheese" };
                const char* memberPropertyValues[] { "Wensleydale" };

                PFLobbyArrangedJoinConfiguration joinConfig{};
                joinConfig.accessPolicy = PFLobbyAccessPolicy::Private;
                joinConfig.maxMemberCount = 4;
                joinConfig.ownerMigrationPolicy = PFLobbyOwnerMigrationPolicy::Automatic;
                joinConfig.memberPropertyCount = 1;
                joinConfig.memberPropertyKeys = memberPropertyKeys;
                joinConfig.memberPropertyValues = memberPropertyValues;
                
                PFLobbyHandle myLobby{};

                hr = PFMultiplayerJoinArrangedLobby(
                    pfmHandle,                            // PFMultiplayerHandle
                    &localUserEntityKey,                  // local user
                    matchDetails->lobbyArrangementString, // connection string
                    &config,                              // join config
                    nullptr,                              // async context (optional)
                    &myLobby);                            // handle to the lobby

                if (FAILED(hr))
                {
                    //...
                }
            }
        }
    }
}
```

## Cleanup

The following table shows a list of comparable functions used by MPSD and PlayFab Multiplayer for cleaning up and shutting down.

| MPSD                                             | MPA                         |
|--------------------------------------------------|-----------------------------|
| `XblMultiplayerRemoveSubscriptionLostHandler`    | `PFMultiplayerUninitialize` |
| `XblMultiplayerRemoveConnectionIdChangedHandler` |                             |
| `XblMultiplayerSetSubscriptionsEnabled`          |                             |

> [!NOTE]
> Make sure to leave any active lobbies and destroy any in progress matchmaking tickets before calling `PFMultiplayerUninitialize`.

### Cleanup - Example Code

```cpp
HRESULT hr = PFMultiplayerUninitialize(pfmHandle);
if (FAILED(hr))
{
    //...
}
``` 

## Activities

The following table shows a list of comparable functions used by MPSD and MPA to managing activities.

| MPSD                               | MPA                                           |
|------------------------------------|-----------------------------------------------|
| `XblMultiplayerSetActivityAsync`   | `XblMultiplayerActivitySetActivityAsync`      |
| `XblMultiplayerClearActivityAsync` | `XblMultiplayerActivityDeleteActivityAsync`   |
|                                    | `XblMultiplayerActivityGetActivityAsync`      |
|                                    | `XblMultiplayerActivityGetActivityResultSize` |
|                                    | `XblMultiplayerActivityGetActivityResult`     |

> [!NOTE]
> When setting an activity or sending an invite, make sure to use the connection string passed back from `PFLobbyGetConnectionString`.

### Activities - Example Code

```cpp
const char* connectionString;
HRESULT hr = PFLobbyGetConnectionString(myLobby, &connectionString);
if (FAILED(hr))
{
    //...
}

uint32_t maxPlayerCount;
hr = PFLobbyGetMaxMemberCount(myLobby, &maxPlayerCount);
if (FAILED(hr))
{
    //...
}

uint32_t lobbyMemberCount;
const PFEntityKey* lobbyMembers;
hr = PFLobbyGetMembers(myLobby, &lobbyMemberCount, &lobbyMembers);
if (FAILED(hr))
{
    //...
}

const char* lobbyId;
hr = PFLobbyGetLobbyId(myLobby, &lobbyId);
if (FAILED(hr))
{
    //...
}

PFLobbyAccessPolicy pfAccessPolicy;
hr = PFLobbyGetAccessPolicy(LobbyHandle, &pfAccessPolicy);
if (FAILED(hr))
{
    //...
}

XblMultiplayerActivityJoinRestriction joinRestriction = XblMultiplayerActivityJoinRestriction::InviteOnly;

switch (pfAccessPolicy)
{
case PFLobbyAccessPolicy::Public:  joinRestriction = XblMultiplayerActivityJoinRestriction::Public; break;
case PFLobbyAccessPolicy::Friends: joinRestriction = XblMultiplayerActivityJoinRestriction::Followed; break;
case PFLobbyAccessPolicy::Private: joinRestriction = XblMultiplayerActivityJoinRestriction::InviteOnly; break;
}

XblMultiplayerActivityInfo info{};
info.connectionString = connectionString;
info.joinRestriction = joinRestriction;
info.maxPlayers = maxPlayerCount;
info.currentPlayers = lobbyMemberCount;
info.groupId = lobbyId;
info.xuid = myXuid;

auto async = std::make_unique<XAsyncBlock>();
async->queue = queue;
async->callback = [](XAsyncBlock* async) 
{
    std::unique_ptr<XAsyncBlock> asyncBlockPtr{ async };
    HRESULT hr = XAsyncGetStatus(async, false);
    if(FAILED(hr))
    {
        //...
    }
};

HRESULT hr = XblMultiplayerActivitySetActivityAsync(
    xblContext,    // XblContextHandle
    &info,         // XblMultiplayerActivityInfo
    false,         // Allow cross-platform joins
    async.get()    // XAsyncBlock
);

if (SUCCEEDED(hr)) 
{
    async.release();
}
else
{
    //...
}
```

## Invites

The following table shows a list of comparable functions used by MPSD and MPA to send and receive invites.

| MPSD                             | MPA                                             |
|----------------------------------|-------------------------------------------------|
| `XGameInviteRegisterForEvent`    | `XGameInviteRegisterForEvent`                   |
| `XGameInviteUnregisterForEvent`  | `XGameInviteUnregisterForEvent`                 |
| `XblMultiplayerSendInvitesAsync` | `XblMultiplayerActivitySendInvitesAsync`        |
| `XGameUiShowSendGameInviteAsync` | `XGameUiShowMultiplayerActivityGameInviteAsync` |

### Invites - Example Code (Title UI)

```cpp
const char* connectionString;
HRESULT hr = PFLobbyGetConnectionString(myLobby, &connectionString);
if (SUCCEEDED(hr))
{
    auto async = std::make_unique<XAsyncBlock>();
    async->queue = queue;
    async->callback = [](XAsyncBlock* async)
    {
        std::unique_ptr<XAsyncBlock> asyncBlockPtr{ async };
        HRESULT hr = XAsyncGetStatus(async, false);
        if(FAILED(hr))
        {
            //...   
        }
    };
    
    HRESULT hr = XblMultiplayerActivitySendInvitesAsync(
        xblContext,       // XblContextHandle 
        &xuid,            // recipient
        1,                // number of invited XUIDs
        true,             // allow cross-platform joins
        connectionString, // use lobby connection string
        async.get());

    if (SUCCEEDED(hr))
    {
        async.release();
    }
    else
    {
        //...
    }
}
else
{
    //...
}
```

### Invites - Example Code (Xbox UI)

```cpp
auto async = std::make_unique<XAsyncBlock>();
async->queue = queue;
async->callback = [](XAsyncBlock* async)
{
    std::unique_ptr<XAsyncBlock> async{ async };
    HRESULT hr = XGameUiShowMultiplayerActivityGameInviteResult(async);
    if(FAILED(hr))
    {
        //...   
    }
};

HRESULT hr = XGameUiShowMultiplayerActivityGameInviteAsync(
    async.get(), // XAsyncBlock
    user.get()   // XUserHandle that is sending the invite
);

if (SUCCEEDED(hr))
{
    async.release();
}
else
{
    //...
}
```

> [!NOTE]
> `XGameUiShowMultiplayerActivityGameInviteResult` uses the currently set activity. You must set an activity using `XblMultiplayerActivitySetActivityAsync` before using this function.

## Recent Players

The following table shows how the Recent Player list is managed when using MPSD and MPA.

| MPSD                                          | MPA                                             |
|-----------------------------------------------|-------------------------------------------------|
| Players must be in the same MPSD session      | `XblMultiplayerActivityUpdateRecentPlayers`     |
| Session has `gameplay` property set to `true` | `XblMultiplayerActivityFlushRecentPlayersAsync` |
| Both player are marked as active              |                                                 |

> [!NOTE]
> To avoid throttling, it is best practice to batch calls to `XblMultiplayerActivityUpdateRecentPlayers`.

### RecentPlayers - Example Code

```cpp
XblMultiplayerActivityRecentPlayerUpdate update{};
update.xuid = metPlayerXuid;
update.encounterType = XblMultiplayerActivityEncounterType::Default;

HRESULT hr = XblMultiplayerActivityUpdateRecentPlayers(xblContext, &update, 1);
if (FAILED(hr))
{
    //...
}
```