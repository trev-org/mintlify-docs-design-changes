---
title: How to configure a pre-order early access bundle
description: How to configure a pre-order early access bundle.
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

# How to configure a pre-order early access bundle

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

[!INCLUDE [reminder](../includes/web-scraping-disclaimer.md)]

## Definition

Pre-order bundles enable you to offer multiple products to users for purchase in a single transaction, prior to the release date of the products. Pre-orders should be approved by Microsoft. For more information about submitting a pre-order plan for approval, see [Configuring pre-order products](../publishing-processes/managed-creators/publishing-processes-configuring-pre-orders.md). 

This scenario is for a pre-order configuration that allows users who purchase a specific Bundle to use the products included in the Bundle before the release date. This is commonly used as a pre-order incentive.
  
## Product types this applies to

 - Game Bundle

## Configuration

 1. Go to the product you would like to configure the pre-order for in **Partner Center**.
 2. Select **Pricing and availability** from the page navigation.
 3. In the **Markets** section, **All worldwide markets** is selected by default. Select **Show options** to remove specific markets, or use **Restrict to specific markets** and then select **Show options** to choose the markets that the product will be available in.
 4. In the **Visibility** section, select **Make this product available and discoverable in the Microsoft Store**.
 5. In the **Schedule** section, select the following options.
    1. **Release:** Select **at**, and then enter a date and time for the Early Access release of the product.
    2. **Pre-order:** Select **starts at**, and then enter a date and time for the pre-order to begin.
    3. **Discoverable in the Microsoft Store:** Select **at**, and then enter a date and time for the product to become discoverable and visible in the Store (usually the same as the pre-order start date).
    4. **Stop acquisition:**
       1. If this Bundle will be replaced with a different Bundle or Game product after the release date, select **at** and then enter a date and time for the pre-order to end (usually the same as the release date of the product).
       2. If this Bundle will be purchasable after the release date, select **Never**.
    5. **No longer discoverable in the Microsoft Store:** Select **Never**.
 6. In the **Pricing** section, set your pricing for the product.
 7. Select **Save draft**.
 8. When you're ready, select **Review and publish** to publish your configuration to your development sandbox or RETAIL.

## See also

 -  [Bundles](../concepts/bundle.md)
 -  [Pre-orders](../concepts/availability/preorder-overview.md)
 -  [Configuring pre-order products](../publishing-processes/managed-creators/publishing-processes-configuring-pre-orders.md)
