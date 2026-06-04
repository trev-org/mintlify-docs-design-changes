---
author: sdgmiller
title: "Implement leaderboards in your game"
description: "Describes how to set up leaderboards in your game."
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

# Implement leaderboards in your game

This article describes how leaderboards provide a way for gamers to rate themselves against other players for specific actions they can achieve in the game. For more information, be sure to review the pages in the [See also](#see-also) section at the end of the article.

## Implement the leaderboard feature by using the Microsoft Azure PlayFab Services SDK

The PlayFab Leaderboard service offers multiple valid usage options for implementing leaderboards.

1. Download and set up the Azure PlayFab C SDK: Download the C/C++ SDK for your platform and integrate the provided header and library files into your build.
1. Define the leaderboard:  
   * Use [PlayFab Game Manager](/gaming/playfab/live-service-management/gamemanager/): navigate to the **Leaderboards** section within the PlayFab Game Manager. Create a new leaderboard by specifying a unique leaderboard name. Configure the leaderboard's sorting method (ascending or descending). Optionally, set a leaderboard reset schedule. For example, daily, weekly, or monthly.
   * Use API requests: you can also create a new leaderboard definition by using either the [PlayFab SDK APIs](/gaming/playfab/community/leaderboards/api-reference) or the [PlayFab REST APIs](/gaming/playfab/api-references/). This involves specifying parameters such as the entity type, leaderboard columns, and version configuration. <!--The API requires an Entity Session Token, which you can get from the Entity [GetEntityToken](/rest/api/playfab/authentication/authentication/get-entity-token) method.-->  
1. [Authenticate the player](e2e-user-sign-in.md): players must be authenticated with both Xbox services and PlayFab before features can be used that rely on these services in your games.
1. Update player leaderboard statistics: there are two ways to update Leaderboard statistics.
   * Use the `PFStatisticsUpdateStatisticsAsync` API call from your game client. This API requires the following information.
       * The leaderboard name.
       * The player's score to be submitted. Leaderboards support multi-column definitions, allowing multiple scores to be added to a player. You can define up to five columns.
   * Use the `PFLeaderboardsUpdateLeaderboardEntriesAsync` API call from your game client. <!--This API requires an Entity Session Token, which is available from the Entity `GetEntityToken` method.-->  

   Either of these calls will add or update entries on the specified leaderboard.
1. Retrieve leaderboard data: use the `PFLeaderboardsGetLeaderboardAsync` API call from your game client. This API requires the following information.
   * The leaderboard name. Optional parameters:
      * `StartPosition`: The starting position in the leaderboard to retrieve data from.
      * `MaxResultsCount`: The maximum number of leaderboard entries to retrieve.

   This API returns an array of leaderboard entries, including the following:
      * Player PlayFab ID
      * Player display name (if available)
      * Player score
      * Player rank
1. Retrieve leaderboard around player (optional): use the `PFLeaderboardsGetLeaderboardAroundEntityAsync` API call from your game client. This API requires the following information.
   * The leaderboard name. Optional parameter:
      * `MaxResultsCount`: The maximum number of leaderboard entries to retrieve.

   This API returns leaderboard data centered around the requesting player, showing their position relative to other players. For a list of the limits when `PFLeaderboardsGetLeaderboardAsync` and `PFLeaderboardsGetLeaderboardAroundEntityAsync` are being used, see [Limits on Leaderboards](/gaming/playfab/features/new-leaderboards-statistics/leaderboards/limits-leaderboards).
1. Display leaderboard information in the game's UI: parse the data that's returned by the `PFLeaderboardsGetLeaderboardAsync` or `PFLeaderboardsGetLeaderboardAroundEntityAsync` API calls. Create a user interface within your game to display the leaderboard data. Show player rankings, scores, and player names (or display names) in a clear and organized way.

## See also  

The [PlayFab developer documentation](/gaming/playfab/) is the most accurate primary source of information. For additional information, see the following articles.

* [Quickstart leaderboards](/gaming/playfab/features/new-leaderboards-statistics/leaderboards/quickstart-leaderboards)

* [Create a basic leaderboard](/gaming/playfab/features/new-leaderboards-statistics/leaderboards/create-basic-leaderboard)

* [Leaderboards API reference](/gaming/playfab/features/new-leaderboards-statistics/leaderboards/api-reference)
