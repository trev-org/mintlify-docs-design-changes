---
title: Configure products to be visible but not purchasable in the Store
description: Configure products to be visible but not purchasable in the Microsoft Store.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 8/1/2023
keywords: usage-limited free trials, visible, visible only, PDP, pdp, product detail page
ms.localizationpriority: medium
permissioned-type: public
---

# Configure products to be visible but not purchasable in the Microsoft Store

[!INCLUDE [reminder](../includes/web-scraping-disclaimer.md)]

## Definition

Visible-only is a configuration for products that enables a Product Details Page (PDP) in the Microsoft Store for marketing purposes, without making the product available to purchase. This scenario also applies to products that are only available as part of a Bundle.

Products using this configuration only require a Certified package to be published if one of the following criteria are true. This means it's possible to publish a PDP to enable features including wishlisting, before passing Final Certification.
 - Packages have been submitted for Certification in the Main branch of the **Packages** module
 - The product supports the **Xbox** device family but only for the Xbox Series X|S family of devices
 
## Product types this applies to

 - All product types

## Before getting started

 - Game and Game Demo products require additional configuration by Microsoft before they can be published without Xbox services. If you need to configure a Game or Game Demo product as visible-only, speak to your Microsoft representative.

## Configuration for Game, Game Demo, and Game Bundle products

 1. Go to **Partner Center**.
 2. Locate the **product** you want to configure.
 3. On the product page, select the **Pricing and availability** module from the page navigation.
 4. If required, in the **Visibility** section, enable and configure **Private Audience**. For more information, see [Visibility - Audiences](../concepts/availability/visibility-audiences.md).
    1. If you enable Private Audience, ensure the **End Private Audience restrictions on** date is set accurately. This should normally be no later than the **Discoverable in the Microsoft Store** date configured in the **Schedule**.
 5. In the **Discoverability** section, select **Make this product available and discoverable in the Microsoft Store**.
 6. In the **Schedule** section, configure the dates for your product.
    1. Set **Release** to **not scheduled**.
    2. Set **Discoverable in the Store** to a date and time that you want your product to become visible and discoverable by users.
    3. Set **No longer discoverable in the Store** to **never** or a date and time in the future when you don't want the product to be visible and discoverable by users.
 7. In the **Pricing** section, either set the **Base price** to the expected suggested price for the product, or set it to the highest available price. The price won't be displayed on the PDP.
 8. Scroll to the bottom of the page and then select **Save draft**.
 9. When you're ready, select **Review and Publish** to publish the configuration to your development sandbox or RETAIL.
     1. **(Game and Game Demo products only)** On the **Review and Publish** page, don't select the **Packages** module or a source for **Xbox services**.

> [!IMPORTANT]
> If you're not publishing Packages to RETAIL, ensure you don't select a source for Xbox Services in the **Review and Publish** page. If you aren't able to publish without selecting a source for Xbox Services, speak to your Microsoft contacts before proceeding.


## Configuration for Add-on products

 1. Go to **Partner Center**.
 2. Locate the **add-on product** you want to configure.
 3. On the product page, select the **Pricing and availability** module from the page navigation.
 4. If required, in the **Visibility** section, enable and configure **Private Audience**. For more information, see [Visibility - Audiences](../concepts/availability/visibility-audiences.md).
    1. If you enable Private Audience, ensure the **End Private Audience restrictions on** date is set accurately. This should normally be no later than the **Discoverable in the Microsoft Store** date configured in the **Schedule**.
 5. In the **Discoverability** section, select **Discoverable in the Microsoft Store through searching and browsing**.
 6. In the **Purchasability** section, select **Can be purchased (from within the parent product and from its own Microsoft Store listing)**.
 7. In the **Schedule** section, select **Show options** and then configure the dates for your product.
    1. Set **Release** to **not scheduled**.
    2. Set **Discoverable in the Store** to a date and time that you want your product to become visible and discoverable by users.
    3. Set **No longer discoverable in the Store** to **never** or a date and time in the future when you don't want the product to be visible and discoverable by users.
 8. In the **Pricing** section, either set the **Base price** to the expected suggested price for the product, or set it to the highest available price. The price won't be displayed on the PDP.
 9. Scroll to the bottom of the page and then select **Save draft**.
 10. When you're ready, select **Review and Publish** to publish the configuration to your development sandbox or RETAIL.
     1. **(Durable with packages only)** On the **Review and Publish** page, don't select the **Packages** module or a source for **Xbox services**.
     
## Notes

 - For Game, Game Demo and Durable with packages products, ensure there're no packages in the **Main** branch of the **Packages** module. If any packages have been uploaded to Main, you won't be able to publish to the RETAIL sandbox without including the Packages module and if the uploaded packages aren't Certified, the packages will be submitted for Certification.
 - If packages have been submitted to Certification via the Main branch, it's not possible to publish to the RETAIL sandbox without including the **Packages** module.
 - For Xbox console products with packages that only support the Xbox Series X|S family of devices, a Certified package for the Xbox Series X|S platform must be published. Failure to publish a package will result in incorrect display of the device family availability on the Store PDP. It might be possible to use a stub file in this scenario. For more information, speak to your Microsoft contacts.
 - For Game and Game Demo products that are published without a package, ensure that the Xbox Services Gameplay Settings aren't published to RETAIL. If you're unable to publish to RETAIL without selecting an Xbox Services source, speak to your Microsoft contacts before proceeding.

## See also

* [Availability - markets, pricing, release schedule](../concepts/availability/availability-overview.md)
* [Visibility - Audiences](../concepts/availability/visibility-audiences.md)
