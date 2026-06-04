---
title: How to add and edit products in a Bundle
description: How to add and edit products in a Bundle.
services: gaming
author: joannaleecy
ms.author: aarathin
ms.service: gaming
ms.topic: article
ms.date: 8/15/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# How to add and edit products in a bundle

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

## Definition

This scenario covers adding new products to a bundle or editing existing bundle configurations.

## Product types this applies to

 - Game Bundle
 - Add-on Bundle
 - Season Pass

## Configuration

To add products to a game bundle: 

 1. Go to the bundle product in Partner Center.
 2. Select **Bundle setup** from the page navigation.
 3. Select **Manage Included Products** or **Add products by StoreID**.
 4. Identify and select the products you want to add to the bundle.
 5. Use the dropdown list for each added product to define when you want it to be visible in the bundle.
    1. **Note:** Visibility only defines when the product is displayed to users as an included product of the bundle. The product might still be discoverable and accessible, depending on the product's own Schedule configuration.
 7. Select **Save draft**.
 8. When you're ready, select **Review and Publish** to publish your changes to your development sandbox or RETAIL.

## Notes

 - Products can only be removed from bundles if the bundle hasn't been published to the RETAIL sandbox.
 - After a bundle has been published to the RETAIL sandbox, you can't add Consumable product types.
 - You must publish all products included in a bundle before you can publish the bundle itself. This applies to both the RETAIL sandbox and any developer sandboxes you're testing in.
 - Season Pass is the only bundle product-type that can be published without any included items. All other types of bundles must include at least one product.
 - If you want your bundle to include products from another Partner Center account (for example, in a cross-publisher bundle scenario), speak to your Microsoft contacts.

## See also

* [Bundles](../concepts/bundle.md)
* [Add-on bundle and Season Pass](../concepts/add-ons/add-on-bundle.md)
