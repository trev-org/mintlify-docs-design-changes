---
title: "Integration with PlayFab Lobby & Match"
description: "Describes best practices on how to integrate MPA with PlayFab Lobby and Match services."
kindex:
- Activities
- MPA
- activity
- Invites
- PlayFab Lobby
- PlayFab Match
ms.topic: article
ms.localizationpriority: high
author: fschober
ms.author: fschober
ms.date: 07/17/2024
edited: 07/17/2024
permissioned-type: public
---

# Integration with PlayFab Lobby & Match

This topic describes how to integrate MPA with PlayFab Lobby and Match services. This includes best practices and general guidance applicable to other, similar lobby and matchmaking services.

## Design Overview

To integrate MPA with PlayFab Lobby and Match or similar services, a title or title service has to query the relevant information from the lobby state and then migrate this information into the MPA service. The MPA service is not intended for lobby or session state information.

### Activity 

For [MPA Activity](live-mpa-activities.md), the source information should be underlying lobby information. A title or service needs set the relevant information in the MPA Activity content fields with the following best practices:

- Update frequency  
   State migration from lobby data should be performed at a reasonable reflect changes, like updates to the `CurrentPlayers` information. Update calls should not exceed the call limits described outlined in [Fine-Grained Rate Limiting](../../../develop/best-practices/live-fine-grained-rate-limiting.md). MPA Activity should also not be deleted/recreated to update information.

- Xbox User Identity (XUID)  
   The XUID of a player is typically unvalidated information in services outside of Xbox services and not the primary identifier for cross-network services. PlayFab Lobby uses a cross-network PlayFab User Entity ID for players that can be converted to a XUID for the active user through API or service calls. For more details refer to the PlayFab [Tutorial: Get a player Profile](/gaming/playfab/features/playerdata/getting-player-profiles). Only this resolved XUID should be considered secure.
   
   The XUID of other players cannot be retrieved in this way. As a solution, XUIDs can be provided as custom string properties of a player in the Lobby. These strings should not be considered secure and always be validated through the PlayFab service by using `PFAccountManagementClientGetPlayFabIDsFromXboxLiveIDsGetResult` to compare the expected and actual PlayFab User Entity ID for a XUID. A mismatch indicates an incorrect XUID.
   
   For all services, XUIDs provided as insecure strings are not secure and can lead to impersonation attacks without validation.
   
- Connection String  
   To integrate with the PlayFab Lobby service, the connection string of an MPA activity should be set to the Lobby connection string that can be retrieved through `PFLobbyGetConnectionString`. Other services should use an equivalent join string.

- Reflecting Lobby Joinability  
   An Activity is intended to allow players to join gameplay experiences and needs to be matched with the joinability of the underlying lobby state. An Activity automatically becomes non-joinable when the Activity is full (`CurrentPlayers` reaches the `MaxPlayers` value). Titles that want to make an Activity temporarily non-joinable can also use this behavior. An Activity should only be deleted with no future joins are possible. Note that altering the privacy setting of the Activity only restricts, but cannot block all joins.

   Due to the latency of Activity joins, titles should always account for flows where joins are performed against full or non-joinable sessions and provide the appropriate errors to the player.

- Reflection Privacy changes  
   The state and changes of activity privacy through Join Restrictions should mirror the Access Policy defined for the underlying PlayFab Lobby. The same applies for similar services and may require mapping of privacy values.

### Invites

For [MPA Invites](live-mpa-invites.md), the recommended source should also be the underlying lobby information. This best practice approach is more reliable than an invite to a network mesh like PlayFab Party and can provide state information through lobby data immediately.

To integrate with the PlayFab Lobby service, the connection string of an MPA invite should be set to the Lobby connection string. This string can be retrieved through `PFLobbyGetConnectionString`. In addition, the appropriate cross-platform join value should be set for the invite.

### Recent Players

The use of [MPA Recent Players](live-mpa-recent-players.md) functionality is not closely tied to the underlying lobby and can be driven by title logic. Recent player calls should not exceed the call limits described outlined in [Fine-Grained Rate Limiting](../../../develop/best-practices/live-fine-grained-rate-limiting.md). As a best practice, recent player activity should be batched within a reasonable time range to adhere to the call limits. Recent player reporting by a title is not expected to be immediate and batch submission is preferred.

### Matchmaking

The integration of PlayFab Match or similer matchmaking services does not require any direct MPA functionality. Titles may want to update the joinability of an MPA Activity during matchmaking if no joining is possible. As a best practice, PlayFab Match should be used in conjunction with PlayFab Lobby.

Like for lobby user identity, PlayFab Match uses a cross-network PlayFab User Entity ID for players that can be converted to a XUID for the active user through API or service calls. The XUID of other players cannot be retrieved in this way. As a solution similar to lobby, XUIDs can be provided as custom string properties of a player in the Lobby. These strings should not be considered secure and always be validated through the PlayFab service compared the expected and actual PlayFab User Entity ID for a XUID like outlined for PlayFab Lobby above. A mismatch indicates an incorrect XUID.

For matchmaking, XUIDs provided as insecure strings are not secure and can lead to impersonation attacks without validation.

## General Best Practices

The MPA service is designed as a light-weight integration point for Xbox functionality on top of lobby or match services, like for PlayFab Lobby and Match. This integration can be lightweight and only be performed at specific connection points for reflecting the needed information and relevant updates into Activity, Invites, and Recent Player functionality.

In addition, integration of the MPA service should also consider the service-to-service endpoints. Depending on game, multiplayer and server architecture, direct service-to-service calls can be drastically simpler and more reliable than client calls. This often applies for MMO titles.

Like for XUID information stored in custom strings as part of PlayFab Lobby and Match, any other custom identity information should always be considered insecure and validated before use. The lack of validation can lead to impersonation attacks, especially when gameplay includes platforms with more user access and protections.