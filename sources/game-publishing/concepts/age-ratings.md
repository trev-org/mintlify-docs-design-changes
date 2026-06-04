---
title: Age ratings
description: Configure age ratings in Partner Center
services: gaming
author: FLY1NGSQU1RR3L
ms.author: clintw
ms.service: gaming
ms.topic: article
ms.date: 1/15/2023
keywords: windows 10, publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Age ratings

[!INCLUDE [reminder](../includes/select-msix-tab.md)]

The **Age ratings** page of the product in Partner Center lets you provide information about your product so it can receive the appropriate age and content ratings administered by the [International Age Ratings Coalition (IARC)](https://www.globalratings.com/) rating system. These ratings are about the suitability of the content in the game, rather than the age of the target audience for your game.

How you complete the IARC questionnaire on the **Age ratings** page to obtain an age rating for an Xbox game or a product that uses Xbox services is very similar to the process for apps. To learn more, see [Age ratings for apps and games](/windows/apps/publish/publish-your-app/age-ratings?pivots=store-installer-msix).

There are also additional policies for age ratings for games. For the latest guidance, see [XR-017 Title Ratings](/gaming/gdk/_content/gc/policies/xr/xr017). This Xbox Requirement (XR) has detailed guidance about the ratings you can configure, advice on acquiring ratings and more. If you have questions about age ratings as they relate to your game or release plans, speak to your Microsoft contacts.

> [!NOTE]
> Age ratings are required for all submissions to Certification. You should ensure that you have acquired all applicable ratings before you attempt to submit your game.

## Understand the process

Access the **Age ratings** page and then:

* Generate a rating by answering the questions in the IARC questionnaire provided through the **Age ratings** page on Partner Center, or
* Enter an IARC rating ID that you have already obtained for the product on another platform or storefront

If your game is distributed on physical media in one or more regions, then you must first take the questionnaire and upload the ratings certificate obtained from the ratings board for each region. For instructions, see [How to set age ratings](../how-to/how-to-set-age-ratings.md).

If your product won't be distributed on physical media, you can still submit the rating you've received from the ratings board.

### Different platforms

If your game offers the same experience on different platforms, you might be able to use the same ratings and certificate for each platform you intend to release the product for. If you're unsure, review your age rating certificate for approved platforms, or speak to the age rating authority that issued the age rating classification.

### Add-ons

You have three options when you configure age ratings for add-on content, depending on your requirements.

* Select **This add-on doesn't require more restrictive ratings than its parent product** if you need your add-on content to share the same age rating values as the main game product.
* Select **I'm ready to complete the International Age Rating Coalition (IARC) questionnaire** if you need to take the IARC questionnaire specifically for the add-on content being configured.
* Select **I have already completed the questionnaire for this app in another storefront and have an IARC rating ID** if you want to import IARC questionnaire responses from another IARC questionnaire.

### Bundles

Bundle age ratings are automatically defined based on the ratings for the products included in the bundle that were defined in the **Bundle setup** page. If you have questions about the age ratings generated for a bundle product, speak to your Microsoft contacts.

## IARC questionnaire

You're required to take the IARC ratings questionnaire for **ALL** products created via Partner Center, even if an age rating is acquired directly from a rating authority. The questionnaire must be completed accurately. It must be retaken if your game content changes. Placeholder answers shouldn't be submitted. IARC ratings are valid only for digital distribution. Any games that also target physical distribution must acquire ratings directly from the relevant rating authority.

For more information about taking the IARC questionnaire, see [How to set age ratings](../tutorial-xbox-managed/how-to-set-age-ratings.md).

### Changing an IARC-issued rating

If you've completed the IARC rating questionnaire and disagree with a rating value that has been issued, the rating certificate email you'll receive includes a link that you can use to contact the rating authorities.

## Long-form ratings and overriding IARC questionnaire results

After completing the IARC questionnaire and generating age ratings for your product, it's possible to override the ratings with traditional or "long-form" ratings acquired directly from the various ratings authorities. These overrides must be configured and saved for any game that's distributed on disc. Any manually configured age ratings will take precedence over IARC ratings.

For instructions on how to override IARC ratings with long-form ratings, see [How to set age ratings](../tutorial-xbox-managed/how-to-set-age-ratings.md).

### Long-form ratings for multiple platforms

If you're using a single product in Partner Center to support the release of your game on multiple platforms (for example, Xbox One, Xbox Series X|S and PC) and you're overriding the IARC-generated age rating, you must provide a valid age rating certificate for each supported platform. Partner Center only allows a single .pdf file to be uploaded for each age rating authority. For rating authorities where an individual certificate is issued per platform, you must combine these into a single .pdf document before you upload it.

## Next steps

* [Set age ratings for a game](../tutorial-xbox-managed/how-to-set-age-ratings.md)

## See also

* [Age ratings](/windows/apps/publish/publish-your-app/age-ratings?pivots=store-installer-msix)
* [XR-017 Title Ratings](/gaming/gdk/_content/gc/policies/xr/xr017)
