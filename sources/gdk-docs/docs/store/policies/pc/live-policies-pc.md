---
title: "Xbox Requirements and Store Policies for PC, Mobile, and Creators Program"
description: "Xbox Requirements and Store Policies for adding Xbox network features to a PC, mobile or Creators Program game."
kindex: Xbox Requirements and Store Policies for PC, Mobile, and Creators Program
ms.topic: article
author: LukeCraw
ms.author: lukecr
ms.localizationpriority: high
edited: 04/01/2025
ms.date: 12/08/2022
permissioned-type: public
---

# Xbox Requirements and Store Policies for PC, Mobile, and Creators Program

Version 6.0 - 11/01/2025

The following requirements and policies apply when Xbox network services are integrated into a PC, mobile, or another console other than Xbox.

* Xbox Requirements (XRs) that are tested in Certification are identified with an asterisk (**\***).
* For XRs tested in Certification, view the test cases here: [Xbox Requirement test cases for PC and mobile games](live-policy-tests-pc.md).
* For a summary of the changes in this release, see [changes in this release](#changes) at the bottom of the page.
* To review the historical change log of XRs and test cases, see [Change History for Xbox Requirements and Test Cases](../console-XR-change-history.md).

For developers in the Xbox Creators Program, in addition to the XRs below (for supported features in the creators program) visit the [Microsoft Store Policies](/windows/apps/publish/store-policies) for the policies relating to the submission of your game to the Store across all Microsoft Devices (PC, Xbox consoles, HoloLens, etc.). Note that there are additional requirements for apps that are primarily gaming experiences or target Xbox consoles, detailed in the section titled "Gaming and Xbox". Xbox network on devices not supported by the Microsoft Store is not available to the Creators Program at this time. Visit the [Xbox Creators Program](https://www.xbox.com/developers/creators-program/) for information on getting started.

Adherence to these integration policies will ensure successful deployment of Xbox network services in your game and consistent implementation across the gaming ecosystem. Failure to adhere to these policies may result in revocation of access to Xbox network services by your title.

For developers creating companion experiences that ask the consumer to sign in with their Xbox identity (Microsoft Account associated with their Xbox profile), the companion experience must comply with all the Xbox network Implementation Policies listed below except for the following:

* Achievement and awards requirements (XR-055, XR-057, XR-058, XR-060, and XR-062).
* Multiplayer sessions requirements (XR-064 and XR-067).  

Developers must notify Microsoft before releasing Xbox authenticated companion experiences. Examples of Xbox authenticated companion experiences include a website for game stats or community, gaming second screen experiences, or any app or game which interacts with progress made to their game running on the Xbox network.

## Store policies

Games which use Xbox network are still subject to the store polices for the application platforms which they submit their game to. For Microsoft Store, the store policies are located [here](/windows/apps/publish/store-policies).

For PC games submitted to the Microsoft Store which have Xbox network features, there will be Xbox Certification testing to ensure the Xbox network features function correctly and that parental controls are respected prior to release. This testing will occur in parallel to normal store testing, adding no additional delays to your publishing timeline on the Microsoft Store.  

## Policy enforcement process

You are free to release and update your Xbox network integrated game on any store or platform, outside of the Xbox console, without any additional certification testing, except for those required by the store or platform on which your game will be published and released. Microsoft will monitor released games via the following mechanisms:

1. Customer complaints regarding game functionality.
2. Spot-check review of select games, including the most popular titles.
3. Alerts and/or warnings we find in our back-end services.

If your game is found to not adhere to these policies, we will inform you and provide a reasonable timeline to fix based on severity, as determined by Microsoft. Other than in exceptional circumstances, if the issue is not resolved within the requested time-frame we may revoke the game's ability to sign into Xbox network services until the issue is resolved.

## Xbox Network Implementation Policies

In order to keep the Xbox network running as a high quality service that respects the privacy and protects the security of its users we enforce a number of Xbox network implementation policies. These policies are referred to as Xbox Requirements (XRs). Failure to comply with XRs will result in your title being denied the ability to publish to the Microsoft store. Titles which are already published might be removed if they do not maintain compliance with XRs. The rest of this article will outline the XRs required to keep a PC or mobile title in good standing.

## Player Data and Privacy

Xbox network services will provide you with limited user data in order for you to deliver your game to players. This user data includes account identifiers like a user ID (XUID) and gamertag, connections with other players, and data about a player's activities in your game, including usage data, statistics, scores, ratings rankings, and social activity. This data may include personal data as defined under applicable data protection laws. Your access and use of such personal data is governed by the Xbox Network Services Data Processing Addendum for PC & Mobile Games, incorporated herein by reference and accessible here: [Xbox Network Services data processing addendum for PC and mobile games](live-network-services-data-processing-addendum.md)

In addition, the following rules apply to personal data provided through Xbox network services.

* Such data may only be used to deliver your game to players.
* You may not sell, license, or share the data with any third party. Social graph data (e.g., friends' lists) may not be stored, except for the account identifiers of those friends who have linked their own Xbox accounts with your game. Delete all account identifiers when you remove your game from our service, or when a user de-links their Xbox account from your game.
* Do not share services or user data (even if anonymous, aggregate, or derived data) to any ad network, data broker or other advertising or monetization-related service.
* When Microsoft receives requests from players to delete their personal data, we will communicate the requests to you by providing a list of player identifiers. You must check the list at least every 30 days to ensure you receive all delete requests and must use the information provided on the list only to satisfy the delete requests of players. You can find details about this process at [Deleted Account List Tools](https://forums.xboxlive.com/articles/78346/deleted-account-list-tools-for-xbox-live.html).

## Base requirements

The requirements in this category apply to the general rules for the standards of coding, behavior of titles, and submission of titles.

### [XR-001: Title Stability](../XR/XR001.md) \*

Titles must be compliant with Microsoft Store policies regarding title stability. The following policy applies to this requirement:

[10.4.2](/windows/apps/publish/store-policies#104-usability.md)  
Products must start up promptly, continue to run and remain responsive to user input. Products must shut down gracefully and not close unexpectedly. The product must handle exceptions raised by any of the managed or native system APIs and remain responsive to user input after the exception is handled.

### [XR-003: Title Quality for Submission](../XR/XR003.md) \*

Xbox games must meet Xbox quality standards and be fully functional and testable. 

#### Functionally complete and testable

Titles must be fully functional and testable when submitted for certification. This includes all client code, submission artifacts, and downloadable content. Titles must be packaged cleanly with no failures using the current version of [Submission Validator](../../../features/common/packaging/subval/submissionvalidator.md). Submission Validator logs must be included with the submission.

#### Xbox quality standards

Xbox games must function correctly across all game modes and scenarios to meet player expectations. 

##### Title integrity

Titles must be free from severe issues such as crashes, freezes, unplayable frame rates, bugs causing major progression hindrances, or graphical corruption. Game settings, options, and controls must be applied correctly and respect default settings where appropriate. Navigation and content availability should be seamless, with no dead ends or inaccessible menus. Multiplayer functionality must be stable and functional, regardless of the number of players. 

##### Save game compatibility

Game saves and player progress must continue to function following content updates. Additionally, permanent data loss must not occur when loading an updated save with the base disc version.

### [XR-007: Cross-Network Data Usage](../XR/XR007PC.md)

Publishers are permitted to use user-specific data from Xbox services, Xbox consoles and other platforms on the Xbox network with the following limitations:

**Game progress, in-game items, and statistics**  
Titles can, at their discretion, sync game progress, virtual currency wallets and in-game items (including those unlocked with virtual currency) across gaming platforms and networks. As part of user progress, a title can provide holistic statistic values including unlock of achievements as long as those achievements do not require play using another platform.

**Microsoft Store Managed Entitlements**  
Digital Content or PDLC (such as a map pack or any content that provides additional gameplay) which are sold in the Microsoft Store AND across other platform stores, may not be shared/roamed across gaming networks. However, for clarity and at the title's discretion, a bundle of in-game items (such as Virtual Currency or items unlocked with VC) that are sold through the Microsoft Store and are managed by the title, may be shared/roamed across gaming networks.

If you offer content for purchase on another platform, network or store, the following conditions apply:

Titles must  

  * offer the same or better for-sale content offers in the Microsoft Store to ensure that Xbox users are not disadvantaged (including but not limited to release timing, market coverage, features, content (such as bonus VC or bonus in-game benefits), language and localization, and physical token card offerings); and
  * include a corresponding offer in Microsoft's Digital Content at Retail program (i.e., Code to Content) if digital codes are sold direct to consumers; and

Titles must not  

  * intentionally direct content purchases away from the Microsoft Store, or discourage purchases from the Microsoft Store (for example, through marketing, advertising, in-store products, or affinity programs); or
  * offer such content for purchase in connection with products or experiences that do not have the same features and capabilities as the game for Xbox on PC (but, player progression and game data may be shared to such products or experiences - for example, "companion experiences").  

Failure to comply with any of the conditions of this policy may result in consequences, including but not limited to rendering your product(s) ineligible for editorial placement, store marketing and promotions.

### XR-022: Official Naming Standards \*

Titles must use the naming standards defined in the latest release of the terminology list for their target device platforms:

* [Xbox network terminology for PC and Mobile](live-terminology-pc.md)

### [XR-074: Loss of Connectivity to Xbox and Partner Services ](../XR/XR074.md) \*

Titles must gracefully handle errors with Xbox and partner services connectivity. Titles must honor the retry policies set by Xbox when attempting to retry a request to the Xbox service after a failure has occurred. Titles must appropriately manage messaging the user when services are unavailable. If a partner service is not available, the game must not indicate that there is an issue with the Xbox network. Titles must not crash or hang if network services are slowed or intermittently available.

### [XR-132: Service Access Limitations](../XR/XR132.md) \*

Titles which exceed [title and user based limits](../../../services/develop/best-practices/live-fine-grained-rate-limiting.md) when calling Xbox network services or do not adhere to Xbox network service retry policies may be subjected to rate limiting, which may result in service interruption or deprecation. Failure to adhere to the specified limits may block a title from release, and in-production issues with released titles may result in Xbox network services suspension up to and including title removal.

## User Profiles

The requirements in User Profiles apply to how a game interacts with the Xbox user models, profiles, and saving user data.

### [XR-045: Xbox network and Account Privileges ](../XR/XR045.md)\*

The Xbox network provides users with an expected level of privacy and online safety for themselves and their children. In order to deliver on that promise, titles must check the Xbox network service for privileges to complete certain actions on the Xbox network service or in a title experience.

| **Activity**|**ID**|**Privilege Name**|**Notes**|
|-|--|--- |---|
|Playing in a multiplayer game session|254|XPRIVILEGE_MULTIPLAYER_SESSIONS|Allows a user to join online multiplayer gameplay sessions with real-world users (not bots) in scenarios such as: Synchronous player-vs-player gameplay in the same session, asynchronous turn-based gameplay, Team-based gameplay, User-initiated matchmaking, Sending or accepting invitations, Join-in-progress sessions. Note this privilege does not pertain to local multiplayer games run on the same device.|
|Playing in a cross network game play session|185|AuthPrivileges.CrossNetworkPlay|Allows a user to participate in a gameplay session with other real-world players who are not signed into Xbox services in scenarios such as: Synchronous player-vs-player gameplay in the same session, asynchronous turn-based gameplay, Team-based gameplay, User-initiated matchmaking, Sending or accepting invitations, Join-in-progress sessions.|
|Communication with anyone |252|XPRIVILEGE_COMMUNICATIONS|Allows a user to communicate with any other Xbox network users through voice or text. |
|Shared gaming sessions|189|XPRIVILEGE_SESSIONS|Allows a user to participate in connected single-player experiences in shared environments or in scenarios where a title is a hybrid free to play and paid multiplayer title and uses this privilege to gate those experiences Xbox consoles. Single player experiences must not have any features covered under privilege 252 or 254 (Communications and Multiplayer, respectively). Use of this privilege is a title capability that requires platform approval.|
|User-generated content (UGC)|247|XPRIVILEGE_USER_CREATED_CONTENT|Allows a user to see other users' UGC online, download other users' UGC, or share their own UGC online. This does not restrict usage of previously downloaded UGC. |
|Sharing to a social network|220|XPRIVILEGE_SOCIAL_NETWORK_SHARING|Xbox consoles Only: Allows a user to share information, including game progress, Kinect-generated content, game clips, and so on outside of the Xbox network.|

Free to play titles, demos, or betas can be configured to allow multiplayer gameplay (ID 254) for players who are not Game Pass subscribers. This is done via a service side configuration and can be initiated by contacting your Microsoft representative. These titles must continue to check for the multiplayer game privilege to ensure that parental controls and player choices are respected.

### [XR-046: Display Name and Gamerpic](../XR/XR046.md) \*

On Xbox consoles, titles must use the gamertag as their primary display name.

Based on design choice titles can choose between the player's modern gamertag or their classic gamertag. Modern gamertag is available in the GDK and classic gamertag is available in both ERA and the GDK.

On non-console platforms, while not required, we recommend you use the Xbox network player's gamertag in the appropriate locations within the game title's experience.

The gamertag must be displayed correctly in the title based on the gamertag type used:

**Modern Gamertag**  
Display all 16 characters of the unique modern gamertag, which includes up to 12 characters of the modern gamertag, followed by # and the suffix number (if present). For example: Major Nelson (no suffix present) or Major Nelson#881. If modern gamertags are used, all Unicode character ranges available for modern gamertags must be supported. For more modern gamertag information and best practices visit the GDK development documentation article 'Overview of modern gamertags'.  

**Classic Gamertag**  
Correctly display all 15 characters of the classic gamertag. Classic gamertags include only ASCII characters a-z, A-Z, 0-9, comma (,), and space (ASCII character 0x20). For example: Major Nelson

In the GDK these items are returned using the [XUserGetGamertag](../../../reference/system/xuser/functions/xusergetgamertag.md) API. In ERA the gamertag is obtained using the `GetUserProfileAsync` API.

### [XR-048: Profile Settings Usage](../XR/XR048.md) \*

The Xbox network is the source of truth for Xbox user profile information. To support this, titles must not store users' information sourced from the Xbox network, such as profile data, preferences, or gamertags, beyond a locally stored cache intended to support scenarios of network disconnection. Any offline caches must be updated upon the next available connection to the service.

### [XR-052: User State and Title-Save Location, Roaming and Dependencies](../XR/XR052.md) \*

Titles must associate progress, saved state, preferences, achievements, and other rewards with the user(s) who have recorded that progress, chosen the preferences, or earned the rewards. Titles accomplish this by properly handling user-change notifications. Titles must avoid saving state for users who are no longer signed in. Game save data must not have any dependencies on shared content or local storage.

For games that use the same TitleID across platforms, devices and/or console generations, game save progress must roam when the user is signed into the Xbox network as follows:

* Within the same platform (Xbox consoles).
* Within devices on the same platform (e.g., Xbox One and Xbox One S).
* Across generations in the device platform (e.g., Xbox One and Xbox Series X\|S).
* Across PCs in the Windows platform (e.g., between two different PCs).
* Across PCs in the Windows platform and Xbox console platforms, (e.g., Windows and Xbox Series X\|S) game save roaming is not required but is recommended to support the player's experience.
* For non-Microsoft platforms (e.g., iOS, Android, Switch, PlayStation&reg;) game save roaming is not required but is recommended to support the player's experience.

## Online Safety and Privacy

The requirements in this category pertain to the online safety and privacy of Xbox users.

### [XR-013: Linking Microsoft Accounts with Publisher Accounts](../XR/XR013.md) \*

On Xbox, titles that use partner-hosted services or accounts that require credentials must support all Xbox users and offer to link that account with the user's Microsoft account. Outside of Xbox consoles, titles can choose to allow account linking to support their game experience.  

If publisher account sign in is enabled within the title, the following rules apply:  

**Publisher Account Sign In**  

* **Accommodate All Users**  
  If a publisher account sign in is required for game features (single player, multiplayer, cross network gameplay, leader boards), sign in and sign up must support all user types, ages, and regions where the game title is offered and where those features are allowed by local/regional laws irrespective of age rating.
    * A game publisher may choose not to support a particular region, age, etc. for their publisher account. If a region, age group, or other group of players cannot create or sign into an account the title cannot require those users to sign in with an account for game features.  
    * If a particular account setting is not supported in a title-based sign-up experience (e.g., age or region) the title must gracefully handle by providing messaging to sign up on an external site or mobile optimized experience where that user is supported.  

* **Gain Consent and Provide Terms for Account Information Usage**  
  Titles must request to use and gain consent to use information from the player's Microsoft account to auto populate sign up/account creation experiences. Users must be provided with all applicable terms of use, privacy and other policies within the title (or a notice with a link to such information) during a publisher account creation process.  

* **Disclose Requirements**  
  If a publisher account is required for gameplay or additional features, it must be disclosed in the title's product description and any physical packaging including any restrictions such as age. In title, the game must define the reason and use of the publisher account. If a publisher account limits or restricts the experience for child accounts, it is suggested to add this text to the store details page for buyer awareness:
> _Certain features of the game, including online multiplayer, communication and other online features, may not be accessible by Xbox child accounts. At Xbox, a child means players under the age of 13, unless local laws specify differently._

**Publisher Account/Microsoft Account Linking**  

* **Authentication using the Xbox Secure Token Service (XSTS)**  
  XSTS tokens must be used to provide identity information for authentication when linking the user's publisher account to the user's Microsoft account. For more information about XSTS token authentication see [Xbox services authentication for title services](../../../services/fundamentals/s2s-auth-calls/service-authentication/live-title-service-authentication.md).
  
* **Gain Consent and Provide Choice**  
  Users must be notified of the account linking of the user's publisher account to the user's Microsoft account.  The user must be given the choice to opt-out if linking their accounts. Users must have the ability to de-link accounts. 
  
* **Accommodate All Users**  
  If a publisher account sign in is required for game features (Single player, multiplayer, cross network gameplay, leader boards), sign in and sign up must support all user types, ages, and regions where the game title is offered and where those features are allowed by local/regional laws irrespective of age rating. 

> [!Note]
> Publishers may implement additional fraud prevention mechanisms such as two-factor authentication interrupts when a linked account signs in from a new device for the first time. This behavior is not a violation of this XR.

### [XR-015: Managing Player Communication](../XR/XR015.md) \*

Titles must not allow communication over the Xbox network when the user's privacy settings do not allow it. 

Titles meet this XR by retrieving data from Xbox network services. If the title uses its own services, it must check the user's privacy permissions at the beginning of a session or when a new user joins the session. For user-initiated scenarios outside of sessions, titles meet this requirement by checking privacy prior to displaying the user's data and before performing the action. The following permissions are available for titles to check: 

| Permission name |Description |
|-------------------|----------|
|CommunicateUsingText | Check whether the user can send text communications (e.g., text chat, message, etc.) or an invite to the target user.
|CommunicateUsingVoice | Check whether the user can communicate using voice with the target user.

During the gameplay session, titles which offer communication between Xbox network and non-Xbox network players must offer the ability to mute any non-Xbox network players for the duration of the session.

> [!Note]
> Refer to [Privacy and permissions overview](../../../services/fundamentals/identity/privacy/live-privacy-overview.md) for details on how to check and resolve privacy and permissions issues in your title.

### [XR-018: User-Generated Content](../XR/XR018.md) \*

User generated content (UGC) refers to any in-game digital content produced by a player and made visible or accessible to one or more other people in an online state.  

If your product contains UGC, you must:  

* Provide an in-product means for users to report inappropriate or harmful UGC to the developer for review and removal/disablement (if in violation of content guidelines) and/or implement a method for proactive detection of inappropriate or harmful UGC (for example, text filtering).
* Publish content guidelines for user generated content (such as a terms of use or code of conduct), available to users either in-product or on the title's website.
* Be prepared to remove/disable high-risk illegal content at the request of Microsoft in the unlikely event that Microsoft becomes aware of illegal material on the Xbox network that has not been addressed via standard action mechanisms or processes.
* Respect player UGC settings and gracefully handle scenarios in which a user does not have access to UGC in-game due to restricted privileges.

Additionally, if your product is integrated with a third-party game mod platform, you must:  

* Integrate with the platform's report/complaint API (if available) and moderate content if required by contractual agreement with the third party.
* Present a disclaimer, dialog, or visual indicator to users when content is not sourced from the developer.

## Achievements and Awards

The following requirements apply to titles that offer achievements and awards on the Xbox network.  

### XR-055: Achievements and Gamerscore \*

Titles must provide the required number (minimum and maximum) of achievements and their associated gamerscore at launch. Titles are permitted to add achievements or gamerscore at any time after launch, with or without corresponding new content, but they cannot exceed title-based or calendar-based limits.

A single achievement cannot exceed 200 gamerscore and all achievements in the title must be achievable.

Unlocking achievements in the base game or a content update must represent a thorough exploration of or engagement with game content.

Item | Launch |Semi-annual additions| Lifetime limit
-----|----|-----|-----
Minimum achievements | 10 | 0 | 10
Maximum achievements | 100 | 100 | 500
Gamerscore | 1000 | 1000 | 5000

Note: "Semi-annual" means January-June, July-December. Base game achievements and Gamerscore do not count towards the semi-annual limits.

### [XR-057: Unlocking Achievements](../XR/XR057.md) \*

Titles must provide a way for a user to earn all achievements defined by the base title without being required to purchase additional in-title content.

Achievements must be unlocked through in-game actions, gameplay, and/or experiences.

Titles must not provide players alternative options that unlock achievements directly without corresponding gameplay activity. A non-exhaustive list of disallowed options:

* A real-money purchase

* In-game cheat codes, consoles, or menu options

These options may be used to reduce the difficulty of the gameplay required to unlock achievements.

### XR-058: Achievements Across Multiple Titles or Platforms

Achievements must not be shared across titles. When a single title is supported across different platforms by using the same title ID, a title must share the same set of achievements and can, at their discretion, have platform-specific achievements.

### XR-060: Modifying Active Achievements

After an achievement has been published to users, it cannot be removed, nor can its unlock rules or rewards be changed. Achievement text strings (name, description) or art (icons/background) can be modified.

### [XR-062: Achievement Names and Descriptions](../XR/XR062.md)

Achievement names and descriptions may contain only content that would merit a rating of PEGI 12, ESRB EVERYONE 10+, or lower.

Achievement names and descriptions may not contain what is commonly considered profanity in a clear text or redacted form.

## **Multiplayer sessions**

The requirements in this category pertain to game titles that provide multiplayer sessions on Xbox. Xbox offers a consistent and simple way to find multiplayer sessions and to fine-tune the parameters used to find those sessions.

### [XR-064: Joinable Game Sessions and Online Play](../XR/XR064.md) \*

On Xbox consoles, titles that offer joinable game sessions must enable joinability through the Xbox shell interface.

Titles that offer cross platform multiplayer with Xbox consoles from PC devices using Xbox sign in must also enable joins through the Game Bar experience.

### [XR-067: Maintaining Multiplayer Session State](../XR/XR067.md) \*

On Xbox consoles, titles with online multiplayer functionality must maintain session-state information on the Xbox network. Titles do this through the Xbox Multiplayer Session Directory (MPSD) or if a title has their own multiplayer session state functionality, they may choose to instead record player interactions using the Multiplayer Activity Recent Player feature.

On devices other than Xbox consoles, titles which offer cross platform multiplayer with Xbox consoles must maintain session-state information in the Xbox Multiplayer Session Directory (MPSD). If they have their own session state functionality, they may choose to instead record player interactions using the Multiplayer Activity Recent Player feature.

<a id="changes"></a>

## Changes in this Release

Date | Document version | Change description
-----|------------------|-------------------
November 1, 2025 | 6.0 | [XR-007 Cross-Network Data Usage](../XR/XR007PC.md) has been added to the PC Xbox Requirements. It is a subset of the console version [XR-007 Cross-Network Play, Data Usage, and Companion App Interactions](../XR/XR007.md) that contains business policies. It does not contain the technical requirements for cross-network gameplay.
