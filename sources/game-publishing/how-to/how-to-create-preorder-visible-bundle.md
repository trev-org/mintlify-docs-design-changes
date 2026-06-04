---
title: How to configure a pre-order bundle
description: How to configure a pre-order bundle.
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

# How to configure a pre-order bundle

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

[!INCLUDE [reminder](../includes/web-scraping-disclaimer.md)]

## Definition

Pre-order bundles enable you to offer multiple products to users for purchase in a single transaction, prior to the release date of the products. Pre-orders should be approved by Microsoft. For more information about submitting a pre-order plan for approval, see [Configuring pre-order products](../publishing-processes/managed-creators/publishing-processes-configuring-pre-orders.md). 

This scenario is for a pre-order configuration on a Bundle product, or a set of Bundle products, for multiple editions of a release. There are two scenarios covered in this topic.

 - Pre-order bundle where the Bundle is still purchasable after the pre-order period
 - Pre-order bundle where the Bundle isn't purchasable after the pre-order period
    - Use this scenario if you're releasing bundles with different products than the pre-order bundle included after the initial release of your product. You can't remove products from a bundle after it has been published to the RETAIL sandbox.
  
## Product types this applies to

 - Bundle
 - Add-on Bundle

## Pre-order bundle where the Bundle is still purchasable after the pre-order period

Use this scenario if you want to sell the Bundle during the pre-order period and after the release date of the bundle.

### Configuration

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

## Pre-order bundle where the Bundle is not purchasable after the pre-order period

Use this scenario if you want to stop selling the Bundle after the pre-order period and will replace it with a different product, such as a Day 1 Bundle or Game.

### Configuration

 1. Go to the product you want to configure the pre-order for in **Partner Center**.
 2. Select **Pricing and availability** from the page navigation.
 3. In the **Markets** section, **All worldwide markets** is selected by default. Select **Show options** to remove specific markets, or use **Restrict to specific markets** and then select **Show options** to choose the markets that the product will be available in.
 4. In the **Visibility** section, select **Make this product available and discoverable in the Microsoft Store**.
 5. In the **Schedule** section, select the following options.
    - **Release:** Select **not scheduled**.
    - **Pre-order:** Select **starts at**, and then enter a date and time for the pre-order to begin.
    - **Pre-order:** Select **unlocks at**, and then enter a date and time for the pre-order to unlock (usually the release date of the product).
    - **Discoverable in the Microsoft Store:** Select **at**, and then enter a date and time for the product to become discoverable and visible in the Store (usually the same as the pre-order start date).
    - **Stop acquisition:** Select **at**, and then enter a date and time for the pre-order to end (usually the release date of the product).
    - **No longer discoverable in the Microsoft Store:** Select **Never** or select **at**, and then enter a date and time for the bundle to no longer be discoverable or visible (usually the date set for **Stop acquisition**).
 6. In the **Pricing** section, set your pricing for the product.
 7. Select **Save draft**.
 8. When you're ready, select **Review and publish** to publish your configuration to your development sandbox or RETAIL.

> [!NOTE]
> If the **Pre-Order** options aren't available in the **Schedule** section, configure a date for the **Release** option (it can be any placeholder date), and then configure a pre-order date when the option appears. You can then change the **Release** option back to **not scheduled** if you need to.

## See also

 - [Pre-orders](../concepts/availability/preorder-overview.md)
 - [Bundles](../concepts/bundle.md)
 - [Add-ons](../concepts/add-ons.md)
