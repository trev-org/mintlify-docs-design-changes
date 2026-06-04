---
title: Create a Store listing for a game
description: Guidance for Managed Creators to configure Store listings for a game.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 3/14/2025
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Create a Store listing for a game 

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

This article explains how to create an English store listing. A store listing includes the text and visual assets shown to customers on the product details page (PDP) in the Microsoft Store.

> [!Important]
> This article covers English store listings only. We recommend creating listings for all languages used in your target markets. Review your publishing agreement with Microsoft, the Xbox Games Store Policy in the [Xbox Publisher Guide](https://aka.ms/xboxpublisherguide), and [Microsoft Store Policies](/windows/apps/publish/store-policies) to determine requirements for additional languages.

Store listing assets must meet the requirements for each device family your game supports. Before creating assets, see [Store listing concepts](../concepts/store-listing.md) for specifications.

---

## Prerequisites
Before you begin, make sure you have:

 - Enrollment in a Managed Creator program. If you're not enrolled, see [Onboarding as a new Creator](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md).
 - An active Partner Center account. If you don't have an account, contact your Xbox team.
 - An approved game concept. If you don't have concept approval, see [Game Concepts](../publishing-processes/managed-creators/publishing-processes-game-concepts.md).

---

## Access the Store listings module

1. Sign in to [Partner Center](https://partner.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your game, or search for it.
1. On the **Game overview** page, select **Store listings**.

The instructions in this article assume you use the **Main** branch. For more information, see [Branches](../concepts/branches.md).

---

## Create a Store listing in one language

To complete the **Store listings** module, create at least one language.

1. Select **Manage additional languages**.
1. To add English:
   - Select **Top-level languages**.
   - Search for **English**.
   - Select the checkbox, then select **Update**.
1. Select **English** in the table to open the listing.
1. Complete each section.
1. Select **Save draft**.

To remove a language, return to the overview and select **Remove**.

### Sections within each Store listing

* [Text](#text) (Required)
* [Screenshots](#screenshots) (Required)
* [Store logos](#store-logos) (Required)
* [Trailers and additional assets](#trailers-and-additional-assets) (Optional, but recommended)
* [Supplemental fields](#supplemental-fields) (Optional, but recommended)
* [Additional information](#additional-information) (Optional, but recommended)

---

## Text

1. Select the **English** Store listing.
1. In **Product name**, select the appropriate reserved name.
   - Select **Reserve more names** to reserve new names for use in the Store listing.
1. In **Description**, describe your game.
1. In **What's new in this version**, describe changes since the previous release. Leave this field blank for the first release.
1. In **Product features**, list key features:
   - Features are displayed as a bullet list on the PDP.
   - Include up to 20 features.
   - Each entry has a 200-character limit.
1. Select **Save draft**.

---

## Screenshots

Screenshots should be screen captures or game artwork that reflects your game content.

Image requirements vary by device family. Select each tab (**Desktop** and **Xbox**) to view specifications. For more information, see [Screenshot requirements](../concepts/store-listing.md#screenshots).

We recommend uploading at least four screenshots per supported device family. 

* **Desktop:** Recommended for PC games.
* **Mobile:** Not required for PC or console games
* **Xbox:** Required for console games.
* **Holographic:** Not required for PC or console games.

### Upload screenshots for the Xbox device family

1. Select the **Xbox** tab.
1. Upload screenshots by dragging files or selecting them.
1. To add optional alt text, select **Add Alt Text**. Alt text should describe the image in 1-2 sentences.
1. Select **Save draft**.

You can upload a maximum of 30 screenshots per game. The number next to each device family tab indicates the number of files uploaded.

Repeat these steps as necessary for each supported device family.

---

## Store logos

**Store logos** enhance your game's PDP for customers. Store logos are required for Xbox games. The following assets are supported:

* **9:16 Poster art**: Required for Xbox games. For requirements, see [Poster art](../concepts/store-listing.md#poster-art).
* **1:1 Box art**: Recommended. Used as your main logo if **9:16 Poster art** isn't provided. For requirements, see [Box art](../concepts/store-listing.md#box-art).
* **1:1 App tile icon**: Optional.

### Upload Store logos artwork

1. Upload images to each category by dragging files or selecting them.
1. Partner Center validates the images. If the requirements aren't met, an error dialog appears. 
1. Select **Save draft**.

If you want customers to see the uploaded logo images instead of the images you include in the **MSIXVC** or **XVC** packages you create for your game, select **For customers on Windows 10/11 and Xbox, display uploaded logo images instead of the images from my packages**. A new **Store display images** section appears with three upload boxes. The **300 x 300 1:1 app tile** is required.

---

## Trailers and additional assets

Use the **Trailers and additional assets** section to enhance your PDP. Trailers are short videos that show your product in action and provide a better understanding of what it's like. If accompanying thumbnail images are uploaded, trailers are shown at the top of your game's PDP.

### Upload a trailer and thumbnail

1. In the **Trailers and additional assets** section, select **Browse your files** and upload a trailer. Alternatively, use **Select from existing trailers** to reuse a trailer you uploaded previously. An error message is displayed if the video file doesn't meet requirements.
1. After the trailer uploads, select the **pencil** icon, add a title, and upload a **1920 x 1080** thumbnail image.
1. To make trailers more accessible, upload closed captions and audio descriptions. This step is optional.
1. Select **Save draft**.

You can upload up to 30 trailers.

To delete a trailer and its accompanying thumbnail, select the **X** next to its name. A dialog appears asking whether you want to remove the trailer from this store listing or from all store listings.

### Select a trailer to appear at the top of Store listing

1. In **Windows 10 and Xbox image**, upload a **1920 x 1080** or **3840 x 2160** image. This 16:9 "hero" promotional image is displayed after the trailer displayed on the PDP finishes playing. This image is required for a trailer to appear at the top of the PDP.
2. In **Choose a trailer to play at the top of your Store listing**, select an uploaded trailer.

### Additional assets

For Xbox releases, provide:

 - **Titled hero art**. The game title must appear in the top two-thirds of the image.
 - **Featured promotional square art**. The asset must not include the product's title.

For more information, see [Store listing - Art assets reference list](../concepts/store-listing.md#art-assets-reference-list).

---

## Supplemental fields

The **Supplemental fields** are optional. The **Short title** is recommended for most games. It's a shorter version of your game's name displayed in various elements of the Xbox user interface, such as achievement notifications.

The other fields help optimize the customer experience in different scenarios. For details, see [Store listing - Supplemental fields](../concepts/store-listing.md#supplemental-fields).

---

## Add additional system requirements

Use the **Additional system requirements** section to provide minimum and recommended hardware configurations. These requirements are provided in addition to the information provided in the **Technical Capabilities** section of the **Properties** page. This section is important if the game requires specific hardware. These items are displayed in a bulleted list on the PDP.

### Additional information

Use the fields in the **Additional information** section to provide extra metadata that helps customers understand your game. For more information, see [Store listing - Additional information](../concepts/store-listing.md#additional-information).

> [!NOTE]
> The **Copyright and trademark info** field has a 200-character limit. Exceeding this limit can prevent the listing from showing as **Complete**.

---

## Next step

* [Configure pricing and availability](how-to-configure-pricing-and-availability.md)
