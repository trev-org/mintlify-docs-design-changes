---
title: Certification PC BVT Guide
description: A step-by-step guide to Xbox Certification PC BVTs.
services: gaming
author: LukeCraw
ms.author: lukecr
ms.service: gaming
ms.topic: article
ms.date: 1/11/2024
keywords: certification, pc, bvts, testing, publishing, publish
ms.localizationpriority: medium
permissioned-type: public
---

# Certification PC BVT guide

PC games that integrate Xbox services must adhere to a set of [Microsoft Store policies](/windows/apps/publish/store-policies) and [Xbox Requirements for PC](/gaming/gdk/_content/gc/policies/pc/live-policies-pc).

A subset of these requirements are [Build verification tests](/gaming/gdk/_content/gc/policies/pc/live-policy-tests-pc) (BVTs) which are a suite of tests designed to determine a title’s readiness for Xbox Certification testing. All titles must pass BVTs before they enter full Certification testing. Titles that fail BVTs must fix all failures prior to re-submitting to Certification.

## Common BVT failures on PC

This is a list of common BVT failures.

### Reproducing Conditions for Resubmission (CFRs)

A title re-submits after failing BVTs and/or Certification and does not fix the CFRs from the previous test pass. The test team will verify all CFRs logged in the previous test pass are fixed before allowing the title to enter test.

**Guidance:**  
Make sure all CFRs in a Certification report are fixed prior to re-submitting.

### Required dependencies are not installed

The required dependencies are not installed on a clean PC when the title is installed from the store.

For example, after installing the title on a clean PC it does not launch and displays the following error: _The code execution cannot proceed because MSVCP100.dll was not found_.

**Guidance:**  
Test on a new installation of Windows and make sure all package dependencies are removed from the device. Publish the game to the store, install and verify all game dependencies are installed.  Include whatever dependencies the game requires in the installation directory or prompt the user to install the dependencies during first boot if not installed by the store.  

Reference: [Framework Package Dependencies](/gaming/gdk/_content/gc/packaging/packaging-framework-packages)

### Title stability

The title crashes and/or hangs when launched or during gameplay.

**Guidance:**  
Test with different hardware configurations, using the latest graphic drivers.

**Test scenarios:**  

- Install the title from the store. The test team has seen issues after installing the title from the store that are not seen when side-loading the title in a developer sandbox.
- Test multiple resolutions (windowed and full screen).
- Test random input on all screens.
- Rapidly enter and back out of game menus.

### Two-factor authentication

When using profiles that have not launched the title before, the user is not prompted with the explicit consent dialog. The title enters an indefinite loading screen after launching the title, prior to reaching any gameplay or menus.

**Guidance:**  
Test sign-in using developer accounts that have two-factor authentication enabled (there is an option to select 2FA when creating developer accounts in Partner Center). It’s likely the title is only calling _XUserAddAsync(AddDefaultUserSilently)_ assuming there is always a user. The title should be using _XUserAddAsync(AddDefaultuserAllowingUI)_ and include code to handle any potential error cases. The GDK has samples showing how to use this. This will allow UI to pop up if needed when there is no signed-in user, consent is missing, or there is a need to resolve any other auth issues.

Reference: [XUserAddAsync GDK documentation](/gaming/gdk/_content/gc/reference/system/xuser/functions/xuseraddasync)

### Partner services not running

Partner services (such as multiplayer) are not running when the title is submitted.

**Guidance:**  
Make sure all partner services that are required for the game are up and running when submitting to certification. Make sure they continue to run for the duration of the test pass.

### Multiplayer and matchmaking issues

Titles which support multiplayer must allow a user to successfully start, progress through and complete a multiplayer session. The test team will attempt to match the minimum number of users required to start a session and proceed to end a match by completing the minimum number of objectives required.

If a title supports multiplayer functionality, but not a matchmaking experience, the test team will use the system and in-game invite/join features to allow the minimum number of users needed to enter and complete a match.

**Guidance:**  
Ensure all supported multiplayer features are complete, working and testable prior to submitting to Certification.

### Downloadable Content

Downloadable Content (DLC) packages are not located in the store via search or deep-linking. The installation and in-title presence of DLC is checked by the test team. At least one piece of each DLC type must be published to the CERT and CERT.DEBUG sandboxes for test.

**Guidance:**  
Publish at least one piece of each supported DLC type to the Certification sandboxes prior to submitting.

### Achievements fail to unlock

The title does not unlock all achievements when the criteria has been met.

**Guidance:**  
Verify all achievements unlock when the criteria has been met.

### Microsoft Store availability and Xbox services gameplay settings

During BVT, the title is downloaded from the Store in the CERT and CERT.DEBUG sandboxes. Once the publish to the CERT sandbox is complete in Partner Center, make sure to update the Xbox services gameplay settings in the CERT.DEBUG sandbox as well. This will help ensure there are no delays when acquiring and setting up the title for test.

**Guidance:**  

**Updating Xbox services gameplay settings in CERT.DEBUG**  
If this is your first submission, or if you've updated your Xbox services gameplay settings since your previous submission, manually publish the settings to the CERT.DEBUG sandbox.

1. In Partner Center, go to the Xbox services - Gameplay settings page for your product. Select the source sandbox that you selected in the Certify workflow for the packages.
2. Select Review and Publish to publish your Xbox services gameplay settings to the CERT.DEBUG sandbox destination.
