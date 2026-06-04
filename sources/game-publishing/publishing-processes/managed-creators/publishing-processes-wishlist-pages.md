---
title: Game Wish List pages
description: Overview of setting up a Managed Creator's game to have Wish List availability in the Microsoft Store.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 1/29/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Game Wish List pages

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

Wish List pages can be a valuable marketing opportunity, enabling you to direct customers to your products in the Microsoft Store before they're available to purchase. After your product is published to the Microsoft Store with a publicly visible configuration, customers can add it to their Wish List. This enables customers to keep track of their most-wanted products and be notified when they release or when they're included in a sale. 

If you'd like to configure a Wish List page for your product, begin by informing your Microsoft contacts.

---

## Setting up a Wish List page

After you've created and onboarded your game in Partner Center, and informed your Microsoft contacts of your Wish List plans, you'll need to complete the minimum information to be ready for publishing. To publish a Wish List page for a Game product, you'll need to have completed the **Age Ratings**, **Store listings**, **Pricing and availability**, **Properties**, **Xbox settings**, and **Supplemental info > Certification** modules. Product types like Durables or Bundles won't have Xbox settings or Supplemental Info to complete. For all products, you'll also need to request a **Revenue SKU** configuration.

> [!IMPORTANT]
> If you've already submitted packages for Certification via the **Main** branch, or if you're not releasing your Game on the Xbox One family of devices, you'll also need to complete the **Packages** module. Speak to your Microsoft contacts for guidance.

### Revenue SKU request

All products must have a valid Revenue SKU configured. Send the *Store ID* of your product to your Microsoft contacts and request Revenue SKU setup while you're working on the rest of your product configuration. This will ensure you're not blocked when you're ready to publish to RETAIL. 

### Age ratings

Complete the International Age Rating Coalition (IARC) questionnaire for your product in Partner Center. If you're planning to release your game on physical discs in any region, or if you're considering pre-orders, review [XR-017: Title Ratings](/gaming/gdk/_content/gc/policies/xr/xr017) for further guidance on any rating overrides that will be required.

### Store listings

Your Store listings should be prepared in all required languages as defined in the Xbox Games Store Policy, available in the [Xbox Publisher Guide](https://aka.ms/xboxpublisherguide). For full guidance on completing the Store listings for Games and associated products, see [Store listings](../../concepts/store-listing.md).

After your Store listings are complete, submit them for review by selecting **Certify** and following the workflow. For more information, see [Certify](../../concepts/certification/certification-overview.md).

### Pricing and availability

Your Pricing and availability configuration defines when and where the Wish List page will be available to customers. For detailed steps on configuring the Pricing and availability page for a Wish List page, see [Configure products to be visible but not purchasable in the Microsoft Store](../../how-to/how-to-visible-only-pdp.md).

> [!NOTE]
> If your game is configured for pre-order or release, it will still be possible for customers to add it to their Wish List. The visible-only configuration is intended for products that aren't yet available for purchase.

After your configuration is complete, submit it for review by selecting **Certify** and following the workflow. For more information, see [Certify](../../concepts/certification/certification-overview.md).

### Properties

Your Properties module should be completed with features that you're committed to having available when the game releases. If you're unsure whether you'll support a specific feature, don't select it at this time. You can update your Properties at any time and publish the changes for them to take effect in the Microsoft Store. For more information, see [Properties](../../concepts/properties-overview.md).

### Xbox settings

When publishing a Wish List page for a Game, don't publish your Xbox services to the RETAIL sandbox. This is because your Xbox services configuration might not be final and some changes, like removal of Achievements, aren't possible after you've published them. Your Microsoft contacts will grant permissions during product onboarding that enable you to publish your game without Xbox services. You'll choose **Select source** in the dropdown list for Xbox services source selection during the **Review and Publish** workflow when you publish your game to the RETAIL sandbox.

> [!IMPORTANT]
> If you're unable to publish your game after choosing **Select source** as the source for Xbox services, don't proceed with publishing. Speak to your Microsoft contacts for support.

As a safeguard to protect your product information if you test your game in the RETAIL sandbox prior to release, configure an Xbox Embargo date in the **Xbox settings** page for your product. This will ensure your Achievements and other Xbox settings are embargoed prior to the configured date. For more information, see [Configuring Xbox services setup](/gaming/gdk/_content/gc/live/test-release/portal-config/live-config-xbl-setup).

### Supplemental info - Certification

The Certification questionnaire must be completed before you can publish a Wish List page for a Game. Complete the information with as much information as you can accurately provide. If you need to enter any placeholder information, be sure to update this before submitting your game for Optional or Final Certification. For more information, see [Supplemental info](../../concepts/certification/certification-supplemental-info.md).

---

## Wish List notifications

Customers can configure their notification preferences for products they add to their Wish List. The following notification options are available.
  
  - **Wish list items go on sale:** Notifies the customer when the wishlisted product is configured with a strike-through discount. Customers can receive a system toast notification on Xbox consoles, the Xbox App on PC, and the Xbox App on Mobile, and an email. If multiple wishlisted items are discounted at the same time, notifications are consolidated into one system toast notification and email.
  - **Wish list items are released:** Notifies the customer when the wishlisted product goes from a **pre-order** state to a **released** state. Customers can receive a system toast notification on Xbox consoles, the Xbox App on PC, and the Xbox App on Mobile.
  - **Wish list items are in Game Pass:** Notifies the customer when the wishlisted product is added to the Game Pass catalog. Customers can receive a system toast notification on Xbox consoles, the Xbox App on PC, and the Xbox App on Mobile. 
  - **Wish list items are free to play:** Notifies the customer when the wishlisted product enters into the **Free Play Days** program for a period of time. Customers can receive a system toast notification on Xbox consoles, the Xbox App on PC, and the Xbox App on Mobile.
  
---

## Wish List data

Once your product is available to customers for wishlisting, you'll be able to review data such as the number of wishlists, which storefront was used to wishlist the product, and whether customers converted their wishlist to a purchase (when available). Wish List data is provided in the *Wishlist* dataset available via the **Downloads Hub** in Partner Center. For more information about creating a report using this data, see [Downloads Hub Datasets - Wishlist](/partner-center/insights/downloads-hub-datasets#wishlist).

---

## Preparing for pre-order or release

If your product is available for wishlisting, speak to your Microsoft contacts before you publish a final **Pricing and availability** configuration for pre-order or release. They'll be able to provide you with guidance on how to publish securely to avoid unintended exposure of your release date, pricing, or other information.



