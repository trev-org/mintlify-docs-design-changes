---
author: sdgmiller
title: "Implement player statistics in your game"
description: "Describes how to implement player statistics in your game."
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

# Implement player statistics in your game

This article provides a summary of the steps involved in implementing player statistics in your game. For more information, be sure to review the pages in the [See also](#see-also) section at the end of the article.

## Implement player statistics by using Microsoft Azure PlayFab Statistics

Implementing player statistics using PlayFab involves a combination of defining stats, updating them based on gameplay, and retrieving them for display or use in game logic.  

1. Set up the [Azure PlayFab Lobby and Matchmaking SDK](/gaming/playfab/multiplayer/lobby/lobby-matchmaking-sdks/lobby-matchmaking-sdks): Download the C/C++ SDK for your platform and integrate the provided header and library files into your build.
1. Define player statistics in [PlayFab Game Manager](/gaming/playfab/live-service-management/gamemanager/): In the PlayFab Game Manager, define the statistics that the game will use. This includes setting statistic names, initial values, and aggregation methods like `sum`, `max`, and `min`.
1. [Authenticate the player](e2e-user-sign-in.md): Players must be authenticated with both Xbox services and PlayFab before they use features that rely on these services in your games.
1. Track player actions and events: Within your game's logic, track player actions and events that contribute to statistic updates. This might involve tracking kills, damage dealt, items collected, or other relevant game data.
1. Update player statistics: Use `PFStatisticsUpdateStatisticsAsync` to update player statistics based on tracked actions and events. This function takes an array of statistic updates, so you can update multiple stats in a single call. You can increment, decrement, or set the value of a statistic.
1. Retrieve player statistics: Use `PFStatisticsGetStatisticsAsync` to retrieve the player's current statistic values. This function returns an array of statistic values. Use them to display stats in the game's UI or use in game logic.
1. Use [PlayStream](/gaming/playfab/data-analytics/ingest-data/playstream-overview) for real-time event handling (optional): Use PlayStream events to trigger actions based on statistic updates. For example, you can trigger a leaderboard update or send a push notification when a player reaches a certain stat threshold.
1. Display player statistics: Display player statistics in the game's UI. This might involve displaying stats on a player profile screen, in a leaderboard, or during gameplay.
1. Use leaderboards (optional): Use [UpdateLeaderboardEntries](/rest/api/playfab/progression/leaderboards/update-leaderboard-entries) to update a player's leaderboard stat.
   * Use the `PFLeaderboardsGetLeaderboardAsync` function to get leaderboard data.
   * Leaderboards can be used to show a player's stats in relation to other players.

## See also

The [PlayFab documentation](/gaming/playfab/) is the best source of information. For details, see the following articles.

* [Azure PlayFab Statistics overview](/gaming/playfab/features/new-leaderboards-statistics/statistics/)

* [Quickstart statistics](/gaming/playfab/features/new-leaderboards-statistics/statistics/quickstart-statistics)

* [Create a basic statistic](/gaming/playfab/features/new-leaderboards-statistics/statistics/create-basic-statistics)

* [Statistics API reference](/gaming/playfab/features/new-leaderboards-statistics/statistics/api-reference)

* [Using player statistics](/gaming/playfab/features/playerdata/using-player-statistics)
