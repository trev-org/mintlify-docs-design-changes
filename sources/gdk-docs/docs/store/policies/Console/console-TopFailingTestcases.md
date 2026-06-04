---
title: "Top failing test cases for console"
author: LukeCraw
ms.author: lukecr
ms.topic: article
description: "Although each game is unique, there are several key areas in which many games encounter challenges during certification. This page covers several of these key areas and provides tips and strategies for avoiding them during certification."
kindex: Certification Top Failing Test Cases for Console
edited: 04/01/2024
ms.date: '08/01/2022'
permissioned-type: public
---

# Top failing test cases for console

Version 2.0 - 4/01/2024

## Introduction

Although each game is unique, there are several key areas in which many games encounter challenges during certification. This page covers several of these key areas and provides tips and strategies for avoiding them during certification.  

To see all tested Xbox Requirements (XRs) test cases for console, go to the [Certification test cases page](console-certification-requirements-and-tests.md).

## Top Failing Console Test Cases

Xbox Requirement | Test Case | Distribution
--------|---------|----------
[XR-001 Title Stability](../XR/XR001.md) | 001-01 Title Stability | 38%
[XR-003 Title Integrity](../XR/XR003.md) | 003-02 Title Integrity | 14%
[XR-045 Xbox Network and Account Privileges](../XR/XR045.md) | 045-01 Respect User Privileges | 11%
[XR-064 Joinable Game Sessions and Online Play](../XR/XR064.md) | 064-02 Joining a Game Session from the Same Game | 8%
[XR-055 Achievements and Gamerscore](console-certification-requirements-and-tests.md) | 055-01 Achievements | 7%
[XR-124 Game Invitations](console-certification-requirements-and-tests.md) | 124-01 Game Invitations | 6%
[XR-015 Managing Player Communication](../XR/XR015.md) | 015-01 User Communication | 3%
[XR-052 User State and Title-Save Location, Roaming and Dependencies](../XR/XR052.md) | 052-06 Cloud Storage: Roaming | 3%
[XR-052 User State and Title-Save Location, Roaming and Dependencies](../XR/XR052.md)  | 052-05 Correct User Association | 2%
[XR-022 Official Naming Standards](console-certification-requirements-and-tests.md) | 022-01 Official Naming Standards | 2%
[XR-001 Title Stability](../XR/XR001.md) | 001-03 Title Stability after Suspend | 2%
[XR-064 Joinable Game Sessions and Online Play](../XR/XR064.md) | 064-02 Joining a Game Session from Outside the Game | 2%

## Guidance and Best Practices

### 001-01 Title Stability

Titles must remain stable throughout test and not have any issues that block the title from being tested.

**Guidance**  
Test the title on all supported console types and generations. A majority of stability issues are found in the following examples:

* Crashes, hangs and/or long loading screens when launching the title. Review the test case [Fail Examples](../XR/XR001.md) for expected timings.
* Crashes during multiplayer activities such as sending and receiving game invites, matchmaking and joining scenarios.
* Crashing during general gameplay.
* Crash or hang when testing suspend/resume scenarios.
* Crash or hang when testing user input on all screens where user input is accepted.
* Crash or hang when rapidly entering and backing out of all game menus.

### 003-02 Title Integrity

Titles must be functionally complete, testable and meet Xbox console quality standards when they are submitted for certification.

The submission must include all client code, submission artifacts, and downloadable content. Partner services must be available and properly configured for testing and certification. Titles must package cleanly with no failures using the current version of [Submission Validator](../../../features/common/packaging/subval/submissionvalidator.md) when submitted to Microsoft, and they must include Submission Validator logs with their submission.

The most common reason for failing test case 003-02 during certification is game issues which prevent Certification from running a test pass and/or completing all game modes.

**Common issues**

* Game modes cannot be completed preventing progression through the title.
* Leaderboards not populating.
* Use of various input modes; controllers, keyboards, etc. not working.
* The player getting into a state that prevents progression through the title (i.e. unable to reload weapons, characters becoming stuck or falling out of the game environment, etc.).

**Guidance**

1. Make sure the game is functionally complete and testable.
2. The game is free of major/game breaking bugs.

### 045-01 Respect User Privileges

Titles must respect all user's privilege settings and display the system resolution UI when there is a conflict.

Refer to [Client-side use of Xbox services user privileges](../../../services/fundamentals/identity/privileges/concepts/live-user-privileges-client.md) documentation for a detailed look at technical guidance and best practices.

**Common Issues**

1. Titles don't respect a user's privileges for both Child and Adult accounts.
2. Titles don't use the required APIs to display the system resolution UI.

_Examples Failures_:

* Titles allow a user to join or accept game invitations into a multiplayer game session when the `You can join multiplayer games` privilege set to `Block`.
* Titles do no allow users to join or accept game invitations into a multiplayer game session when the `You can join multiplayer games` privilege set to `Block`, but does not display the system resolution UI.

**Guidance**

1. On Xbox go to Settings -> General -> Online safety & family -> Privacy & online safety -> Xbox privacy.
2. On PC go to https://aka.ms/XboxPrivSettings to manage privilege and privacy settings.
3. Verify all privileges in XR-045 with both Child and Adult accounts.
4. Child accounts are managed by a parent or guardian. They can customize the privilege settings for child accounts in Settings > Account > Family settings > Manage family members.

