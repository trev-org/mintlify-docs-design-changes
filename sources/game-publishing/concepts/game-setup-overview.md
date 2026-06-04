---
title: Game setup
description: Game setup page in Partner Center.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 3/11/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Product setup

Use the product setup page, such as **Game setup** for game products or **Bundle setup** for game bundles, to configure general product configuration options.

## Product group
_Applies to: Game, Game Demo, Game Bundle_

You can configure Game, Game Demo, and Game Bundle products to be members of a **Product group**. A product group acts as a container to help you organize your products in the **Apps and Games** dashboard.

To configure the product as a member of a group, select the desired group from the dropdown menu, and then select **Save draft** at the bottom of the page.

You can create a new product group from the **Apps and Games** dashboard in Partner Center.

 1. Go to the **Apps and Games** dashboard.
 1. Select **New Product**.
 1. Select **Product group**.
 1. Define a **Product group name**, **Dev studio**, and the products to include in the group.
    1. If you need to, **create a new dev studio**. This name helps filter products and product groups by Dev Studio.
 1. Select **Save**.

## Content type
_Applies to: Durable, Durable with Packages, Consumable_

Use the **Content type** dropdown to specify the type of content that the product includes. For gaming add-ons, the most common selection is **Electronic software download**.

## Microsoft Store listing
_Applies to: Durable, Durable with Packages, Consumable, Season Pass, Add-on Bundle._

Use the **Microsoft Store listing** options to specify if the product should have its own store listing. Products that are sold through an in-game store might not require a store listing.

> [!NOTE]
> A **Microsoft Store listing** is mandatory for Game, Game Bundle, and Game Demo products.

## Device family availability
_Applies to: All product types_

**Device family availability** indicates whether your product is offered to customers on each device family. You can specify device family availability for **Retail** or **Sandboxes**.

* **Retail** is required for publishing to the RETAIL sandbox. If you select this option, the system automatically selects the sandboxes option.
* **Sandboxes** is required for publishing to a development sandbox or submitting for Certification.

If you don't check the box for **Sandboxes** or **Retail** for a device family, you can't upload and publish packages for this device family.

## Xbox services
_Applies to: Game, Game Demo_

Limited Xbox services are enabled for a Game or Game Demo the first time you save the **Game setup** page. While limited Xbox services are enabled, you can't configure Xbox achievements.

If you're a Managed Creator with an approved [game concept](../publishing-processes/managed-creators/publishing-processes-game-concepts.md), full Xbox services (including Xbox achievements) are enabled the first time you save the **Game setup** page after your Microsoft contacts onboard your product. For more information, see [Create an Xbox game and configure Game setup](../tutorial-xbox-managed/how-to-create-a-title-and-configure-game-setup.md).

If you're using [game binding](/gaming/gdk/_content/gc/live/concepts/game-binding/game-binding-overview) to connect two products through their Xbox services, the secondary product's Xbox services remain disabled.

## Sandboxes

The sandboxes selection indicates whether the product uses the sandboxes for content isolation. You specify this option when you first create the product. You can't change it later. For more information, see [Sandboxes](sandboxes.md).

### Primary Xbox services development sandbox

Use the dropdown menu to specify the primary development sandbox you use during development. This option adds a branch in your [Xbox services](xbox-services.md) gameplay settings configuration. To make the product available for development in other sandboxes, select **Manage sandboxes**. Remember that you need to publish your product to the development sandbox before you can use any of its features that you configure in Partner Center, such as Xbox services.

## Included products
_Applies to: Game Bundle, Add-on Bundle, Season Pass_

Use the **Included products** section to select the product you want to include in the bundle. You must publish the products you select to the Store before you can submit the bundle to Certification.

To add products to the bundle, choose from one of the following options.

* **Manage included products** - select multiple products after searching by name or selecting from a list of products.
* **Add products by Store ID** - select one product by entering the Store ID. You can find the Store ID on the product setup page in the **Identity Details** section.

After adding products to a bundle, specify the date and time that it should become **Visible in bundle**.

* Select **at bundle release** if the product should be visible when the bundle releases in the Store (configured in the Pricing and Availability *Schedule*).
* Select **at** and then define a date and time when the product should be visible on a different schedule than the bundle itself.
* Select **never** if the product is never displayed in the bundle.

> [!IMPORTANT]
> The **Visible in bundle** setting only defines when the product is displayed visibly within the bundle in the Store. Customers might still be able to discover and access the product depending on its own *Schedule* configuration in its *Pricing and availability*.

## Identity details

The **Identity details** section shows important identifiers for your product, including the Store ID, Legacy product ID, Xbox Title ID, Xbox Service Configuration ID, Microsoft account (MSA) App ID (MSAAppID), Package Identity Name, and Package Identity Publisher. Not all product types include every type of identifier.

The section also includes a Store protocol link and a Store URL for your product. The Store URL works only in the RETAIL sandbox, and only after your product is published to the RETAIL sandbox. Use the Store protocol link in the RETAIL or a development sandbox. It launches the Store app on your device and goes directly to your Store Product Details Page (PDP).

## Next steps

* [Packages](packages-overview.md)

## See also

* [Game Binding overview](/gaming/gdk/_content/gc/live/concepts/game-binding/game-binding-overview)
