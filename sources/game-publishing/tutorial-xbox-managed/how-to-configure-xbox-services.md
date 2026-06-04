---
title: Configure Xbox services for a game
description: Guidance for Managed Creators to configure Xbox services for a game.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 3/14/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Configure Xbox services for a game

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

This article describes how to configure the Xbox settings and Xbox services gameplay settings for your game.

## Prerequisites

 - Enrolment in a Managed Creator program. If you're not enrolled yet, see [New Creator onboarding](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - Active Partner Center account. If you don't have an account yet, speak to your Microsoft contacts.
 - Approved Game Concept for your product. If you don't have concept approval yet, see [Game Concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).
 - Enabled Xbox services for your product. If you've not enabled Xbox services yet, see [Create a title and configure game setup](how-to-create-a-title-and-configure-game-setup.md).

## Configure Xbox services - Xbox settings

Xbox settings lets you configure basic information about your game for the Xbox network.

### Navigate to Xbox settings

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. Select the **Apps and games** workspace from the **Home** page. The **Apps and games | Overview** page appears.
1. On the **Apps and games | Overview** page, select your game from the list or use **Search** to find and select your game.
1. Select **Xbox settings** from the left navigation pane.

### Configure Title Names

Title names are the localized strings displayed to users in various Xbox services such as Achievements, Game Invites and Presence.

1. [Navigate to Xbox settings](#navigate-to-xbox-settings).
2. In the **Title Names** section, en-US will be added by default. Check that the string in the **Name** column is accurate.
3. To add additional localized title names, select **Add localized title**.
4. In the **Locale** column, add the language code, for example **en** for English.
5. In the **Name** column, enter the localized title name.
6. If you change your mind, you can delete a localized title name by selecting the **Delete** option for any locale. You can't delete the default en-US string.
7. Select **Save** to save your configuration for this section.

### Configure Data Platform Setting

1. [Navigate to Xbox settings](#navigate-to-xbox-settings).
2. Scroll to the **Data Platform Setting** section
3. In the **Stats configuration system** section, select **Event-Based Stats** or **Title-Managed Stats**. For more information, see [Event-based vs title-managed Stats](/gaming/gdk/_content/gc/live/features/player-data/stats-leaderboards/live-stats-eb-vs-tm).
4. In the **Achievements configuration system** section, select **Event-based Achievements** or **Title-managed Achievements**. For more information, see [Event-based vs title-managed Achievements](/gaming/gdk/_content/gc/live/features/player-data/achievements/live-achievements-eb-vs-tm).
5. In the **Publish Achievements to Retail?** section, select **Yes I will be publishing Achievements**.
6. Select **Save** to save your configuration for this section.

### Configure Device families

The Devices families configuration enables you to limit the types of device on which your product can access Xbox services. By default, all device families are enabled. You can leave this configuration unchanged. If you want to limit the types of devices, follow these steps.

1. [Navigate to Xbox settings](#navigate-to-xbox-settings).
2. Scroll to the **Device families** section
3. Select the checkbox in the **Allowed** column for each **Platform** your game supports.
6. Select **Save** to save your configuration for this section.

### Configure Embargo date

Embargo provides additional protections to help limit the product's social data exposure in the RETAIL sandbox via service calls or in the Xbox UI. Only the product or its custom access policies will be able to make calls to get the embargoed data. Users playing a product during the embargo period won't show any content related to the product that is covered by Embargo until the specified embargo date and time is reached. For more information about the content that is covered by Embargo, see [Configuring Xbox services in Partner Center](/gaming/gdk/_content/gc/live/test-release/portal-config/live-config-xbl-setup#embargo-date).

1. [Navigate to Xbox settings](#navigate-to-xbox-settings).
2. Scroll to the **Embargo date** section
3. Select **Set embargo date** and enter a date and time (UTC) for the embargo to end.
4. If you want to allow multiplayer invites during the embargo period, select **Allow Multiplayer Invites in Embargo**.
6. Select **Save** to save your configuration for this section.

## Configure Xbox services - Gameplay settings

Xbox services - Gameplay settings lets you configure various elements of your game's Xbox services including Achievements, Rich Presence and Multiplayer services. To configure your Xbox services - Gameplay settings, follow these steps.

1. Select the **Apps and games** workspace from the **Home** page. The **Apps and games | Overview** page appears.
2. On the **Apps and games | Overview** page, select your game from the list or use **Search** to find and select your game.
3. Select **Gameplay settings** from the left navigation pane.
4. Complete each section of your **Gameplay settings**, for example **Achievements**, **Rich Presence**, and **Multiplayer**.
5. When you're ready to test your changes, **Publish** your Xbox services - Gameplay settings to your development sandbox.

For full information about configuring Xbox services - Gameplay settings, see [Xbox services overview](/gaming/gdk/_content/gc/live/get-started/live-xbl-overview).

## Publish Xbox services

After you've configured your Xbox services, you must publish them for your changes to take effect. Xbox services are published to each sandbox individually. For example, if you're developing your game in ABCDEF.1, publish your Xbox services to ABCDEF.1 each time you make a change to your Xbox services - Gameplay settings or Xbox services - Settings. To publish your Xbox services, follow these steps.

1. Select the **Apps and games** workspace from the **Home** page. The **Apps and games | Overview** page appears.
2. On the **Apps and games | Overview** page, select your game from the list or use **Search** to find and select your game.
3. Select **Gameplay settings** from the left navigation pane.
4. Select **Publish** from the top navigation pane. The **Publish gameplay settings** window appears.
5. Select a **source** and **destination** sandbox.
   - The source is the sandbox where you configured your gameplay settings changes.
   - The destination is the sandbox where you want your changes published.
6. Select **Publish**. The page will display a confirmation message after your changes are published.

> [!IMPORTANT]
> After you've released your game, make sure to publish any Xbox services changes to the RETAIL sandbox when you're ready for them to go live to players of your game. Some changes can't be rolled back after you publish them to RETAIL. Be sure that you're ready for your changes to be released before publishing.

For more information, see [Xbox services overview](../concepts/xbox-services.md).

## Next steps

 - [Certify a game](how-to-certify-a-game.md)
 - [Create and publish add-ons](how-to-create-use-publish-add-ons.md)

## See also

 - [Xbox services overview](../concepts/xbox-services.md)
