---
title: Cert Bypass Program
description: Describes the Cert Bypass program. It's designed to reward titles that have a proven track record of certification results.
services: gaming
author: vehugh
ms.author: lukecr
ms.service: gaming
ms.topic: article
ms.date: 1/12/2023
keywords: acu, bypass, adaptive, certification, content update, cert bypass
ms.localizationpriority: medium
permissioned-type: public
---

# Cert Bypass

Cert Bypass, formerly known as the Adaptive Content Update (ACU) program, is designed to reward titles that have a proven track record of successful certification results. By qualifying, a title can bypass full Xbox Requirement (XR) testing post release, provided there are no unfixed Conditions for Resubmission (CFRs) and no outstanding high-severity health alerts where bypass impact has been identified in a Title Health report. 

## How to qualify

Qualification begins once a title becomes broadly available to everyone on the Xbox network (Release to World (RTW)/"Street Date"). If there are no unfixed CFRs, then any Content Updates (CUs) submitted after this time, will be allowed to bypass the Xbox Requirement (XR) testing portion of Xbox Certification. Titles that offer early access periods to customers, for example as part of a specific edition of the game or to subscribers of a subscription, can also qualify for Cert Bypass from the date that early access begins. However, anything submitted prior to release must be tested. 

## Maintaining quality

As Cert Bypass introduces risk to the Xbox platform, Microsoft and our development partners will need to share the responsibility for mitigating this risk. Since its inception, Xbox Certification has provided an additional layer of testing before an update is released. With this change, much of this quality control will shift to our partners who will verify their content updates are compliant with the XRs before it is submitted to Microsoft. We highly recommend that you begin testing your title in RETAIL by using a Package Flight ([How to configure package flights for game packages | Microsoft Learn](../../how-to/how-to-package-flights-for-xvc-packages.md)). 

To ensure that no critical issues have made their way to our users, Xbox Certification will continue to manage quality in the ecosystem by conducting periodic audits of titles that have bypassed certification testing. If issues are found, we’ll work with the partner to have the issues fixed in the next update and verify that the fix has been made. 

We also actively monitor the performance of titles across various health metrics, such as a title’s crashes-per-launch ratio and fine-grained rate limiting. If a title exhibits performance issues against any of these metrics, we will reach out to the publisher and provide additional information in a Title Health report. In serious cases, we will work with the partner to address the issues in a future content update. Failure to resolve these issues may result in a temporary change to the title’s Cert Bypass status until the issues are finally resolved. 

Health metrics can be raised based on the title’s performance on either console generation. For example, a game binary exhibiting a crashes-per-launch ratio of 4% on the Xbox One family of devices, but also a 15% crashes-per-launch ratio unique to the Xbox Series X|S, could eventually mean the title becomes a candidate for temporarily dropping from Cert Bypass until such time as the Xbox Series X|S crash rate is improved. In such cases, the Certification team will be prescriptive about the health target your title must meet and the time-frame in which a fix must be submitted. We’re always open to work with publishers to find the most suitable resolution in all contexts.

## Speed and predictability

Our partners often tell us that they want to release CUs more regularly and more efficiently. With Cert Bypass, you have the ability to release Content Updates quickly and without the unknown of Certification testing. This creates a more predictable journey through certification and will enable you, our partners, to better support your titles on our platform. 

## Frequently asked questions

#### What is my title qualified for?

A title might be qualified for full certification testing or bypass testing. Publishers and developers should reach out to their [Microsoft contacts](../../resources/managed-support/overview-microsoft-representatives-and-contacts.md) to determine the treatment type their title CUs qualify for.

#### Can my title qualify for Cert Bypass if it’s a Beta, Demo or in Game Preview? 

Yes! Game Previews follow the same standards as a fully developed title. Demos and Betas can enter bypass the moment they have no CFRs, irrespective of release date. 

#### Can titles with CFRs become eligible for bypass testing?

Yes! No title is ever disqualified from the program. If a title received a CFR on the base submission or a CU, it qualifies for bypass testing once the title has been released and fixed any CFRs. 

#### What if my title gets a CFR while in bypass testing?

If a CFR is found during the audit process, we’ll work with the partner to have the issues fixed in a future update. The title will remain in Cert Bypass and the Certification team will be prescriptive about the timeframe in which a fix must be submitted. Failure to resolve these issues may result in a temporary change to the title’s Cert Bypass status until the issues are finally resolved.

#### Can I opt out of Cert Bypass or are there scenarios where I should? 

There are times when you might want, or are required, to, opt out of Cert Bypass. Times when you must opt out of bypass include, but are not limited to: 

- Adding functionality that did not previously exist, which requires XR testing (for example adding Multiplayer to a formerly single player only title or adding cross-platform play or mod support). 
- Updating from the XDK to the GDK 
- Adding new types of DLC (for example, adding tracks to a racing game, when only car packs have been tested previously

Please reach out to your Microsoft contacts to discuss your options for requesting a full certification test pass if you would otherwise qualify for bypass testing on your next CU.  

#### Are there scenarios where my update might be tested before a release, even if it qualified for bypass testing?

Yes. This might occur if an update contains new features or content inclusions, especially those related to XRs that would not previously have been applicable in the testing of your title. Another example is when a title updates from the XDK to the GDK. In such scenarios, before you submit the update, your Microsoft contact can confirm that the update for those features will be tested normally.

If you anticipate such changes and additions in your title, we strongly advise you to disclose them to your Microsoft contacts early and often. This will reduce the urgency that characterizes these updates.

## Contacts

Your Microsoft contacts can be found here: [Microsoft contacts](../../resources/managed-support/overview-microsoft-representatives-and-contacts.md).
