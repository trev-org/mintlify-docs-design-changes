---
title: How to configure a product to be hidden and purchasable
description: How to configure a product to be hidden and purchasable.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---  
  
# How to configure a product to be hidden and purchasable

[!INCLUDE [reminder](../includes/web-scraping-disclaimer.md)]

## Definition  

This scenario is a hidden release with the following properties.  
 - Product can't be found in search results in the Microsoft Store.
 - Product isn't displayed in automatically populated product categories in the Microsoft Store.
 - Product can be accessed by any user who has a direct link to the product (web URL or app URI).
    - **Note:** Direct links to the product can be web scraped and are available via a user's purchase history.
 - Product is purchasable.  
    - Users can purchase the product by following a direct link to the product or if it's enumerated via the in-game store.
 - Product can be acquired by redemption of a Promotional Code.

## Products this applies to  
 - Game
 - Game Demo
 - Bundle
 - Add-On Bundle
 - Season Pass
 - Consumable
 - Durable/Durable with Packages

## Configuration for Game, Game Demo, Game bundle, Add-on bundle, and Season Pass

 1. Go to **Partner Center**.
 2. Locate the **product** that you want to configure.
 3. Select the **Pricing and availability** module from the product page navigation.
 4. If required, in the **Visibility** section, enable and configure **Private Audience**. For more information, see [Visibility - Audiences](../concepts/availability/visibility-audiences.md).
 5. In the **Discoverability** section, select **Make this product available but not discoverable in the Microsoft Store, and:** and then select **Direct link only**.
    - **Note:** With this configuration, it's not possible to configure a *Schedule*. The product will become accessible by using the direct link immediately after publishing.
 6. In the **Pricing** section, configure pricing as required.
    - **Note:** You can't configure pricing for Game Demo products.
 7. Scroll to the bottom of the page, and then select **Save draft**.
 8. When you're ready, select **Review and Publish** to publish your changes to your development sandbox or RETAIL.

## Configuration for Consumable and Durable/Durable with Packages products with a Store listing

 1. Go to **Partner Center**.
 2. Locate the **product** that you want to configure.
 3. Select the **Pricing and availability** module from the product page navigation.
 4. If required, in the **Visibility** section, enable and configure **Private Audience**. For more information, see [Visibility - Audiences](../concepts/availability/visibility-audiences.md).
 5. In the **Discoverability** section, select **Accessible only by direct link**.
    - **Note:** With this configuration, it's not possible to configure a *Schedule*. The product will become accessible by using the direct link immediately after publishing.
 7. In the **Purchasability** section, select **Can be purchased (from within the parent product only and from its own Microsoft Store listing)**.
 8. In the **Pricing** section, configure pricing as required.
 9. Scroll to the bottom of the page, and then select **Save draft**.
 10. When you're ready, select **Review and Publish** to publish your changes to your development sandbox or RETAIL.

## Configuration for Consumable and Durable/Durable with Packages products without a Store listing

 1. Go to **Partner Center**.
 2. Locate the **product** that you want to configure.
 3. Select the **Pricing and availability** module from the product page navigation.
 4. If required, in the **Visibility** section, enable and configure **Private Audience**. For more information, see [Visibility - Audiences](../concepts/availability/visibility-audiences.md).
 5. In the **Purchasability** section, select **Can be purchased (from within the parent product only)**.
 6. If required, configure the **Schedule** section by selecting **Show options** and then specify the **Release** date and time and the **Stop acquisition** date and time.
 7. In the **Pricing** section, configure pricing as required.
 8. Scroll to the bottom of the page, and then select **Save draft**.
 9. When you're ready, select **Review and Publish** to publish your changes to your development sandbox or RETAIL.

## See also

 - [Availability - markets, pricing, release schedule](../concepts/availability/availability-overview.md)
 - [Pre-orders](../concepts/availability/preorder-overview.md)
