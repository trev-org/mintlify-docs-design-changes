---
title: Certification step-by-step guide
description: A step-by-step guide to the Certification workflow from submitting a game to final reporting.
services: gaming
author: LukeCraw
ms.author: lukecr
ms.service: gaming
ms.topic: article
ms.date: 1/10/2024
keywords: certification, testing, certification process
ms.localizationpriority: medium
permissioned-type: public
---

# Certification step-by-step guide

All products that integrate Xbox services on Xbox consoles or non-console devices must be certified prior to release. The Xbox Certification team validates that products created for Xbox respect the privacy and security of its users while maintaining the Xbox network as a high-quality service. Certification confirm that products are not only stable and reliable, but also provides a user with an experience that is consistent, secure, and enjoyable.  

## Service Level Agreement

The following table details the service level agreements (SLAs) for console and PC platforms. This includes Discs, Digital and Content Update submissions.

| Submission Type | Console SLA | PC (MSIXVC) SLA |  
| ------------ | ------------ | --- |
| Disc | 6 business days | NA |
| Digital | 5 business days | 3 business days |  
| Digital Content-Update | 3 business days | 1 business day (including bypass) |

## Product types that require certification

All Xbox product types are subject to Xbox Requirement testing and must pass Xbox Certification before they can be released. Depending on your product and submission type, different requirements and processes might apply. The following types of Products must go through Xbox Certification:

**Product types:**

- Full games
- Game Previews
- Betas
- Demos

**Submission types:**

- Digital download only
- Disc only
- Disc and digital
- Content update

The amount of testing and the number of requirements that apply will vary according to the type of product and where it is in its lifecycle.

## Certification test pass types

Consider the intent of the submission. If you are looking for directional feedback on release readiness, you may want to consider an optional submission. On the other hand, if you intend to release the submission on the Xbox network as a final product, then choose a final submission.

### Optional submissions

Optional submissions are a paid testing service provided by Xbox Certification. They provide an opportunity to validate how a title is doing from a Certification perspective before submitting your release candidate build. Optional submissions are recommended but aren't required. They provide an opportunity to discover show-stopping XR issues ahead of final submission and improve your chances of passing first time. However, optional testing isn't a replacement for good QA which is still essential throughout the development phase.

Optional submissions are per package and fees are applied accordingly. For example, if you have both Xbox One and Xbox Series X\|S versions and wanted an optional submission for both, these would need to be paid for individually. For complete details on the Optional Submissions paid service, please refer to the [Xbox Certification Paid Services Program](certification-paid-services.md) documentation.

Optional submissions are only tested in the CERT.DEBUG sandbox, which is a Microsoft-controlled sandbox that only individuals in certification have access to. It is a [developer sandbox](/gaming/gdk/_content/gc/live/test-release/sandboxes/live-setup-sandbox) where only red signed content is permitted to run (similar to yours). Discs are not created for optional submissions. Absence of CFRs (Conditions for Resubmission) in the optional complete report does not mean the title has passed it's Final submission. The optional complete report is an assessment of where the title is in terms of compliance with Xbox Requirements at that time. A Pass/Fail decision is not made for Optional submissions like it is for Final submissions.

 For additional details and a list of the different tiers of optional testing, refer to the [Optional Submissions](certification-optional-submissions.md) documentation.

### Final submissions

Final submission is the last certification test pass before a product is released to the public or a disc is [Released to Manufacturing (RTM)](../../publishing-processes/managed-creators/publishing-processes-rtm.md). Communicate with your Microsoft contacts to plan and coordinate your final submission.

