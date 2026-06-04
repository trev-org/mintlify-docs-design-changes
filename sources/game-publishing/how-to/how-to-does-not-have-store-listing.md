---
title: Configure add-ons for in-game store-only availability
description: Configure add-on products that don't have a Microsoft Store listing and that can only be purchased via an in-game store.
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

# Configure add-ons for in-game store-only availability

This article describes how to configure Durable and Consumable product types that don't have their own Microsoft Store listing and can only be purchased via an in-game store.

## Definition

This setup enables you to hide Durable and Consumable add-on products from the Microsoft Store. You expose these products for purchase inside your game by using the XStore APIs available in the Microsoft Game Development Kit (GDK).

## Product types this applies to
 - Consumable
 - Durable/Durable with Packages

## Product types this doesn't apply to
 - Game
 - Game Demo
 - Bundle
 - Add-On Bundle
 - Season Pass

## Configuration

 1. Go to **Partner Center**.
 2. Locate the add-on product that you want to configure.
 3. Using the page navigation, select the setup module for your product type: **Consumable setup** or **Durable setup**.
 4. In the **Setup details** section, select **Doesn't have its own Microsoft Store listing**.
 5. Select **Save draft**.
 6. Using the page navigation, select the **Pricing and availability** module.
 7. If required, in the **Visibility** section, enable and configure **Private Audience**. For more information, see [Visibility - Audiences](../concepts/availability/visibility-audiences.md).
    1. If **Private Audience** is configured, the product will only be purchasable by users in the defined user group.
 9. In the **Purchasability** section, select **Can be purchased (from within the parent product only)**.
 10. In the **Schedule** section, select **Show options** and then configure the schedule.
     1. Set **Release** to the date and time that users can begin purchasing the add-on.
     2. Set **Stop acquisition** to the date and time that users can no longer purchase the add-on.
 11. In the **Pricing** section, configure your pricing.
 12. Scroll to the bottom of the page, and then select **Save draft**.
 13. When you're ready, select **Review and Publish** to publish your configuration to your development sandbox or RETAIL.

## See also

 - [Consumable add-ons](../concepts/add-ons/consumable-add-ons.md)
 - [Durable add-ons](../concepts/add-ons/durable-add-ons.md)
 - [Packages](../concepts/packages-overview.md)
