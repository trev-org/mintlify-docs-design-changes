---
title: Create and publish add-ons for a game
description: Create and publish add-ons for a game.
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

# Create and publish add-ons for a game

This article describes how to create and publish game add-ons.

Add-ons are used to make additional products for your game, like game expansions, character skins, or virtual currencies, available to customers. An add-on must be associated with a game that you've created in Partner Center.

## Create an add-on associated with a game in Partner Center

Game add-ons are configured within your Game product in Partner Center. Navigate to your game and then use the **Add-on** page within the title to start the process of creating add-ons.

1. Sign in to [Partner Center](https://developer.microsoft.com/dashboard).
1. In the **Home** page, select **Apps and games**.
1. In the **Apps and games | Overview** page, select your title. Or, enter your game's name in the search bar and then select your game.
1. Select **Add-ons** from the left navigation pane.
1. In the **Add-ons** page, select **+ Create a new...** and select the type of add-on to create. Managed Creators can create different types of add-ons including: Consumable (Developer-managed), Consumable (Microsoft Store-managed), Durable, Durable with Packages, and Add-on Bundle. For more information, see [Add-ons](../concepts/add-ons.md).
1. Specify a unique value as the product ID for your add-on. For example, consumable_001. This ID is used in code and in Partner Center to identify the add-on.
1. Select **Create**.

## Configure add-on properties

Add-on properties are very similar to those of a base game.

Each add-on type has different properties that you need to configure. For example, Durables have a different list of properties from Consumables. For more information, see [Partner Center sections to configure for add-ons](../concepts/add-ons.md#partner-center-sections-to-configure-for-add-ons).

## Use the add-on in your game

Add-ons are identified using values in the **Identity details** section of the add-on setup page. Use the product ID to associate the item in your game. For more information, see [Commerce - Getting Started](/gaming/gdk/_content/gc/commerce/getting-started/getting-started-nav) in the Game Development Kit.

## Submit add-ons for certification

When all the required information needed is completed, you can move forward and submit the add-on for certification. Your add-on's **Pricing** and **Store listings** configurations might need to be approved.

Use the **Certify** option on the add-on's **Overview** page to begin the certification process. For more information, see [Certify](../concepts/certification/certification-overview.md).

> [!Note]
> You can't submit an add-on for certification until the base game has been submitted for certification.

## Publish add-ons

Add-ons can only be published to the RETAIL sandbox after passing certification. However, since add-ons must be associated with a base game, the base game must pass certification and be published to the RETAIL sandbox before the add-on can be published.

You can submit both the base game and add-on for certification at the same time. In the event where the add-on passes certification but not the base game, you won't be able to publish the add-on until the base game passes certification.

Similar to a base game, configurations made in the **Pricing and availability** section of the add-on determine when the add-on will be visible and available to customers in the RETAIL sandbox.

## See also

* [Add-ons](../concepts/add-ons.md)
* [Configure a Durable add-on for a game](how-to-configure-a-durable.md)
