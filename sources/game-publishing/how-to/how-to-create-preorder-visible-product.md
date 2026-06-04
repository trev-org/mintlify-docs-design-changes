---
title: How to configure a Game or Durable pre-order
description: How to configure a Game or Durable pre-order.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 2/23/2026
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# How to configure a Game or Durable pre-order

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

[!INCLUDE [reminder](../includes/web-scraping-disclaimer.md)]

## Definition

Pre-orders enable you to sell your products to users before they're released. Pre-orders should be approved by Microsoft before being configured. For more information about submitting a pre-order plan for approval, see [Configuring pre-order products](../publishing-processes/managed-creators/publishing-processes-configuring-pre-orders.md). 

This scenario is for a pre-order configuration on a Game or Durable product. After the pre-order period ends, the product is still purchasable.
  
## Product types this applies to

 - Game
 - Durable/Durable with Packages

## Configuration for Game products

 1. Go to the product you want to configure the pre-order for in **Partner Center**.
 2. Select **Pricing and availability** from the page navigation.
 3. In the **Markets** section, **All worldwide markets** is selected by default. Select **Show options** to remove specific markets, or use **Restrict to specific markets** and then select **Show options** to choose the markets that the product will be available in.
 4. In the **Visibility** section, select **Make this product available and discoverable in the Microsoft Store**.
 5. In the **Schedule** section, select the following options.
    - **Release:** Select **at**, and then enter a date and time for the release of the product.
    - **Pre-order:** Select **starts at**, and then enter a date and time for the pre-order to begin.
    - **Discoverable in the Microsoft Store:** Select **at**, and then enter a date and time for the product to become discoverable and visible in the Store (usually the same as the pre-order start date).
    - **Stop acquisition:** Select **never**.
    - **No longer discoverable in the Microsoft Store:** Select **Never**.
 6. In the **Pricing** section, set your pricing for the product.
 7. Select **Save draft**.
 8. When you're ready, select **Review and publish** to publish your configuration to your development sandbox or RETAIL.

## Configuration for Durable/Durable with Packages products

 1. Go to the product you want to configure the pre-order for in **Partner Center**.
 2. Select **Pricing and availability** from the page navigation.
 3. In the **Markets** section, **All worldwide markets** is selected by default. Select **Show options** to remove specific markets, or use **Restrict to specific markets** and then select **Show options** to choose the markets that the product will be available in.
 4. In the **Visibility** section, select **Discoverable in the Microsoft Store through searching and browsing**.
 5. In the **Purchasability** section, select **Can be purchased (from within the parent product and from its own Microsoft Store listing)**.
 6. In the **Schedule** section, select the following options.
    - **Release:** Select **at**, and then enter a date and time for the release of the product.
    - **Pre-order:** Select **starts at**, and then enter a date and time for the pre-order to begin.
    - **Discoverable in the Microsoft Store:** Select **at**, and then enter a date and time for the product to become discoverable and visible in the Store (usually the same as the pre-order start date).
    - **Stop acquisition:** Select **never**.
    - **No longer discoverable in the Microsoft Store:** Select **Never**.
 7. In the **Pricing** section, set your pricing for the product.
 8. Select **Save draft**.
 9. When you're ready, select **Review and publish** to publish your configuration to your development sandbox or RETAIL.

## See also

If you're also including the product in a pre-order bundle, review the guidance at [Pre-orders](../concepts/availability/preorder-overview.md) and [How to configure a pre-order bundle](how-to-create-preorder-visible-bundle.md).
