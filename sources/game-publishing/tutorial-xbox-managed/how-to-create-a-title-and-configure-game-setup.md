---
title: Create an Xbox game and configure Game setup
description: Guidance for Managed Creators to create a Game product and configure Game setup for an Xbox game.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 3/6/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Create an Xbox game and configure Game setup

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

This article describes how to create a Game product and configure its **Game setup** in Partner Center.

Creating a Game product in Partner Center is the start of the process. Use this guide's navigation menu to move between the other sections of the process. You don't need to complete the sections in a specific order.

## Prerequisites

 - Enrollment in a Managed Creator program. To learn more, see [Onboarding as a new Creator](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - Active Partner Center account. If you don't have an account yet, contact your Microsoft contacts.
 - Approved Game Concept for your product. To learn more, see [Game Concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).

## Create a Game product

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select **+ New product** and then select **Game**.
1. In **Create your game by reserving a name**, enter the name of your game in **Name**. Select the **Check availability** link to determine if the name is available. If the name is available, a green check mark appears.
1. Select **Reserve product name**.

> [!NOTE]
> If you can't reserve a name for which you hold the trademark or other legal right, or if you see another app in the Microsoft Store using that name, [contact Microsoft](https://www.microsoft.com/info/cpyrtInfrg.html).

### Enabling Xbox Play Anywhere (XPA) Unified Entitlement for Xbox games on PC and Console

If you're developing an Xbox Play Anywhere game, follow the steps in this walkthrough to create a single Game, and select the **Xbox** and **Desktop** device families when prompted. When a customer purchases your game, they automatically get the entitlement to download and play the game on Xbox consoles and Xbox on PC. This entitlement is called **Xbox Unified Entitlement**. Don't create separate Games for PC and Console if you're supporting XPA.

## Configure Game setup (step 1)

If you're already on the **Game setup** page, go to step 5.

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. Select the **Apps and games** workspace from the **Home** page. The **Apps and games | Overview** page appears.
1. On the **Apps and games | Overview** page, use **Search** to find and select your game.
1. Select **Game setup** from the left navigation pane.
1. In the **Device family availability** section, select **Sandboxes** for each device family your game supports.
   - Select **Desktop** if you're developing an Xbox on PC game.
   - Select **Xbox** if you're developing an Xbox console game.

> [!IMPORTANT]
> **Xbox Play Anywhere**
> 
> If you're developing an Xbox Play Anywhere Game, select **Sandboxes** for **Desktop** and for **Xbox**. When your game releases, customers that purchase it are entitled to download and play the game on both device families.

6. Leave **Let Microsoft decide whether to make this product available to any future device families** selected.
1. In the **Sandboxes** section, **Enable publishing to sandboxes** is selected by default.
1. In the **Primary Xbox services development sandbox** section, select a development sandbox.
   - If you need to create a new development sandbox, first select **Manage sandboxes**.
   - For more information, see [Sandboxes](../concepts/sandboxes.md).
1. Select the **Show details** link in the **Identity details** section.
1. Note the identifiers and links. The **Store ID**, **Package manifest values**, and **Package family values** are especially important since they identify the title and build by the Store. They're also used to license your game. To learn more about the identifiers, select the information icon next to it.
1. After configuring and reviewing the Game setup page, select **Save draft**.

The status at the top of the page now reads **Status: Complete**, and the **Review and publish** link is active.

## Request product onboarding

Managed Creators need to send the Store ID for new game products to their Microsoft contacts for onboarding. This process grants access to full Xbox services and features in Partner Center.

If you're already on the **Game setup** page, go to step 5.

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. Select the **Apps and games** workspace from the **Home** page. The **Apps and games | Overview** page appears.
1. On the **Apps and games | Overview** page, use **Search** to find and select your game.
1. Select **Game setup** from the left navigation pane.
1. In the **Identity details** section, select **Show details**.
1. Copy the **Store ID** value.
1. Send an email to your Microsoft contacts to request product onboarding.
   - **Subject** Product onboarding request: &lt;Product name&gt;&mdash;&lt;Store ID&gt;&mdash;&lt;Creator name&gt;
   - **Body** I'd like to request product onboarding for the following product: <br />&lt;Product name&gt;<br />&lt;Store ID&gt;

## Configure Game setup (step 2)

> [!NOTE]
> Don't proceed until you confirm that your product is onboarded.

If you're already on the **Game setup** page, go to step 5.

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. Select the **Apps and games** workspace from the **Home** page. The **Apps and games | Overview** page appears.
1. On the **Apps and games | Overview** page, use **Search** to find and select your game.
1. Select **Game setup** from the left navigation pane.
1. Select **Retail** for the device families that your game supports.
1. Scroll to the bottom of the page and select **Save draft**.
1. Full Xbox services are now enabled for the game. This process might take a few minutes to complete.

## Next steps

* [Create and upload a game package](how-to-create-a-package.md)
