---
title: Submit game packages for Final Certification
description: Guidance for managed Creators to submit games for Final Certification.
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

# Submit game packages for Final Certification

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

Use the steps and recommendations in this topic to successfully submit your packages and associated configuration to Final Certification. If you have issues or questions, speak to your Microsoft contacts.

## Final Certification submission process

With modular publishing, it's possible to certify the **[Store Listings](../../concepts/store-listing.md)** and **[Pricing and availability](../../concepts/availability/availability-overview.md)** modules separately to the **[Packages](../../concepts/packages-overview.md)** module. **Store Listings** and **Pricing and availability** certification can be done before, after, or at the same time as the Packages. However, you won't be able to publish to the RETAIL sandbox until all modules have been Certified and passed.

To submit to Final Certification, use the following steps within your Partner Center product.

### Submitting packages
 1. Complete the *Certification Questionnaire* under **Supplemental info** - **Certification.**
     - For more information, see [Supplemental info - Certification](../../concepts/certification/certification-supplemental-info.md#certification).

 2. Upload any additional submission materials in the **Supplemental info** - **Files** section. Provide any documentation that might be useful for the test team, including:
     - Known issues
     - Achievements guide
     - Walkthrough
     - Previous Certification response report
     - For more information, see [Supplemental info - Files](../../concepts/certification/certification-supplemental-info.md#files).

 3. Ensure that the [**Properties**](../../concepts/properties-overview.md) module is completed. Specifically, make sure that the **Basic Info** section is completed including providing a **Privacy Policy URL**.

 4. Ensure that the IARC questionnaire in the [**Age Ratings**](../../tutorial-xbox-managed/how-to-set-age-ratings.md) module has been completed and that the IARC rating value has been overridden, with the traditional long form rating uploaded, for any region to which you are distributing discs. IARC ratings can't be used for a disc release.

 5.  Upload your *Base Packages*, and any required *Market-Specific Packages*, in the [**Packages**](../../concepts/packages-overview.md) module.
     - After uploading your XVC, the matching **EKB** must be uploaded.
     - You must upload a valid **Submission Validator log file** for each package you're submitting. Open the log file and confirm that there are no **failures** or unexpected **warnings**.
     - We recommend providing your .zip folder of **symbol files** for enhanced crash reporting.
     - Don't upload anything to the **Disc Layout** section unless your Microsoft representative has advised you to do so, based on the planned configuration of your product.

 7. When the **Status** field shows as **Complete** at the top of the **Packages** page, select [**Certify**](../../tutorial-xbox-managed/how-to-certify-a-game.md).

 8. On the Certify page, select the source you want for the Xbox services gameplay settings.
 
 9. **(Disc-based games only)** Select the checkbox for the **Intended for discs** option.
 
 10. Select **Submit to certification**.

### Updating Xbox services in CERT.DEBUG
If this is your first submission, or if you've updated your Xbox services gameplay settings since your previous submission, manually publish the settings to the CERT.DEBUG sandbox.

 1. Go to the **Xbox services - Gameplay settings** page for your product. Select the source sandbox that you selected in the Certify workflow for the packages.

 2. Select **Review and Publish** to publish your Xbox services gameplay settings to the CERT.DEBUG sandbox destination.

### (Disc-based games only) Making a disc request

Games that are intended to release on physical discs must have test discs ordered and approved by the Xbox Certification team. If you're Certifying a package that's intended to be manufactured on disc, submit a disc order after successfully submitting the package to Final Certification. Placing a disc order will result in a quantity of test discs being manufactured and delivered to the designated recipients for sign-off and approval to Release to Manufacture (RTM).

> [!IMPORTANT]
> You must certify the **Store Listings** module before you can submit a disc request. Although Partner Center displays **Voice Title** and **Featured Promotional Square Art** as optional, these must be provided for all locales for any disc release.

 1. From the product page navigation, select **Request Management**, located under the **Discs** heading.
 2. Select **Create new request**, and then complete the form.
    1. Give the order a name that's clear for your future reference.
    1. Select a Certified Store Listing. If you've updated your listings since they were Certified, Certify the new Store Listings before proceeding if needed.
    1. Check the box for **This product will be sold in China** only if this is true for the disc and you have approval from the appropriate authority.
    1. If you aren't seeing the correct version in the **Packages** section, wait a while for the Packages submission to process further. If the correct version doesn't appear in the **Disc Request** UI within four hours, speak to your Microsoft contacts.
    1. When you complete the test disc recipient section, write the *full* address, including company name and country/region.
 3. After completing the form, select **Order Disc**.

> [!IMPORTANT]
> If **This product will be sold in China** is selected during Disc Request creation, the discs will not be compatible with consoles sold outside China. You can't create a single disc order to generate discs for use in both China and other regions.

For more information, see [How-To Request and Manage Discs](../../how-to/how-to-request-and-manage-discs.md).

#### Creating compilation discs

If you need to include packages from multiple products on a single disc, you'll need to create a request for a compilation disc.

To submit a request for a compilation disc, you must meet the following requirements.

 - You've created a Game Bundle product in Partner Center and configured this bundle to include each of the products you want to include on the compilation disc.
 - Have already certified all included content.

If you meet these requirements, create a new disc request within the bundle product using the steps above. If you have any additional questions please contact your Microsoft contacts.

> [!Important]
> After receiving test discs and passing Final Certification, you must send your Microsoft contacts approval to release the disc binary for manufacturing. For more information about the RTM process, see [Approve discs for manufacture](publishing-processes-rtm.md).

## Providing add-on content alongside your base package

To provide game add-ons for Xbox Certification for testing alongside the game, complete the following steps for each add-on that you want to include in the submission. Ensure that you also list the add-ons that you'll be publishing in the appropriate section of the Certification Questionnaire for the base game. 

 1. Complete **Properties.**
 2. Complete **Age Ratings** for Durables.
 3. Complete **Store Listings** for at least one language.
 4. Select at least one market in the **Pricing and Availability** module. We recommend you select all of the regions that the game will be available in.
 5. Select the **Certify** option when it appears at the top of the **Overview** page.

> [!NOTE]
> The base game package must be submitted to Certification via the Certify workflow before any add-ons can be submitted.

## Receiving Certification reports

During and after the Certification process, you might receive updates from your Microsoft contacts about the status of your submission. These updates might include the following:

 - Build Verification Test (BVT) pass/fail results
 - Hold notifications that are blocking testing from proceeding
 - General questions
 - Certification reports

Most in-test queries are sent via email. Your Certification reports might be provided in a .docx format via email, and in all cases will be available directly in Partner Center. Issues that must be fixed in your next submission will be marked as **CFR** (Condition for Resubmission) or **Pass with required fix**.

## Next steps

With your game packages Certified, you can publish to the RETAIL sandbox, submit updates for your game for Certification or support your game with post-release content.

 - [RETAIL publishing and testing](publishing-processes-retail-publishing-and-testing.md)
 - [Supporting released games](publishing-processes-post-release-lifecycle.md)

## See also

 - [Certification step-by-step guide](../../concepts/certification/certification-guide.md)





