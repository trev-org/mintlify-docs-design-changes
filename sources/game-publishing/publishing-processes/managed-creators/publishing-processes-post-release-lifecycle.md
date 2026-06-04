---
title: Product changes and Content Updates
description: Guidance for ongoing support of released games from managed creators.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 2/6/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Product changes and Content Updates

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

The base release of your content and configuration is the first step in supporting the overall lifecycle of your game. Use Content Updates (CUs), configuration changes, and add-on content to support your game post-release.

## Updating games via Content Updates (CUs)

Updates, also known as _patches_, to Xbox games are called *Content Updates* (CUs). Each CU is uploaded to Partner Center as a complete package replacement, rather than using an additional update file that includes only the changes from the base game. After a CU passes Certification and is released to RETAIL, users will download only the new and updated files, minimizing the update size. There's no charge to submit and release CUs. Also, there's no limit to the number of updates that you can make over the life of your title.

When submitting CUs, pay special attention to the Identity section of the MicrosoftGame.config file. Set a version number that is higher than that of all builds submitted previously and ensure that the IdentityName and IdentityPublisher values are unchanged. 

For detailed advice about building your packages, see [Packaging overview](/gaming/gdk/_content/gc/packaging/overviews/packaging).

### Testing Content Updates via Package Flight

We recommend that all CUs are tested in RETAIL via Package Flight before you release them to the public. This enables you to validate that the CU functions as expected in the RETAIL sandbox before you release it to players. This is often referred to as *Selective Testing*. It can be done before, during, or after Certification.

For more information, see [Publishing and testing in the RETAIL sandbox](publishing-processes-retail-publishing-and-testing.md) and [How to configure package flights for game packages](../../how-to/how-to-package-flights-for-xvc-packages.md).

### Bypass testing and the Cert Bypass program

All games are eligible to qualify for the Cert Bypass program. If a game has no unfixed Conditions for Resubmission (CFRs), CUs submitted after the game has released will be eligible to bypass full Xbox Requirement (XR) testing. CUs that are submitted through the Cert Bypass program will bypass the Xbox Requirement (XR) testing portion of Xbox Certification. CUs for PC games must still complete [submission checks](../../concepts/certification/certification-guide.md#submission-checks), including malware scanning. Cert Bypass CUs should take no more than one business day to be processed.

You might choose to opt out of Bypass testing, or your Microsoft contacts might recommend or require you to opt out. If opting out of bypass testing is desired for a specific submission, let your Microsoft representative know before you submit your CU to Certification. Common scenarios where you might need to opt out include:

 - Features being added to the game that require testing never previously completed, such as adding a new significant gameplay mode.
 - Updating from the XDK to the GDK
 - Adding support for a new type of DLC that hasn't previously been tested, for example, adding support for a game expansion if you previously only released cosmetic items.

> [!NOTE]
> If a CFR is found during testing after you opt out of Bypass, your next CU wouldn't be eligible for Cert Bypass and would also require full testing until all CFRs have been fixed.

After your title becomes eligible for Cert Bypass, it might be audited by the Certification team. Your Microsoft contacts will let you know if any issues are found during this process that need addressing in your next CU. Note that this CU won't be eligible for Cert Bypass.

For more information, see the [Cert Bypass Program](../../concepts/certification/cert-bypass.md).

## Updates to Xbox services Gameplay Settings

Updates to Xbox services Gameplay Settings can be used to add new Achievements, adjust title storage, add leaderboards, and more. All Xbox services Gameplay Settings validation is automated within Partner Center. These settings can be published to RETAIL directly, without having them tested by Xbox Certification. Contact your Microsoft representative if you experience any problems when publishing updated Xbox services Gameplay Settings.

## Region expansions

If a product is initially released to only a subset of markets, you might want to release it to additional markets post-launch. Note that if not provided via the IARC ratings system, appropriate age ratings must be acquired and configured in the **Age Ratings** module of the Partner Center product before you release to any new markets. 

 - For digital-only releases, additional markets can be configured by updating **Pricing and Availability** in Partner Center. 
 - For games released on disc, you might be required to create an updated disc that includes the necessary age ratings directly in the package binary if they weren't originally specified.

Before you expand to any new markets, contact your Microsoft representative for guidance. They can also validate your new configuration before you publish it.

## Releasing add-on content

Add-ons, or Downloadable content (DLC), are a great way to provide players with additional content for games. The Xbox Requirements for add-on products are tested alongside your game if add-ons are provided when you submit the base game to Certification. Make sure you submit at least one example of every type of add-on content that your game supports. If add-ons haven't been provided at the time of base game Certification, a CU must be submitted alongside the new content, prior to the add-on's release. Contact your Microsoft representative if you have plans for add-on content releases. For more information about creating add-ons in Partner Center, see [Product creation and onboarding](publishing-processes-product-onboarding-and-configuration.md).

## Pricing promotions and waterfalls

Games and other products can be offered at a discounted price during a set time period or permanently. Temporary promotions and permanent waterfall price reductions can stimulate purchasing of products. For more information, see [Curated programs](publishing-processes-managed-programs.md#discounting-and-sales).

The process for initiating price reductions in the Microsoft Store depends on your goal for a product. Regardless of the goal, at least three weeks in advance, you must submit all promotional pricing plans and all discount and timing requests to your Microsoft contacts. Your Microsoft contacts will submit the necessary request to the Microsoft Store team. After the request is approved, your Microsoft contacts will work with you to configure the promotional pricing.

For a permanent price reduction, you must schedule the price reduction start date and prepare the pricing within Partner Center. For more information, see [Availability - markets, pricing, release schedule](../../concepts/availability/availability-overview.md) and [How to make pricing changes](../../how-to/how-to-priceupdate.md).

You can also waterfall-price physical discs for remanufacturing. For more information, see [How to submit royalty tiers](../../how-to/how-to-submit-royalty-tiers.md).

## Delisting products from the Microsoft Store

If you're considering delisting (also referred to as _sunsetting_) a product from the Microsoft Store, start by reviewing the **Xbox Software Title Sunset Policy** in the [Xbox Publisher Guide](https://aka.ms/xboxpublisherguide). The policy provides detailed information about the required notice you must provide to Microsoft, and actions that you must take prior to delisting a product.

For more information about the Partner Center configuration to delist a product, see [How to delist a product from the Microsoft Store](../../how-to/how-to-delist-from-retail.md).


