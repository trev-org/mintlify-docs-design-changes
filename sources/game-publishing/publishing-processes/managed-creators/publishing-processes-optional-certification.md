---
title: Submit game packages for Optional Certification
description: Optional certification submission guidance for Managed Creators.
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

# Submit game packages for Optional Certification

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

Use the steps and recommendations in this topic to successfully submit your packages to Optional Certification. If you have issues or questions, speak to your Microsoft contacts.

## Optional Certification submission process

 1. Inform your Microsoft contacts that you'd like to submit a package for Optional Certification testing, and confirm the tier of testing that you'd like. Your Microsoft contacts can confirm the pricing for the chosen service, and provide guidance about submitting a Purchase Order (PO).
    - For more information, see [Certification Paid Services](../../concepts/certification/certification-paid-services.md).

 2. Complete the *Certification Questionnaire* under **Supplemental info** > **Certification.**
     - If you don't have final confirmation of the game content at the Optional Certification stage, answer the questions to the best of your knowledge. We recommend that you review and edit the questionnaire after this content is complete.
     - For more information, see [Supplemental info - Certification](../../concepts/certification/certification-supplemental-info.md#certification).

 3. Upload any additional submission materials in the **Supplemental info** > **Files** section. Provide any documentation that might be useful for the test team, including:
     - Known issues
     - Achievements guide
     - Walkthrough
     - Previous Certification response report
     - For more information, see [Supplemental info - Files](../../concepts/certification/certification-supplemental-info.md#files).
       
 4. Ensure that the [**Properties**](../../tutorial-xbox-managed/how-to-configure-properties.md) module is completed. Specifically, make sure that the **Basic Info** section is completed, including providing a **Privacy Policy URL**.

 5. Ensure that the IARC questionnaire in the [**Age Ratings**](../../tutorial-xbox-managed/how-to-set-age-ratings.md) module has been completed and, if applicable, any manual ratings have been configured where you're not using the IARC system.
    - If the game content changes after you submit the game for Optional Certification, update your answers in the IARC ratings questionnaire to ensure that accurate age ratings are acquired. Don't submit placeholder answers in the IARC questionnaire.
      
 6.  Upload your *Base Packages*, and any required *Market-Specific Packages*, in the [**Packages**](../../tutorial-xbox-managed/how-to-create-a-package.md) module.
     - XVC, EKB, and Submission Validator output are required. We recommend providing your .zip folder of symbol files for enhanced crash reporting.
       
 > [!NOTE]
 > If you have published packages for pre-order, we recommend uploading your builds to a branch other than Main, and Certifying from this new branch. This will prevent the need for you to override the pre-order stubs in the Main branch.
 >
 > If you support multiple platforms in pre-order and are only submitting one platform for Optional Certification, first import your pre-order packages to the branch you intend to Certify for Optional. Replace the pre-order package for the platform you are submitting for Optional and leave the other platforms untouched. When you submit, only the new package will be tested.

 7. After the status shows as *Complete* at the top of the **Packages** page, select [**Certify**](../../tutorial-xbox-managed/how-to-certify-a-game.md).

 8. Select the source you want for the Xbox services gameplay settings.

 9. Select the checkbox for **Optional certification (feedback only)**.

 10. Add a note in **Notes for Certification** stating that this is an Optional submission. Add anything else that would be useful to the test team.

 11. Select **Submit to certification**.

 > [!NOTE]
 > The **Game Overview** page doesn't show the publishing progress to Certification for Optional submissions. To view the current Certification status, go to the Packages module. If you have any questions about the timing or status of your submission, speak to your Microsoft contacts.

### Updating Xbox services in CERT.DEBUG
If this is your first submission, or if you've updated your Xbox services gameplay settings since your previous submission, manually publish the settings to the CERT.DEBUG sandbox.

 1. Go to the **Xbox services** > **Gameplay settings** page for your product. Select the source sandbox that you selected in the Certify workflow for the packages.

 2. Select **Review and Publish** to publish your Xbox services gameplay settings to the CERT.DEBUG sandbox destination.

## Providing add-on content alongside your base package

To provide game add-ons for Xbox Certification for testing alongside the game, complete the following steps for each add-on that you want to include in the submission. Ensure that you also list the add-ons that you'll be publishing in the appropriate section of the Certification Questionnaire for the base game. 

 1. Complete **Properties.**
 2. Complete **Age Ratings** for Durables.
 3. Complete **Store Listings** for at least one language.
 4. Select at least one market in the **Pricing and Availability** module. We recommend you select all regions that the game will be available in.
 5. Select the **Certify** option when it appears at the top of the **Overview** page.

> [!NOTE]
> The base game package must be submitted via the Certify workflow before any add-ons can be submitted.

## Receiving Certification reports

During and after the Certification process, you might receive updates from your Microsoft contacts about the status of your submission. These updates might include the following:

 - Build Verification Test (BVT) pass/fail results
 - Hold notifications that are blocking testing from proceeding
 - General questions
 - Certification reports

Most in-test queries are sent via email. Your Certification reports might be provided in a .docx format via email, and in all cases will be available directly in Partner Center. Issues that must be fixed in your next submission will be marked as **CFR** (Condition for Resubmission) or **Pass with required fix**.

## Next steps

With your game packages submitted for Optional review, you might be ready for Final Certification, or you might continue configuring your product's settings.

 - [Submit to Certification](publishing-processes-submitting-to-certification.md)
 - [Manage Packages](../../concepts/packages-overview.md)
 - [Configure Properties](../../concepts/properties-overview.md)
 - [Configure Age Ratings](../../concepts/age-ratings.md)
 - [Configure Store Listings](../../concepts/store-listing.md)
 - [Configure Pricing and Availability](../../concepts/availability/availability-overview.md)
 - [Configure Gaming Metadata](../../concepts/metadata-overview.md)

## See also
 
 - [Certification step-by-step guide](../../concepts/certification/certification-guide.md)
 - [Certification optional submissions](../../concepts/certification/certification-optional-submissions.md)



