---
title: Configuring pre-order products
description: Pre-order product guidance for Managed Creators.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 2/6/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Configuring pre-order products

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

Prior to the release of your product, you might want to make it available for players to pre-order. Follow the guidance on this page for information about submitting a pre-order plan for approval, configuring pre-order products, and making changes to pre-orders.

The Microsoft Store offers the capability to pre-order *Game*, *Game bundle* and *Durable* add-on products. Depending on the configuration you need for your pre-order products, you might want to create specific pre-order products, or you might want to use the same products that you'll make available for customers to purchase after your release.

## Before you begin

Review the considerations below before configuring pre-orders for your product.

 - All products with packages configured for pre-order, including **Games** and **Durables with Packages**, require a [Package](../../concepts/packages-overview.md) that has been submitted to Xbox Certification and approved for release.
 - All pre-order products must have a confirmed release date. It's not possible to configure a pre-order using a temporary or placeholder release date.
 - You should let your Microsoft contacts know your pre-order plans at least three weeks before your pre-order begins.
 - We recommend having a robust plan to inform customers about the reasons to pre-order and availability of pre-order products.

For more information, see the Xbox Games Store Policies in the [Xbox Publisher Guide](https://aka.ms/xboxpublisherguide).

> [!NOTE]
> If pre-order isn't suitable for your game, consider setting up a [Game Wish List page](publishing-processes-wishlist-pages.md).

## Submitting a pre-order plan

As a Managed Creator, you should submit your pre-order and SKU plans to Microsoft for approval. We recommend sharing your plans with your Microsoft contacts at least three weeks before your pre-order begins to allow sufficient time for review.

For more information about sharing a SKU plan for review, see [SKU planning](publishing-processes-sku-planning.md).

## Publishing requirements

To publish a pre-order, all modules for your product in Partner Center must be completed and where applicable, Certified (this applies to **Store Listings**, **Pricing and Availability** and **Packages**). If you're configuring a pre-order bundle, the **Game bundle** product and the included products must have the Partner Center modules completed and certified. Ensure you create your products and configure the required information early to allow yourself time to complete these steps.

Consider using the configuration options available in Partner Center, such as [Private Audience](../../concepts/availability/visibility-audiences.md) and [Xbox Embargo](../../concepts/availability/visibility.md), to prevent unintended visibility of the products before the pre-order begins.

### Considerations for Game pre-orders

All **Game** products made available for pre-order in the Microsoft Store require:

 - A certified [Package](../../concepts/packages-overview.md).
 - Published **Xbox services**. The Xbox services configuration includes your Achievements, Presence and Multiplayer settings. To prevent unintended exposure of this information, configure [Xbox Embargo](../../concepts/xbox-services.md#embargo-date).

### Publishing order

If you're publishing multiple products, publish them in the following order to avoid errors.

 1. Game
 2. Add-ons
 3. Season Pass or Add-on Bundles
 4. Game bundles

## Pre-order bundles

Use a *Game bundle* product to make a combination of products available to players for pre-order, for example a Game and a piece of downloadable content (DLC). For information about setting up a Game bundle, see [Product creation and onboarding](publishing-processes-product-onboarding-and-configuration.md).

If you want to include products that are only available to pre-order customers, create separate pre-order and release bundles and make them available for purchase during specific time periods. For example:

| Edition Name | Contents | Schedule |
| ---- | ---- | ---- |
| Deluxe Edition Pre-Order | Base game, Season Pass, pre-order bonus cosmetic | Pre-order starts: 1 January<br />Pre-order unlocks: 30 January |
| Deluxe Edition | Base game, Season Pass | Release: 30 January |

Pre-order bundles can also be used for other types of pre-order incentive, for example enabling customers who purchase a specific bundle to access the game earlier than the standard edition release date. For more information, see [How to configure a pre-order early access bundle](../../how-to/how-to-create-preorder-early-access-bundle.md).

## Making changes to a pre-order

If you haven't published your pre-order products, make any required changes to your products in Partner Center before you publish to the RETAIL sandbox. If you've made changes to the SKU plan, inform your Microsoft contacts now in case approvals are required.

If you've already published your pre-order products to the RETAIL sandbox, you can only make specific changes later. Before attempting to make any changes, inform your Microsoft contacts.

**Permitted changes**
 - Changes to Store listings, gaming metadata, properties, and Xbox services.
 - Publishing updated packages.
   - **NOTE:** Customers who have pre-ordered and already installed a package will update to the latest package you have published if their device settings permit automatic updates. Customers who pre-order after you publish an update will only install the latest package you have published.
 - Adding new markets to the pricing and availability configuration.
 - Adding products, excluding Consumables, to a pre-order bundle.

**Forbidden changes**
 - Changes to release date or time, if the currently published release date is within 14 calendar days of the date the change is being made.
    - Microsoft Partner Center won't permit changes within the 14 day period. If you need to make a change earlier than the 14 day period, speak to your Microsoft contacts prior to taking any action. Don't make changes to your release date for an active pre-order without guidance from Microsoft.

**Other changes and cancellations**
 - For any other changes, speak to your Microsoft contacts before you attempt to make the changes in Partner Center. For guidance about the requirements for some of these changes, see your publishing agreements and the Xbox Games Store policies (available in the [Xbox Publisher Guide](https://aka.ms/xboxpublisherguide).

## Accessing pre-order products in RETAIL

Customers that pre-order a product might choose to install it immediately, but it won't be playable until the configured release or pre-order unlock date. Products that are included in a Bundle configured for pre-order won't be playable until the Bundle's release or pre-order unlock date, even if some of the included products are already released.

If you want to make a product that you've included in a pre-order bundle available to play immediately, speak to your Microsoft contacts. An example of this scenario would be to include a previously released game in the pre-order bundle for an upcoming game.

You can acquire a pre-order product using a [Promo Code](publishing-processes-promo-codes.md).

### Testing pre-order products

Redeeming a Promo Code for a product that has a pre-order configuration will grant the user's account a pre-order entitlement. As a result, the product can't be played until the release or pre-order unlock date. If you want to test a product that has a pre-order configuration, use the following guidance according to your product type.
 - **Pre-order bundles:** Generate and redeem a Promo Code for each product included in the pre-order bundle unless these products are also available for pre-order individually.
 - **Game or Durable products with a pre-order configuration** Create a pre-order unlock bundle, then generate and redeem a Promo Code for this bundle. For more information, see [Create a pre-order unlock bundle](../../how-to/how-to-create-preorder-unlock-bundle.md).

For more information about Promo Codes, see [Ordering Promo Codes](publishing-processes-promo-codes.md).

> [!NOTE]
> When testing any products before release, consider using accounts with restricted privacy settings. Also consider using the configuration options available in Partner Center, such as [Private Audience](../../concepts/availability/visibility-audiences.md) and [Xbox Embargo](../../concepts/xbox-services.md#embargo-date), to prevent unintended visibility of the products before the pre-order begins.

## See also

 - [Pricing & Availability - Pre-orders](../../concepts/availability/preorder-overview.md)
 - [How to configure a pre-order](../../how-to/how-to-preorder.md)
