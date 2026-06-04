# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-topfailingtestcases-pc?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-topfailingtestcases-pc?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Top failing test cases on PC

Feedback

Summarize this article for me

Version 2.0 - 04/01/2024

## Introduction

Although each game is unique, there are several key areas in which many games encounter challenges during certification. This page covers several of these key areas and provides tips and strategies for avoiding them during certification.

- To see all Xbox Requirement (XRs) test cases for PC and mobile, go to [Xbox Requirement test cases for PC and mobile games](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-policy-tests-pc?view=gdk-2604).

## Top Failing PC Test Cases

Expand table

| XR/Store Policy | Test Case | Distribution |
| --- | --- | --- |
| [10.4.2](https://learn.microsoft.com/en-us/windows/apps/publish/store-policies#104-usability.md) | App Crash or Freeze | 34% |
| [XR-055: Achievements](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-policy-tests-pc?view=gdk-2604) | 055-01 Achievements | 18% |
| [XR-064: Joinable Game Sessions and Online Play](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr064?view=gdk-2604) | 064-02 Joining a Game Session from the Same Game | 13% |
| [XR-045: Xbox Network and Account Privileges](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr045?view=gdk-2604) | 045-01 Respect User Privileges | 9% |
| [XR-052: User State and Title-Save Location, Roaming and Dependencies](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr052?view=gdk-2604) | 052-05 Correct User Association | 4% |
| [XR-003: Title Integrity](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr003?view=gdk-2604) | Title Integrity | 4% |
| [XR-064: Joinable Game Sessions and Online Play](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr064?view=gdk-2604) | 064-02 Joining a Game Session from Outside the Game | 3% |
| [XR-015: Managing Player Communication](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr015?view=gdk-2604) | 015-01 User Communication | 3% |
| [XR-022: Official Naming Standards](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-terminology-pc?view=gdk-2604) | 022-01 Official Naming Standards | 3% |
| [XR-018: User-Generated Content](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr018?view=gdk-2604) | 018-01 Reporting Inappropriate Content and UGC Text-String Verification | 3% |
| [XR-067: Maintaining Multiplayer Session State](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr067?view=gdk-2604) | 067-01 Maintaining Session State | 2% |
| [10.1](https://learn.microsoft.com/en-us/windows/apps/publish/store-policies#101-distinct-function--value-accurate-representation.md) | Another Platform | 2% |
| [XR-052: User State and Title-Save Location, Roaming and Dependencies](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr052?view=gdk-2604) | 052-05 Cloud Storage: Roaming | 2% |

### 10.4.2 App Crash or Freeze

The title crashes and/or hangs when launched or during gameplay.

**Guidance**

Test with different hardware and video card configurations, using the latest graphic drivers. The title is tested across the five most popular resolutions (1366 x 768, 1440 x 900, 1080P, 1440P, & 4K), in Windowed & Full-screen as applicable, and using a variety of AMD, Intel, and Nvidia GPUs.

**Test scenarios**

- Install the title from the store. The test team has seen issues after installing the title from the store that are not seen when side-loading the title in a developer sandbox.
- Test multiple resolutions (windowed and full screen).
- Test random input on all screens.
- Rapidly enter and back out of game menus.

### 055-01 Achievements

The most common failures are titles failing to unlock Achievements when the criteria has been met. Verify all Achievements unlock when the criteria has been met before submitting to Certification.

### 064-02 Joining a Game Session from the Same Game

The intent of this test case is to verify multiplayer joinability from the same game. When a user joins or accepts an invitation to a multiplayer game experience from the same game, they must be brought into the multiplayer experience.

**Common Issues**

- Joining or accepting an invite to a multiplayer experience from the same game does not bring the user into the experience.
- Joining or accepting an invite to a password-protected multiplayer experience from the same game does not bring the user into the experience.

### 045-01 Respect User Privileges

Titles must respect all user's privilege settings and display the system resolution UI when there is a conflict.

Refer to [Client-side use of Xbox services user privileges](https://learn.microsoft.com/en-us/gaming/gdk/docs/services/fundamentals/identity/privileges/concepts/live-user-privileges-client?view=gdk-2604) documentation for a detailed look at technical guidance and best practices.

**Common Issues**

1. Titles do not respect a user's privilege.
2. Titles do not use the required APIs to display the system resolution UI.

_Example Failures_:

- Titles allow a user to join or accept game invitations into a multiplayer game session when the `You can join multiplayer games` privilege set to `Block`.
- Titles do no allow users to join or accept game invitations into a multiplayer game session when the `You can join multiplayer games` privilege set to `Block`, but does not display the system resolution UI.

**Guidance**

1. On Xbox go to Settings -> General -> Online safety & family -> Privacy & online safety -> Xbox privacy.
2. On PC go to [Privacy & online safety](https://aka.ms/XboxPrivSettings) to manage privilege and privacy settings.
3. Verify all privileges in XR-045.

Note

[`XUserCheckPrivilege`](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xusercheckprivilege?view=gdk-2604) determines whether a user has a specific privilege. [`XUserResolvePrivilegeWithUiAsync`](https://learn.microsoft.com/en-us/gaming/gdk/docs/reference/system/xuser/functions/xuserresolveprivilegewithuiasync?view=gdk-2604) displays a resolution UI that's required for user privileges. This presents the necessary UI to explain or upsell if the user doesn't have the privilege.

### 052-05 Correct User Association

Titles must associate progress, saved state, preferences, achievements, and other rewards with the user(s) who have recorded that progress, chosen the preferences, or earned the rewards. Titles must avoid saving state for users who are no longer signed in. A key aspect of this requirement pertains to handling situations in which the primary user of a title changes while the title is active, suspended, or terminated.

- For information on saving game state using the GDK, read [Game Saves Overview](https://learn.microsoft.com/en-us/gaming/gdk/docs/features/common/game-save/game-saves-overview?view=gdk-2604).
- For information on managing game state and saving data using the GDK, read the [Xbox Game Life CycleAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/console-dev/overviews/xbox-game-life-cycle?view=gdk-2604).

### 003-02 Title Integrity

Title submissions must include all client code, submission artifacts, and downloadable content. Partner services must be available and properly configured for testing and certification. Users must be able to complete all game modes and the title must provide a consistently playable experience for players.

A playable experience varies per title, but generally means no severe drops in frame rate, no freezes, impasses, bugs causing major progression hindrances, or graphical corruptions.

**Common Issues**

1. The title blocks the user from progressing through gameplay.
2. The title does not run as expected on the minimum hardware specs.
3. The title allows user's character to fall through game environment or get stuck.
4. Titles must associate progress, saved state, preferences, achievements, and other rewards with the user(s) who have recorded that progress, chosen the preferences, or earned the rewards.

### 064-01 Joining a Game Session from Outside the Game

This test case verifies joinability from outside the game. When a user joins or accepts an invitation to a multiplayer experience outside the game, they must be brought into the multiplayer experience. Make sure to verify joining multiplayer experiences while the title is not running.

**Common Issues**

- Joining or accepting an invite to a multiplayer experience outside the game does not bring the user into the experience.
- Joining or accepting an invite to a password-protected multiplayer experience outside the game does not bring the user into the experience.
- Joining a multiplayer experience while the title is not running does not bring the user into the multiplayer experience.

### 015-01 User Communication

Titles must not transmit user data or allow communication over Xbox when the user's privacy settings do not allow it. Titles must check the Xbox service for a user's permissions regarding privacy and online safety-related actions and must not transmit user data or allow communication over Xbox when the user's privacy & online safety settings do not allow it.

1. On console go to Settings -> General -> Online safety & family -> Privacy & online safety -> Xbox privacy.
2. On PC, privacy settings can be managed [here](https://aka.ms/XboxPrivSettings).

**Common issues**

1. When a user blocks another user, the title does not block all communication from the user that has been blocked.
2. The user is able to communicate with voice and text over Xbox when 'Others can communicate with voice, text or invites' is set to block.
3. The user is able to communicate via voice and text outside of Xbox when 'Others can communicate with voice, text or invites' is set to block.
4. The title allows the user to receive multiplayer game invitations when 'Others can communicate with voice, text or invites' is set to block.

### 022-01 Official Naming Standards

The most common failures are when a title references competing platforms in text or images. Make sure all text and images comply with the [terminology list](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console/console-topfailingtestcases?view=gdk-2604) and do not reference competing platforms (i.e. images of a competitor's controller or button call outs).

### 018-01 Reporting Inappropriate Content and UGC Text-String Verification

User generated content (UGC) is content that users contribute to an app or product and can be viewed or accessed by other users in an online state. If your product contains UGC, you must:

- Publish and make available to users a product terms of service and/or content guidelines for User Generated Content either in game or on a title's website.
- Provide a means for users to report inappropriate or harmful content within the product to the developer for review and removal/disablement if in violation of content guidelines and/or implement a method for proactive detection of inappropriate or harmful UGC (for example, text filtering).
- Titles must remove/disable UGC when requested by Microsoft.
- Gracefully handle scenarios in which a user does not have access to UGC in game.
- Titles integrated with 3rd party mod platforms must integrate with the product's report / complaint API if available and must moderate content if required by respective 3rd party contracts.
- Titles integrated with 3rd party mod platforms must present a disclaimer, dialog, or visual cue to users if the content is not sourced from the developer.

**Proactive Detection of Harmful or Inappropriate Text**

Titles that use the [`StringService`](https://learn.microsoft.com/en-us/dotnet/api/microsoft.xbox.services.system.stringservice) API meet the proactive detection requirement (for text scenarios) automatically. Titles should default to leveraging the StringService API for names and other short static text strings. If titles have other text scenarios that allow lengthier text input, or if there are technical or other limiting circumstances, titles can choose to implement their own variant of text filtering by restricting a set of terms from being displayed to another player on Xbox services. See the [list of core words](https://learn.microsoft.com/en-us/gaming/xbox-nda-docs/_content/gc/policies/console/certification-forbidden-terms) that must be leveraged as a minimum baseline for blocking or obfuscation from non-local players on Xbox services.

**Common Issues**

- Titles do not proactively detect harmful or inappropriate text.

**Guidance**

Verify all UGC text strings are filtered for harmful or inappropriate text.

### 067-01 Maintaining Session State

On devices other than Xbox consoles, titles which offer cross platform multiplayer with Xbox consoles must maintain session-state information in the Xbox Multiplayer Session Directory (MPSD). If they have their own session state functionality, they may choose to instead record player interactions using the Multiplayer Activity Recent Player feature.

**Common Issues**

- Not all the profiles are included in the device's Recent Players list.
- Users who quit during multiplayer gameplay do not appear in Recent Players.

### 052-06 Cloud Storage: Roaming

For games that use the same TitleID across platforms, devices and/or console generations, game save progress must roam when the user is signed into the Xbox network as follows:

- Across PCs in the Windows platform (e.g., between two different PCs).
- Across PCs in the Windows platform and Xbox console platforms (e.g., Windows and Xbox Series X|S) game save roaming is not required but is recommended to support the player's experience.

**Common Issues**

1. Game saves cannot be downloaded successfully on a second PC on the Windows platform.
2. The saves in the cloud are not recognized by the title on first launch, and through no user interaction, are subsequently overwritten on the second device.

**Guidance**

Verify game saves are associated with the profile who created them and they roam between 2 PCs when the user is signed into Xbox.

---

## Feedback

Was this page helpful?

Yes No No

Need help with this topic?

Want to try using Ask Learn to clarify or guide you through this topic?

Ask Learn Ask Learn

Suggest a fix?

---

## Additional resources

---

- Last updated on 01/26/2026