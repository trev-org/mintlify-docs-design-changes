---
title: Certification Console BVT Guide
description: "Describes streamlining and preparing developers for successful BVT processing by identifying common pain points."
services: gaming
author: LukeCraw
ms.author: lukecr
ms.service: gaming
ms.topic: article
ms.date: 1/11/2024
keywords: certification, console, bvts, testing
ms.localizationpriority: medium
permissioned-type: public
---

# Certification console BVT guide

Console games that integrate Xbox services must adhere to a set of [Xbox Requirements](/gaming/gdk/_content/gc/policies/console/certification-requirements) (XRs). A subset of these requirements are [Build verification tests](/gaming/gdk/_content/gc/policies/console/console-certification-requirements-and-tests) (BVTs) which are a suite of tests designed to determine a title’s readiness for full certification testing. All titles must pass BVTs before they are permitted to enter full certification testing. Titles that fail BVTs must fix all failures prior to resubmitting to Certification.

## Common BVT failures on console

This is a list of common BVT failures.

### Reproducing Conditions for Resubmission (CFRs)

One of the main reasons a title will fail BVTs is for submitting a new build that does not contain fixes for all previously logged CFRs and/or BVT failures. Titles that have previously gone through BVTs and/or full test must fix any CFRs and BVT failing issues from the previous submission. All failing issues from the previous submission must be fixed before the title will be scheduled for full testing.

**Guidance:**  
Make sure all previous CFRs and/or BVT failing issues are fixed prior to submitting a new build.

### Title stability

Titles must remain stable during test and not have any issues that block the title from being tested. The BVT team verifies all menus can be accessed and all game modes are testable.

**Guidance:**  
Test the title on all supported console types and generations. Review the test cases for [XR-001: Title Stability](/gaming/gdk/_content/gc/policies/xr/xr001) and focus on the Pass/Fail examples for each test case.

Example stability issues found during BVTs:  

- Crashes, hangs and/or long loading screens when launching the title.
- Crashes during multiplayer activities (sending and receiving game invites, matchmaking and joining scenarios).
- Crashing during general gameplay.
- Crash or hang when testing suspend/resume scenarios.
- Crash or hang when testing user input on all screens where user input is accepted.
- Crash or hang when rapidly entering and backing out of all game menus.

### Partner-hosted services

Partner services that are required for the game to run must be functioning when Certification receives the submission for test. These services are verified to be up and running prior to scheduling the title for full test. These services must remain functional throughout the entire test pass.

**Guidance:**  
Verify all partner services required for the game to run are functional for the entire certification test pass.

### Microsoft Store availability and Xbox services gameplay settings

During BVT, the title is downloaded to the console from the Store in the CERT and CERT.DEBUG sandboxes. Once the publish to the CERT sandbox is complete in Partner Center, make sure to update the Xbox services gameplay settings to the CERT.DEBUG sandbox as well. This will help ensure there are no delays when acquiring and setting up the title for test.

**Updating Xbox services in CERT.DEBUG**  
If this is your first submission, or if you've updated your Xbox services gameplay settings since your previous submission, manually publish the settings to the CERT.DEBUG sandbox.

**Guidance:**  

1. In Partner Center, go to the Xbox services - Gameplay settings page for your product. Select the source sandbox that you selected in the Certify workflow for the packages.
2. Select Review and Publish to publish your Xbox services gameplay settings to the CERT.DEBUG sandbox destination.

### Title version and XVC name

The title version must be different from one submission to the next. The best practice is to increment the title version with each new submission (the version is displayed in the XVC file name).

**Guidance:**  
Compare the new XVC file name to the previous one that was submitted for certification. Verify the title version has changed.

### Multiplayer

Titles that support multiplayer experiences must allow a user to successfully start and complete multiplayer sessions. The BVT team attempts to match the minimum number of users required to start and complete multiplayer sessions. If a title supports joinable multiplayer experiences, the BVT team verifies that system joins and invites work as expected. Titles must also allow a user to send invites from **within the game** to those joinable experiences.

