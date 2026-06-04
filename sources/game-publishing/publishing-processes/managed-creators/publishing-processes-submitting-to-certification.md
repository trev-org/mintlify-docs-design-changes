---
title: Submitting to Xbox Certification in Partner Center
description: Guidance for publishers to submit their packages and associated content to Xbox Certification in Partner Center.
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

# Submitting to Xbox Certification in Partner Center

[!INCLUDE [reminder](../../includes/managed-creators-only-feature.md)]

All products releasing on Xbox consoles or PC must be certified prior to release. While some components of your product such as [Store listings](../../concepts/store-listing.md) and [Pricing and availability](../../concepts/availability/availability-overview.md) require review and approval through the Certify process in Partner Center, [Packages](../../concepts/packages-overview.md) are subject to testing by the Xbox Certification team.

For more information on submitting via the Certify workflow, see [Certification Process](../../concepts/certification/certification-overview.md).

## Xbox Requirements

Depending on your product and the stage in your release lifecycle, different Xbox Requirements (XRs) and testing processes might apply. For more information, follow the appropriate link for your product type and platform.

 - [Xbox Requirements for Xbox Console Games](/gaming/gdk/_content/gc/policies/console/certification-requirements)
 - [Xbox Requirements for Open Betas and Game Previews](/gaming/gdk/_content/gc/policies/certification-requirements-beta-game-preview)
 - [Xbox Requirements and Store Policies for PC, Mobile, and Creators Program](/gaming/gdk/_content/gc/policies/pc/live-policies-pc)

## Scheduling appointments

You aren't required to schedule Certification appointments prior to submission of packages for testing. However, for all submission types, inform your Microsoft contacts in advance of any upcoming submissions. Informing your Microsoft contacts early of any upcoming submissions ensures that:

 - Pricing and Purchase Order (PO) information can be provided for [Certification Paid Services](../../concepts/certification/certification-paid-services.md), for example **Optional Submissions**. 
 - Feedback can be provided on the required submission materials.
 - Any pending XR Exception Requests can be addressed.
 - Any changes made in your submission and release schedule can be addressed.
 - Submission workflows can be monitored.

## Submitting Exceptions and Challenges

If you have concerns about a game's compliance with the XRs exactly as they're written, contact your Microsoft contacts early to determine whether there's sufficient justification for an XR Exception request. Similarly, if your game fails Certification with any *Conditions For Resubmission* (CFR), you might have sufficient justification for a CFR Challenge so that you can address a CFR in a future update.

Exceptions and Challenges are subject to review by Microsoft. Your Microsoft contacts will inform you of the outcome of the review.

To submit an Exception Request or a CFR Challenge, fill out and send the relevant request form to your Microsoft contacts. The latest form can be requested from your Microsoft contacts.

## Certification questionnaire and submission materials

Before any submission to Certification, you must complete the Certification questionnaire. Select **Supplemental info** &gt; **Certification** from your Partner Center product's page navigation. The Xbox Certification team uses your answers to understand the features and configuration that's supported by your product.

In addition to the Certification questionnaire, use the **Files** area of your product to provide in-depth information or supplemental documentation for the Xbox Certification team. For example, an Achievement guide, a walkthrough, or a key-features summary.

For more information, see [Supplemental info](../../concepts/certification/certification-supplemental-info.md).

## Certification stages and Service Level Agreements (SLAs)

The Xbox Certification process has the following main steps.

 - **Submission Checks** cover Submission Validator review and antivirus scanning.
 - **Build Verification Testing (BVTs)** are performed to verify that the game is in a sufficiently testable state and that any previously issued CFRs have been resolved.
 - **Xbox Requirements Testing** is performed to verify that the game is compliant with all applicable test cases for each Xbox Requirement.
 - **Reporting** is the final step in the Certification process and provides you with full information about any issues that were identified during the Certification review. There are different types of issues that might be included in your report.
    - **CFR** issues result in Certification failure and must be fixed in your next submission.
    - **Pass with required fix** issues don't fail the current submission but must be fixed in your next submission.
    - **Standard Reporting Issues (SRI)** and **Issues of Note (IoN)** are included for your awareness. They don't fail the submission and aren't required to be fixed, but it might be beneficial for you to investigate them or to implement a fix for a future submission.

Alongside these test stages, additional checks will be completed by your Microsoft contacts, to validate the compliance of your package and readiness of your product configuration for release.

