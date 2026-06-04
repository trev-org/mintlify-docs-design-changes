---
title: Xbox game publishing readiness checklist
description: A publishing readiness checklist for Xbox games used by Managed Creators.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 10/30/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Xbox game publishing readiness checklist

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

Before you publish your game on Xbox consoles and Xbox on PC, review your Partner Center configuration carefully. This checklist helps you validate your settings, metadata, and release schedule so you can publish with confidence.

## Before you begin

This checklist assumes that:
 - You're signed in to Partner Center.
 - You're viewing the game you want to review.
 - You've permission to edit all modules, including **Store listings**, **Pricing and availability**, **Properties**, **Gaming metadata**, and **Packages**.

This checklist focuses on Game products. You should also validate any **Bundles** or **Add-ons** that release alongside your game.

> [!IMPORTANT]
> Make sure your configuration accurately represents the product available to customers. For more information, review the Xbox Games Store Policy in the [Xbox Publisher Guide](https://aka.ms/xboxpublisherguide) and [Microsoft Store Policies - 10.1 Distinct Function & Value; Accurate Representation](/windows/apps/publish/store-policies#101-distinct-function--value-accurate-representation).

---

## Step 1: Game setup

Complete these checks in the **[Game setup](../../concepts/game-setup-overview.md)** module.

1. Confirm that **Retail** is selected for each supported platform:
   - Select **Desktop** for Xbox on PC.
   - Select **Xbox** for console releases.

---

## Step 2: Packages

Complete these checks in the **[Packages](../../concepts/packages-overview.md)** module.

1. Confirm that certified packages exist for each supported platform. A banner is displayed on the [branch](../../concepts/branches.md) and shows the certification result.
   - Xbox console: approved **.xvc** package for Xbox One, Xbox Series X|S, or both.
   - Xbox on PC: approved **.msixvc** package.
   - If packages failed certification:
     - Review the certification report.
     - Fix all **BVT Failure** and **CFR** issues.
     - Build, test, and submit a new package.
1. Import certified packages to the **Main** branch if they're in another branch. Skip this step if the packages are already in the **Main** branch.
   - Select the **Main** branch, then **Import**, and choose the source branch.
   - Only the **Main** branch publishes to the **RETAIL** sandbox.
1. Confirm that **Contains placeholder packages to enable pre-order** isn't selected unless required.
1. If applicable, confirm that **Availability** and **Predownload** dates are correct.
   - For more information, see [Packages - advanced settings](../../how-to/how-to-manage-advanced-settings-for-packages.md#package-availability-and-predownload-dates).

---

## Step 3: Properties

Complete these checks in the **[Properties](../../concepts/properties-overview.md)** module.

### Basic Info
1. Confirm that all **Basic info** settings are complete and accurate:
   - Includes **Player modes**, **Accessibility testing**, and **Online gameplay requirements**.
   - Only select options your game supports.

For more information, see [Properties - Basic info](../../concepts/properties-basic-info.md).
      
### Technical Capabilities
1. Confirm that all **Technical capabilities** are accurate:
   - Includes **4K**, **Optimized for Xbox Series X|S**, **Xbox Play Anywhere**, and **Removable storage**.
   - Only select options your game supports.
1. If you release on PC, confirm PC-specific settings:
   - Includes **Input Devices** and **Minimum and recommended specifications**.
   - Don't configure these settings for console-only titles.

For more information, see [Properties - Technical capabilities](../../concepts/properties-technical-capabilities.md).

### Xbox services
1. Confirm that **Xbox services** settings match your game's features:
   - **Achievements** are required for full games on Xbox consoles and PC. For more information, see [XR-055](/gaming/gdk/docs/store/policies/Console/certification-requirements#xr-055-achievements-and-gamerscore-).
   - Achievements aren't required for Game Preview, betas, or demos.

For more information, see [Properties overview](../../concepts/properties-overview.md#xbox-services).

---

## Step 4: Age ratings

Complete these checks in the **[Age ratings](../../concepts/age-ratings.md)** module.

1. Confirm that the International Age Rating Coalition (IARC) questionnaire is complete and accurate.
   - Retake the questionnaire if your answers change.
1. If you upload rating certificates:
   - Confirm the rating value and descriptors match your configuration.
   - Confirm the rating is valid for all platforms.
1. Review any warnings on the page. You might need to retake the questionnaire or remove release markets.
1. Confirm that ratings exist for all markets configured in **Pricing and availability**.

For more information, see:
 - [Age Ratings](../../concepts/age-ratings.md).
 - [XR-017: Age Ratings](/gaming/gdk/docs/store/policies/XR/XR017).

---

## Step 5: Store listings

Complete these checks in the **[Store listings](../../concepts/store-listing.md)** module.

1. Confirm that all required languages show as **Complete**.
   - Follow the Xbox Games Store policy available in the [Xbox Publisher Guide](https://aka.ms/xboxpublisherguide), and your Microsoft agreements.
1. Confirm that the listings are certified. A banner is displayed on the branch and shows the certification result.
1. Import certified listings to the **Main** branch if they're in another branch. Skip this step if the listings are already in the **Main** branch.
   - Select **Export** from the source branch to generate an .xlsx file.
   - Select **Import** to upload the .xlsx file.

---

## Step 6: Pricing and availability

Complete these checks in the **[Pricing and availability](../../concepts/availability/availability-overview.md)** module.

### Markets and availability

1. Select **Show markets** and confirm all intended markets are included.
1. If needed, configure [Private audience](../../concepts/availability/visibility-audiences.md). If enabled, only specified users can access the product details page (PDP) in the Microsoft Store.
1. Confirm the correct **Discoverability** option is selected.
   - If **available and discoverable in the Microsoft Store** is selected, confirm the **Schedule**:
     - **Release** is the date the game is available to play.
     - **Pre-order** is the date the game can be pre-ordered.
     - **Discoverable in the Microsoft Store** is the date the game can be found by searching or viewing collections.
     - **Stop acquisition** is the date the game can't be purchased.
     - **No longer discoverable** is the date the game can't be found by searching or viewing collections.
1. Confirm that **Display release date** isn't enabled unless recommended by Microsoft.

For more information, see [How-to: Visible and purchasable products](../../how-to/how-to-visible-release.md).

### Pricing and trials

1. Confirm the **Base price**.
1. If you don't customize pricing for specific markets, select **Review price per market** and validate automatic price conversions.
1. If you customize pricing for specific markets, confirm all market-specific prices.
1. If you offer a **Free trial**, confirm:
   - The trial type.
   - The trial duration (if applicable).
   - The **Start** and **End** dates.

For more information, see [Game trials](../../concepts/availability/trials.md).

---

## Step 7: Gaming metadata

Complete these checks in the **[Gaming metadata](../../concepts/metadata-overview.md)** module.

1. Confirm that **Accessibility** features are accurate.
   - Only select features your game supports.
   - For more information, see [Accessibility Feature Tags](/gaming/accessibility/accessibility-feature-tags).
1. Confirm **Supported languages**.
1. Confirm **Game Pass** isn't configured, unless requested by your Microsoft contacts. This setting isn't required for all Game Pass products.
1. Confirm **External content** settings.

---

## Step 8: Xbox services

Complete these checks in the **[Xbox services](../../concepts/xbox-services.md)** modules.

### Gameplay settings

1. Identify the source sandbox with final gameplay settings.
   - Use this sandbox when publishing to the **RETAIL** sandbox.

### Xbox settings

1. If applicable, confirm **Localized title names**.
   - Don't use placeholders or names of other products.
1. Confirm **Yes I will be publishing achievements** is selected unless directed otherwise by Microsoft.
1. Confirm **Device families** match your release platforms.
1. If applicable, confirm the **Xbox embargo** date.
   - Embargo is recommended for new game releases.
   - For more information, see [Xbox settings - embargo](../../concepts/xbox-services.md#embargo-date).

---

> [!TIP]
> Xbox games are configured to use the [Reseller](../../concepts/availability/managed-creators/reseller-pricing.md) pricing model and require a **revenue SKU**. If publishing fails due to a missing revenue SKU, send your Store ID to your [Microsoft contacts](../../resources/managed-support/overview-microsoft-representatives-and-contacts.md) to request one. Products without a revenue SKU can't publish to the **RETAIL** sandbox but can still publish to development sandboxes or be submitted for Certification.


## Next steps

- [Publishing to RETAIL](publishing-processes-retail-publishing-and-testing.md)
