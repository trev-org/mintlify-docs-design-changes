---
title: Product creation and onboarding
description: Guidance for Managed Creators about product creation and onboarding in Partner Center.
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

# Product creation and onboarding

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

This article provides guidance about creating new products and requesting product onboarding.

Create all new game, demo, bundle, or add-on products in [Partner Center](https://partner.microsoft.com/dashboard).

If you're a new creator who wants to join a managed program, register for the ID@Xbox program before opening a Partner Center account. For more information, see [New creator onboarding](publishing-processes-onboarding-new-creator.md). If you already release games on Xbox consoles or PC, you might already have a Partner Center account.

## Choose the right product type to create

The **Apps and Games** workspace in Partner Center offers several product types for Microsoft platforms, including **Games**, **Game Demos**, and **Game Bundles**.  

* Create a **Game** for full game products.
* Create a **Game demo** for betas or demos.
* Create a **Game bundle** for grouped offerings, such as multiple games or a game with add-ons.
* Create a **Product group** to organize all products associated with a single title. These groups only affect how the products are organized in Partner Center.

> [!NOTE]
> Create Durables, Consumables, Add-on Bundles, and Season Passes from the **Add-ons** section within a **Game**. For more information, see [Creating game add-ons](#create-game-add-ons).

To get started, see [How to create new products](../../how-to/how-to-create-new-products.md).

## Supported platforms

You can configure games, demos, bundles, and add-ons for PC, Xbox One consoles, and Xbox Series X|S. If you release on multiple platforms, decide how you want to structure your product offerings.

### Smart Delivery (Xbox consoles only)

A single product that supports Xbox One and Xbox Series X|S

* Upload separate packages for each console generation. Players automatically download the correct package for their device.
* Players own the product across both device families with one purchase.
* Use a single configuration for pricing, availability, and Store listings.
* Share Xbox services across console generations.
* If you also release on PC, combine Smart Delivery with Xbox Play Anywhere, Bound, or Unbound configurations.

### Xbox Play Anywhere (XPA)

A single product that supports both Xbox consoles and PC.

* Support Xbox One, Xbox Series X|S, or both.
* Enable cross-progression between Xbox console and Xbox on PC versions.
* Players receive Xbox Unified Entitlements, meaning they own the product both platforms with one purchase.
* Use a single configuration for pricing, availability, and Store listings.
* Share Xbox services across Xbox platforms.

For more information, review the **Xbox Play Anywhere Policy** in the [Xbox Publisher Guide](https://aka.ms/xboxpublisherguide).

### Separate Products (Bound)
Create one product per platform and link them through shared Xbox services.

* Bind products across platforms, such as Xbox One to Xbox Series X|S, or console to PC.
* You might need to support cross-progression. For details, see [XR-130](/gaming/gdk/_content/gc/policies/xr/xr130).
* Players only own the platform version they purchase.
* Configure pricing, availability, and Store listings separately for each platform.
* Configure Xbox services on a primary product and share them with a secondary product.

For more information, see [Game Binding](/gaming/gdk/_content/gc/live/concepts/game-binding/game-binding-overview).

### Separate Products (Unbound)

Create one independent per platform.

* You might need to support cross-progression. For more information, see [XR-130](/gaming/gdk/_content/gc/policies/xr/xr130).
* Configure Xbox services independently for each product.
* Players only own the platform version they purchase.
* Configure pricing, availability, Store listings, and Xbox services separately for each platform.

## Reserve a product name

When you create a **Game**, you must reserve a unique name. You can reserve other names later. 

This approach lets you use a code name during development and update it when the final name is confirmed. For more information, see [Create and reserve your game name](../../concepts/name.md).

> [!NOTE]
> The initial name you reserve becomes the display name in the Partner Center dashboard. It's also the **Identity name** for the game's packages. This name is visible to players after publishing to the **RETAIL** sandbox. Don't use a code name if players shouldn't see it later. You can't change **Identity details** after the game is created.

## Request product onboarding

Game, Game Bundle, and Season Pass products require onboarding.

After creating these products, send the Store ID to your Microsoft contacts and include:

* Supported platforms such as Xbox One, Xbox Series X|S, or PC.
* Planned participation in [managed programs](publishing-processes-managed-programs.md) such as Xbox Game Pass or Game Preview.
* Planned features such as Smart Delivery, Xbox Play Anywhere, or cross-generation bundles.

Game add-on products don't require onboarding, but you should still notify your Microsoft contacts when planning new content.

### Configure a revenue SKU

> [!IMPORTANT]
> You might not be able to publish to the RETAIL sandbox until you complete this step.

All products require a revenue SKU (rev SKU). After creating a product, send a request to your Microsoft contacts with the product name and Store ID.

## Complete Game setup

After you create a game, Partner Center opens the **Game setup** page. Here you:

 - Select environment availability, either **Retail**, **Sandboxes**, or both, for each device family, such as PC and console.
 - Choose a primary development [sandbox](../../concepts/sandboxes.md).
 - View **Identity details** and required identifiers for building XVC and MSIXVC packages.

### Enable Xbox features and services

If you save the Game setup page before you [request product onboarding](#request-product-onboarding), access to Xbox services and features is limited:

 - You can't target the Retail environment.
 - You can't configure Xbox achievements.

After your [Game Concept](publishing-processes-game-concepts.md) is approved, request product onboarding. Your game is then approved to use full Xbox services and features.

For more information, see [Configuring Xbox services](../../concepts/xbox-services.md).

### Manage development sandboxes

Select a primary development sandbox during setup. You can use up to 100 sandboxes per Partner Center account. Two types are available:

* **Isolated Sandboxes:** Restricted to products you specify.
* **Shared Sandboxes:** Available to all products in your account.

You can create and manage sandboxes at any time. Use isolated sandboxes to limit visibility between teams, and shared sandboxes for broader access, such as QA.

For more information about configuring sandboxes in Partner Center, see [Sandboxes](../../concepts/sandboxes.md). For more information about accessing sandboxes on your device, see [Xbox services sandbox overview](/gaming/gdk/docs/services/fundamentals/sandboxes/live-setup-sandbox).

## Create game add-ons

Create add-ons from the **Add-ons** section within a **Game**. 

Supported types include:

* **Durable with packages** or **Durable** for downloadable content (DLC) and permanent in-game content such as maps, vehicles, or expansions.
  - Use **Durable with packages** when content is delivered separately from the main game.
  - Use **Durable** when content unlocks through entitlement checks. This content can't ship on physical discs.
* **Store-managed consumable** for items such as in-game currency.

For more information, see [Add-ons](../../concepts/add-ons.md) and [Choosing the right product type](/gaming/gdk/_content/gc/commerce/getting-started/xstore-choosing-the-right-product-type).

## Add platforms after release

You can add platforms after release through the product setup page, such as **Game setup**. 

Select **Sandboxes** or **Retail** for the new platform.

After selection:
 - Upload packages for the new platform.
 - Certify packages before publishing to the **RETAIL** sandbox.

> [!IMPORTANT]
> Only select **Retail** when you're ready for the platform to appear on the product details page in the Microsoft Store.

New platforms inherit pricing and availability from existing configurations. You can't remove a platform after publishing to **RETAIL**.

> [!IMPORTANT]
> If the release date configured in **Pricing and availability** is in the past, players who already own the product can access the new platform immediately after it publishes to the **RETAIL** sandbox. For example, adding PC support to a previously released console title gives existing players instant access on PC.

## Next steps

After creating your product:

 - Request product onboarding.
 - Complete all product modules, such as **Store listings**, **Age ratings**, and **Properties**.
 - Continue development with the GDK.
 - Integrate Xbox services, such as sign-in, achievements, and connected storage.

## See also

* [Get started with the Microsoft Game Development Kit](/gaming/gdk/_content/gc/getstarted/get-started-home)
* [Configuring Xbox services](../../concepts/xbox-services.md)
* [Product setup](../../concepts/game-setup-overview.md)
* [Configure properties for a game](../../concepts/properties-overview.md)
* [Age ratings](../../concepts/age-ratings.md)
* [Packages](../../concepts/packages-overview.md)
* [Availability - markets, pricing, release schedule](../../concepts/availability/availability-overview.md)
* [Store listing](../../concepts/store-listing.md)
* [Add-ons](../../concepts/add-ons.md)