The time it takes to test packages depends on the platform and the type of submission. For details about the Xbox Certification Service Level Agreement (SLA), see [Xbox Certification: Step-by-Step Guide](../../concepts/certification/certification-guide.md).

## Optional Certification

[Optional Certification](../../concepts/certification/certification-optional-submissions.md) is a paid service offered by Xbox Certification that enables you to get early feedback on the XR compliance of your product. There are three tiers of Optional Certification: Optional Full, Optional Light, and Optional Plus. For more information, see [Certification Paid Services](../../concepts/certification/certification-paid-services.md).

If your game supports multiple platforms or console device families, for example, Xbox One and Xbox Series X|S, testing for each platform or device family is treated as an individual paid service. Indicate in advance which platform you would like to submit for testing. Additional paid services are available if you'd like to submit multiple platforms or device families for testing. 

For information about the process of submitting your build for Optional Certification in Partner Center, see [Submitting for Optional Certification](publishing-processes-optional-certification.md).

## Final Certification

Final Certification is for games that are complete and ready for release. Your game will be tested against the latest [test cases](/gaming/gdk/_content/gc/policies/console/console-certification-requirements-and-tests) for each XR. Games that pass all test cases are deemed compliant and ready for release.

Before submitting your game for Final Certification, confirm that any CFR issues from an Optional submission or a previous Final submission have been resolved or that valid exceptions are approved. You should also open the [Submission Validator log file](/gaming/gdk/docs/features/common/packaging/subval/submissionvalidator) for the packages you intend to submit for Certification and confirm that no failures or unexpected warnings are reported. If the product has been submitted to Optional or Final Certification previously, ensure that you've incremented the package version number above the previously submitted version and that the IdentityName and IdentityPublisher values in the Microsoftgame.config file remain unchanged.

For all submissions, confirm that you have completed your Xbox services, Properties and Age Rating configurations in Partner Center. These will be submitted alongside your Packages. If you intend to release your game on physical discs, confirm that your **Store Listings** module has also been completed and certified with final assets. These are required to request a disc order. In addition, be sure to select the **Intended for discs** checkbox in the **Certify** workflow when submitting the packages that you will include on the disc.

For more information about submitting a disc-based or digital-only game for Final Certification, see [Submit games for Final Certification](publishing-processes-disc-and-digital-certification.md). 

For more details about the latest Xbox Requirements, see [Xbox Requirements for Xbox console games](/gaming/gdk/_content/gc/policies/console/certification-requirements) and [Xbox Requirements and Store Policies for PC](/gaming/gdk/_content/gc/policies/pc/live-policies-pc).

## Submitting add-on content

Games that support Durable and Consumable add-ons must have at least one product for each type of supported downloadable content (DLC) submitted for testing with the game. For example, a racing game that supports track packs, car packs, and packs of virtual currency would need to certify at least one track, one car, and one virtual currency pack add-on.

Add-on content can be published to the Certification sandboxes via the **Certify** UI. It's available on the **Overview** page for any add-on product in Partner Center. It's not possible to Certify individual modules for add-on products and all modules will be submitted for Certification together. If any module isn't already certified, the Certify workflow will trigger the appropriate reviews.

> [!NOTE]
> Your game product must have already been submitted into the Certification workflow before you can submit your add-on content.

For more information about add-ons, see [Choosing the Right Product Type](/gaming/gdk/_content/gc/commerce/getting-started/xstore-choosing-the-right-product-type).

## Pre-order packages

Pre-orders for PC and Xbox console games require a certified package. If you are interested in starting a pre-order earlier than you will be ready to submit your game for Final Certification, discuss using a pre-order stub file with your Microsoft contacts. Additional approval might be required.

> [!IMPORTANT]
> When submitting a pre-order stub file, select the **Contains placeholder package(s) to enable pre-order** checkbox in the **Package** module's options in Partner Center, to indicate your intent to the Xbox Certification team and to configure an expected final game size for players.

For more information about configuring a pre-order, see [Configuring pre-order products](publishing-processes-configuring-pre-orders.md).

For information about submitting a pre-order stub file for Certification, see [Submit games for Final Certification](publishing-processes-disc-and-digital-certification.md).

## Next steps

For full guidance on submitting to Certification, follow the steps at each topic below depending on your submission type.

 - [Submitting to Optional Certification](publishing-processes-optional-certification.md)
 - [Submitting disc and digital products to Final Certification](publishing-processes-disc-and-digital-certification.md)


