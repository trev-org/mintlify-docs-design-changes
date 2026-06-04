---
title: Add-ons
description: You can create add-ons in the Microsoft Store.
services: gaming
author: FLY1NGSQU1RR3L
ms.author: clintw
ms.service: gaming
ms.topic: article
ms.date: 1/15/2023
keywords: windows 10, publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Add-ons

[!INCLUDE [reminder](../includes/select-add-on-tab.md)]

Add-ons (also sometimes referred to as in-app purchases or downloadable content) are additional products for your game that can be purchased by customers.

Add-ons are published through Partner Center and require you to have an active developer account. You'll also need to enable the add-on in your game's code.

An add-on must be associated with a game that you've created in Partner Center (even if you haven't submitted it yet). You can create a new add-on using the **Add-ons** page that can be found on the left navigation pane of your product.

## Types of add-ons

These are add-ons that you can create for your games.

* [Consumable](#consumable) (Microsoft Store-managed or Developer-managed)
* [Durable](#durable) and [Durable with packages](#durable-with-packages)
* [Add-on Bundle](#add-on-bundle)
* [Season Pass](#season-pass)
* [Subscription](#subscription)

For more information for Managed Creators, see  [Product creation and onboarding](../publishing-processes/managed-creators/publishing-processes-product-onboarding-and-configuration.md).

### Ability to create different types of add-ons

If you're in a managed Creator program, you're able to offer more types of add-ons to your customers.

| Add-on types| Not in a program | Managed Creators |
|-------------|----------|--------------------------|
| Consumable (Developer managed)       | o | o |
| Consumable (Microsoft Store-managed) | o | o |
| Durable                              | o | o |
| Durable with packages                |   | o |
| Season Pass                          |   | o |
| Subscription                         | o | o |
| Bundle                               |   | o |

o - indicates that you have the ability to create this add-on type.

## Partner Center sections to configure for add-ons

The following table indicates the different sections that you must complete or configure based on the add-on type.

| Add-on | Setup | Properties | Age ratings | Store listings | Pricing and availability | Gaming metadata |
|--------|--------|------------|-------------|----------------|--------------------------|-----------------|
| Consumable (Developer managed)       | o  | o  |    | o&ast; | o |  |
| Consumable (Microsoft Store-managed) | o  | o  |    | o&ast; | o |  |
| Durable                              | o  | o  | o  | o&ast; | o | o |
| Durable with packages                | o  | o  | o  | o&ast; | o | o |
| Add-on bundle                        | o  | o  | o  | o     | o | o |
| Season Pass                          | o  | o  | o  | o | o | o |
| Subscription                         | o  | o  |    | o     | o | o |

o - indicates that you must complete or configure the section.
&ast; - indicates optional requirements

### Visibility and Store listing

Store listings are optional for many add-on types (see [Sections to configure](#partner-center-sections-to-configure-for-add-ons)). If an add-on has its own Microsoft Store listing, it can also be displayed on the parent product's Store Product Details Page (PDP).  

Add-ons without their own listing in the Store don't require you to create a Store listing. Note that this is separate from the parent product (game) that's required to have a Store listing. Add-ons without a Store listing can be configured for purchase only from within your game, based on their configured **Schedule**.

To learn more, see [Create an add-on Store listing](../how-to/how-to-create-a-separate-store-listing-for-an-add-on.md).

## Consumable

If the add-on can be purchased, used (consumed), and purchased again, you'll want to select one of the consumable product types. Consumable add-ons are often used for things like in-game currency such as gold, coins, which can be purchased in set amounts and used up by the customer.

There are two types of consumable add-ons:

* **Developer-managed consumable:** This type of consumable can only be purchased a single time before it is fulfilled or consumed by the client, which makes it purchasable again. This fulfillment operation is what the game would use to assign a reward which is entirely tracked by the game.
* **Microsoft Store-managed consumable:** This type of consumable is associated with a quantity granted to the user on purchase that's added to their remaining balance of that consumable to use in-game that's tracked with the Store APIs. When the game reports an amount as fulfilled or consumed in-game the service deducts that amount from the user's remaining balance. The quantity granted on purchase is configured in the product setup. Store-managed consumables can be purchased repeatedly without the product being reported as fulfilled or consumed.

## Durable

Select **Durable** as your product type if your add-on is typically purchased once and the content itself is included in the base game package. These add-ons are often used to unlock additional functionality in a game.

Durable add-ons are commonly used for offering additional content that's not part of the base game experience, such as narrative chapters, expansion modes, vehicles, environments, and character assets.

The default Product lifetime for a Durable add-on is **Forever**, which means the add-on never expires. You have the option to set the Product lifetime to a different duration in the Properties step of the add-on submission process. If you do so, the add-on will expire after the duration you specify (with options from 1-365 days), in which case a customer could purchase it again after it expires.

## Durable with packages

Select **Durable with packages** as your product type if your add-on is typically purchased once and you'll include the add-on on a physical disc, or if you need to package additional content that's not included in the base game package. These add-ons are often used to unlock additional functionality in a game.

Like the [Durable](#durable) add-on type, a Durable with packages is commonly used for offering additional content that's not part of the base game experience, such as narrative chapters, expansion modes, vehicles, environments, and character assets. After the customer purchases the add-on, download and installation of the package will be required to properly license and mount the content.

## Add-on Bundle

An Add-on Bundle is a collection of add-ons that customers can purchase as one product in the Store.

An Add-on Bundle is similar to a [Season Pass](#season-pass). However, an Add-on Bundle must include at least one product before it can be published. A Season Pass or Add-on Bundle only includes the add-ons that are under the same parent product. It is possible to add Durable products to a Season Pass or Add-on Bundle after it has been published. Consumables can't be added to either the Season Pass or Add-on Bundles after publishing. For more information, see [How to add and edit products in a bundle](../how-to/how-to-addeditproductstobundle.md).

## Season Pass

A Season Pass is a type of an add-on that lets customers download specified add-ons under the parent product. A Season Pass is commonly used for games as a way to promise customers access to new and forthcoming DLC (downloadable content).

A Season Pass is similar to an [add-on bundle](#add-on-bundle). However, a Season Pass can be published empty whereas an Add-on Bundle must include at least one product. A Season Pass can be updated to include new add-ons as they are released. For more information, see [How to add and edit products in a bundle](../how-to/how-to-addeditproductstobundle.md).

To create a Season Pass, create a new Add-on Bundle and select the option for **Make this product a Season Pass** during the product creation.

## Subscription

Subscription products are configured by Microsoft. Speak to your Microsoft contacts for more information.

## Next steps

* [Create a new add-on](../how-to/how-to-create-new-products.md)

## See also

* [Choosing the right product type](/gaming/gdk/_content/gc/commerce/getting-started/xstore-choosing-the-right-product-type)
