---
title: Configure a Durable add-on for a game
description: Configure a Durable add-on for a game.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 9/21/2023
keywords: publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Configure a Durable add-on for a game

## Navigate to an add-on

1. Sign in to [Partner Center](https://developer.microsoft.com/dashboard).
1. In the **Home** page, select **Apps and games**.
1. In the **Apps and games | Overview** page, select your title. Or, enter your game's name in the search bar and then select your game.
1. Select **Add-ons** from the left navigation pane.
1. On the **Add-ons** page, select the add-on you want to update or configure.

## Durable setup

1. [Navigate to the add-on](#navigate-to-an-add-on). Make sure that the selected add-on has **Durable** listed as the **Product type**.
1. Select **Durable setup** from the left navigation pane.
1. For **Setup details**, select **Electronic software download**. For most add-ons, the content type should be **Electronic software download**. If another option from the list describes your add-on better, select that option instead.
1. Select whether or not the durable has its own Microsoft Store listing. 
   - If the durable has its own Store listing, you need to create and configure a Store listing. To do so, see [Store listings](#store-listings) section below. 
1. Review the **Identity details** section. This section gives you info about how the Store identifies this newly created add-on.
1. Select **Save draft**.

## Properties

1. [Navigate to the add-on](#navigate-to-an-add-on). Make sure that the selected add-on has **Durable** listed as the **Product type**.
1. Select **Properties** from the left navigation pane.
1. For **Product lifetime**, select **Forever**.
1. For **Basic info**, you may use the same info used previously for the base game. If it's different from the base game, update it here for the add-on. Information to provide: privacy and website URLs, company address.
1. Select **Save and return**.

## Age ratings

Age ratings can be inherited from the base game. If the add-on has content that differs from the base game, answer the questionnaire again to obtain a new age rating. This new rating will only apply for the particular add-on.

1. [Navigate to the add-on](#navigate-to-an-add-on). Make sure that the selected add-on has **Durable** listed as the **Product type**. 
1. Select **Age ratings** from the left navigation pane.
1. Select one of the following options.
   * To inherit the ratings from the base game, leave **This add-on does not require more restrictive ratings than its parent product** selected.
   * To determine a new rating specifically for this add-on, select **I'm ready to complete the International Age Rating Coalition (IARC) questionnaire**. For instructions, see [Set age ratings](how-to-set-age-ratings.md).
   * If you already have a rating, select **I have already completed the questionnaire for this app elsewhere and have an IARC Certificate ID or Global Rating ID**.
1. Select **Save draft**.

## Store listings

You can choose to have a separate Store listing for a durable. This allows customers to view the durable in the Store during browsing and it's different from the base game's store listing. Make this selection on the [Durable Setup](#durable-setup) page.

Remember to create and configure a new Store listing for each add-on that has its own Store listing. The instructions are similar to the base game. So, refer to [Create a store listing for a game](how-to-create-a-store-listing.md).

## Pricing and availability

1. [Navigate to the add-on](#navigate-to-an-add-on). Make sure that the selected add-on has **Durable** listed as the **Product type**.
1. Select **Pricing and availability** from the left navigation pane.
1. Choose a price and set when the add-on is available. The sections and options are similar to those for a base game on the **Pricing and availability** page. For instructions, see [Configure pricing and availability](how-to-configure-pricing-and-availability.md).
1. Select **Save draft**.

## Gaming metadata

We highly recommend that you enter all the information about your game so the Store is able to inform players about the features you offer.

1. [Navigate to the add-on](#navigate-to-an-add-on). Make sure that the selected add-on has **Durable** listed as the **Product type**.
1. Select **Gaming metadata** from the left navigation pane.
1. If you want to reuse metadata info from an existing product, select **Import metadata** and enter an existing product ID. Then select **Import metadata**. Otherwise, skip this step.
1. Go to the **Accessibility** tab, select **Edit***. Select all accessibility features that your game has and then select **Save and return**. 
1. Go to the **Supported languages** tab, select **+ Add**. Then, select the languages your content is available in.
1. If your product is part of the PC Game Pass Catalog Extension Program and you've been instructed to by your Microsoft contacts, go to the **Game pass** section, select **+ Add**. Enter the **Game Catalog Extension ID** and then select **Save and return**.

### Submit for certification

1. Go to the **Durable overview** page.
1. When you're ready to submit the add-on, select **Certify** to start the certification process.

## Review and Publish

1. [Navigate to the add-on](#navigate-to-an-add-on). Make sure that the selected add-on has **Durable** listed as the **Product type**.
1. Select **Durable overview** from the left navigation pane.
1. Select **Review and publish** next to the page title.
1. On the **Review and publish** page, check that all information is accurate and all sections are completed. Fix any errors before proceeding.
1. On the **Review and publish** page, go to the **Publish to** dropdown and select **RETAIL**. **Publish from** will be unavailable because only the **Main** branch can be used as the source.
1. For **Submission notification audience**, select **Click here** to view or change who can receive submission status notifications for this product.
1. Under **Notes for certification**, enter any information to help Microsoft test your game.
1. Select **Publish** to submit your game for publishing.

> [!Note]
> If any modules haven't been Certified before you start Publishing, they'll be submitted for Certification before the publish will proceed. If you fail Certification, resolve any issues before you try to Publish again.

After the Durable has published to the RETAIL sandbox, you can acquire it using a [Promotional Code](../publishing-processes/managed-creators/publishing-processes-promo-codes.md). The product will be available to customers at the Release date you configured in the **Pricing and availability**. You can submit updates for any module by making changes in Partner Center and then publishing them to the RETAIL sandbox.
