---
title: Pre-orders
description: Understand Pre-orders.
services: gaming
author: FLY1NGSQU1RR3L
ms.author: clintw
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Pre-orders

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

[!INCLUDE [reminder](../../includes/web-scraping-disclaimer.md)]

A pre-order allows customers to search for, view, and purchase your product before it's released. Customers who pre-order a product can download the published package to their devices immediately, but they won't be able to launch/play the product until the release date. Customers will be billed according to the [Store Terms of Sale](https://www.microsoft.com/store/b/terms-of-use-and-sale).

Many pre-order scenarios also include one or more pre-order bundles that include products that can only be acquired through the pre-order bundles. In many cases, a pre-order product is a bundle, so the ability to pre-download and then launch/play refers to the products in the bundles. It's important to note that the properties of a pre-order product applies to all products in the bundle as well.

> [!IMPORTANT]
> Tokens for a pre-order product will redeem throughout the lifetime of the product. If you want to prevent tokens from being used to redeem the product before a specific date, select the **Disable Store presence** option under **Advanced discoverability**. For pre-order products that can only be acquired by tokens and have **Disable Store presence** selected (also known as hidden pre-orders), they remain hidden until the start of the pre-order period. This means that tokens can't be redeemed until pre-order starts. To learn more, see [Visibility](visibility.md). It's important to note that no matter how the pre-order has been acquired, a user will not be able to launch/play the product until the pre-order unlock date.

## Pre-order process

Pre-orders should be approved by Microsoft. To learn more, see [Configuring pre-order products](../../publishing-processes/managed-creators/publishing-processes-configuring-pre-orders.md).

## Products this scenario applies to

* Game
* Game Demo
* Game bundle
* Add-on Bundle
* Durable
* Durable with packages

## Products this scenario does NOT apply to

* Season Pass
* Consumable (Microsoft Store-managed)
* Consumable (Developer-managed)

## Visible pre-order

* A pre-order configuration where the product is visible/purchasable.
* The pre-order be configured for a bundle or individual product.
* The product can be removed from sale after the pre-order period, or it can be made available for purchase indefinitely.
* You can configure multiple individual products or bundles for pre-order; for example, to have unique configurations for specific periods of time or to offer different editions of your product.
* For instructions, see [How to configure a Game or Durable pre-order](../../how-to/how-to-create-preorder-visible-product.md) or [How to configure a pre-order bundle](../../how-to/how-to-create-preorder-visible-bundle.md).

## Hidden pre-order

* Same as a visible pre-order except the pre-order product will not be visible/discoverable in the Microsoft Store.
* This version would be displayed to a customer via an in-game store or other entity in order for them to access.
* This can be used on "Loyalty edition" pre-order Bundles for franchise titles. The hidden pre-order Bundle for the new game in the franchise will be priced with a discount and only exposed in the in game store of the last game version in the franchise.
* The pre-order can be removed from sale after the pre-order period, or it can be made available for purchase indefinitely.
* **NOTE:** Because this product is hidden, it will still have a Product Details Page (PDP) that can be viewed with a direct link.

For instructions, see [How to configure a hidden pre-order](../../how-to/how-to-create-preorder-hidden-products.md).

## Early Access Bundle

* The product will be on pre-order until the early access date, which is before the title would normally release.
* At the early access date, the product will unlock, allowing users to launch/play the product.
* If the early access Bundle will not be sold after the normal title release date, the bundle will continue to be purchasable until the normal title release date. The bundle then will become hidden/not purchasable.
* Example: The ultimate version of a Bundle for Game A will give users who purchase it 3 days early access to the game, allowing those users to start playing 3 days before the "normal" title release date.

For instructions, see [How to configure an early access bundle pre-order](../../how-to/how-to-create-preorder-early-access-bundle.md).

## Pre-order Bundle containing a product that is already released and requires immediate access

* **Game A** is already released and playable by users.
* There is a new bundle launching that includes **Game A**, and the bundle will have a pre-order period.
* Because **Game A** is already released, users should be able to play it, even if the pre-order bundle hasn't unlocked/released yet.
* This scenario is configured like any other pre-order scenario but requires a configuration in the "Free to use" section of the Game product in order to work. To learn more, see [How to set up free-to-use scenarios](../../how-to/how-to-freetouse.md).

## Pre-order unlock bundle

Pre-order unlock bundle is a configuration that uses a **Game Bundle** product to bypass the granted entitlement start date that is set for the products that are included in a pre-order bundle. These products can be used immediately. This configuration can be used to enable users, including reviewers or testers, to use these products before the release date.

This unlock bundle can only be acquired by redeeming a Promotional Code.

For instructions, see [How to configure a pre-order unlock bundle](../../how-to/how-to-create-preorder-unlock-bundle.md).

## Additional considerations for Game pre-orders

All **Game** products made available for pre-order in the Microsoft Store require:

 - A certified [Package](../../concepts/packages-overview.md). Speak to your Microsoft contacts if you're not ready to submit a game package for Certification, or consider setting up a [Wish List page](../../publishing-processes/managed-creators/publishing-processes-wishlist-pages.md) instead of a pre-order.
 - Published **Xbox services**. The Xbox services configuration includes your Achievements, Presence and Multiplayer settings. To prevent unintended exposure of this information, configure [Xbox Embargo](../../concepts/xbox-services.md#embargo-date).

## Next steps

* [How to configure pre-orders](../../how-to/how-to-preorder.md)
* [Plan and manage pre-order products](../../publishing-processes/managed-creators/publishing-processes-configuring-pre-orders.md)
