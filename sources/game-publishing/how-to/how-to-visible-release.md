---
title: Configure a product to be visible and purchasable in the Microsoft Store   
description: Detailed instructions for configuring the pricing and availability page to make a product visible and purchasable in the Microsoft Store.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 2/19/2026
keywords: usage-limited free trials
ms.localizationpriority: medium
permissioned-type: public
---

# Configure a product to be visible and purchasable in the Microsoft Store  

[!INCLUDE [reminder](../includes/web-scraping-disclaimer.md)]

## Definition

This scenario is for a product release that is visible and discoverable in the Store and can be purchased or acquired by a Promotional Code.

## Product type this applies to

 - All product types

## Configuration

 1. Go to the product you would like to configure in **Partner Center**.
 2. Select **Pricing and availability** from the page navigation.
 3. In the **Markets** section, **All worldwide markets** is selected by default. Select **Show options** to remove specific markets, or use **Restrict to specific markets** and then select **Show options** to choose the markets that the product will be available in.
 4. In the **Visibility** section, select **Make this product available and discoverable in the Microsoft Store**.
 5. In the **Schedule** section, select the following options.
    - **Release:** Select **at** and then enter a date and time for the release of the product.
    - **Discoverable in the Microsoft Store:** Select one of the following two options depending on when you need the product to become visible and discoverable in the Store.
      - Select **at release** to configure the product to be discoverable and visible in the Store at the configured release date.
      - Select **at** and then enter a date and time for the product to become discoverable and visible in the Store if this should be earlier than the configured release date.
    - **Stop acquisition:** Select **Never**.
    - **No longer discoverable in the Microsoft Store:** Select **Never**.
 6. In the **Pricing** section, set your pricing for the product.
 7. Select **Save draft**.
 8. When you are ready, select **Review and publish** to publish your configuration to your development sandbox or RETAIL.

## See also

* [Availability - markets, pricing, release schedule](../concepts/availability/availability-overview.md)
* [Visibility - Audiences](../concepts/availability/visibility-audiences.md)
