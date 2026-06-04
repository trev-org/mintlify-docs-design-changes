# Source: https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console-xr-change-history?view=gdk-2604

Table of contents Exit editor mode

Ask Learn Ask Learn

Reading mode Table of contents [Read in English](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console-xr-change-history?view=gdk-2604) Add to Collections Add to plan [Edit]()

---

Copy Markdown Print

---

Note

Access to this page requires authorization. You can try [signing in](https://learn.microsoft.com/#) or [changing directories]().

Access to this page requires authorization. You can try [changing directories]().

# Change History for Xbox Requirements and Test Cases

Feedback

Summarize this article for me

## Introduction

Xbox Requirements and test cases change as platforms and player expectations evolve, generally on a monthly cadence. This page documents the full history of changes over time since migration to a web presentation. This history includes changes for all platforms: console, PC, mobile and the Creators Program.

## Change History

Expand table

| Date | Document version | Change description |
| --- | --- | --- |
| June 1, 2026 | Console: 16.2 | **Console only:** 
[XR-007: Cross-Network Play, Data Usage, and Companion App Interactions](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr007?view=gdk-2604) now focuses solely on business policy; technical requirements have been removed. |
| May 1, 2026 | Console: 16.1 | **XR-134: Data Transfer Using Web Protocols** has been retired and is no longer required for console submissions. Retiring XR‑134 empowers developers to choose the right stack for their games and unifies best practices across PC and console going forward. |
| November 1, 2025 | PC: 6.0 
Console: 16.0 | **PC only:** 
[XR-007 Cross-Network Data Usage](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr007pc?view=gdk-2604) has been added to the PC Xbox Requirements. It is a subset of the console version [XR-007 Cross-Network Play, Data Usage, and Companion App Interactions](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr007?view=gdk-2604) that contains business policy only. It does not contain the technical requirements for cross-network gameplay. 
 
**Console only:** 
Updated the following test cases that contain steps to suspend the game to use steps only available on Retail consoles. 
- 001-02 Title Stability After Suspending
- 003-18 Headset State Change after Suspend
- 074-03 Suspend Disconnection to Xbox Services
- 074-04 Xbox Service Re-connection During Suspend
- 112-08 User Change During Suspension
- 052-02 User Change During Suspend
- 064-01 Joining a Game Session from Outside the Game
- 123-01 Installation/Unlock of Game Add-Ons or Consumables During Gameplay
- 124-01 Game Invitations
- 130-05 Compatibility Mode

On retail consoles, a game will be suspended under the following conditions:

- When the console enters Connected Standby by being turned off with the power mode set to Instant-on.
- When the game remains out of focus for ten minutes. For example, launching an application such as Settings and keeping it in focus for ten minutes.

Test case _003-19 Headset State Change after Connected Standby_ has been retired. |
| September 1, 2025 | 15.0 | Updated test case [001-02 Title Stability After Suspend](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr001?view=gdk-2604) to use a natural suspend for putting the title in a suspended state. A natural suspend is a way to suspend the title as a user would without any tooling. 
 
Removed test case _001-03 Title Stability After Connected Standby_. Using a natural suspend in test case 001-02 puts the console in connected standby, which makes test case 001-03 redundant. 
 
[XR-007: Cross-Network Play, Data Usage, and Companion App Interactions](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr007?view=gdk-2604): Policy clarification added for store content that roams across networks and platforms. 
 
[XR-007: Cross-Network Play, Data Usage, and Companion App Interactions](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr007?view=gdk-2604): Updated 'Xbox Live' terminology to 'Xbox network' per the latest [Terminology Guide](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console/console-certification-terminology?view=gdk-2604). 
 
Multiple locations: Updated references to the [Forbidden Terms List](https://learn.microsoft.com/en-us/gaming/xbox-nda-docs/_content/gc/policies/console/certification-forbidden-terms) to be consistent. A few locations referred to it as 'banned words, 'bad words' etc. |
| April 1, 2025 | Console: 14.0 
PC: 5.0 | Added [XR-001 Title Stability](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr001?view=gdk-2604) and [XR-003 Title Quality for Submission](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr003?view=gdk-2604) to the [PC Xbox Requirements](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-policies-pc?view=gdk-2604). Within those requirements, only the relevant test cases that apply to PC are included: 001-01 Title Stability, 003-02 Title Integrity and 003-16 Save-Game Compatibility. A table was added to both XRs showing which test cases apply to console and PC. 
 
[XR-003: Title Quality for Submission](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr003?view=gdk-2604) and the XR-003 test cases have been simplified and consolidated. Several of the test cases have moved into **003-02 Title Integrity** (Options, Navigation,Leaderboards, and Languages). Test cases 003-08 and 003-14 have been retired. The console and PC bench layout guides used during Certification were also added to XR-003. 
 
The _PC Game Pass Quality Standards_ have be removed. These scenarios are in XR-003 which includes title integrity, hardware/resolution compatibility, and save-game compatibility. |
| March 1, 2025 | 13.3 | [XR-014: Player Data and Personal Information](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr014?view=gdk-2604) and test case [014-02 Data Collection](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr014?view=gdk-2604): Updated to clarify that when requesting data from a Child or Teen account, the request must explicitly state what the data will be used for. Examples have been added to illustrate both appropriate and inappropriate requests for data collection. 
 
[XR-015: Managing Player Communication](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr015?view=gdk-2604) and test case [015-01 User Communication](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr015?view=gdk-2604): Table added to articulate how the setting "Others can communicate with voice, text or invites" functions as a universal toggle, which creates scenarios that override a user's cross-network communication setting. Exemptions updated with scenarios that are out-of-scope and not considered "player communication". Added **Guidance for Invites** and **Blocking Game Experiences** sections. Clarified muting someone only applies to voice communication. 
 
[XR-018: User Generated Content](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr018?view=gdk-2604) and test case [018-01 Reporting Inappropriate Content and UGC Text-String Verification](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr018?view=gdk-2604): Clarified that proactive reporting and/or detection of inappropriate or harmful UGC does not nullify a user's restricted [UGC privilege setting](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr045?view=gdk-2604). **Guidance for Usernames** section added. Xbox gamertags are exempt from UGC requirements/privilege settings. Other usernames are subject to proactive filtration and/or reporting requirements, but do not need to be obfuscated to users with restricted [UGC privileges](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr045?view=gdk-2604). 
 
[XR-047 User Profile Access](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr047?view=gdk-2604) and test case [047-01 User Profile Access](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr047?view=gdk-2604): Previously, there was an exemption for areas of the game where UI navigation was not feasible. This update removes leaderboards and menus, including those that appear as navigable overlays during active gameplay, from that exemption. 
 
Test Case [074-07 Dynamic Connectivity Loss](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr074?view=gdk-2604): Detailed steps added that explain how to use Fiddler Classic to block partner services using the _Content Blocking_ add-on for Fiddler. The Certification team uses this add-on to block domains (Hosts) rather than a list of IP addresses. |
| February 1, 2025 | 13.2 | [XR-014 Player Data and Personal Information](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr014?view=gdk-2604) and test case [014-02 Data Collection](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr014?view=gdk-2604): Updated to allow titles to request a Child or Teen account's email address for the purposes of publisher account linking. If a title requests an email address from a Child or Teen account for the purposes of publisher account linking, the player must be messaged that it is needed for publisher account linking. 
 
[Test case 124-01: Game Invitations](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console/console-certification-requirements-and-tests?view=gdk-2604#124-01-game-invitations): There is no _required terminology_ for the option to send game invitations in-game. Test case updated to remove the requirement for required terminology. 
 
[Test Case 132-01: Service Access Limitations](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr132?view=gdk-2604): Details added that clarify how to interpret the Xbox services Trace Analyzer report. |
| October 1, 2024 | 13.1 | [XR-001 Title Stability](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr001?view=gdk-2604): Updated the requirement to Microsoft Store policy [10.1.2](https://learn.microsoft.com/en-us/windows/apps/publish/store-policies#101-distinct-function--value-accurate-representation). This aligns with the Microsoft Store policy for title stability. 
 
Update to [XR-046 Display Name and Gamerpic](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr046?view=gdk-2604). The four test strings used to verify gamertags display correctly have been updated. The new strings are: 

- **สฐ众нь컴퓨퓨**
- **आथाώঙぁヺ**
- **øÜêþЯЂў**
- **gttest1**

 
Test case [048-01 Profile Settings Usage](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr048?view=gdk-2604): Added test step 6 to verify updated gamertags on a second device. Updated "Xbox Live" to "Xbox network". |
| August 1, 2024 | 13.0 | Minor update to [XR-013: Linking Microsoft Accounts with Publisher Accounts](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr013?view=gdk-2604) 
 
\* **Disclosure Text** – As more linked accounts are being added, there is variability in the experience for parentally-controlled accounts. Some experiences are completely blocked, and some are only partial blocked (no multiplayer, community features). The addition of disclosure text is to help publishers communicate the potential limitations of the title before a purchase is made. Reducing both customer confusion and refund processes. Suggestion added to include disclosure text on the title's store details page for buyer awareness. 
\* **Child Account Age** – There is more complexity in how regions are defining child age ranges. Denoting the changes into XR13 as regulations change will lead to outdated documentation. This update accounts for a refined definition of child/teen accounts, notes the U.S. age standard, and, finally, highlights that age variation exists per region and the XUserGetAgeGroup function accounts for those variations. 
 
Major update to [XR-014: Player Data and Personal Information](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr014?view=gdk-2604) and test case [014-01 Personal Information](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console/console-certification-requirements-and-tests?view=gdk-2604). New test case added [014-02 Data Collection](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console/console-certification-requirements-and-tests?view=gdk-2604). 
 
The update focuses on how titles handle and display user data: 
\* Titles cannot display personal data of one user to anyone else 
\* Titles must comply with global and regional Privacy regulations. 
 
The following were removed: 
\* References preventing the title from asking users for additional information. 
\* References about data encryption in transit and at rest. 
 
New test case added [014-02 Data Collection](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console/console-certification-requirements-and-tests?view=gdk-2604) that verifies titles do not request data from Child or Teen accounts beyond what is needed for age verification or parental consent. |
| July 1, 2024 | 12.2 | Minor update to XR-083 to add clarity regarding approved libraries and what is allowed for demos. |
| April 1, 2024 | 12.1 | Updated top failing test cases for [console](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console/console-topfailingtestcases?view=gdk-2604) and [PC](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-topfailingtestcases-pc?view=gdk-2604). 
 
Changed the title of _Xbox Network Policies for PC, Mobile, and Creators Program_ to [Xbox Requirements and Store Policies for PC, Mobile, and Creators Program](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-policy-tests-pc?view=gdk-2604). 
 
Removed test cases 052-01 and 052-02 from the [PC Xbox Requirement test cases](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-policy-tests-pc?view=gdk-2604) as they do not apply to PC. Suspend/resume does not apply to PC and launching from a terminated state (after a user signs out) is covered by [052-05 Correct User Association](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr052?view=gdk-2604). 
 
Test cases for [XR-015](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr015?view=gdk-2604): Updated to clarify _invites_ refers to multiplayer game invites. It does not include friend invites. 
 
[XR-130](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr130?view=gdk-2604): Updated XR reference to [XR-052](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr052?view=gdk-2604) for save roaming (it was XR-050 which has been removed). 
 
[XR-018](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr018?view=gdk-2604): Updated broken link to the [forbidden terms list](https://learn.microsoft.com/en-us/gaming/xbox-nda-docs/_content/gc/policies/console/certification-forbidden-terms). 
 
[XR-133](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console/console-certification-requirements-and-tests?view=gdk-2604) removed from [PC Beta and Game Preview requirements](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/certification-requirements-beta-game-preview?view=gdk-2604). XR-133 only applies to console. 
 
[XR-022](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console/console-certification-requirements-and-tests?view=gdk-2604) on console: Updated to include images from competing platforms. 
 
All test cases: numerous formatting updates and grammar fixes. Updated GDK documentation links to [Microsoft Learn](https://learn.microsoft.com/en-us/gaming/gdk). |
| December 1, 2023 | 12.0 | Consolidated XRs 050 and 052 into XR-052: [XR-052: User State and Title-Save Location, Roaming and Dependencies](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr052?view=gdk-2604) 
 
\* Removed XR-050 
\* XR-052 added to [Xbox PC Requirements](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-policies-pc?view=gdk-2604) (correct user association and cloud-save roaming between PCs). 
\* XR-052 test cases added to [Xbox PC Requirements and Test Cases](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/pc/live-policy-tests-pc?view=gdk-2604). 
 
[XR-037: Dependencies on Content Packages](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/xr/xr037?view=gdk-2604): Added deep-dive page with implementation guidance and best practices. 
 
[Betas and Game Previews](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/certification-requirements-beta-game-preview?view=gdk-2604): Removed Kinect XRs. 
 
[Console BVTs](https://learn.microsoft.com/en-us/gaming/gdk/docs/store/policies/console/console-certification-requirements-and-tests?view=gdk-2604): Removed the following BVTs as they are no longer applicable: 
\* 04 Bundled Peripherals 
\* 06 Content Update 
\* 11 Submission Documentation 
\* 16 Multi-Disc |
| May 1, 2023 | 11.1 | XR-055 & test case 055-01: Updated to clarify that achievement unlock conditions must be associated with a thorough exploration of or engagement with game content. 
 
Test Case 046-01: The **Ion** test gamertag is no longer available to test gamertag changes. The gamertag **mdrngtck** has replaced **Ion** in the test case. 
 
Test case 013-01: Added step to complete publisher account creation/linking with an Xbox child account (under 13 years of age) that falls within the games' age rating. Updated Pass/Fail examples. 
 
Kinect XRs officially retired: XR-016, XR-025, XR-126 and XR-033. |
| March 1, 2023 | 11.0 | XR-045: Updated to include the requirements and validation of Xbox Family member's account privileges. 
 
Test case 045-02 added to validate Xbox Family member's privilege settings. |
| December 1, 2022 | 10.1 | Test case 046-01 updated to use _XblTestAccountGui.exe_ from the GDK to change gamertags. |
| November 1, 2022 | 10.0 | XR-013 - Clarified that XSTS tokens must be used to provide the identity information for authentication when linking the user's publisher account to the user's Microsoft account. 
 
XR-013: Clarified the Terms of Service only needs to be displayed during the account linking process. |
| September 1, 2022 | 9.9 | Updated XR-013 - Updated to allow additional fraud prevention mechanisms such as dual auth interrupts when account linking for the first time. |
| June 1, 2022 | 9.8 | Updated XR-013 - clarified requirements for requiring a Publisher Account to play. |
| March 1, 2022 | 9.7 | Clarified XR-045 to not include offline play. |
| January 1, 2022 | 9.6 | Simplified XR-070: Friends Lists to provide clarity into blended friends lists and remove the requirement to offer friend addition. 
 
Updated XR-046: Display Name and Gamerpic to provide clarity that developers can choose between modern or classic gamertag in both ERA and the Microsoft Game Development Kit (GDK). |
| October 1, 2021 | 9.5 | Updated change history to only show 'Changes in this release' and added a new page for full change history. 
 
Updated XR-134: Data Transfer Using Web Protocols to provide additional clarity into requirements per development architecture. |
| August 1, 2021 | 9.3 | Migration to GDK Documentation from XGD. Updated cross linking throughout. 
 
Updated Xbox Live branding throughout to reference Xbox network. 
 
Retired XR-012: Secure Data Transfer, network transfer best practices are available at [Communication Security OverviewAuthorization required](https://learn.microsoft.com/en-us/gaming/gdk/docs/gdk-dev/game-principles/security/communication-security/communication-security-overview?view=gdk-2604) 
 
Added XR-134: Data Transfer Using Web Protocols |
| June 1, 2021 | 9.2 | Updated XR-045: Xbox Live and Account Privileges with an updated definition of Shared Game Sessions 
 
Updated multiple XRs with documentation links and details. |
| May 1, 2021 | 9.1 | Updated XR-112: Establishing a User and Controller During Initial Activation and Resume and XR-115: Addition and Removal of Users or Controllers During Gameplay to support the introduction of the simplified and advanced user models with the GDK. 
 
Updated section descriptions which referenced retired features or items which were no longer requirements. 
 
Updated XR-050: Title-Save Location, Roaming, and Dependencies to clarify requirements for game save roaming between console and PC devices. |
| April 1, 2021 | 9.0 | Updated XR-007: Cross-Network Play, Data Usage, and Companion App Interactions to remove duplicate UGC requirements from XR XR-018: User-Generated Content. |
| March 15, 2021 | 8.9 | Updated XR-045: Xbox Live and Account Privileges with details on configuring free to play, beta, or demo titles to allow multiplayer gameplay for players who are not Xbox Live Gold subscribers. |
| March 1, 2021 | 8.8 | Updated XR-064: Joinable Game Sessions and Online Play to clarify requirements for Game Bar integration on PC devices. 
 
Retired XR-072: Supporting Voice. Game voice integration is now a recommended best practice for titles supporting multiplayer gameplay. |
| February 1, 2021 | 8.7 | Updated XR-018: User-Generated Content to add clarity on the definition of UGC, implementation guidance, and updated requirements to align with the Microsoft Store Policy 
 
Updated XR-083: XDK / GDK Versions with details 
 
Updated various XRs with updated API and/or documentation links to the GDK. |
| January 5, 2021 | 8.6.1 | Updated XR-055: Achievements and Gamerscore to provide clarity that the achievement addition budget does not include base achievements. |
| January 1, 2021 | 8.6 | Version 8.5 skipped on this document to align version numbers with the related test document. 
 
Updated XR-003: Title Quality for Submission to provide specific details on Xbox Quality Standards to support test cases and player experience. 
 
Updated XR-007: Cross-Network Play, Data Usage, and Companion App Interactions and XR-018 User-Generated Content to remove requirement that cross network user names from known platforms be string verified and provide helper content that these scenarios should not be string vetted. 
 
Updated XR-045: Xbox Live and Account Privileges supporting content to provide more clarity on which platforms particular SDK/XDK/GDK combinations apply. |
| September 18, 2020 | 8.4 | Updated naming for the Xbox Series X|S family of devices across multiple requirements. |
| September 1, 2020 | 8.3 | XR-057: Unlocking Achievements renamed and updated to provide clarity that achievements cannot be unlocked using in game cheats or debug options. 
 
XR-130: Xbox Console Families and Generations updated to include specifics for Xbox One generation games working on Xbox Series X|S. 
 
XR-014: Personal Information updated to specifically clarify player data collection policies, restricting publisher ability to collect personal information on console. Added more clarity that collection of email/password is allowed for account linking scenarios. Shifted Account Linking best practices to XR 014: Account Linking 
 
XR-022: Official Naming Standards updated with Xbox Series X|S terminology. 
 
XR-123: Installation/Unlock of Game Add-Ons or Consumables During Gameplay title updated and provided clarity to also include durable and consumables. 
 
 |
| August 1, 2020 | 8.2 | Updated XR-034: Streaming Install Initial Play Marker to allow developers to choose if they do or do not include an initial play marker; if used removed the size requirement but now require that the play marker provides for a game play experience. |
| July 1, 2020 | 8.1 | Updated implementation guidance for XR-064: Joinable Game Sessions and Online Play to include the Multiplayer Activity feature. 
 
Updated XR-067: Maintaining Multiplayer Session State to support the Multiplayer Activity Recent Player feature 
 
Updated XR-050: Title-Save Location, Roaming, and Dependencies to clarify requirements for Windows platforms and provide GDK API usage guidance. 
 
Updated XR-045: Xbox Live and Account Privileges to include checking privileges using the GDK |
| June 8, 2020 | 8.0 | Major version update due to support for the Xbox Series X|S console generation. 
 
Clarified usage of the term 'Xbox Consoles' to include the Xbox One and Xbox Series X|S generations. 
 
Added XR-133: Local Storage Write Limitations detailing limitations on writing to local storage on Xbox consoles. 
 
Updated XR-130: Xbox One Family of Devices to XR-130: Xbox Console Families and Generations to detail requirements to support all devices/features in a console generation and requirements across generations. 
 
Updated both XR-050: Title-Save Location, Roaming, and Dependencies to detail requirements to roam game save progress across Xbox console generations 
 
Updated XR-007: Cross-Network Play, Data Usage, and Companion App Interactions to provide clarity into durable roaming scenarios for cross network play. 
 
Updated XR-012 Secure Data Transfer for the GDK and more specific implementation requirements. 
 
 |
| May 1, 2020 | 7.5 | Updated both XR-064: Joinable Game Sessions and Online Play and XR-067: Maintaining Multiplayer Session State to require integration on non console devices when cross play is enabled with Xbox Consoles 
 
Updated XR-012 Secure Data Transfer for more specific implementation requirements. 
 
 |
| April 1, 2020 | 7.4 | Moved change list to within the XR page. 
 
Updated folder organization/links for process improvement. 
 
Where needed, updated Xbox One to read as Xbox consoles to provide clarity to family of devices. 
 
Updated XR-083: XDK / GDK Versions to support the Microsoft Game Development Kit |
| March 1, 2020 | 7.3 | No changes to main requirements page. 
 
Update all deep dive pages with a version number (starting at 1.0) and last updated date. Only changes have been made to **XR-017: Title Ratings** content 
 
**XR-017: Title Ratings** updated to include new ratings boards in Chile, updated trailer requirements and general simplification of content tables. |
| January 3, 2020 | 7.3 | Updated XR-064: Joinable Game Sessions and Online Play and XR-067: Maintaining Multiplayer Session State to remove Xbox Live Arena/tournament requirements. 
 
Updated XR-012 Secure Data Transfer deep dive page for more specific implementation requirements. 
 
Replaced incorrectly deleted localization requirements table in XR-006: Title Assets and Metadata 
 
XR-046: Display Name and Gamerpic updated to add additional clarity to modern Gamertag usage. |
| October 24, 2019 | 7.0.1 | Updated XR-007 to remove incorrect reference to XR-073 
 
 |
| October 1, 2019 | 7.0 | Consolidated XR-113: Active User Management and XR-116: Handling Users and Controllers When Resuming From Suspended and Constrained Modes into updated _XR-112 Establishing a User and Controller During Initial Activation and Resume_ and _XR-115: Addition and Removal of Users or Controllers During Gameplay_ which have been updated for the GDK. 
 
Updated XR-046: Display Name and Gamerpic adding Modern Gamertag and GDK details 
 
Removed XR-073: Blocking and Muting Support, consolidated into renamed XR-015: Managing Player Communication. Removed video communication from XR-015 
 
 |
| July 9, 2019 | 6.9.1 | Corrected header error, Updated XR-055: Corrected typographical error. 
 
 |
| July 2, 2019 | 6.9 | Updates to XR-007: Cross-Network Play, Data Usage, and Companion App Interactions to restrict requiring Cross Network play in all game modes. Updated XR-055: Achievements and Gamerscore tp change the window by which achievement updates are regulated to semi annual from quarterly; there was no overall change to the Gamerscore or Achievement volume per calendar year. 
 
 |
| March 19, 2019 | 6.8 | Updates to XR-046: Display Name and Gamerpic, XR-074: Loss of Connectivity to Xbox and Partner Services, XR-013: Linking Microsoft Accounts with Publisher Accounts, XR-045: Xbox Live and Account Privileges and XR-062 Achievement Names and Descriptions to account for changes in the policies for implementing Xbox Live on Mobile or PC. 
 
 |
| March 13, 2019 | 6.7.1 | Update to XR-012: XR-012: Secure Data Transfer: Removed reference to middleware providers due to potential confusion between middle providers and licensed middleware. 
 
Updated link to Game Store Policy in 2 XRs 
 
 |
| February 1, 2019 | 6.7 | Update to XR-045: Xbox Live and Account Privileges: Added clarity into implementation guidance for Xbox One XDK titles compared to those using XSAPI on Xbox One. 
 
Update to XR-012: Secure Data Transfer: Added clarity on client/server, peer to peer implementations. 
 
Update to XR-072: Supporting Voice: Remove requirement to use the SILK codec for voice transmission. 
 
 |
| January 1, 2019 | 6.6 | Removal of PDF direct download, introduction of Save As PDF/Print. 
 
Update to XR-034: Streaming Install Play Marker to allow game demos to not include a play marker. 
 
 |
| December 3, 2018 | 6.5 | Updates to XR-045: Xbox Live and Account Privileges and XR-025: Sending and Sharing Kinect Data to move Kinect related privileges to the Kinect requirement. 
 
Removed comment regarding system stats from the Achievements section introduction. 
 
Added dedicated XR-007: Cross-Network Play, Data Usage, and Companion App Interactions page. 
 
 |
| November 6, 2018 | 6.4.1 | Update to XR-007: Cross-Network Play, Data Usage, and Companion App Interactions to remove cross play game play toggle as intended. 
 
 |
| November 1, 2018 | 6.4 | Update to XR-007: Cross-Network Play, Data Usage, and Companion App Interactions to allow for cross network/platform game progression and in game item inventories. Added requirements for Microsoft Store offer parity among networks. Removed requirement for an in game cross network play toggle. 
 
Update to XR-015: Privacy and Permissions _More Information_ to add details for validating cross network communication permissions. 
 
Update to XR-045: Xbox Live and Account Privileges to add new Cross Network privilege 
 
Update to XR-073: Blocking and Muting Support to add requirement for Cross Network communication muting 
 
Update to XR-124: Game Invitations to clarify that Xbox Live game invites must be used for Xbox Live to Xbox Live player invites across all sessions, including those with cross network players. 
 
Multiple Achievements Related XRs: Removed references to challenges. 
 |
| October 1, 2018 | 6.3 | Update to XR-62: Achievement Names and Descriptions to provide clarity regarding profanity usage in content. 
 
Update to XR-064: Joinable Game Sessions and Online Play's _More Information_ content to add clarity around what is considering joinable. 
 
XR-012: Secure Data Transfer updated to provide additional clarity on OpenSSL and BCrypt. 
 |
| September 1, 2018 | 6.2 | Update to XR 12: Secure Data Transfer and supporting content to provide additional supported security protocols 
 
Added XR-132: Service Access Limitations to provide clarity into the Xbox Live service calling limitations. 
 
 |
| August 2, 2018 | 6.1 | Updated XR 73 Blocking and Muting Support to add clarity on the types of communication which must be blocked when using custom in game services. |
| July 2, 2018 | 6.0 | Addition of clarification note to XR-55 for definition of quarterly 
 
Updated XR-007: Cross-Network Play, Data Usage, and Companion App Interactions to match prior XR update 
 
Removed XR-049: Rich Presence, now a best practice. 
 
Removed XR-063: Instrumentation of System Stats, now a best practice. 
 
 |
| June 4, 2018 | [5.9 (Xbox Program Documents > Certification)](https://aka.ms/xgddl) | Migration of XRs to new HTML format. 
 
Removed NETWORK Section 
 
Consolidated all network requirements into single requirement (XR-074: Loss of Connectivity to Xbox Services) 
 
Removed USER INTERFACE section, moved XR-022: Official Naming Standards to BASE REQUIREMENTS. 
 
Added XR-055: Achievements, Challenges, and Gamerscore as a tested XR for scenarios when an Achievement doesn't unlock during the normal course of testing. 
 
Removed the following requirements as they are covered in the Xbox Game Store policy document in the Publisher Guide: 
\- XR-038: Digital Content Availability 
\- XR-040: Content Licensing, Rights Management, and Title Activation 
\- XR-041: Microsoft Store Token Usage 
\- XR-042: No Real-Money Cash-Out 
\- XR-084: Content Not Allowed in Advertising 
\- XR-118: Pricing for a Beta or Demo 
\- XR-119: Paid DLC in a Beta or Demo 
\- XR-120: Beta Public Release Notification 
\- XR-121: Product Types for Beta 
\- XR-122: Beta Population Size |

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

- Last updated on 06/01/2026