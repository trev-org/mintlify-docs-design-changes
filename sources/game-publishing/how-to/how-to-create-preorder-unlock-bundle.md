---
title: Create a pre-order unlock Bundle
description: Create a hidden Bundle that can be used to unlock the ability to use products that are configured for pre-order.
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

# Create a pre-order unlock bundle

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

[!INCLUDE [reminder](../includes/web-scraping-disclaimer.md)]

## Definition

An *Unlock Bundle* configuration uses a **Game Bundle** product to bypass the granted entitlement start date that's set for the products that are included in a pre-order bundle. These products can be used immediately. This configuration can be used to enable users, including reviewers or testers, to use these products before the release date.

Pre-order unlock bundles configured with the following steps can only be acquired by redeeming a Promotional Code.

## Product types this applies to

 - Game bundle

## Configuration

 1. Go to **Partner Center**, and then select the **Apps and games** workspace.
 2. Select **New product**, and then create a **Game bundle**.
 4. Go the **Bundle setup** by using the page navigation. Configure the **Included products** to add each of the products that are included in the pre-order bundle you need to unlock. **Save** your configuration.
 5. Select **Pricing and availability** from the page navigation, and then configure the following options.
    - In the **Markets** section, **All worldwide markets** is selected by default. Select **Show options** to remove specific markets, or use **Restrict to specific markets** and then select **Show options** to choose the markets that the product will be available in. Generally, this should match the markets for your pre-order bundle.
    - In the **Visibility** section, select **Make this product available but not discoverable in the Microsoft Store, and:**, and then select **Stop acquisition: Any customer with a direct link can see the product's Microsoft Store listing**.
    - Select **Save draft**.
 6. Complete the minimum requirements for each of the other modules for the Bundle product. Be sure to **Save** each module after you complete it.
 7. When you're ready, select **Overview** from the page navigation and then select **Review and Publish** to publish the Bundle to your development sandbox or RETAIL.
 8. After the Bundle has published to RETAIL, generate Promotional Codes for the bundle.

Users who redeem a Promotional Code for the bundle product will receive an entitlement to the Bundle and can immediately use the products that are included in it.

## See also

 - [Bundles](../concepts/bundle.md)
 - [Pre-orders](../concepts/availability/preorder-overview.md)
 - [Ordering promotional codes](../publishing-processes/managed-creators/publishing-processes-promo-codes.md)
