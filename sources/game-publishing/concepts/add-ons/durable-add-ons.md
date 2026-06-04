---
title: Durable add-ons
description: Durable add-ons.
services: gaming
author: joannaleecy
ms.author: mingshen
ms.service: gaming
ms.topic: article
ms.date: 9/25/2023
keywords: bundles
ms.localizationpriority: medium
permissioned-type: public
---

# Durable add-ons

Game products support two different types of durable add-on: Durable and Durable with packages. Both types of add-on are commonly used to unlock additional functionality or content in the game. The type of add-on most relevant for your game will depend on how you package and distribute the content.

## Durable

Durable products are commonly used if your add-on is typically purchased only once and the content itself is included in the base game's package. Durables can't be included on a physical disc because there is no package that can be included. If you need to include the add-on on a physical disc, use the [Durable with packages](#durable-with-packages) add-on type.

The default Product lifetime for a durable add-on is **Forever**, which means the add-on never expires. You have the option to set the Product lifetime to a different duration in the Properties step of the add-on submission process. If you do so, the add-on will expire after the duration you specify (with options from 1-365 days), in which case a customer could purchase it again after it expires.

After the customer purchases the add-on, the game must react to the acquisition and ensure that the correct content is made available.

For more information, see [How to use a Durable without a package](/gaming/gdk/_content/gc/commerce/fundamentals/xstore-dwobs).

## Durable with packages

Durable with packages products are commonly used if your add-on is typically purchased only once and you will include the add-on on a physical disc, or if you need to package additional content that is not included in the base game package.

Unlike the [Durable](#durable) add-on type, after the customer purchases the add-on, they must download and install the add-on's package. Without the package, the game won't be able to properly license and mount the content. 

For more information, see [Manage and license downloadable content (DLC)](/gaming/gdk/_content/gc/commerce/fundamentals/xstore-manage-and-license-optional-packages).

## Additional information

For **Durables** and **Durables with packages**, consider the following information.

* You **must** provide age ratings for durable add-ons. To do this, select the **Age ratings** menu option on the left navigation of your product in Partner Center. If the age ratings are to be the same as they are for the base game product, you can simply select **This add-on does not require more restrictive ratings than its parent product**. For information about age ratings, see [Age ratings](../age-ratings.md).

For **Durables with packages**, consider the following information.

* Because the durable requires a package, there will be a **Packages** section for configuration. This works the same way as it does in [Game packages](../packages-overview.md).

* To be visible in the Microsoft Store, your durable with packages must have a standalone Store listing. Select this option in the **Visibility** section of the **Pricing and availability** page. For details, see [Store listings](../store-listing.md).

## Create a Durable or Durable with packages

For instructions to create a Durable or Durable with packages, see [How to create products new products - add-ons](../../how-to/how-to-create-new-products.md#configuration-for-add-on-products).

## Next steps

* [Configure a Durable add-on for a game](../../tutorial-xbox-managed/how-to-configure-a-durable.md)

## See also

* [How to use a Durable without a package](/gaming/gdk/_content/gc/commerce/fundamentals/xstore-dwobs)
* [Choosing the right product type](/gaming/gdk/_content/gc/commerce/getting-started/xstore-choosing-the-right-product-type)
* [Open and restrictive licensing](../licensing/open-and-restrictive-licensing.md)
