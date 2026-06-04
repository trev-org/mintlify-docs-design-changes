---
title: Add gaming metadata for a game
description: Guidance for managed creators to add gaming metadata for a game
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 5/1/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Add gaming metadata for a game

[!INCLUDE [reminder](../includes/managed-creators-only-feature.md)]

This article describes how to add gaming metadata for a product. Metadata information helps you connect with players by directly highlighting specific features about your product. The features within the Gaming Metadata module are optional and can be updated at any time.

## Prerequisites

 - Enrolment in a Managed Creator program. If you're not enrolled yet, see [New Creator onboarding](../publishing-processes/managed-creators/publishing-processes-onboarding-new-creator.md)
 - Active Partner Center account. If you don't have an account yet, speak to your Microsoft contacts.

## Navigate to the Gaming metadata page

1. Sign in to [Partner Center](https://developer.microsoft.com/dashboard).
1. On the **Home** page, select **Apps and games**.
1. On the **Apps and games | Overview** page, select your title. Or, enter your game's name in the search bar and then select your game.
1. Select **Gaming metadata** from the left navigation pane.
1. On the **Gaming metadata** page, select **Import metadata (Import from other product)** if you already have previously saved metadata for another product and want to copy it over to this one. Otherwise, go on to the next section.

## Add Accessibility features

1. [Navigate to the **Gaming metadata** page](#navigate-to-the-gaming-metadata-page)
1. On the **Gaming metadata** page, go to the **Accessibility features** section and select **Add**.
1. Under **Accessibility URL**, enter your game's accessibility page URL. This page provides additional or detailed information about a game's accessibility features. The accessibility page must be specific to your game, not a general accessibility page that covers multiple games. The URL shouldn't contain locale or language identifiers.
1. Select each option that your game supports. Your game must meet the specific criteria for each feature. For more information, see [Accessibility feature tags](/gaming/accessibility/accessibility-feature-tags).
1. Select **Save and return** to save your selection.

## Add Supported languages

1. [Navigate to the **Gaming metadata** page](#navigate-to-the-gaming-metadata-page)
1. On the **Gaming metadata** page, go to **Supported languages** section and select **Add**.
1. On the **Your game title | Supported languages** page, select using the categories&mdash;**Interface**, **Voice**, **Subtitles** to indicate how each language is supported within your game. Do this for all in-game supported languages.
    * For example, if your game supports Catalan in the user interface, but doesn’t support it in audio or subtitles, select the **Interface** checkbox and clear the **Voice** and **Subtitles** checkboxes.
    * If your game supports all of the listed languages in all three categories, select the checkboxes in the **[Select all]** row for **Interface**, **Voice**, and **Subtitles**.
1. If your game has multiple packages and the language support varies in each package, select the checkbox for **Check this box to show "Language support may vary depending on Store region and initial download." on your Product Details Page (PDP) in the Store.**
1. Select **Save and return** to save your selection.

## Configure Game Catalog Extension ID (optional)

> [!Warning]
> It's critical that you don't enter any information in this field unless directed to do so by your Microsoft contacts. Incorrect information in this field will result in game installation issues.

1. [Navigate to the **Gaming metadata** page](#navigate-to-the-gaming-metadata-page)
1. On the **Gaming metadata** page, go to **Game Pass** section and select **Add**.
1. Enter your extension ID into the **Game Catalog Extension ID** field. Don't enter any other information in this field.
1. Select **Save and return** to save your selection.

## Add External content

1. [Navigate to the **Gaming metadata** page](#navigate-to-the-gaming-metadata-page)
1. On the **Gaming metadata** page, go to the **External content** section and select **Edit**.
1. On the **Your game title | External content** page, specify the external content that should be displayed on your game's Store PDP.
1. Select **Save and return** to save your selection.

## Next steps

* [Configure Xbox services](how-to-configure-xbox-services.md)