Final submissions on console are entirely tested in the [CERT sandbox](/gaming/gdk/_content/gc/live/test-release/sandboxes/live-advanced-sandboxes#types-of-sandboxes), which is a Microsoft-controlled sandbox that only individuals in certification have access to. It is a Retail sandbox where only green signed content is permitted to run. A limited set of tests may be completed in the CERT.DEBUG sandbox with red signed content, but the majority of testing Final submissions is in the CERT sandbox. Certification consoles are retail consoles running the current OS Recovery that is published in RETAIL. PC final submissions are also tested in the CERT sandbox. In contrast to optional submissions, final submissions are entirely tested on retail devices with green-signed binaries and discs.

When a product passes final submission, a pass report will be published, and the product can be released. If a product fails final submission, a fail report detailing the Conditions for Resubmission (CFRs) will be published. All CFRs identified in a fail report must be fixed prior to a resubmission. Resubmissions must be made the same way as the previous final submission.

### Add-on content

Games that support add-on content (durables and consumables) must have at least one product for each type of supported downloadable content (DLC) that is certified alongside the main game. For example, a racing game that plans to release tracks, cars, and packs of virtual currency would need to certify at least one track, one car, and one virtual currency pack add-on. Work with your Microsoft contact to ensure add-on content is published to the Certification sandboxes prior to optional and final submissions.

#### Test disc verification

Products that are releasing on physical discs must have [test discs ordered](../../publishing-processes/managed-creators/publishing-processes-disc-and-digital-certification.md) and approved by the Xbox Certification team. It is recommended that you place a disc order alongside the product being submitted for final certification. However, this isn't mandatory. Test discs are ordered by the Xbox Certification team when a disc product has been submitted in Partner Center and BVTs have passed. Test discs will be shipped to up to three destinations and to internal Microsoft addresses. These are ‘silver’ discs, without artwork, that only contain basic information such as the BinaryID and manufacturing date. The product name and other information are not included for security reasons. Discs come in two formats: BD25 and BD50. Multi-disc format is supported but uncommon, and we recommend working with your Microsoft contacts if that is the case.

All test discs require verification by Xbox Certification and the partner before it will be approved to [Release to Manufacturing (RTM)](../../publishing-processes/managed-creators/publishing-processes-rtm.md). It is critical that partners perform all necessary testing prior to providing approval to RTM. The disc tests performed by Xbox Certification are available in the [Media Validation Test Steps](certification-media-validation-test-steps.md) document.

## Certification testing stages

When a submission is received by Xbox Certification, it is tested in three main stages:

1. **Submission checks** cover submission validator review and malware scanning.
2. **Build verification testing (BVTs)** are performed to verify that the title is in a testable state and that any previously issued CFRs have been resolved.
3. **Xbox Requirement (XR) testing** is the bulk of the testing and is where all applicable XR test cases will be validated against your title.

The following steps will help enable testing and prepare your product for submission:

1. Build a clean release build.
2. Test the deployment of loose files.
3. Build a submission package with _MakePkg.exe_.
4. Publish a build that can be downloaded from the Store in your development sandbox. Only users who are given access to your sandbox will be able to download the build. This will enable you to acquire and test the title the same way Certification does.

### Submission checks

There are two submission checks&mdash;Submission Validator and Malware scan.

#### Submission Validator

Submission Validator gives feedback to developers and allows them to address common problems that would cause titles to fail ingestion into Partner Center and/or Certification. When you run _MakePkg Pack_ to produce a package for submission or testing, Submission Validator performs several error checks. Always use the most recent Submission Validator component; this will ensure that you benefit from the latest validation and that your title's submission proceeds as smoothly as possible. Submission Validator is not a stand-alone tool. Rather, it is called automatically whenever the _MakePkg Pack_ command is used with the _/L_ or _/LT_ switch. Submission Validator will run before the title package is created.

For detailed information about Submission Validator, refer to the [Submission Validator GDK documentation](/gaming/gdk/_content/gc/packaging/subval/submissionvalidator).

#### Malware scan

To prevent viruses and other malware from contaminating your product, prior to submission, run a malware scanner of your choice against the package. Before performing the scan, confirm that the malware scanner has up-to-date definitions.

There's no need to provide a log or other attestation from your malware scanner. Microsoft will be running its own malware utilities against your submission when it is received. However, running a malware scanner prior to submission will ensure that you identify accidental infections early and don't wait for Microsoft to find them.

### Build verification testing

Build verification testing (BVTs) is a reduced test pass designed to make sure a product is fully testable and configured properly before entering full certification testing. This is done by running a suite set of test cases in the main areas of a product. All products must pass BVTs before they are scheduled for full certification Testing.

For an in-depth look at BVTs and additional guidance on how to avoid failing BVTs, refer to:

- [Certification Console BVT guide](certification-console-bvt-guide.md)
- [Certification PC BVT guide](certification-pc-bvt-guide.md)

### Xbox Requirement testing

Once a product has passed BVTs, it is scheduled for Xbox Requirement (XR) testing. The intent of the XR test pass is to validate product compliance with all applicable XRs for that submission and product type. XRs consist of the policies, technical requirements, and product component–related requirements to which all developers and publishers of Xbox products must conform. XRs ensure that products created for Xbox are not only stable and reliable but also provide a user experience that is consistent, safe, secure, and enjoyable.

#### Xbox Requirements

A comprehensive list of XRs for each platform and product type can be found here:

- Console: [Xbox Requirements for Xbox Console Games](/gaming/gdk/_content/gc/policies/console/certification-requirements)
- PC: [Xbox Network Policies for PC and Mobile](/gaming/gdk/_content/gc/policies/pc/live-policies-pc) (these apply to all Xbox PC and mobile titles)
- Game Preview and Beta: [Xbox Requirements for Open Betas and Game Previews](/gaming/gdk/_content/gc/policies/certification-requirements-beta-game-preview)

Additional detail and supporting content for each tested XR can be found here: [Xbox Requirements Supporting Content](/gaming/gdk/_content/gc/policies/xr/console-xr-supporting-docs).

#### Xbox Requirement test cases

Each XR that is tested in Certification has a detailed test case that covers how the requirement is tested. The test cases include Test Steps, Expected Behavior and Pass/Fail examples.

- Console test cases: [Certification Tested Xbox Requirements for Xbox Console Games](/gaming/gdk/_content/gc/policies/console/console-certification-requirements-and-tests)
- PC test cases: [Xbox Network Test Cases for PC, Mobile, and Creators Program](/gaming/gdk/_content/gc/policies/pc/live-policy-tests-pc) (these apply to all Xbox PC titles)

#### Certification issue types

Issues found during a Certification test pass are categorized into different types based on severity, probability, and repeatability.

- Standard Reporting Issue (**SRI**): SRIs are typically related to an XR but are not deemed severe enough to fail a title. They should be fixed in a future submission, but it is not required.
- Condition for Resubmission (**CFR**): CFRs are title failing issues. These issues violate the intent of an XR and are deemed severe enough to prevent a title from being released. CFRs must be fixed prior to resubmission.
- Issue of Note (**ION**): IONs are issues that are not related to an XR or XR test case. They may be issues that a developer wants to fix, but it is not required.  
- Non-Tested: If there are XRs and/or test cases that could not be tested during a certification test pass, a list of these XRs and test cases will be included in the report.

For a detailed explanation of how the severity, probability, and repeatability of an issue is determined, review the [Failure Mode Analysis (FMA)](/gaming/gdk/_content/gc/policies/fma/certification-failure-mode-analysis) documentation.

#### Placing submissions on hold

If an issue is found that blocks the Certification team from testing, a title will be placed on Hold. Holds introduce delays in the test pass which is not something that partners, or Certification want. Certification will inform your Microsoft contact of the reasons for the hold and will work with you to resolve the issue. There are various reasons that a title may be placed on Hold, with the most common being:

- Missing or non-functioning partner accounts that are required for testing.
- Partner services do not support the CERT.DEBUG and CERT sandboxes.
- Multiplayer does not work as expected.

Making sure all title services that are necessary to fully test the title are functioning before submitting to Certification will help avoid unnecessary delays.

#### Requesting exceptions

If your title is not fully compliant with any Xbox Requirement (XR), you can request an exception for that XR. This might occur if your title is introducing innovative features or if strong technical limitations would prevent the title from meeting the XR. Work with your Microsoft contacts well in advance of submitting to Certification if an exception is needed. Approval of an exception is not guaranteed, however, obtaining advanced feedback would give you plenty of time to resolve any issues. You must close all outstanding exception requests before submitting your title for certification. Allowing time to discuss exceptions and resolutions can prevent delays.

Microsoft does not want to block new or innovative features. If you are creating something new, please tell us in your exception request. To request an exception prior to submitting to Certification, reach out to your Microsoft contacts.

## Certification reports

All titles receive a report at the conclusion of test. There are different report types based on the Certification Test Pass Type. The different report types are:

- Optional complete report
- Final pass/fail report
- Interim report

Certification reports will be provided in a Word doc to your Microsoft contact, and in all cases will be available directly in Partner Center. Issues that must be fixed in your next submission will be marked as CFRs.

### Optional complete report

An Optional Complete report is sent at the conclusion of test for Optional Submissions. There is no pass/fail result as optional submissions will never be released to the public. The Optional Complete report will contain all issues found during test, including SRIs and CFRs.

### Final pass/fail report

The Final Pass/Fail report is sent at the conclusion of test for Final Submissions. This is the report that indicates whether a title passes Certification and is allowed to release to the public. Like an Optional Complete report, the Final Pass/Fail report will contain all issues found during test, including SRIs and CFRs. Once a pass report is issued, the title is allowed to release to the public. If a Fail report is issued, the title is not allowed to release to the public and the CFRs in the report must be fixed before resubmtting for Final certification.

### Interim report

Interim Reports are sent while a title is in test. They do not include a pass/fail assessment as testing is still in progress. The intent of an interim report is to give you an early look at issues found before the conclusion of test.

## Certification test bench configuration

These are the configurations used in a Certification test bench.

### Console bench layout

Testing on console includes devices from all platforms and generations, and across all platforms and generations. For details on what is required for console platforms and generations, refer to [XR-130: Xbox Console Families and Generations](/gaming/gdk/_content/gc/policies/xr/xr130).

The following table illustrates the different console settings and configurations used in a Certification test bench.

| Settings | Console 1 | Console 2 | Console 3 | Console 4 | Console 5 |
|---------|-----------|-----------|-----------|-----------|-----------|
| Device: | Xbox One / Xbox Series X | Xbox One X / Xbox Series S | Xbox One S / Xbox Series X | Xbox Series S | Xbox Series X|
| Console Type: | Retail | Retail | Retail | Retail | Retail|
| Display Resolution Settings: | 720p | 4k | 1080p | 1080p | 720p|
| Color Depth: | 24 Bits | 36 Bits | 30 Bits | 24 Bits | 30 Bits|
| HDR: | N/A | Alternate after 4 hours | N/A | N/A | N/A|
| Color Space: | PC | Standard | PC | Standard | Standard|
| Audio: | Stereo | 5.1 Bitstream | Stereo | Headset - Windows Sonic for Headphones | Stereo|
| Controllers: | 1 Wireless Controller | 1 Wireless Controller | 4 Wireless Controllers | 1 Wireless Controller | 2 Wireless Controllers|
| Console Language: | Language 1 | English | Language 2 | Language 3 | Language 4|
| Power Setting: | Instant-On | Instant-on | Energy Saving | Instant-On | Energy Saving|
| Storage Device: | Internal HDD | Internal HDD | Internal HDD | USB HDD | USB HDD|
| Installation Method: | Digital download | Digital download | Disc (If Available) | Digital download | Digital download|
| Account Type: | Game Pass Core - My Home Xbox | Game Pass Core - My Home Xbox | Non-Game Pass Core - My Home Xbox | Game Pass Core - My Home Xbox | Game Pass Core - My Home Xbox|
| Game Settings: | Opposite to default settings | Default game settings | Change the settings every 30 minutes or after each level | Options should be set to the first quartile | Options should be set to the third quartile|

## Release from Certification (RFC)

Once a title passes certification and a pass report has been published, a title is considered Released from Certification (RFCd). Your [Microsoft contact](../../resources/managed-support/overview-microsoft-representatives-and-contacts.md) will be able to assist at this point with publishing to Retail and coordinating the release of your title.

## Contact us

If you have questions about a Certification report, Xbox Requirements or test cases, email <XboxCert@xbox.com>.

## See also

- [Submit your title for Xbox Certification in Partner Center](../../publishing-processes/managed-creators/publishing-processes-submitting-to-certification.md)