>[!Note]
>[`XUserCheckPrivilege`](../../../reference/system/xuser/functions/xusercheckprivilege.md) determines whether a user has a specific privilege. [`XUserResolvePrivilegeWithUiAsync`](../../../reference/system/xuser/functions/xuserresolveprivilegewithuiasync.md) displays the system resolution UI that's required for user privileges. This presents the necessary UI to explain or upsell if the user doesn't have the privilege.

### 064-02 Joining a Game Session from the Same Game

The intent of this test case is to verify multiplayer joinability from the same game. When a user joins or accepts an invitation to a multiplayer game experience from the same game, they must be brought into the multiplayer experience.

**Common Issues**

* Joining or accepting an invite to a multiplayer experience from the same game does not bring the user into the experience.
* Joining or accepting an invite to a password-protected multiplayer experience from the same game does not bring the user into the experience.

### 055-01 Achievements

The most common failures are titles failing to unlock Achievements when the criteria has been met. Verify all Achievements unlock when the criteria has been met before submitting to Certification.

### 124-01 Game Invitations

The intent is that games must allow players to send game invitations **from within the game** wherever joinable multiplayer sessions are supported, including where cross network players are present. In addition, joinable multiplayer experiences that are password-protected must enable platform joins and allow invitations to be sent for those experiences from within the game.

For information on game invites using the GDK, read the [Invites overview](../../../services/multiplayer/invites/live-multiplayer-invites-overview.md).

**Common issues**

1. The title supports joinable multiplayer experiences but does not allow players to send game invitations for those experiences from within the game.
2. The title supports password-protected joinable multiplayer experiences but does not allow players to send game invitations for those experiences from within the game.

**Guidance**  
Verify every joinable multiplayer experience allows players to send game invitations for those experiences from within the game. Joinable password-protected multiplayer experiences must allow users to send game invitations for those experiences from within the game.

### 015-01 User Communication

Titles must check the Xbox service for a user's permissions regarding privacy and online safety-related actions and must not transmit user data or allow communication over Xbox when the user's privacy and online safety settings don't allow it.

1. On console go to Settings -> General -> Online safety & family -> Privacy & online safety -> Xbox privacy.
2. On PC, privacy settings can be managed [here]( https://aka.ms/XboxPrivSettings).

**Common issues**

1. When a user blocks another user, the title does not block all communication from the user that has been blocked.
2. The user is able to communicate with voice and text over Xbox when 'Others can communicate with voice, text or invites' is set to block.
3. The user is able to communicate via voice and text outside of Xbox when 'Others can communicate with voice, text or invites' is set to block.
4. The title allows the user to receive multiplayer game invitations when 'Others can communicate with voice, text or invites' is set to block.

### 052-06 Cloud Storage: Roaming

Game-save progress must roam between like devices/platforms when the user is signed into Xbox services. Games using the same TitleID on the same platform across generations, save data must roam between these platforms. Game save data must roam successfully between PC and Console devices when supported.

**Common Issues**

1. Game saves cannot be downloaded successfully on a second console on the same platform/generation (e.g., Xbox Series S and Xbox Series X or Xbox One and Xbox One S).
2. For console games that share the same TitleID on the same platform across generations (e.g. Xbox One and Xbox Series X|S), game saves cannot be roamed between these devices.
3. The saves in the cloud are not recognized by the title on first launch, and through no user interaction, are subsequently overwritten on the second device.
4. Game save data does not roam successfully between PC and Console devices when supported.

### 052-05 Correct User Association

Titles must associate progress, saved state, preferences, achievements, and other rewards with the user(s) who have recorded that progress, chosen the preferences, or earned the rewards. Titles must avoid saving state for users who are no longer signed in. A key aspect of this requirement pertains to handling situations in which the primary user of a title changes while the title is active, suspended, or terminated.

* For information on saving game state using the GDK, read [Game Saves Overview](../../../features/common/game-save/game-saves-overview.md).
* For information on managing game state and saving data using the GDK, read the [Xbox Game Life Cycle](../../../gdk-dev/console-dev/overviews/xbox-game-life-cycle.md).

**Common Issues**

1. Titles don't correctly associate save data with an Xbox profile.
2. The title incorrectly associates user progress, saved state, preferences, achievements, or other awards with a user following a user change.
3. A new user's save progress is not saved following a user change.
4. A new user can alter a prior user's save data, state or profile after they have signed out.

### 022-01 Official Naming Standards

The most common failures are when a title references competing platforms in text or images. Make sure all text and images comply with the [terminology list](console-certification-terminology.md) and don't reference competing platforms (i.e. images of a competitor's controller or button call outs).

### 001-02 Title Stability after Suspending

Titles must remain stable when suspended and resumed.

**Common issues**

* Crash or hang when the title is suspended/resumed.
* Crash or hang when changing users while the title is suspended.
* Crash or hang when suspending the title while navigating menus.
* Crash or hang when suspending the title while playing an online match.

**Guidance**  
Suspend and resume the title in all menus, game modes and gameplay scenarios (online and offline). Perform user changes while the title is suspended.
  
### 064-01 Joining a Game Session from Outside the Game

This test case verifies joinability from outside the game. When a user joins or accepts an invitation to a multiplayer experience outside the game, they must be brought into the multiplayer experience. Make sure to verify joining multiplayer experiences while the title is terminated and suspended.

**Common Issues**

* Joining or accepting an invite to a multiplayer experience outside the game does not bring the user into the experience.
* Joining or accepting an invite to a password-protected multiplayer experience outside the game does not bring the user into the experience.
* Joining a multiplayer experience while the title is terminated or suspended does not bring the user into the multiplayer experience.
