---
author: sdgmiller
title: "Implement multiplayer features in your game"
description: "Describes how implement multiplayer features in your game."
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

# Implement multiplayer features in your game

## Implement multiplayer by using the Microsoft Development Kit and PlayFab

Use the Xbox services and PlayFab multiplayer APIs to enable features like sending and accepting invites, matchmaking, voice chat, and text chat for players. Common multiplayer scenarios include the following:

* Comparative or indirect play: Players indirectly compete with each other, without direct gameplay in the same instance of a game.
* Local play or living-room play: This scenario is based on two or more players playing a game together, either competitively against each other or cooperatively, on a single device.
* Online play with friends: This scenario is the most traditional online multiplayer experience. Here, a player wants to play a game only with friends&mdash;not with strangers.
* Online play through a list of game sessions: In this scenario, a player can browse a list of joinable gameplay sessions in a game and then select which one to join.
* Simple matchmaking: In this scenario, a player, or a group of players, looks for other players (who might or might not be known to the player) to play an online game with.
* Skill-based matchmaking: In this scenario, the matchmaking service includes more advanced rule sets like skill, player level, and other game-specific properties.

For more information about implementing multiplayer features in your game, see the following articles.

* [Implement lobbies in your game](e2e-lobbies.md)
* [Implement matchmaking in your game](e2e-matchmaking.md)
* [Implement player invites in your game](e2e-invites.md)
* [Implement chat in your game](e2e-party-voice-chat.md)

## See also 

* [Multiplayer overview](../../../../../services/multiplayer/overviews/multiplayer-intro.md)

* [Xbox services multiplayer overview](../../../../../services/multiplayer/overviews/live-multiplayer-intro.md)

* [Multiplayer with PlayFab](/gaming/playfab/multiplayer/mpintro)

* [NetRumble Demo Game](https://github.com/PlayFab/PlayFabNetRumble)

   This is a simple multiplayer game that shows how to use the Microsoft Azure PlayFab Party and Multiplayer C++ SDKs and APIs in games. 
