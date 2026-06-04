# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-leaderboards?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-leaderboards?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Implement leaderboards in your game

Feedback

Summarize this article for me

This article describes how leaderboards provide a way for gamers to rate themselves against other players for specific actions they can achieve in the game. For more information, be sure to review the pages in the [See also](https://learn.microsoft.com/#see-also) section at the end of the article.

## Implement the leaderboard feature by using the Microsoft Azure PlayFab Services SDK

The PlayFab Leaderboard service offers multiple valid usage options for implementing leaderboards.

1. Download and set up the Azure PlayFab C SDK: Download the C/C++ SDK for your platform and integrate the provided header and library files into your build.
 
2. Define the leaderboard:
 
 - Use [PlayFab Game Manager](https://learn.microsoft.com/en-us/gaming/playfab/live-service-management/gamemanager/): navigate to the **Leaderboards** section within the PlayFab Game Manager. Create a new leaderboard by specifying a unique leaderboard name. Configure the leaderboard's sorting method (ascending or descending). Optionally, set a leaderboard reset schedule. For example, daily, weekly, or monthly.
 - Use API requests: you can also create a new leaderboard definition by using either the [PlayFab SDK APIs](https://learn.microsoft.com/en-us/gaming/playfab/community/leaderboards/api-reference) or the [PlayFab REST APIs](https://learn.microsoft.com/en-us/gaming/playfab/api-references/). This involves specifying parameters such as the entity type, leaderboard columns, and version configuration.
3. [Authenticate the player](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-user-sign-in?view=gdk-2604): players must be authenticated with both Xbox services and PlayFab before features can be used that rely on these services in your games.
 
4. Update player leaderboard statistics: there are two ways to update Leaderboard statistics.
 
 - Use the `PFStatisticsUpdateStatisticsAsync` API call from your game client. This API requires the following information.
 - The leaderboard name.
 - The player's score to be submitted. Leaderboards support multi-column definitions, allowing multiple scores to be added to a player. You can define up to five columns.
 - Use the `PFLeaderboardsUpdateLeaderboardEntriesAsync` API call from your game client.
 
 Either of these calls will add or update entries on the specified leaderboard.
 
5. Retrieve leaderboard data: use the `PFLeaderboardsGetLeaderboardAsync` API call from your game client. This API requires the following information.
 
 - The leaderboard name. Optional parameters:
 - `StartPosition`: The starting position in the leaderboard to retrieve data from.
 - `MaxResultsCount`: The maximum number of leaderboard entries to retrieve.
 
 This API returns an array of leaderboard entries, including the following:
 
 - Player PlayFab ID
 - Player display name (if available)
 - Player score
 - Player rank
6. Retrieve leaderboard around player (optional): use the `PFLeaderboardsGetLeaderboardAroundEntityAsync` API call from your game client. This API requires the following information.
 
 - The leaderboard name. Optional parameter:
 - `MaxResultsCount`: The maximum number of leaderboard entries to retrieve.
 
 This API returns leaderboard data centered around the requesting player, showing their position relative to other players. For a list of the limits when `PFLeaderboardsGetLeaderboardAsync` and `PFLeaderboardsGetLeaderboardAroundEntityAsync` are being used, see [Limits on Leaderboards](https://learn.microsoft.com/en-us/gaming/playfab/features/new-leaderboards-statistics/leaderboards/limits-leaderboards).
 
7. Display leaderboard information in the game's UI: parse the data that's returned by the `PFLeaderboardsGetLeaderboardAsync` or `PFLeaderboardsGetLeaderboardAroundEntityAsync` API calls. Create a user interface within your game to display the leaderboard data. Show player rankings, scores, and player names (or display names) in a clear and organized way.
 

## See also

The [PlayFab developer documentation](https://learn.microsoft.com/en-us/gaming/playfab/) is the most accurate primary source of information. For additional information, see the following articles.

- [Quickstart leaderboards](https://learn.microsoft.com/en-us/gaming/playfab/features/new-leaderboards-statistics/leaderboards/quickstart-leaderboards)
 
- [Create a basic leaderboard](https://learn.microsoft.com/en-us/gaming/playfab/features/new-leaderboards-statistics/leaderboards/create-basic-leaderboard)
 
- [Leaderboards API reference](https://learn.microsoft.com/en-us/gaming/playfab/features/new-leaderboards-statistics/leaderboards/api-reference)
 

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