---
title: "Overview"
description: "Xbox services provide the greatest player community for your game on the most advanced cross-platform multiplayer network."
kindex:
- Xbox services, Xbox services overview
- Xbox services, Player Data
- Xbox services, Stats and Leaderboards
- Xbox services, Multiplayer
- Xbox services, Matchmaking
- Xbox services, Connected Storage
- Xbox services, Title Storage
ms.topic: article
ms.localizationpriority: medium
author: joannaleecy
ms.author: jeffshi
edited: 00/00/0000
ms.date: '08/01/2022'
permissioned-type: public
---

# Xbox services overview

Xbox services are a collection of micro-services that expose features such as profile, friends and presence, stats, leaderboards, achievements, multiplayer, and matchmaking.

Using Xbox services, you can also add Xbox services to Windows PC and Xbox console titles.

## Xbox services

Xbox services are a premier gaming network that connects millions of gamers across the world.

Here are some reasons to add Xbox services to your game.

- Xbox services unite gamers across Xbox One (or later) and Windows 10, so gamers can play with their friends and connect with a massive community of players.

- Xbox services let players build a gaming legacy by unlocking achievements, sharing epic game clips, amassing gamerscore, and perfecting their avatar.

- Xbox services let gamers play and pick up where they left off on another Xbox console or PC, bringing all their saves from another device.

- With over 1 billion multiplayer matches played each month, Xbox services are built for performance, speed, and reliability.

- With cross-device multiplayer, gamers can play with your friends regardless of whether they play on Xbox One (or later) or Windows 10 PC.

## How Xbox services work

Xbox services data is stored in the cloud. It can be accessed by using REST endpoints and secure web sockets that are accessible from a set of client-side APIs designed for game developers.

We recommend the use of client-side APIs, known as Xbox Services API (XSAPI), that wrap the REST functionality for development. For more information, see [Xbox Services API overview](xbox-services-api/live-introduction-to-xbox-live-apis.md).

## Xbox services feature areas

### Player Data

Player Data drives the usage of player stats, achievements, and leaderboards.

| Feature | Description |
|---------|-------------|
| [Player Data](../player-data/live-playerdata-nav.md) | A brief overview of the Player Data system, as well as guidance on how to best incorporate stats, leaderboards, and achievements into your title.
| [Stats and Leaderboards](../player-data/stats-leaderboards/live-stats-leaderboards-nav.md) | Stats is the foundation of leaderboards. When they're intelligently incorporated, they help bring out your users' competitiveness.
| [Achievements](../player-data/achievements/live-achievements-nav.md) | Achievements is one of the most well-known features for players signed in to Xbox services. It's a great driver of player engagement. Learn how to use them in your title.

### Social features

Social features can organically grow your audience, spreading awareness to over 55 million active users.

|Feature  | Description |
|---------|-------------|
| [Social](../../archive/services-archive/live-social-nav.md) | If you can sign a user into the Xbox network (also known as Xbox Live), you can start using Xbox services' social features. This includes utilizing a user's social graph, Rich Presence, Friends list (People system), activity feed (presence strings), and reputation. |

### Multiplayer features

Multiplayer is a great way to extend the lifetime of your title and keep gameplay experiences fresh.

Xbox services provides extensive multiplayer and matchmaking features.

You also have several options of API that provide varying levels of simplicity versus flexibility.

| Feature  | Description |
|---------|-------------|
| [Multiplayer overview](../multiplayer/overviews/live-multiplayer-intro.md) | If you are new to Xbox services multiplayer development, or are unfamiliar with new APIs such as Multiplayer Manager, start here. |
| [Common multiplayer scenarios](../multiplayer/overviews/live-common-multiplayer-scenarios.md) | Suggestions and guidance on how you might incorporate multiplayer into your title. |
| [Multiplayer Manager (MPM)](../multiplayer/mpm/live-multiplayer-manager-nav.md) | Multiplayer Manager provides a high-level API focused on common multiplayer scenarios, including adding multiplayer functionality by managing sessions, matchmaking, and game invites. Provides a state- and event-based programming model. |

### Cloud Storage

Cloud Storage provides both **Title Storage** and **Connected Storage**.

These are two different but complementary services.

- Connected Storage allows you to implement game saves in the cloud, which will roam across devices, regardless of where a user is signed in.
- Title Storage lets you store blobs of data that can be per user or per title and shared across different users.

| Feature  | Description |
|---------|-------------|
| [Connected Storage vs. Title Storage](../storage/live-connected-storage-vs-title-storage.md) | Xbox services Cloud Storage includes Connected Storage to store game state, and Title Storage to store player statistics and assets. |
| [Connected Storage](../storage/connected-storage/live-connected-storage-nav.md) | Connected Storage saves and loads gameplay data and other state data across devices. Title data is stored locally and also synced to the cloud. |

## See also

* [Getting started with Xbox services](../../archive/services-archive/live-getstarted-nav.md)
* [Xbox Services API overview](xbox-services-api/live-introduction-to-xbox-live-apis.md)