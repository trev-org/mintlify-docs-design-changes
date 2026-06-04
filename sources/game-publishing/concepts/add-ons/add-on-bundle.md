---
title: Add-on bundle and Season Pass
description: Add-on bundle and Season Pass
services: gaming
author: joannaleecy
ms.author: mingshen
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: Season Pass
ms.localizationpriority: medium
permissioned-type: public
---

# Add-on bundle and Season Pass

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

An Add-on bundle is a type of an add-on that lets customers acquire specified add-ons under the parent product in a single transaction. When creating an Add-on bundle, it can also be configured to be a Season Pass if your account has the proper permissions. 

This topic walks you through the aspects of publishing specific to Season Passes. For general information on add-ons, see [Add-ons](../add-ons.md).

When you publish an Add-on bundle or Season Pass to RETAIL, all included products—even those with release dates in the future—will become available to owners of the Add-on bundle or Season Pass. For details, see [Include products in a Season Pass](#include-products-in-an-add-on-bundle-or-season-pass).

## Season Pass

A Season Pass is commonly used for games as a way to promise customers access to new and forthcoming DLC (downloadable content). An Add-on bundle and Season Pass are similar. However, a Season Pass can be published empty (with no included members), whereas an Add-on bundle must include at least one member. Like an Add-on bundle, a Season Pass can only include add-ons that are under the same parent product.

## Create an Add-on bundle or Season Pass

1. Navigate to your Game product in Partner Center.
2. Select **Add-ons** from the left navigation.
3. On the **Add-ons** page, select **+ Create a new** and then select **Add-on bundle**.
4. If you're creating a Season Pass, select the checkbox for **Make this product a Season Pass**.
5. Enter an **Add-on title**. That's the title of your Add-on bundle or Season Pass, and it will be displayed in the Store listing.

For more information, see [Create and publish add-ons](../../tutorial-xbox-managed/how-to-create-use-publish-add-ons.md).

The rest of the publishing process is almost the same as it is for other add-ons. However, it has the following exceptions.

### Include products in an Add-on bundle or Season Pass

Products in an Add-on bundle or Season Pass will be available to its owners immediately when you publish it to RETAIL, even if the products have a release date in the future. For example, if you have a published Season Pass that customers have already acquired, and if you add a durable with the release date scheduled for next week, customers who own the Season Pass will get the durable immediately when the update to the bundle members is published to RETAIL. Customers who don't own the Season Pass will be able to acquire the durable only if it's configured for individual sale and if its release date has passed.

The **Properties** page for the Add-on bundle or Season Pass has an **In this bundle/Season Pass** section (much like with [bundles](../bundle.md)) where you can choose products to be included. These products must be under the same parent product, and they must be published to the RETAIL sandbox before they can be included. If you're configuring a Season Pass, you can leave the included products empty when you publish it for the first time. If you're configuring an Add-on bundle, you must include at least one product. You can include Durable, Durable with packages or Consumable products in the Add-on bundle or Season Pass. However, you can't add consumables if you've already published the Add-on bundle or Season Pass to RETAIL. You can add new Durables or Durable with packages to the Add-on bundle or Season Pass in the future.

To add a product to an Add-on bundle or Season Pass, select the product from the list under **Products** and then select **Add**. You can add all add-ons of a product by selecting **Add-ons for *Product name***, or you can add individual add-ons by selecting **See all** to expand the list. You can remove products from an Add-on bundle or Season Pass only if it hasn't been published to RETAIL. To remove a product, select it from the list under **Include in this bundle/Season Pass** and then select **Remove**.

### Set device family availability

You can offer an Add-on bundle or Season Pass only on platforms that are supported by all included add-ons. For example, if you have a Season Pass with two durables, one published to Xbox and one to both Xbox and PC, you can offer the Season Pass only on Xbox. 

## Next steps

* [How to add and edit products in a bundle](../../how-to/how-to-addeditproductstobundle.md)

## See also

* [Add-ons](../add-ons.md)
* [Bundles](../bundle.md)
* [Choosing the right product type](/gaming/gdk/_content/gc/commerce/getting-started/xstore-choosing-the-right-product-type)
