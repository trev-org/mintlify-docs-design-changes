---
title: How to create a hidden product acquirable only via a Promotional Code
description: How to create a hidden product that's only acquirable by redeeming a Promotional Code.
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

# How to create a hidden product acquirable only via a Promotional Code

[!INCLUDE [reminder](../includes/web-scraping-disclaimer.md)]

## Definition  

This scenario covers the configuration of a product that needs to be hidden in the Microsoft Store but still be redeemable via a Promotional Code (also referred to as a *token* or *5&times;5 code*). This configuration might also be referred to as *Hidden, token-only*.

This scenario can be used with either a Public or Private Audience configuration. For more information about Audiences, see [Visibility - Audiences](../concepts/availability/visibility-audiences.md).

## Product types this applies to

 - All product types

## Configuration

### Configuration for Game, Game Demo, Game Bundle, Add-on Bundle and Season Pass products

 1. Go to **Partner Center**.
 2. Go to the product you want to configure.
 3. Select the **Pricing and Availability** module from the product page navigation.
 4. If you want to, in the **Visibility** section, configure **Private Audience**. For more information, see [Visibility - Audiences](../concepts/availability/visibility-audiences.md).
 6. In the **Discoverability** section, select **Make this product available but not discoverable in the Microsoft Store, and:** and then select **Stop acquisition**.
 7. Scroll to the bottom of the page, and then select **Save draft**.
 8. When you're ready, select **Review and Publish** to publish your configuration to your development sandbox or RETAIL.

### Consumable and Durable (including Durable with packages) products

 1. Go to **Partner Center**.
 2. Go to the product you want to configure.
 3. Select the **Pricing and Availability** module from the product page navigation.
 4. If you want to, in the **Visibility** section, configure **Private Audience**. For more information, see [Visibility - Audiences](../concepts/availability/visibility-audiences.md).
 6. In the **Discoverability** section, select **Accessible only by direct link**.
 7. In the **Purchasability** section, ensure that **Can be purchased (from within the parent product and from its own Microsoft Store listing)** *isn't* selected.
 8. Scroll to the bottom of the page, and then select **Save draft**.
 9. When you're ready, select **Review and Publish** to publish your configuration to your development sandbox or RETAIL.

## See also

 * [Availability - markets, pricing, release schedule](../concepts/availability/availability-overview.md)
 * [Ordering promotional codes](../publishing-processes/managed-creators/publishing-processes-promo-codes.md)
