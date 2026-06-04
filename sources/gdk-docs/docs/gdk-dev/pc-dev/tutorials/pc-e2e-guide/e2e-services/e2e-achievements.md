---
author: sdgmiller
title: "Implement player achievements in your game"
description: "Describes how to set up achievements in your game."
kindex:
- "User authentication and ownership"
- "Xbox services, Xbox account"
- "Xbox services, identity"
- "Xbox services, user authentication"
ms.topic: article
edited: 06/03/2020
ms.date: '08/01/2022'
permissioned-type: public
---

# Implement player achievements in your game

This article describes how to implement player *achievements*. They're a system-wide mechanism for directing and rewarding players' in-game actions consistently across all games. Designing this correctly helps guide players to experience the game at its fullest and extends the game's lifetime. 

## Implement player achievements using GDK and title-managed events

Implementing player achievements by using title-managed events in the Microsoft Game Development Kit (GDK) involves a combination of retrieving achievement definitions, tracking progress, awarding achievements, and managing asynchronous operations. To implement player achievements use the following steps.

### To implement player achievements

1. Initialize Xbox services: use the [XblInitialize](../../../../../reference/live/xsapi-c/xbox_live_global_c/functions/xblinitialize.md) function.
1. [Configure achievements in Microsoft Partner Center](../../../../../services/player-data/achievements/title-managed/config/live-achievements-tm-config.md).
   1. Select your title, and then select **Xbox services** > **Gameplay settings**.
   1. To go to the Achievements section for your title, select **Achievements** .
   1. Select **New achievement**, and then complete the form by adding achievement details such as its name, a description, an image, a gamerscore, and the visibility.
1. Use the achievements APIs to get and set the player's progress for achievements.
   1. Retrieve the list of achievements and the player's progress in those achievements:  
     Use the [XblAchievementsGetAchievementsForTitleIdAsync](../../../../../reference/live/xsapi-c/achievements_c/functions/xblachievementsgetachievementsfortitleidasync.md) API to retrieve the list of achievements for a specific title ID. For more information, see [Getting title-managed Achievements](../../../../../services/player-data/achievements/title-managed/how-to/live-how-to-get-achievements.md).
   1. Get the player's progress in a specific achievement:  
     Use the [XblAchievementsGetAchievementAsync](../../../../../reference/live/xsapi-c/achievements_c/functions/xblachievementsgetachievementasync.md) API to get the progress of a specific achievement.
   1. Update the player's progress in an achievement:  
     Use the [XblAchievementsUpdateAchievementAsync](../../../../../reference/live/xsapi-c/achievements_c/functions/xblachievementsupdateachievementasync.md) API to update the value of the player's current progress for the achievement. Percent completion is from 1 to 100. If the new value is == 100, the achievement is unlocked. For more information, see [Updating title-managed Achievements](../../../../../services/player-data/achievements/title-managed/how-to/live-how-to-update-achievements.md).

> [!NOTE]  
> Achievement definitions are configured in [Microsoft Partner Center](https://partner.microsoft.com/dashboard/home).
>
> Access to Partner Center requires an account. For information about how to set one up, see [Step 2 - Create an account in Partner Center](../e2e-creating-partnercenter-account.md).

## See also

The GDK documentation is the best source of up-to-date information. For more information, see the following articles and sample.  

* [Title-managed Achievements overview](../../../../../services/player-data/achievements/title-managed/live-achievements-tm-overview.md)

* [Configure Xbox achievement rewards](../../../../../services/player-data/achievements/title-managed/concepts/live-achievement-rewards.md)

* [Getting title-managed Achievements](../../../../../services/player-data/achievements/title-managed/how-to/live-how-to-get-achievements.md)

* [Updating title-managed Achievements](../../../../../services/player-data/achievements/title-managed/how-to/live-how-to-update-achievements.md)

* [Configuring title-managed Achievements in Partner Center](../../../../../services/player-data/achievements/title-managed/config/live-achievements-tm-config.md)

* [achievements_c](../../../../../reference/live/xsapi-c/achievements_c/achievements_c_members.md)

* [Title-Managed Achievements Sample](https://github.com/microsoft/Xbox-GDK-Samples/tree/main/Samples/Live/Achievements)

  This sample demonstrates how to use the Title-Managed Achievements C-API provided by the GDK.  