The most common multiplayer issues found during BVTs:

#### Joinable Game Sessions

Titles that offer joinable game sessions must enable joinability through the Xbox shell interface. The BVT team verifies joining a session from within the title and outside the title, when the title is terminated or suspended.

Failure examples include:

- A user cannot join a public lobby from the system shell.  
- The title doesn't transition a user into a session when they join from the system shell.

**Guidance:**  
Verify a user is able to join multiplayer experiences through the Xbox shell interface. This includes while the title is running, terminated and suspended. Verify that each joinable multiplayer experience allows a user to join that experience from the system shell.

#### Game invitations

Games that support joinable multiplayer experiences must allow players to send game invitations using the Xbox network platform from _within the game_ to other Xbox network users, including scenarios where cross network players are present.

Failure examples include:

- The title supports joinable multiplayer experiences, but does not support game invitations from within the game.
- The title doesn't transition a user into the expected multiplayer experience when they accept a game invitation.

**Guidance:**  
For games that support joinable multiplayer experiences, verify there is an invite option _within the game_.

### Submission Validator - BuildID mismatch

The BVT team verifies that the `<BuildId>` in the [Submission Validator](/gaming/gdk/_content/gc/packaging/subval/submissionvalidator) log matches the `<BuildId>` of the XVC submitted for certification. Examine the log for any failures or warnings.

In addition, any `<failure>` tag designates a condition that will cause your submission to be rejected as part of the content ingestion and certification phase. Although nothing prevents you from submitting such a package, doing so will likely cause delays. It's far better to correct the problems identified until the log contains no `<failure>` tags.

You may also see `<warning>` tags in the log. These generally indicate issues that might require an exception. If you have questions about any warnings that are identified, reach out to your [Microsoft contact](../../resources/managed-support/overview-microsoft-representatives-and-contacts.md) to discuss. Even if you're granted an exception for your title, the `<warning>` tag still appears in the log file. For a full list of log messages, please see [Submission Validator Messages](/gaming/gdk/_content/gc/packaging/subval/submissionvalidator-messages).

### Downloadable Content (DLC)

Games that support Durable and Consumable add-ons must have at least one product for each type of supported downloadable content (DLC) submitted for testing with the game. For example, a racing game that supports track packs, car packs, and packs of virtual currency would need to certify at least one track, one car, and one virtual currency pack add-on.

**Guidance**  
Verify at least one product for each type of supported DLC is available for the Certification team to download.

### Basic configuration

Titles must not require any changes to the default console settings to run. The BVT team launches the title and verifies there are no console settings that need to be changed to test the game.

In rare instances, a title may require the DNS to be changed in order to connect to partner services. This needs to be discussed with your Microsoft contacts prior to submitting and an approved Exception is required.

### Offline availability

The BVT Team is the first to check how a title operates in offline scenarios. Some of the most common failures encountered during these checks include crashing upon launch and becoming indefinitely unresponsive when attempting to go past the initial engagement prompt.

To better prepare for testing and avoid these issues, add launching the title while in an offline state to your testing before submitting a final package for Certification. Ensure that all menus and game modes can be navigated successfully or that a user can reach a reasonable location to receive an appropriate error prompt when, and where, online connectivity is required.

### Language support

The BVT Team will ensure the title launches, remains stable, and is localized to all supported languages.

The submission validator log and in-title language picker (if supported) are used to determine the intended language support.

**Guidance:**  
Make sure the title launches and can be played as expected in each supported language.

### Intelligent Delivery

Titles that support Intelligent Delivery must be configured properly before submitting. The BVT team will verify the level of support and that the content can be installed as expected from the Store.

### Pre-order stub files

When a Pre-order stub file is submitted, the BVT team verifies the correct StoreID is included in the package.

**Guidance:**  
Confirm the correct StoreID is included in the package.
