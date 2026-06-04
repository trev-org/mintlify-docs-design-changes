---
title: "Choosing the right product type"
description: "Describes the different product types in the Microsoft Store and scenarios that fit best for each one."
kindex: Choosing the right product type
author: joannaleecy
ms.author: cagood
ms.topic: article
edited: '02/24/2026'
ms.date: '08/01/2022'
permissioned-type: public
---


# Choosing the right product type

It's important to choose the right product type for monetization features you're offering.
All products start with configuration in Partner Center, where the following types are supported:

| Type | Summary | Examples |
| ---- | - | - |
| [Bundles](#bundles) | A single product that includes multiple products for a single price. | Season Pass, Game Compilation, Pre-order, etc. |
| [Consumables](#consumables) | Micro-transaction based products that can be repurchased. | Premium In-game currency |
| [Durables](#durables) | Add-on products that are intended to be purchased once. | Expansion packs, pre-order incentive content, etc. |
| [Subscription](#subscriptions) | A recurring transaction product that can be auto-renewed or canceled. | Publisher or Game specific subscription |

This section goes over each and the scenarios where the products are used.

## ProductKind index

The following table provides an index of the ProductKind value of each product type discussed in this article.
The ProductKind is used when querying the available products and the users entitlements with the XStore API's or [Managing products from your services](../service-to-service/service-to-service-nav.md).

| Product type | ProductKind value |
| ------------ | ----------------- |
| Base Game | `Game` |
| [Game Bundle](#game-bundle) | `Game` |
| [Add-on Bundle](#add-on-bundle) | `Durable` |
| [Season Pass](#season-pass) | `Durable` |
| [Store-managed Consumable](#microsoft-store-managed-consumable) | `Consumable` |
| [Developer-managed Consumable](#developer-managed-consumable) | `UnmanagedConsumable` |
| [Durable with a package](#durable-with-a-package) | `Durable` |
| [Durable without a package](#durable-without-a-package) | `Durable` |
| [Store-managed Subscription](#subscriptions) | `Pass` |
| [Add-on Subscription](#subscriptions) | `Durable` |

## Bundles

There are three different bundle product types within the Microsoft Store that have different functionality and uses:

| Type | Can add to | Can be empty | Can include game |
| ---- | ---------- | ------------ | ---------------- |
| [Game Bundle](#game-bundle) | Yes | No | Yes |
| [Add-on Bundle](#add-on-bundle) | Yes | No | No |
| [Season Pass](#season-pass) | Yes | Yes | No |

> [!NOTE]
> After a bundle is published to RETAIL, included products can't be removed from the bundle.

For more information, see [Bundles and Season Passes](../fundamentals/xstore-bundles-and-season-passes.md).

### Game Bundle

Contains a base game bundled with one or more add-ons or other games as different editions or to offer multiple games as a compilation.
Products can be added to a bundle after publish, but not removed.
Game bundles are also used to define compilation discs, which include one or more games and their associated DLC.

This product type isn't an add-on, but instead it's created by selecting 'Create a new bundle' from the publisher's products Overview page in Partner Center.

For more information, see [Using a Game Bundle with your game](../fundamentals/xstore-bundles-and-season-passes.md#using-a-game-bundle-with-your-game)

### Add-on bundle

Includes multiple released add-on products associated with a single title.
Add-on bundles are good options for providing the best content of your title at a discounted price for new users, for example, after a free-play weekend.

### Season Pass

A special case of an add-on bundle that contains products not yet released and are added to the bundle later.
Upon release, at least one product is required to be included in the Season Pass however.
Note, it isn't necessary to brand a Season Pass product with "Season Pass" in the name.
More than one Season Pass can be offered per-game as well.
For more examples and information, see [Using a Season Pass within your game](../fundamentals/xstore-bundles-and-season-passes.md#using-a-season-pass-within-your-game).

## Consumables

Consumable products are intended to provide temporary or limited use items in-game that the user can then repurchase and use.
Most commonly an in-game premium currency is implemented through consumable products.
Consumables are considered single-user purchases not shared through game licensing or sharing policies.
There are two consumable product types in the Microsoft Store:

| Type | Summary | Examples |
| ---- | ------- | -------- |
| [Store-managed Consumable](#microsoft-store-managed-consumable) | Can be purchased multiple times before being fulfilled, balance can be tracked through Microsoft Store or your own custom service. | Most in-game currencies and consumable products are configured as this type. |
| [Developer-managed Consumable](#developer-managed-consumable) | Can only be purchased again after the previous purchase is fulfilled to the Microsoft Store. | Consumable that is only intended to be purchased once such as an introductory in-game currency pack. |

The recommendation for games is to use [Microsoft Store-managed Consumables](#microsoft-store-managed-consumable) and configure each consumable tier or offering as its own productID to allow better flexibility and management.
For more information, see [Consumable-based ecosystems](../fundamentals/xstore-consumable-based-ecosystems.md).

### Microsoft Store-managed Consumable

This type of consumable is associated with a **quantity** granted to the user on purchase that is added to their remaining **balance** of that consumable to use in-game that is tracked with the Store APIs.
After the game reports an amount as fulfilled or consumed in-game, the service deducts that amount from the user's remaining balance on their Microsoft account.
The quantity granted on purchase is configured in the product setup. Microsoft Store-managed consumables can be purchased repeatedly without the product being reported as fulfilled or consumed.

The consumable balance can be queried and consumed using the `XStore` APIs or calls to the Microsoft Collections service.

For best practices and recommendations, see [Managing consumables](../fundamentals/xstore-consumable-based-ecosystems.md#managing-consumables).

This product type is also referenced as a "managed consumable" in some documentation.
Even though this consumable is titled "Store-managed," it can be fully consumed whenever the user's balance is greater than 0 and the corresponding in-game currency managed by your own services for the user.
For more information, see [Managing consumable products from your service](../service-to-service/xstore-managing-consumables-and-refunds.md).

### Developer-managed Consumable

The other type of consumable, **Developer-managed** is a product type that can only be purchased a single time before being fulfilled (that is, consumed) by the client, making it purchasable again.
This fulfillment operation is what the game would use to assign a reward tracked by the game.

One useful scenario is to offer a single-purchase consumable that represents a one-time reward that can't be replenished.
Simply don't fulfill the consumable and it can't be purchased after the initial purchase.
In contrast to a durable that needs to adhere to sharing behavior where consumables are per-user.

Also known as "unmanaged consumable."

## Durables

A Durable is intended for single-purchase items such as expansions, map packs, or other forms of downloadable content.
A Durable follows the [Product sharing model for games](../fundamentals/xstore-product-sharing-model-for-games.md) and can be enabled for other accounts on the device.

There are two types of durable products you can configure in Partner Center:

- [Durable with a package](#durable-with-a-package)
- [Durable without a package](#durable-without-a-package) (also known as Durable add-ons)

### Durable with a package

Commonly used for offering **additional** content that isn't part of the base game experience, such as narrative chapters, expansion modes, vehicles, environments, and character assets.
After purchase, download and installation of the package will be required to properly license and mount the content.

Just like with the base game, a package for each gaming device supported needs to be created and submitted for each durable with package product.

The game must support being able to purchase the durable products and react to the installation of the new content without needing to restart the game.
Specific APIs need to be called first to acquire a license for the package and then mount it for use.

If you plan to split up your game's content into separate durable packages for optional install and space saving purposes, consider using the [Features aspect of Intelligent Delivery](../../../features/common/packaging/intelligentdelivery-features-recipes.md) instead.

Also known as "optional packages."

### Durable without a package

Extra purchasable content that is included within the base game package to support online scenarios or design of the game.
A **Durable** type add-on can be more suitable here as no package creation and management is necessary for both the developer and consumer.

Similar to a durable with a package, this type still provides a license that can be validated at runtime according to the [Product sharing model for games](../fundamentals/xstore-product-sharing-model-for-games.md).
You must verify the license through the `XStore` APIs of these products to ensure access should be granted, especially when used with disc based games.

A Durable can also be offered with time-limited duration, after which the user will no longer own it and needs to repurchase it.

## Subscriptions

A subscription is a product that involves a recurring purchase to remain active.
They can be configured with multiple tiers, for example, monthly, yearly, etc.
There are two different types of subscription products in the Microsoft Store.
Developers need permissions enabled on their Partner Center accounts before being able to configure subscriptions.
For help with configuring or with getting access to these product types, work with your Developer Partner Manager or Microsoft contact.

| Subscription Type | Description |
| ----------------- | ----------- |
| Store-managed Subscription | Designed to be used for title-specific subscriptions, publisher level subscriptions across multiple titles, and cross-publisher subscriptions (Ex: Game Pass). |
| Add-on Subscription | Designed to be used only for a single title-specific subscription and is limited in features compared to a Store-managed subscription |

### Subscription comparison chart  

| Feature | Store-managed subscription | Add-on subscription |
| ------- | -------------------------- | ------------------- |
| ProductKind value | `Pass` | `Durable` |
| Store visibility | All public storefronts | In-game UI only |
| Pricing models | Per-region customization | Single global price |
| Customer tier switching | Yes | No |
| Redeem codes and promotions | Yes | No |

## See also

[Commerce Overview](../commerce-nav.md)

[XStore API reference](../../../reference/system/xstore/xstore_members.md)

[Product sharing model for games](../fundamentals/xstore-product-sharing-model-for-games.md)

[Consumable-based ecosystems](../fundamentals/xstore-consumable-based-ecosystems.md)

[Bundles and Season Passes](../fundamentals/xstore-bundles-and-season-passes.md)

[Manage and license downloadable content (DLC)](../fundamentals/xstore-manage-and-license-optional-packages.md)

[How to use a durable without a package](../fundamentals/xstore-dwobs.md)
