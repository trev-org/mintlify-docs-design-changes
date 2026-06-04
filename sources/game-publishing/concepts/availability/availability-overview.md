---
title: Pricing and Availability overview
description: Explains the concepts about the Pricing and availability page in Partner Center. This page lets you determine how much your game will cost, whether it has a free trial, and how, when, and where it will be available to customers.
services: gaming
author: FLY1NGSQU1RR3L
ms.author: clintw
ms.service: gaming
ms.topic: article
ms.date: 2/19/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Availability - markets, pricing, release schedule

[!INCLUDE [reminder](../../includes/select-msix-tab.md)]

The **Pricing and availability** page lets you set your game's markets, visibility, pricing, schedule (including release and discoverable dates), and free trials. This topic walks you through the options and considerations when entering this information.

## Markets

The Microsoft Store reaches customers in over 200 markets around the world. The **Markets** section lets you set the markets in which you'd like to make your product available.

 - Selecting **All worldwide markets** will automatically select all worldwide markets where Xbox products are available. Deselecting markets in the **Show options** modal will remove those specific markets from the market availability list.
 - Selecting **Restrict to specific markets** will not automatically select all worldwide markets and requires explicit selection of markets where products should be available. Selecting markets in the **Show options** modal will add those markets to the market availability list.

Use the search bar in either modal to find and select individual markets or use the dropdown list to see **All markets**, **Xbox console markets**, or **Xbox Game Pass markets**. For more information about the markets and services available in each region, see [Xbox Supported Countries/Regions (Xbox.com)](https://www.xbox.com/regions).

## Visibility

The options in the **Visibility** section determine how customers can discover and acquire your game and add-ons. There are two sections within the Visibility section: [Audience](visibility.md#audience) and [Discoverability](visibility.md#discoverability).

By default, your products will be available to a public audience. You also have the option to limit the visibility to a private audience of selected people.

For games, the options in the **Discoverability** section place additional restrictions on how customers discover and acquire your product, such as by using a direct link only or by using search. By default, your game will be available and discoverable in the Microsoft Store. Alternatively, you can choose to make your game available, but not discoverable by customers searching or browsing the Store. To learn more, see [Visibility](visibility.md).

For add-ons, the visibility options depend on whether the product has its own Store listing or not. For example, a Season Pass or a Durable with packages will require its own Store listing, whereas a Consumable might not, depending on how you'll make it available to customers. To learn more, see [Visibility options for add-ons](visibility.md#add-ons).

## Schedule

The **Schedule** section lets you define a **Base Schedule** or create market-specific/market group schedules. Selections you make for the **Base schedule** will apply to all markets in which your game is available, except those with their own schedule.

Use the **Schedule** section to set the game's release, pre-order, and discoverable date and time. You can control when your game appears in the Store and when customers can acquire it.

See the following how-to guides for common scenarios.

* [Configure a product to be visible and purchasable](../../how-to/how-to-visible-release.md)
* [Configure a product to be visible but not purchasable](../../how-to/how-to-visible-only-pdp.md)
* [Configure a product to be hidden and redeemable only via Promotional Code](../../how-to/how-to-hiddentokenonly.md)

### Release dates and pre-orders

If a release date is known, pre-order dates can be configured. Configuring a pre-order date will allow the product to be sold in the Microsoft Store prior to the release date. However, the game can't be played until the configured release date.

If you're thinking about making any product (game, bundles, add-ons, and so on) available for pre-order, work with your Microsoft contacts to review your product plan before you configure this section. For more information, see [SKU Planning](../../publishing-processes/managed-creators/publishing-processes-sku-planning.md) and [Configuring pre-orders](../../publishing-processes/managed-creators/publishing-processes-configuring-pre-orders.md).

To start configuring pre-orders, see [How to configure pre-orders](../../how-to/how-to-preorder.md).

## Pricing

The **Pricing** section lets you select the suggested price for your game. You'll configure a **Base Price**, which is converted into the corresponding price tiers for each market where the product is available. Alternatively, you have the option to override the base price for specific markets by selecting a new price tier or entering a free-form price in the market's local currency.

You can modify pricing at any time. Pricing changes can be made available immediately, or you can schedule one or more price changes by selecting **Schedule a price change** if you want the base price of your game to change at a specific date and time.

To update pricing, see [Make changes to product pricing](../../how-to/how-to-priceupdate.md).

### Free trial

To attract customers, you can allow them to try your game for free by configuring a **Free trial**. By default, the **No free trial** option is selected, meaning there isn't a trial for your game. If you'd like to offer a trial, select a trial type from the **Free trial** dropdown list.

There are different types of trials you can configure.

 - **Time-limited** - Allow players to play the full game for a designated period of calendar time.
 - **Unlimited** - Allow players to play the full game with no calendar or runtime restrictions. If you're using this option, the game must restrict customer access to features intended for the trial.
 - **Usage-limited** - Allow players to play the full game for a designated usage period defined in minutes or hours.
   - **NOTE:** This trial type is only available if your account and product have the proper permissions. For details, see [Usage-limited free trials](../../how-to/how-to-create-usage-limited-free-trials.md). For more information, speak to your Microsoft contacts.

### Sale pricing

You can promote your game in the Microsoft Store by configuring sale pricing for a limited time. You can choose to offer your game at either a lower price tier or with a percentage-based discount. You can offer the sale to everyone or make it an exclusive offer for customers who own one of your other products.

If your products use the *reseller* [pricing model](managed-creators/reseller-pricing.md), sale pricing can only be configured by Microsoft. If you're interested in including a product in a sale or configuring a discount, speak to your Microsoft contacts. For more information about the payment terms and pricing model for your product, refer to your licensing agreement with Microsoft.

For more information, see [Sale Pricing](sale-pricing.md).

### Free to use

Free to use scenarios can only be configured by Microsoft. To learn more, see [Manage Free to Use scenarios](../../how-to/how-to-freetouse.md).

## Next steps

* [Configure Pricing and availability for a game](../../tutorial-xbox-managed/how-to-configure-pricing-and-availability.md)

## See also

* [Trials](trials.md)

