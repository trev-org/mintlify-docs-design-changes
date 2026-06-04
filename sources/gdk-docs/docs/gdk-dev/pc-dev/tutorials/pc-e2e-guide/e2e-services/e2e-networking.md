---
author: sdgmiller
title: "Implement networking in your game"
description: "Describes how to implement networking in your game."
kindex:
- player authentication and ownership
- Xbox services, Xbox account
- Xbox services, identity
- Xbox services, player authentication
ms.topic: article
edited: 06/03/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Implement networking in your game

This article provides a summary of the steps to implement networking in your game. For detailed information, be sure to review the articles in the [See also](#see-also) section at the end of this article.

## Implement networking features by using PlayFab Party

PlayFab Party is designed to provide a default secure communication environment. PlayFab Party uses industry-standard encryption and authentication for all communication (management data, game data, and real-time communication). Limiting access to a network is a core part of protecting its integrity. For information about how PlayFab Party supports real-time voice and data communication in multiplayer games, see [Asynchronous PlayFab Party operations and notifications](/gaming/playfab/multiplayer/networking/concepts-async-operations).

Joining a network requires four things.

* Knowledge of the network descriptor
* Possession of a valid Microsoft Azure PlayFab `title_user_account` entity token
* Knowledge of an invitation identifier
* Presence of the PlayFab Entity ID for the token in the specified invitation, or the specified invitation being an open invitation

An *invitation* ([PartyInvitation](/gaming/playfab/features/multiplayer/networking/reference/classes/partyinvitation/partyinvitation)) is an object within a network that grants player access to the network. An invitation has a creator, a unique identifier, a revocability setting, and an optional set of players specified as Entity IDs. A network can have any number of active invitations, including no invitations. A network is always created with an initial invitation.

A PlayFab Party network can have a maximum of 128 players.  

1. Download and set up the [PlayFab Party SDK](/gaming/playfab/multiplayer/networking/party-sdks): PlayFab Party SDKs provide networking and player communication for games. There are PlayFab Party SDKs for different platforms and game engines. Select and download the one that you need. 
1. [Authenticate the player](e2e-user-sign-in.md): If you're using PlayFab Party in Xbox and PC games, we recommend that you use the [Party Xbox Live Helper Library](/gaming/playfab/features/multiplayer/networking/party-xbox-live-guide) to ensure consistent functionality and behavior. This library helps your title meet Xbox services requirements.
1. Create a network: When using a PlayFab Party network with a game session, choose which client and player will create the network by using [PartyManager::CreateNewNetwork()](/gaming/playfab/features/multiplayer/networking/reference/classes/partymanager/methods/partymanager_createnewnetwork).
   * The client that creates the network is responsible for the following:
      * Setting immutable network configuration by using [PartyNetworkConfiguration](/gaming/playfab/features/multiplayer/networking/reference/structs/partynetworkconfiguration).
      * Implementing the initial invitation using [PartyInvitationConfiguration](/gaming/playfab/features/multiplayer/networking/reference/structs/partyinvitationconfiguration). The initial invitation contains an identifier and a list of players who are allowed to join the network. The players are specified as a list of `title_user_account` entity IDs. The list can also be empty, enabling any player with the network descriptor and invitation identifier to join.
      * Advertising the network to other players.
1. Advertise the network: To join to an existing PlayFab Party network, a client needs a descriptor and an identifier.
   * Network descriptor: A PlayFab Party network is identified by the [PartyNetworkDescriptor](/gaming/playfab/features/multiplayer/networking/reference/structs/partynetworkdescriptor) network descriptor. 
   * Invitation identifier: An *invitation identifier* is a string that uniquely identifies an invitation. It's provided by a client when an invitation is explicitly created or when creating the initial invitation while creating the network. If the client doesn't supply an invitation identifier, one will be uniquely generated.
   * To advertise the new network to other players, send these two items via any appropriate communication medium.
1. Joining a network is a two-step process. A client that wants to join a network must first connect to the network by providing the deserialized network descriptor to [PartyManager::ConnectToNetwork()](/gaming/playfab/features/multiplayer/networking/reference/classes/partymanager/methods/partymanager_connecttonetwork), and then authenticate a player by providing the invitation identifier to [PartyNetwork::AuthenticateLocalUser()](/gaming/playfab/features/multiplayer/networking/reference/classes/partynetwork/methods/partynetwork_authenticatelocaluser).  
1. After the player has joined the network, establish a network endpoint for game message traffic by using [PartyNetwork::CreateEndpoint](/gaming/playfab/multiplayer/networking/reference/classes/partynetwork/methods/partynetwork_createendpoint).

Joining a network has three scenarios.  

1. Join the network-social invitations: The simplest scenario is where a single player creates a game session and wants to invite other known players via their shared social platform. 
    1. The inviter creates the network with an open invitation, or an invitation containing all the players who the inviter wants to play with.
    1. After the network is created, the inviter sends the network descriptor and the invitation identifier to the other players via the social platform's invitation mechanism.
    1. Each invited player uses the network descriptor and invitation identifier to connect to the network.
1. Join the network's lobby: If your game provides a lobby that allows data to be sent between clients, it can be used as a communication medium for exchanging network connection information. 
    1. A set of players is selected to play a game together. One of those players is selected as the creator.
    1. Each player in the set sends their title_user_account Entity ID to the creator.
    1. The creator creates the network, specifying the players' Entity IDs in the initial invitation configuration.
    1. After the network creation is done, the creator sends the network descriptor and the initial invitation identifier to the set of players who want to join.
    1. Each player uses the network descriptor and the invitation identifier to connect to the network.
1. Join the network-matchmaking service: A matchmaking service, such as PlayFab Matchmaking, can be used to find a list of players to play with.
    1. Players initiate a match request with the service. The title_user_account Entity ID must be part of the request because the match result must contain each player's Entity ID.
    1. Players receive a match result that contains the set of players who want to be part of the network.
    1. A predetermined algorithm is used to select which player will be the creator.
    1. The creator creates the network, specifying the other matched players' Entity IDs in the initial invitation configuration.
    1. Once network creation is done, the creator uses an out-of-band communication medium like email or a messaging app, to send the network descriptor and the initial invitation identifier to other matched players.
    1. Each matched player uses the network descriptor and the invitation identifier to connect to the network.

## See also 

[PlayFab documentation](/gaming/playfab/) is the best source of up-to-date information. For details, see the following articles.

* [Enabling PlayFab Party](/gaming/playfab/features/multiplayer/networking/enable-party)

* [Asynchronous PlayFab Party operations and notifications](/gaming/playfab/multiplayer/networking/concepts-async-operations)

* [PlayFab Party invitations and the security model](/gaming/playfab/features/multiplayer/networking/concepts-invitations-security-model)

* [Integrating discovery with PlayFab Party](/gaming/playfab/features/multiplayer/networking/concepts-discovery)

* [PlayFab Party and direct peer-to-peer connections](/gaming/playfab/features/multiplayer/networking/concepts-direct-peer-connectivity)

* [Multiple networks](/gaming/playfab/features/multiplayer/networking/concepts-multiple-networks)

* [Integrate Party with Lobby](/gaming/playfab/features/multiplayer/networking/party-lobby-integration)

* [Conceptual differences between the GDK and Steamworks](e2e-conceptual-differences.md)
