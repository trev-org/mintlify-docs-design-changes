---
title: Use Review and Publish to publish a game
description: Use Review and Publish to publish a game to the Microsoft Store.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 3/9/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Use Review and Publish to publish a game to RETAIL

After passing Certification, publish all games to the RETAIL sandbox to make them available to customers.

## Request revenue SKU creation

Before you can publish to the RETAIL sandbox, products configured to use the [Reseller](../concepts/availability/managed-creators/reseller-pricing.md) pricing model must have a **revenue SKU**. You can't publish products without a revenue SKU to RETAIL, but you can still publish them to development sandboxes or submit them for Certification. To request revenue SKU configuration, send the **Store ID** for your product to your [Microsoft contacts](../resources/managed-support/overview-microsoft-representatives-and-contacts.md).

## Submit your game for publishing

> [!NOTE]
> Only packages, pricing and availability information, and Store listings in the **Main** branch can be published to the RETAIL sandbox. You can't use content from other branches. Use the **Import** functionality where available to copy your configuration to the **Main** branch.

1. Sign in to [Partner Center](https://developer.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your title. Or, enter your game's name in the search bar and then select your game.
1. On the **Game overview** page, select **Review and publish** near the page title.
1. On the **Game title | Review and publish** page, go to the **Publish to** dropdown, and select **RETAIL**. **Publish from** is unavailable because only the **Main** branch can be used as the source.
   - If you can't select the **RETAIL** sandbox and see **(Requires concept approval)**, you need to submit your game for [Game Concept](../publishing-processes/managed-creators/publishing-processes-game-concepts.md) approval before you can proceed. All games that use full Xbox services must receive concept approval before they can be published to RETAIL.
1. Review the status of the different modules. All modules need to be completed. Go to the individual pages to complete them. You can't publish if any of them are incomplete.
    * [Packages](how-to-create-a-package.md)
    * [Properties](how-to-configure-properties.md)
    * [Age ratings](how-to-set-age-ratings.md)
    * [Store listings](how-to-create-a-store-listing.md)
    * [Pricing and availability](how-to-configure-pricing-and-availability.md)
    * [Gaming metadata](how-to-add-metadata.md)
    * [Xbox Gameplay Settings](how-to-configure-xbox-services.md)

1. Under **Notes for certification**, enter any information to help Microsoft test your game.
1. For **Submission notification audience**, select **Click here** to view or change who can receive submission status notifications for this product.
1. Select **Publish** to submit your game for publishing. Each stage in the publishing process must be completed before the game can advance to the next stage. The following timelines provide estimated durations for each stage.
    - **Processing:** < 6 hours
    - **Certification:** < 5 days - Products need to be certified before they can be published to the Microsoft Store. For details see [Certification](../concepts/certification/certification-overview.md). 
    - **Publishing:** < 6 hours

> [!NOTE]
> If any modules aren't certified before you start publishing, the process submits them for Certification before the publish proceeds. If Certification fails, resolve any issues before you try to publish again.

> [!TIP]
> Use the **Review and publish** page to help you track the items that need to be completed before publishing.

## Acquire your game in the RETAIL sandbox

After you publish the game to the RETAIL sandbox, customers can acquire it by using a [Promotional Code](../publishing-processes/managed-creators/publishing-processes-promo-codes.md). To get started, go to the **Apps and games** workspace in Partner Center, and then select **Promotional codes**. 

Your game is available for customers to purchase starting on the **Release** date you configured in the **Pricing and availability**.

## Test your game in RETAIL

Test all base game products in RETAIL before their release. For information about recommended tests to complete, see [Recommendations for testing in RETAIL](../publishing-processes/managed-creators/publishing-processes-recommendations-for-testing-in-retail.md).

## Update your game
Submit updates for any module by making changes in Partner Center and then publishing them to the RETAIL sandbox. This process includes updating the game packages to release new features or fix problems, changing Store listings assets to keep your Microsoft Store page fresh, or changing the price. Some changes, like updating your game packages or changing your price, might require certification review and approval before they can be published to RETAIL.

## Next steps

* [Create and publish add-ons](how-to-create-use-publish-add-ons.md)
