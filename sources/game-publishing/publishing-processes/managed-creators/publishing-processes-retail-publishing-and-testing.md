---
title: Publishing and testing in the RETAIL sandbox
description: Guidance for publishers to publish and test their content in the RETAIL sandbox.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 8/3/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Publishing and testing in the RETAIL sandbox

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

Publishing to the RETAIL sandbox is the final step in making your product available to users. 

After your game has passed Certification, ensure that all modules are completed in full and to your expectations. Check your configuration for [Packages](../../concepts/packages-overview.md), [Properties](../../concepts/properties-overview.md), [Age Ratings](../../concepts/age-ratings.md), [Store Listings](../../concepts/store-listing.md), [Pricing and Availability](../../concepts/availability/availability-overview.md), [Gaming Metadata](../../concepts/metadata-overview.md) and [Xbox services Gameplay Settings and Setup](../../concepts/xbox-services.md).

If required, ensure you have configured Private Audience (see [Visibility - Audiences](../../concepts/availability/visibility-audiences.md)) and [Xbox services Embargo](../../concepts/xbox-services.md#embargo-date) to restrict visibility of your product and services configuration. 

For a detailed checklist of elements to review before you publish, see [Game Publishing Readiness Checklist](publishing-processes-game-publishing-readiness-checklist.md).

> [!IMPORTANT]
> Before you can publish to RETAIL, products configured to use the [Reseller](../../concepts/availability/managed-creators/reseller-pricing.md) pricing model must have a **revenue SKU**. Products without a revenue SKU will be blocked from publishing to RETAIL, but can still be published to development sandboxes, or submitted for Certification. To request revenue SKU configuration, send the Store ID for your product to your [Microsoft contacts](../../resources/managed-support/overview-microsoft-representatives-and-contacts.md).

## Publishing to Private Audience

> [!NOTE]
> Private Audience can only be used if a Public Audience configuration hasn't already been published to the RETAIL sandbox (for example, for pre-orders or a visible-only Product Details Page).

By default, your product's Microsoft Store Product Details Page (PDP) will be visible to a Public audience and will be accessible by the public before the first discoverable date via “web scraping” (or data scraping) technology. If you want to limit your game's PDP to an audience of your choice, you can enable the Private Audience setting. Alternatively, configure **Disable Store Presence**. 

When products are published to the RETAIL sandbox with Private Audience, members of a defined **Known User Group** can view the PDP and redeem a Promo Code to acquire the product. Users who aren't a member of the specified group can't access the PDP even with a direct link to the page. They also can't acquire the product using a Promo Code.

For more information, see [Visibility - Audiences](../../concepts/availability/visibility-audiences.md).

## Publishing to RETAIL General Availability

Publishing to General Availability (GA) is the process by which content is made widely available in the RETAIL sandbox and to a **Public Audience**. Before you publish any module to RETAIL, ensure that any changes are final and intended for the configured audience. To publish, use the **Review and Publish** workflow that's available in your product in Partner Center. Note that only the *Main* branch can be published to RETAIL. Any content certified in another branch must be imported to Main before it can be published. If you attempt to publish any modules that haven't been Certified prior to publishing, the Certification workflow for those modules is triggered and must be approved before the Publishing workflow will progress.

For more information, see [Review and publish](../../concepts/modular-submission.md).

> [!Important]
> For new products being published, confirm that your Pricing and Availability configuration is set up the way you want it to ensure that your product does not release at the wrong date or time, for the wrong price, or with the wrong visibility. Similarly, ensure that you've selected the correct certified Package and Xbox services source.
> 
> For updates to existing products, ensure that you've imported your latest content to the Main branch. For Packages, also confirm that you've configured the appropriate custom availability date or time so that you don't release an update earlier than expected. For more information, see [Packages](../../concepts/packages-overview.md).

## Testing in RETAIL with promotional codes

Promo codes (also known as 5&times;5s, tokens, or keys) are ordered via Partner Center for each individual product. For more information about ordering promo codes, see [Ordering promotional codes](publishing-processes-promo-codes.md).

Promo codes are used to acquire content in the RETAIL sandbox without making a paid purchase from the Microsoft Store, and are generally required for RETAIL sandbox testing both pre and post-release. Promo codes can also be used for promotional purposes, for example, to provide reviewers with access to your game. For guidance on specific promo code policies, contact your Microsoft representative, review your license agreement with Microsoft, and review the policies detailed in the [Xbox Publisher Guide](https://aka.ms/xboxpublisherguide).

For more information about the RETAIL tests that we recommend completing after using promo codes, see [Recommendations for testing in RETAIL](publishing-processes-recommendations-for-testing-in-retail.md).

> [!NOTE]
> If Private Audience is enabled, Promo Codes can only be redeemed by members of the user groups configured in the Private Audience settings.

## Test disc validation in RETAIL

If you're releasing a physical version of your game, you must validate and approve your test discs for [Release to Manufacture (RTM)](publishing-processes-rtm.md), after the packages on the disc pass Final Certification. Before test discs can be used with a console that's connected to the Xbox network, you must publish both your certified package and your Xbox services Gameplay Settings to RETAIL. If these items aren't published, you'll get errors when you install or launch the game using the test discs while you're connected to the Xbox network. Before you publish to RETAIL, ensure you have configured your product with a desired configuration. You can also test offline if you have offline game features.

For more information about validating test discs, see [Recommendations for testing in RETAIL](publishing-processes-recommendations-for-testing-in-retail.md).

## Next steps

With your product published, you might be ready to review the configuration in the RETAIL sandbox, RTM any discs or support your released game.

 - [Recommendations for testing in RETAIL](publishing-processes-recommendations-for-testing-in-retail.md)
 - [Approve discs for manufacture](publishing-processes-RTM.md)
 - [Supporting released games](publishing-processes-post-release-lifecycle.md)


