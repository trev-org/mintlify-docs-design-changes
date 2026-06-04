---
title: Certification (Certify)
description: Get your product certified in Partner Center using the Certify workflow.
services: gaming
author: e-h-s
ms.author: edwardst
ms.service: gaming
ms.topic: article
ms.date: 1/15/2023
keywords: windows 10, publishing, publish, selling, sell, distribute, distributing, store, dashboard
ms.localizationpriority: medium
permissioned-type: public
---

# Certification (Certify)

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

Products need to be certified before they can be published to the Microsoft Store in the RETAIL sandbox. Partner Center accounts with the proper permissions can submit specific modules, like Packages, to certification individually by using the **Certify** workflow.

## Which modules can be submitted?

The Certify workflow is available for **Packages**, **Store listings**, and **Pricing and availability**. These modules need to be submitted for certification and must pass the applicable reviews before you're able to publish the product to the RETAIL sandbox. If you publish a product using [Review and publish](../modular-submission.md) before a required module is certified, certification reviews will be generated and the publishing workflow won't proceed until the reviews are approved.

## Prepare for certification

Each module needs to be completed in full before it's submitted for certification. There are different certification requirements for each module and the time it takes to complete the Certification process will vary. More detail is provided in the guidance included in this topic.

Each module can be completed and certified before, after, or simultaneously with other modules. These modules can be certified in any branch. However, the approved content or configuration must be imported to the **Main** branch before publishing to the RETAIL sandbox. Each module can have only one branch in certification at any one time.

## Certify Packages

Packages must be reviewed and approved by the Xbox Certification team. Packages submitted for Certification will be tested for compliance with the [Xbox Requirements (XRs)](/gaming/gdk/_content/gc/policies/gc-policies-nav).

The time it takes to test packages depends on the platform and the type of submission. For details about the Xbox Certification Service Level Agreement (SLA), see [Xbox Certification: Step-by-Step Guide](certification-guide.md).

### Certification questionnaire and files

For game products, you're required to complete the **Certification** questionnaire before you submit packages for review. Select the **Certification** menu option from your product's page navigation to complete the questionnaire, or to update it if you've submitted it previously.

If you want to provide additional files to the Certification team, such as a game walkthrough, known issues summary or Achievements guide, upload these by selecting the **Files** menu option from your product's page navigation.

For more information, see [Supplemental Info](certification-supplemental-info.md).

## Certify Store listings

Certification for Store listings includes two components.

- Review of art assets
- Review of text elements

Requirements for Store listings are defined in [Store listings](../store-listing.md).

Store listings are generally reviewed within 1 business day.

## Certify Pricing and availability

Certifying the Pricing and availability module will generate a review of your product's pricing configuration.

Pricing review is generally completed within 5 business days.

## Certify add-ons

Add-on products, such as Durable, Durable with packages and Consumable (Microsoft Store-managed) must be Certified. However, these product types don't support submitting the Store listings, Pricing and availability or Packages (if applicable) pages independently. Submit add-ons to Certification after completing all pages. Select the **Certify** option from the **Overview** page of the add-on product to submit it for review.

> [!NOTE]
> If you're submitting an add-on to support the Certification of a base game package and you haven't finalized all of the information, for example Pricing or Store listings text, you can configure the minimum required sections for each page to ensure they are marked as **Complete**. Then, include a note in the **Notes to Certification** section of the Certify workflow to indicate which sections are not final. Make sure to update each section once the configuration is finalized and then submit the add-on to Certification again.

## Notes to certification

After selecting the **Certify** option on the module you want to submit for review, you'll have the option to add notes to Certification. You can use this field to include any important information that the test team should know about.

## What happens when the Certification process is complete?

After the module has been submitted via the Certify workflow and the review has been completed, you'll see results for the submission in Partner Center. A Certification report might be available if there are any issues that need to be resolved. If the submission passed Certification, the module is ready for publishing to the RETAIL sandbox. If the submission failed Certification, you must resolve any issues and then resubmit using the Certify workflow.

## See also

- [Certification process](../../publishing-processes/managed-creators/publishing-processes-submitting-to-certification.md)
