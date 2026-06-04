---
title: Visibility
description: Explains the visibility options on the Pricing and availability page.
services: gaming
author: FLY1NGSQU1RR3L
ms.author: clintw
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Visibility

[!INCLUDE [reminder](../../includes/select-msix-tab.md)]

The options in the **Visibility** section determine how customers can discover and acquire your product. There are two separate sections within the Visibility section: [Audience](#audience) and [Discoverability](#discoverability).

## Audience

By default, your product's audience will be configured for a **Public Audience**. This is appropriate for products that are intended to have a visible Microsoft Store Product Details Page (PDP) as soon as they're published. However, if your product isn't visible until a specific date and time, you can configure a **Private Audience**.

### Configuring the audience

If your product will be configured for a **Public Audience**, no specific configuration is required. Before your first **Public Audience** configuration is published to the RETAIL sandbox, you can enable **Private Audience**. Using Private Audience, you can make the Store PDP accessible only by specific Microsoft accounts that are defined in a [Known User Group](/windows/apps/publish/create-known-user-groups). This is a useful configuration for testing products in the RETAIL sandbox prior to release or for private betas and flighting. You can also specify a date for the Private Audience restrictions to end.

For more information, see [Visibility - Audiences](visibility-audiences.md).

## Discoverability

The options in the **Discoverability** section place additional restrictions on how customers discover and acquire your product, such as by using a direct link only or by using search. By default, your game will be available and discoverable in the Store. Alternatively, you can choose to make your game available, but not discoverable, by customers searching or browsing the Store. When you select this option, the only way to get to your game's Store listing is by a direct link. These configuration settings can also be used to prevent anyone new from purchasing your product if you retire it from the Store while still allowing existing customers to download it again.

If you've defined your discoverability to make your product available, you'll be able to configure the [Schedule](availability-schedule.md).

### Disable store presence  
  
When you select this option, all availabilities for your product will be turned off prior to its first scheduled date (the minimum date among the release/pre-order/discoverable settings in the Store date across all markets). This means that the Store PDP for the product won't be visible until the first scheduled date, and the product can't be acquired.
  
> [!IMPORTANT]
> If the **Disable store presence** option is selected, you won't be able to provide tokens to users before the first scheduled date.

## Add-ons

The visibility options for an add-on depends on whether it has a separate Store listing. For example, a Season Pass or a Durable with packages will require a separate Store listing.

When an add-on has a separate Store listing, you must configure the visibility settings. They're configured in the same way as games are by using the [Audience](#audience) and [Discoverability](#discoverability) sections. There are some additional configurations as follows.

If the add-on doesn't have a separate Store listing, there is no need to configure visibility for the add-on. The add-on inherits the visibility configuration of the base game.

> [!NOTE]
> The **Pricing and availability** configuration page for an add-on is on a separate page in the Partner Center portal. To access the page, select the add-on first from the list of add-ons available in the base game, and then navigate to **Pricing and availability** from the left menu.

### Requires a separate Store listing

If the add-on requires a separate Store listing, you'll see the following options.

* **Has its own Store listing, and can be displayed in the parent product's Store listing**

This option lets customers browse or search for the add-on's Store listing, view the add-on on the parent product's listing, and then acquire the add-on from its listing.

* **Hidden in the Store, and:**

  * **Direct link only**: All customers on Windows 10 can use a direct link to view the add-on's Store listing, and then acquire the add-on. Customers won't find the add-on by searching for it or browsing for it in the Store, although they will find the add-on on the parent product's listing.
  * **Stop acquisition**: This option offers the functionality of **Direct link only**, but lets customers acquire an add-on only if they owned the add-on previously or if they have a promotional code. The add-on isn't displayed in the parent product's listing.

Creating a separate Store listing for an add-on comes with several caveats and considerations. For details, see [Add-on Store listings](../../how-to/how-to-create-a-separate-store-listing-for-an-add-on.md).

### Doesn't require a separate Store listing

If the add-on does NOT require a separate Store listing (for example, if it's a Consumable or a Durable without packages), see [Configure addon pricing and availability for Managed Creators](../../tutorial-xbox-managed/how-to-configure-pricing-and-availability.md).

## Next steps

* [Configure pricing and availability for Managed Creators releasing Xbox titles](../../tutorial-xbox-managed/how-to-configure-pricing-and-availability.md)

## See also

* [Availability - markets, pricing, release schedule](availability-overview.md)
* [Known User Group](/windows/apps/publish/create-known-user-groups)
