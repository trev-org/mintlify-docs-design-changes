---
title: How to configure a pre-order
description: How to configure a pre-order.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 7/1/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# How to configure a pre-order product

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

[!INCLUDE [reminder](../includes/web-scraping-disclaimer.md)]

This article explains how to use the **Pricing and Availability** page in the Partner Center portal to configure pre-order products.

Before you create a pre-order product by using the following instructions, we highly recommend reading [Pre-order overview](../concepts/availability/preorder-overview.md) and [Plan and manage pre-order products](../publishing-processes/managed-creators/publishing-processes-configuring-pre-orders.md).

## Configuration options

This section explains the options in the **Visibility** and **Schedule** sections on the **Pricing and Availability** page that can be used when configuring pre-orders.

### Visibility  

Configure the **Visibility** section the same way for all use cases.

* **Audience** selection: use **Public Audience** or **Private Audience**. See [Visibility - Audiences](../concepts/availability/visibility-audiences.md).
* **Discoverability** selection: use **Make this product available and discoverable in the Microsoft Store**.

### Schedule  

The **Schedule** section is slightly different, depending on the use case.

> [!NOTE]
> Only Bundles and Add-on Bundles have a "Pre-order unlock" field that can be configured. The other product types don't support this field. For the following scenarios that don't mention the pre-order unlock date field, but where the field is visible in the Partner Center UI for a product being configured, configure the Schedule as follows.
>
> * If **Release Date** isn't configured, the expectation is that **Stop Acquisition** will be. In this scenario, for **Pre-order unlock date**, select **Stop Acquisition**.
> * Because the **Pre-order unlock date** field only shows if **Release Date** field is set to **Not Scheduled**, there are no other scenarios where the **Pre-order unlock date** needs to be set.

#### Seeing the pre-order option

The **Pre-order** dropdown list will appear only if all the following are true.

* The product will be available only on PC and Xbox.
* The product is an app, Game, Durable with its own Store listing, Durable with Packages, Game Bundle, or Add-on Bundle.
* For Game, Durable, and Durable with Packages products, the release date must be configured.
* For Bundle and Add-on Bundles, the release date or pre-order unlock date must be configured.

If you can't see the **Pre-order** section, complete the steps below.

- Confirm that your account has permissions to configure pre-orders. For more information, see [Assign product level custom permissions to account users](/windows/apps/publish/partner-center/assign-product-level-custom-permissions-to-account-users#publishing).
- Make sure that the **Release** date has been set in the **Schedule**.

If the **Pre-Order** section still doesn't show in the UI, do the following:

1. Configure a date for the **Release** section (any date, even if the final configuration won't have one configured).
2. Configure the **pre-order** date.
3. Save.
4. Go back into the Pricing and Availability, and then remove or edit the **Release** date.

#### Configuring the pre-order option

Here are the options for **Pre-order**.

* **not available**: The product won't be available for pre-order.
* **starts at**: The product will be available for pre-order at the specified date and time. Make sure the date is *before* the release date.
* **unlocks at**: The product will be available for use by customers at the specified date and time. This only applies to Bundle and Add-on Bundle products. This only applies if the Release date isn't configured. It must be before or the same as the Release date.

## Package management

Products that support packages must have a Certified package before they can be made available for pre-order. If you're publishing a placeholder package with your pre-order, select the **This submission contains placeholder package(s) to enable pre-orders** checkbox on the **Packages** page and then provide the estimated maximum file size for your final packages. For details, see [Packages&mdash;advanced settings](how-to-manage-advanced-settings-for-packages.md).

When configuring pre-orders, publish your final release packages at least seven days before the release date. This allows some time for pre-order participants' devices to start downloading the package. The product will be unlocked (playable) on the release date, and customers will be able to use it.

## Planning considerations

With pre-order, a confirmed release date is required. Don't publish a pre-order for a product if the release date is unknown or unconfirmed. It might not be possible to change the configured release date or pre-order unlock date after you've started the pre-order. After you publish your product for pre-order, you can't change the release date if the current release date is in 14 days or less. In addition, if the pre-order period has already started, you can't change the pre-order's start date or remove pre-order altogether because some customers might have already pre-ordered the product. Finally, if the product has already been released, you can't update or remove the pre-order schedule because customers can already acquire the product.

For pre-order bundles, you can't add Consumable products to the bundle after the pre-order has begun.

### Additional considerations for Game pre-orders

All **Game** products made available for pre-order in the Microsoft Store require:

 - A certified [Package](../concepts/packages-overview.md). Speak to your Microsoft contacts if you're not ready to submit a game package for Certification, or consider setting up a [Wish List page](../publishing-processes/managed-creators/publishing-processes-wishlist-pages.md) instead of a pre-order.
 - Published **Xbox services**. The Xbox services configuration includes your Achievements, Presence and Multiplayer settings. To prevent unintended exposure of this information, configure [Xbox Embargo](../concepts/xbox-services.md#embargo-date).

### Additional considerations for Bundle pre-orders

* If you're configuring a [pre-order bundle](how-to-create-preorder-visible-bundle.md), the pre-order unlock date or release date applies to all the products that are included in that bundle.

## See also

* [Pre-order overview](../concepts/availability/preorder-overview.md)
* [Plan and manage pre-order products](../publishing-processes/managed-creators/publishing-processes-configuring-pre-orders.md)
