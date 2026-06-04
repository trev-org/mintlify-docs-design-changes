# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-stats?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-stats?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Implement player statistics in your game

Feedback

Summarize this article for me

This article provides a summary of the steps involved in implementing player statistics in your game. For more information, be sure to review the pages in the [See also](https://learn.microsoft.com/#see-also) section at the end of the article.

## Implement player statistics by using Microsoft Azure PlayFab Statistics

Implementing player statistics using PlayFab involves a combination of defining stats, updating them based on gameplay, and retrieving them for display or use in game logic.

1. Set up the [Azure PlayFab Lobby and Matchmaking SDK](https://learn.microsoft.com/en-us/gaming/playfab/multiplayer/lobby/lobby-matchmaking-sdks/lobby-matchmaking-sdks): Download the C/C++ SDK for your platform and integrate the provided header and library files into your build.
2. Define player statistics in [PlayFab Game Manager](https://learn.microsoft.com/en-us/gaming/playfab/live-service-management/gamemanager/): In the PlayFab Game Manager, define the statistics that the game will use. This includes setting statistic names, initial values, and aggregation methods like `sum`, `max`, and `min`.
3. [Authenticate the player](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/pc-dev/tutorials/pc-e2e-guide/e2e-services/e2e-user-sign-in?view=gdk-2604): Players must be authenticated with both Xbox services and PlayFab before they use features that rely on these services in your games.
4. Track player actions and events: Within your game's logic, track player actions and events that contribute to statistic updates. This might involve tracking kills, damage dealt, items collected, or other relevant game data.
5. Update player statistics: Use `PFStatisticsUpdateStatisticsAsync` to update player statistics based on tracked actions and events. This function takes an array of statistic updates, so you can update multiple stats in a single call. You can increment, decrement, or set the value of a statistic.
6. Retrieve player statistics: Use `PFStatisticsGetStatisticsAsync` to retrieve the player's current statistic values. This function returns an array of statistic values. Use them to display stats in the game's UI or use in game logic.
7. Use [PlayStream](https://learn.microsoft.com/en-us/gaming/playfab/data-analytics/ingest-data/playstream-overview) for real-time event handling (optional): Use PlayStream events to trigger actions based on statistic updates. For example, you can trigger a leaderboard update or send a push notification when a player reaches a certain stat threshold.
8. Display player statistics: Display player statistics in the game's UI. This might involve displaying stats on a player profile screen, in a leaderboard, or during gameplay.
9. Use leaderboards (optional): Use [UpdateLeaderboardEntries](https://learn.microsoft.com/en-us/rest/api/playfab/progression/leaderboards/update-leaderboard-entries) to update a player's leaderboard stat.
 - Use the `PFLeaderboardsGetLeaderboardAsync` function to get leaderboard data.
 - Leaderboards can be used to show a player's stats in relation to other players.

## See also

The [PlayFab documentation](https://learn.microsoft.com/en-us/gaming/playfab/) is the best source of information. For details, see the following articles.

- [Azure PlayFab Statistics overview](https://learn.microsoft.com/en-us/gaming/playfab/features/new-leaderboards-statistics/statistics/)
 
- [Quickstart statistics](https://learn.microsoft.com/en-us/gaming/playfab/features/new-leaderboards-statistics/statistics/quickstart-statistics)
 
- [Create a basic statistic](https://learn.microsoft.com/en-us/gaming/playfab/features/new-leaderboards-statistics/statistics/create-basic-statistics)
 
- [Statistics API reference](https://learn.microsoft.com/en-us/gaming/playfab/features/new-leaderboards-statistics/statistics/api-reference)
 
- [Using player statistics](https://learn.microsoft.com/en-us/gaming/playfab/features/playerdata/using-player-statistics)
 

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