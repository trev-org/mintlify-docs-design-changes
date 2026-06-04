---
title: How to configure a hidden pre-order
description: How to configure a hidden pre-order.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 8/18/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# How to configure a hidden pre-order product

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

[!INCLUDE [reminder](../includes/web-scraping-disclaimer.md)]

This article explains how to use the **Pricing and Availability** page in the Partner Center portal to configure hidden pre-order products. Pre-orders should be approved by Microsoft. For more information about submitting a pre-order plan for approval, see [Configuring pre-order products](../publishing-processes/managed-creators/publishing-processes-configuring-pre-orders.md). 

Before you create a pre-order product by using the following instructions, we recommend reading [Pre-order overview](../concepts/availability/preorder-overview.md).

> [!Important]
> When using this configuration, it's possible for customers with a direct link to the product to see it and acquire it in the Microsoft Store.

## Product types this applies to

 - Game Bundle
   
## Configuration options

 1. Go to **Partner Center**.
 2. Go to the Game Bundle you want to configure.
 3. Select the **Pricing and Availability** module from the product page navigation.
 4. If you need to, in the **Visibility** section, configure **Private Audience**. For more information, see [Visibility - Audiences](../concepts/availability/visibility-audiences.md).
 6. In the **Discoverability** section, select **Make this product available and discoverable in the Microsoft Store**.
 7. In the **Schedule** section, select the following options.
    - **Release:** Select **at**, and then enter a date and time for the release of the product.
    - **Pre-order:** Select **starts at**, and then enter a date and time for the pre-order to begin.
    - **Discoverable in the Microsoft Store:** Select **never**.
    - **Stop acquisition:** Select **at**, and then enter a date and time for the bundle to no longer be acquirable.
 8. In the **Pricing** section, set your pricing for the product.
 9. Select **Save draft**.
 10. When you're ready, select **Review and publish** to publish your configuration to your development sandbox or RETAIL.

## See also

* [Pre-order overview](../concepts/availability/preorder-overview.md)
* [Plan and manage pre-order products](../publishing-processes/managed-creators/publishing-processes-configuring-pre-orders.md)
